from django.urls import path

from . import views

urlpatterns = [
    path('', views.entry, name="entry"),
    path('home', views.index, name="home"),
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
]
