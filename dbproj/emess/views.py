import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie

def index(request):
    return HttpResponse("Hello, world. You are at eMess index.")

@ensure_csrf_cookie
def signup(request):
    if request.method == 'GET':
        return JsonResponse({
            'status' : 'bad',
            'message': 'You should be using POST method'
        })
    elif request.method == 'POST':
        return JsonResponse({
            'status': 'good',
            'message': 'Correct method',
            'data_received':  json.loads(request.body)
        })