from django.contrib import admin
from .models import Product, Tag, Profile

# Register your models here.
admin.site.register(Product)
admin.site.register(Profile)
admin.site.register(Tag)