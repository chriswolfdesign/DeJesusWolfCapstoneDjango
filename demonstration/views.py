from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse

# Create your views here.

from .models import *
from .forms import *
import json
import os

'''
entry(request)

Main entry point for our app. It simply redirects the user to the login page when
the user gives the url itself (i.e. www.mywebsite.com).

@param request : the HTTP request made to the server
@returns an HttpReponseRedirect to the url specified in its arguments

'''


def entry(request):
    return redirect('login')


'''
index(request)

Where our app is located. It retrieves the revelant user's data and passes it to the template (HTML)
that will be handling the application.

@param request : the HTTP request made to the server
@returns a HttpResponse object which Django uses when rendering the html specified in its arguments

'''


def index(request):
    data = request.user.userprofile.data
    username = request.user.username
    context = {'data': data, 'username': username}
    return render(request, 'demonstration/index.html', context)


'''
loginPage(request)

Handles the login process and user authentication when loggin into the app. Verifies
the user's credentials and if there exist an entry within our database that matches them,
then pass the user to the application page. Otherwise send a message to the login page
notifying the user that the information was incorrect.

@param request - the HTTP request made to the server
@returns a HttpResponse object which Django uses when rendering the html specified in its arguments

'''


def loginPage(request):
    context = {}
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Username OR Password is incorrect.')
            return render(request, 'demonstration/login.html', context)
    return render(request, 'demonstration/login.html', context)


'''
loginPage(request)

Handles the registration process for our application. Asks for the user to provide credentials which
will be used in authenticating the user when they attempt to use the application. It also ensures
that the registering user provides credentials that aren't already in use or, in the case of passwords,
too simple. Once done, it creates an User within Djangos database and give it a blank save.

@param request - the HTTP request made to the server
@returns a HttpResponse object which Django uses when rendering the html specified in its arguments

'''


def registerPage(request):
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')

            module_dir = os.path.dirname(__file__)  # get current directory
            file_path = os.path.join(module_dir, 'blank.json')
            f = open(file_path, 'r')
            userdata = json.dumps(json.load(f))

            UserProfile.objects.create(
                user=user,
                data=userdata
            )
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('login')
    else:
        form = CreateUserForm()

    context = {'form': form}
    return render(request, 'demonstration/register.html', context)


'''
save(request)

Saves the user's, as specified by their username, project into the database or more specifically the data
field in the User model with the username given.

@param request - the HTTP request made to the server
@returns a JSON string of an object containing the status message

'''


def save(request):
    userdata = request.GET.get('data', None)
    username = request.GET.get('username', None)

    u = User.objects.get(username=username)
    u.userprofile.data = userdata
    u.userprofile.save()
    u.save()

    data = {
        # OK Status : Request has been received and was successful
        'status': 200,
    }
    return JsonResponse(data)
