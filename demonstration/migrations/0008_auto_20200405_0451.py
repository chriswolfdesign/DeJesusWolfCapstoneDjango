# Generated by Django 3.0.4 on 2020-04-05 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demonstration', '0007_auto_20200405_0448'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='data',
            field=models.CharField(max_length=2048, null=True),
        ),
    ]
