# Generated by Django 3.0.4 on 2020-04-05 03:43

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demonstration', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='data',
            field=django.contrib.postgres.fields.jsonb.JSONField(),
        ),
    ]
