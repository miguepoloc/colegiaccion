from django.shortcuts import render


def plan_de_accion(request):
    return render(request, 'plan_de_accion/plan_de_accion.html')
