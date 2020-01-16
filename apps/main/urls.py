from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('bachilleratos', views.bachilleratos, name='bachilleratos'),
    path('galeria', views.galeria, name='galeria'),
    path('secretaria', views.secretaria, name='secretaria'),
]
