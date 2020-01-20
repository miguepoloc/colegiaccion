# Generated by Django 2.2 on 2020-01-20 00:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Semana',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('semana', models.IntegerField(blank=True, null=True)),
                ('rango_fecha', models.CharField(max_length=200)),
                ('periodo', models.CharField(blank=True, max_length=200, null=True)),
                ('observaciones', models.CharField(blank=True, max_length=200, null=True)),
                ('fecha_sys', models.DateTimeField(default=django.utils.timezone.now)),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
