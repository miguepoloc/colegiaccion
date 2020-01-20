from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from apps.api.serializers import UserSerializer, SemanaSerializer
from apps.api.models import Semana

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