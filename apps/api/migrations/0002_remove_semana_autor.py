# Generated by Django 2.2 on 2020-01-20 01:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='semana',
            name='autor',
        ),
    ]
