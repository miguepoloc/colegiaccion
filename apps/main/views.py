from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/index.html')

def bachilleratos(request):
    return render(request, 'main/bachilleratos.html')

def galeria(request):
    return render(request, 'main/galeria.html')

def secretaria(request):
    return render(request, 'main/secretaria.html')
