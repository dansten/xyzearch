# Generated by Django 4.0.4 on 2022-06-06 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_tag_product_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
