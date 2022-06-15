from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User 
import datetime

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    #collaborators
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000, blank=True, null=True)
    body = models.TextField(blank=True, null=True)
    website = models.URLField(max_length=200, blank=True, null=True)
    #logo
    #images
    likes = models.ManyToManyField(User, related_name="likes", blank=True)
    tags = models.ManyToManyField(Tag, related_name="tags", blank=True)
    post_date = models.DateField(default = datetime.datetime.now()+datetime.timedelta(days=7), blank=False)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    #avatar = models.ImageField(default='', upload_to="", blank=True, null=True)
    name = models.CharField(max_length=200, null=True, blank=True, default='Name')
    #socials = models.ManyToManyField('Social', blank=True)
    products = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    #likes

    def __str__(self):
        return str(self.user.username)