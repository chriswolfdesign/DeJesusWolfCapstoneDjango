# Generated by Django 3.0.4 on 2020-04-05 08:06

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demonstration', '0004_remove_userprofile_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='data',
            field=django.contrib.postgres.fields.jsonb.JSONField(null=True),
        ),
    ]
