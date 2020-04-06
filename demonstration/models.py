from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    data = models.CharField(max_length=2048, null=True)

    def __str__(self):
        template = ' {0.user} {0.data}'
        return template.format(self)
