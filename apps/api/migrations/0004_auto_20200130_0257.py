# Generated by Django 2.2 on 2020-01-30 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_estandar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='estandar',
            name='estandar_menor',
            field=models.CharField(max_length=500),
        ),
    ]
