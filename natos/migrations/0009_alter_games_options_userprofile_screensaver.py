# Generated by Django 5.0.4 on 2024-05-24 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('natos', '0008_userprofile'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='games',
            options={'verbose_name': 'Гра', 'verbose_name_plural': '💣 Ігри'},
        ),
        migrations.AddField(
            model_name='userprofile',
            name='screensaver',
            field=models.TextField(blank=True, verbose_name='Заставка користувача'),
        ),
    ]
