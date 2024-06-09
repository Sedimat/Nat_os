# Generated by Django 5.0.4 on 2024-06-09 15:51

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('natos', '0010_animations'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='animations',
            name='description',
            field=models.CharField(max_length=100, verbose_name='Кадрів'),
        ),
        migrations.CreateModel(
            name='UserRating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_games', models.TextField(blank=True, verbose_name='Назва гри')),
                ('score', models.TextField(blank=True, verbose_name='Рахунок користувача')),
                ('id_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Користувач')),
            ],
            options={
                'verbose_name': '🎃 Рейтинг в грі',
                'verbose_name_plural': '🎃 Рейтинг в грі',
            },
        ),
    ]
