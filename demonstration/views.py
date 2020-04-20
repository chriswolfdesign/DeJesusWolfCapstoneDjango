from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse

from django.core.files.storage import default_storage
from django.core.files import File

# Create your views here.

from .models import *
from .forms import *
import json
import os
import datetime

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
    username = request.user.username

    module_dir = os.path.dirname(__file__)
    dirpath = module_dir + '\\static\\demonstration\\users\\' + username

    saves = open(dirpath + '\saves', 'r')
    array = json.load(saves)
    latest_save = array.pop()

    latest_save = open(dirpath + '\\' + latest_save)
    data = json.dumps(json.load(latest_save))

    context = {'data': data, 'username': username, 'state': len(array), }
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
registerPage(request)

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

            dirpath = module_dir + '\\static\\demonstration\\users\\' + username
            os.mkdir(dirpath)

            with open(dirpath + '\initial', 'w') as file:
                myFile = File(file)
                myFile.write(userdata)

            with open(dirpath + '\saves', 'w') as file:
                myFile = File(file)
                saves = ['initial']
                myFile.write(json.dumps(saves))

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
    title = request.GET.get('title', None)

    save_name = datetime.datetime.now().strftime("%I%M%S%p-%d-%B-%Y") + '-' + title

    module_dir = os.path.dirname(__file__)
    dirpath = module_dir + '\\static\\demonstration\\users\\' + username

    array = []
    with open(dirpath + '\saves', 'r') as f:
        array = json.load(f)
        array.append(save_name)
        saveFile = open(dirpath + '\saves', 'w+')
        saveFile.write(json.dumps(array))

    with open(dirpath + '\\' + save_name, 'w') as file:
        myFile = File(file)
        myFile.write(userdata)

    version_num = len(array) - 1
    data = {
        # OK Status : Request has been received and was successful
        'status': 200,
        'version': version_num
    }
    return JsonResponse(data)


def vc(request):
    username = request.GET.get('username', None)
    version = request.GET.get('version', None)
    req = request.GET.get('request', None)

    module_dir = os.path.dirname(__file__)
    dirpath = module_dir + '\\static\\demonstration\\users\\' + username

    states = int(version)
    if(req == 'f'):
        states += 1
    else:
        if(int(version) > 1):
            states -= 1

    module_dir = os.path.dirname(__file__)
    dirpath = module_dir + '\\static\\demonstration\\users\\' + username
    saves = open(dirpath + '\saves', 'r')
    array = json.load(saves)

    state = open(dirpath + '\\' + array[states])
    data = json.dumps(json.load(state))

    data = {
        'status': 200,
        'data': data,
        'version': states
    }

    return JsonResponse(data)
