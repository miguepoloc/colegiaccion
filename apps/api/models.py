from django.db import models
from django.utils import timezone


class Semana(models.Model):
    id = models.IntegerField(primary_key=True)
    semana = models.IntegerField(blank=True, null=True)
    rango_fecha = models.CharField(max_length=200)
    periodo = models.CharField(max_length=200, blank=True, null=True)
    observaciones = models.CharField(max_length=200, blank=True, null=True)
    fecha_sys = models.DateTimeField(
        default=timezone.now)

    def __str__(self):
        return self.rango_fecha
