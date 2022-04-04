import json
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf import settings
from django.core.mail import send_mail

def index(request):
    return HttpResponse("Hello, world. You are at eMess index.")

users = {
    '190772' : 'hello123'
}

students = {
    190772 : {
        'name' : 'Sarthak Rout',
        'hall' : 5,
        'dept' : 'CSE'
    }
}

@ensure_csrf_cookie
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if data["username"] in users.keys():
            if users[data["username"]] == data["password"]:
                return JsonResponse({
                    'code': 'success',
                    'authToken' : 'sometoken',
                    'userType': 'student',
                    'userInfo' : {
                        'name' : 'Sarthak Rout',
                        'hall' : 5,
                        'dept': 'CSE'
                    }
                })
            else:
                return JsonResponse({
                    'code': 'invalid_password',
                })
        else:
            return JsonResponse({
                    'code': 'invalid_username',
                })
    else:
        return HttpResponseForbidden()

def generate():
    return "hello1234"

def hash(password):
    return password

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
        users[data["username"]] = hash(password)
        # Send email
        sendemail(data["username"], password)
        return JsonResponse({
            'code' : 'success'
        })
    else:
        return HttpResponseForbidden()

def sendemail(username, password):
    subject = 'Generate a new password for eMess IITK'
    message = f'Hi {username}, please note down the generated credentials which can be used to log in to eMess IITK:\nUsername: {username}\nPassword: {password}\nThanks and regards. eMess IITK'
    email_sender = settings.EMAIL_HOST_USER
    recipients = ['sarthak2024@gmail.com', 'sarthakr@iitk.ac.in']
    send_mail(subject, message, email_sender, recipients)
