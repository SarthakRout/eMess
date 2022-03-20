from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You are at eMess index.")

def signup(request):
    return HttpResponse("You are trying to signup.")