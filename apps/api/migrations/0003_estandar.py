# Generated by Django 2.2 on 2020-01-25 22:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_semana_autor'),
    ]

    operations = [
        migrations.CreateModel(
            name='Estandar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('materia', models.CharField(max_length=200)),
                ('rango_grado', models.CharField(max_length=200)),
                ('estandar_mayor', models.CharField(max_length=200)),
                ('estandar_menor', models.CharField(max_length=200)),
                ('fecha_sys', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
