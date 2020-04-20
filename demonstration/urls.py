from django.urls import path

from . import views

urlpatterns = [
    path('welcome', views.entry, name="entry"),
    path('home', views.index, name="home"),
    path('register', views.registerPage, name="register"),
    path('login', views.loginPage, name="login"),
    path('save', views.save, name="save"),
    path('vc', views.vc, name="version_control"),
]
