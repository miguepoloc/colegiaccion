from django.db import models
from django.utils import timezone


class Institucion(models.Model):
    id = models.IntegerField(primary_key=True)
    autor = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    titulo = models.CharField(max_length=200)
    texto = models.TextField()
    fecha_sys = models.DateTimeField(
        default=timezone.now)

    def __str__(self):
        return self.titulo