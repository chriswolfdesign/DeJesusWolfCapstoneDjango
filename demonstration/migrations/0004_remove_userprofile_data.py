# Generated by Django 3.0.4 on 2020-04-05 08:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demonstration', '0003_auto_20200405_0345'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='data',
        ),
    ]
