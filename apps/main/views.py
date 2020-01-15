from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("La primera app de prueba")
