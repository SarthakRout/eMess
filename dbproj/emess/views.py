import json
from django.http import HttpResponseForbidden, JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf import settings
from django.core.mail import send_mail
from django.db.models import Sum, F
from emess.models import ExtraItem, Meal, Student, MessAdmin, Order
import random
import time
import hashlib
import datetime

users = {}
students = {}
messadmins = {}

words = []

def init():
    with open('emess/words.txt') as f:
        words.extend(f.read().splitlines())
    with open('emess/students.json') as f:
        data = json.loads(f.read())
        for datum in data:
            if datum['i'][:2] in ['16', '17', '18', '19', '20', '21']:
                datum['h'] = get_hall(datum['h'])
                students[int(datum['i'])] = datum
                

def get_auth_token(rollno : str):
    st = str(time.time()) + "-" + rollno
    return str(hashlib.sha384(st.encode()).hexdigest())

@ensure_csrf_cookie
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if data["username"].isnumeric() and Student.objects.filter(username=data["username"]).exists():
            givenhashedpwd = hash("secret" + data["password"] + "key")

            if Student.objects.get(username=int(data["username"])).hashpwd == givenhashedpwd:
                authToken = get_auth_token(data["username"])
                students[int(data["username"])]['token'] =  authToken
                res = JsonResponse({
                    'code': 'success',
                    'authToken' : authToken,
                    'userType': 'student',
                    'userInfo' : students[int(data["username"])]
                })
                res.set_cookie(
                    'username',
                    data["username"],
                    max_age=3600
                )
                res.set_cookie(
                    'authToken',
                    authToken,
                    max_age=3600
                )
                return res
            else:
                return JsonResponse({
                    'code': 'invalid_password',
                    'userType' : 'student'
                })
        elif MessAdmin.objects.filter(username=data["username"]).exists():
            givenhashedpwd = hash("secret" + data["password"] + "key")
            messadmin = MessAdmin.objects.get(username=data["username"])
            if messadmin.hashpwd  == givenhashedpwd:
                authToken = get_auth_token(data["username"])
                if data["username"] not in messadmins:
                    messadmins[data["username"]] = {}
                messadmins[data["username"]]['token'] =  authToken
                res = JsonResponse({
                    'code': 'success',
                    'authToken' : authToken,
                    'userType': 'messAdmin',
                    'userInfo' : {
                        'halls' : messadmin.halls
                    }
                })
                res.set_cookie(
                    'username',
                    data["username"],
                    max_age=3600
                )
                res.set_cookie(
                    'authToken',
                    authToken,
                    max_age=3600
                )
                return res
            else:
                return JsonResponse({
                    'code': 'invalid_password',
                    'userType': 'messAdmin'
                })
        else:
            return JsonResponse({
                    'code': 'invalid_username',
                })
    else:
        return HttpResponseForbidden()

def generate():
    random.seed(time.time())
    password = words[random.randint(0, len(words))]
    for _ in range(2):
        password += "-" + words[random.randint(0, len(words))]
    return password

def hash(password):
    return str(hashlib.sha384(password.encode()).hexdigest())

def get_hall(hall):
    if(type(hall) == int):
        return hall
    if len(hall) >= 2 and hall[-2:].isnumeric():
        return int(hall[-2:])
    if len(hall) >= 1 and hall[-1:].isnumeric():
        return int(hall[-1:])
    if hall == 'GH':
        return 6
    if hall == 'HALLX':
        return 10
    if hall == 'HALLXI':
        return 11
    return -1

