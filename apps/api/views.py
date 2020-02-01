from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from apps.api.serializers import UserSerializer, SemanaSerializer, EstandarSerializer, DBASerializer
from apps.api.models import Semana, Estandar, DBA

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class SemanaViewSet(viewsets.ModelViewSet):
    """
    API endpoint de las semanas
    """
    queryset = Semana.objects.all().order_by('id')
    serializer_class = SemanaSerializer


class EstandarViewSet(viewsets.ModelViewSet):
    """
    API endpoint de los estandares
    """
    queryset = Estandar.objects.all()
    serializer_class = EstandarSerializer


class DBAViewSet(viewsets.ModelViewSet):
    """
    API endpoint de los DBA
    """
    queryset = DBA.objects.all()
    serializer_class = DBASerializer