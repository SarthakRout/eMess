import json
from django.http import HttpResponseForbidden, JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf import settings
from django.core.mail import send_mail
from emess.models import Student, MessAdmin
import random
import time
import hashlib

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
    if hall[-2:].isnumeric():
        return int(hall[-2:])
    if hall[-1].isnumeric():
        return int(hall[-1])
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
        # Store password in database
        if not Student.objects.filter(username=int(data["username"])).exists():
            Student.objects.create(
                username=int(data["username"]),
                password=password,
                roll=int(data["username"]),
                parent_hall = get_hall(students[int(data["username"])]['h']),
                hashpwd = hash("secret" + hash(password) + "key")
            )
        else:
            Student.objects.get(
                username=int(data["username"])
            ).update(
                password=password,
                hashpwd = hash("secret" + hash(password) + "key")
            )
        # Send email
        sendemail(data["username"], password)
        return JsonResponse({
            'code' : 'success'
        })
    else:
        return HttpResponseForbidden()

def sendemail(rollno : str, password : str):
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
            if 'token' in messadmins[data["username"]] and messadmins[data["username"]]['token'] == data['authToken']:
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
            if 'token' in messadmins[data["username"]] and messadmins[int(data["username"])]['token'] == data["authToken"]:
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


init()