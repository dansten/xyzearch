# Generated by Django 4.0.4 on 2022-06-06 12:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_remove_tag_products_tag_products'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='products',
        ),
    ]