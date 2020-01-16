from django.shortcuts import render
from django.http import HttpResponse
from .models import Institucion


def institucion(request):
    datos_institucionales = Institucion.objects.all()
    return render(request, 'institucion/institucion.html', {'datos_institucionales': datos_institucionales})