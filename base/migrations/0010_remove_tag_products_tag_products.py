# Generated by Django 4.0.4 on 2022-06-06 12:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_tag_products_alter_product_tags'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='products',
        ),
        migrations.AddField(
            model_name='tag',
            name='products',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='base.product'),
        ),
    ]
