from django.urls import path

from . import views

urlpatterns = [
    path('', views.plan_de_accion, name='plan_de_accion'),
]