@ensure_csrf_cookie
def getpwd(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if not data['username'].isnumeric() or int(data["username"]) not in students:
            return JsonResponse({
                'code' : 'invalid_roll'
            })
        password = generate()
        # Store password hash in database
        assert(type(students[int(data["username"])]['h'])==int)
        if not Student.objects.filter(username=int(data["username"])).exists():
            Student.objects.create(
                username=int(data["username"]),
                # password=password,
                roll=int(data["username"]),
                parent_hall = students[int(data["username"])]['h'],
                hashpwd = hash("secret" + hash(password) + "key")
            )
        else:
            Student.objects.filter(
                username=int(data["username"])
            ).update(
                # password=password,
                hashpwd = hash("secret" + hash(password) + "key")
            )
        # Send email
        send_student_email(data["username"], password)
        return JsonResponse({
            'code' : 'success'
        })
    else:
        return HttpResponseForbidden()

def create_messadmin(
    user_name: str,
    first_name: str,
    last_name: str,
    email: str,
    phone_no: str,
    halls: list,
):  
    password = generate()
    hashedpwd = hash("secret" + hash(password) + "key")
    try:
        if MessAdmin.objects.filter(
            username=user_name
        ).exists():
            raise Exception("Invalid username")
        MessAdmin.objects.create(
            username = user_name,
            first_name=first_name,
            last_name=last_name,
            email=email,
            mobile_no = phone_no,
            halls = halls,
            hashpwd=hashedpwd
        )
    except Exception as e:
        print("Error: ", e)
        return
    print(f"Admin created with Username: {user_name} and Password: {password}")

def send_student_email(rollno : str, password : str):
    subject = 'Generate a new password for eMess IITK'
    studentname = students[int(rollno)]['n']
    message = f'Hi {studentname}, please note down the generated credentials which can be used to log in to eMess IITK:\nUsername: {rollno}\nPassword: {password}\nThanks and regards.\neMess IITK'
    email_sender = settings.EMAIL_HOST_USER
    ccuserid = students[int(rollno)]['u'] + "@iitk.ac.in"
    recipients = [ccuserid]
    send_mail(subject, message, email_sender, recipients)

@ensure_csrf_cookie
def logout(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if ('token' in students[int(data["username"])] 
                and 
                students[int(data["username"])]['token'] == data["authToken"]):
                students[int(data["username"])]['token'] = None
                res = JsonResponse({
                    'code' : 'success'
                })
                res.delete_cookie('username')
                res.delete_cookie('authToken')
                return res
            else:
                return JsonResponse({
                    'code': 'invalid authToken'
                })
        elif MessAdmin.objects.filter(username=data["username"]).exists():
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data['authToken']:
                messadmins[data["username"]]['token'] = None
                res = JsonResponse({
                    'code' : 'success'
                })
                res.delete_cookie('username')
                res.delete_cookie('authToken')
                return res
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def autologin(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                return JsonResponse({
                    'code':'success',
                    'userType': 'student',
                    'userInfo' : students[int(data["username"])]
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        elif MessAdmin.objects.filter(username=data["username"]).exists():
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                messadmin = MessAdmin.objects.get(username=data["username"])
                return JsonResponse({
                    'code':'success',
                    'userType': 'messAdmin',
                    'userInfo' : {
                        'halls': messadmin.halls
                    }
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

def getmeal(meal):
    return {
        'id': meal.id,
        'hall': meal.hall,
        'meal_date': str(meal.meal_date),
        'meal_start_time': str(meal.meal_start_time),
        'meal_end_time':str(meal.meal_end_time),
        'meal_type' : meal.meal_type
    }

def getextra(extra):
    return {
        'id': extra.id,
        'meal_id': extra.meal_id,
        'name': extra.name,
        'price': extra.price,
        'max_amount': extra.max_amount,
        'limit': extra.limit
    }

@ensure_csrf_cookie
def gethallextras(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                info = []
                u = datetime.datetime.now().date() + datetime.timedelta(8)
                l = datetime.datetime.now().date() + datetime.timedelta(1)
                for meal in Meal.objects.filter(hall=int(data["hall"]), meal_date__lte=u, meal_date__gte=l).all():
                    for extraItem in ExtraItem.objects.filter(meal_id=meal.id).all():
                        info.append([getmeal(meal), getextra(extraItem)])
                return JsonResponse({
                    'code' : 'success',
                    'data' : info
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        elif MessAdmin.objects.filter(username=data["username"]).exists():
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                info = []
                u = datetime.datetime.now().date() + datetime.timedelta(8)
                l = datetime.datetime.now().date() + datetime.timedelta(1)
                for meal in Meal.objects.filter(hall=int(data["hall"]), meal_date__lte=u, meal_date__gte=l).all():
                    for extraItem in ExtraItem.objects.filter(meal_id=meal.id).all():
                        info.append([getmeal(meal), getextra(extraItem)])
                return JsonResponse({
                    'code' : 'success',
                    'data' : info
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def updateextras(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if MessAdmin.objects.filter(username=data["username"]):
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                new_extra = data["extra"]
                if not ExtraItem.objects.filter(id=new_extra['id']).filter().exists():
                    return JsonResponse({
                        'code': 'invalid update request'
                    })
                ExtraItem.objects.filter(id=new_extra['id']).update(
                    name=new_extra['name'],
                    price=new_extra['price'],
                    max_amount=new_extra['max_amount'],
                    limit=new_extra['limit']
                )
                return JsonResponse({
                    'code' : 'success',
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

def getstart(mt):
    if mt == 'B':
        return datetime.time(7, 30)
    if mt == 'L':
        return datetime.time(12, 30)
    if mt == 'D':
        return datetime.time(19, 30)

def getend(mt):
    if mt == 'B':
        return datetime.time(9, 30)
    if mt == 'L':
        return datetime.time(2, 30)
    if mt == 'D':
        return datetime.time(21, 30)

@ensure_csrf_cookie
def addextras(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if MessAdmin.objects.filter(username=data["username"]):
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                meal = data["meal"]
                new_extra = data["extra"]
                meal["start_date"] = meal["start_date"].split("T")[0]
                st_date = datetime.date.fromisoformat(meal["start_date"])
                for i in range(int(new_extra['weeks'])):
                    if not Meal.objects.filter(
                        hall=meal["hall"],
                        meal_date=st_date,
                        meal_type=meal["meal_type"]
                    ).exists():
                        Meal.objects.create(
                            hall=meal["hall"],
                            meal_date=st_date,
                            meal_type=meal["meal_type"],
                            meal_start_time=getstart(meal["meal_type"]),
                            meal_end_time=getend(meal["meal_type"]),
                        )
                    mealobj = Meal.objects.get(
                        hall=meal["hall"],
                        meal_date=st_date,
                        meal_type=meal["meal_type"],
                        meal_start_time=getstart(meal["meal_type"]),
                        meal_end_time=getend(meal["meal_type"]),
                    )
                    st_date = st_date + datetime.timedelta(days=7)
                    ExtraItem.objects.create(
                        meal_id=mealobj.id,
                        name=new_extra["name"],
                        price=new_extra["price"],
                        max_amount=new_extra["max_amount"],
                        limit=new_extra["limit"]
                    )
                return JsonResponse({
                    'code' : 'success',
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def deleteextras(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if MessAdmin.objects.filter(username=data["username"]):
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                new_extra = data["extra"]
                if not ExtraItem.objects.filter(id=new_extra['id']).filter().exists():
                    return JsonResponse({
                        'code': 'invalid delete request'
                    })
                ExtraItem.objects.filter(id=new_extra['id']).delete()
                print("Successful delete", data)
                return JsonResponse({
                    'code' : 'success',
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def book(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                extra = data["extra"]
                quan = int(data["quantity"])
                cur = Order.objects.filter(extra_item_id=extra['id']).aggregate(Sum('quantity'))['quantity__sum']
                if cur and cur + quan > int(extra['max_amount']):
                    return JsonResponse({
                        'code': 'invalid request',
                        'msg' : 'exceeding max_amount for quantity'
                    })
                if Order.objects.filter(extra_item_id = extra['id'], roll_id=int(data["username"])).exists():
                    return JsonResponse({
                        'code': 'invalid request',
                        'msg': 'one person can only book one extra item once per meal'
                    })
                Order.objects.create(
                    roll_id = int(data["username"]),
                    extra_item_id = extra['id'],
                    quantity = quan,
                    booking_price = extra['price'],
                )
                return JsonResponse({
                    'code' : 'success',
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

def dt(t: datetime.datetime):
    return (t + datetime.timedelta(hours=5, minutes=30)).isoformat(' ').split('.')[0]

def getOrders(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                info = []
                for order in Order.objects.filter(roll_id=int(data["username"])).all():
                    info.append({
                        'id' : order.id,
                        'extra_name': order.extra_item.name,
                        'extra_item_id': order.extra_item_id,
                        'quantity': order.quantity,
                        'booking_price': order.booking_price,
                        'booked_at': dt(order.booked_at),
                        'last_mod_at': dt(order.last_modified_at),
                        'meal_date': order.extra_item.meal.meal_date
                    })
                return JsonResponse({
                    'code' : 'success',
                    'data' : info
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        elif MessAdmin.objects.filter(username=data["username"]).exists():
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                messadmin = MessAdmin.objects.get(username=data["username"])
                hallinfo = {}
                for hall in messadmin.halls:
                    info = []
                    for order in Order.objects.filter(extra_item__meal__hall=int(hall)).all():
                        info.append({
                            'id' : order.id,
                            'extra_name': order.extra_item.name,
                            'extra_item_id': order.extra_item_id,
                            'quantity': order.quantity,
                            'booking_price': order.booking_price,
                            'booked_at': dt(order.booked_at),
                            'last_mod_at': dt(order.last_modified_at),
                            'meal_date': order.extra_item.meal.meal_date
                        })
                    hallinfo[hall] = info
                return JsonResponse({
                    'code' : 'success',
                    'data' : hallinfo
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def deleteOrder(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                order = data["order"]
                if not Order.objects.filter(
                    id=order['id']
                ).exists():
                    return JsonResponse({
                        'code': 'invalid request',
                        'msg': 'order is not present'
                    }) 
                Order.objects.filter(
                    id=order['id']
                ).delete()
                return JsonResponse({
                    'code' : 'success',
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def updateOrder(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                order = data["order"]
                if not Order.objects.filter(
                    id=order['id']
                ).exists():
                    return JsonResponse({
                        'code': 'invalid request',
                        'msg': 'order is not present'
                    })
                delta = int(order['delta'])
                ei = ExtraItem.objects.get(id = order['extra_item_id'])
                cur = Order.objects.filter(extra_item_id=order['extra_item_id']).aggregate(Sum('quantity'))['quantity__sum']
                if cur and cur + delta > int(ei.max_amount):
                    return JsonResponse({
                        'code': 'invalid request',
                        'msg': 'max_amount limit exceeded'
                    })
                Order.objects.filter(
                    id=order['id']
                ).update(
                    quantity=int(order['quantity'])
                )
                return JsonResponse({
                    'code' : 'success',
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def getTot(request):
    if(request.method == 'POST'):
        data = json.loads(request.body)
        if Student.objects.filter(username=data["username"]).exists():
            if 'token' in students[int(data["username"])] and students[int(data["username"])]['token'] == data["authToken"]:
                tot = Order.objects.filter(roll_id=int(data["username"])).aggregate(sum=Sum(F('booking_price')*F('quantity')))["sum"]
                return JsonResponse({
                    'code' : 'success',
                    'total' : tot
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        elif MessAdmin.objects.filter(username=data["username"]).exists():
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                hall = int(data["hall"])
                data = list(Order.objects.filter(extra_item__meal__hall=hall).values('roll').order_by('roll').annotate(total=Sum(F('booking_price')*F('quantity'))))
                return JsonResponse({
                    'code': 'success',
                    'data' : data
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()

@ensure_csrf_cookie
def search(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if MessAdmin.objects.filter(username=data["username"]):
            if data["username"] in messadmins and 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data["authToken"]:
                hall = data["hall"]
                extra_name = data["extra_name"]
                date = (datetime.datetime.fromisoformat(data["date"][:-1]) + datetime.timedelta(hours=5, minutes=30)).date()
                info = list(Order.objects.filter(extra_item__meal__hall=hall, extra_item__name=extra_name, extra_item__meal__meal_date=date).values('roll', 'quantity'))
                print(info, hall, extra_name, date)
                return JsonResponse({
                    'code' : 'success',
                    'data' : info
                })
            else:
                return JsonResponse({
                    'code' : 'invalid authToken'
                })
        else:
            return JsonResponse({
                'code': 'invalid username'
            })
    else:
        return HttpResponseForbidden()
init()