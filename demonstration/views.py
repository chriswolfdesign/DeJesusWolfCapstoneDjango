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


def entry(request):
    return redirect('login')


def index(request):
    data = request.user.userprofile.data
    username = request.user.username
    context = {'data': data, 'username': username}
    return render(request, 'demonstration/index.html', context)


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


def save(request):
    userdata = request.GET.get('data', None)
    username = request.GET.get('username', None)

    u = User.objects.get(username=username)
    u.userprofile.data = userdata
    u.userprofile.save()
    u.save()

    data = {
        'status': 200,
    }
    return JsonResponse(data)
