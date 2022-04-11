from django.urls import path

from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('getpwd', views.getpwd, name='getpwd'),
    path('logout', views.logout, name='logout'),
    path('autologin', views.autologin, name='autologin'),
    path('extras', views.gethallextras, name='hallextras'),
    path('updextras', views.updateextras, name='updateextras'),
    path('addextras', views.addextras, name='addextras'),
    path('deleteextras', views.deleteextras, name='deleteextras')
]