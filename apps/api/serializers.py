from django.contrib.auth.models import User
from rest_framework import serializers
from apps.api.models import Semana, Estandar, DBA


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class SemanaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Semana
        fields = ['id', 'semana', 'rango_fecha', 'periodo', 'observaciones']


class EstandarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Estandar
        fields = ['materia', 'rango_grado', 'estandar_mayor', 'estandar_menor']


class DBASerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DBA
        fields = ['materia', 'grado', 'estandar_mayor', 'estandar_menor']
