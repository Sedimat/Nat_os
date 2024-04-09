from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Menu(models.Model):
    img_menu = models.FileField(upload_to='img_menu', default='img_menu/menu.svg')
    name = models.CharField(max_length=20, verbose_name="Назва")
    link = models.CharField(max_length=20, verbose_name="Посилання")
    language = models.CharField(max_length=5, verbose_name="Мова")


    def __str__(self):
        return f'Пункти меню: {self.name}'

    class Meta:
        verbose_name = "Пункт меню"
        verbose_name_plural = "Пункти меню"

class Pictures(models.Model):
    picture = models.FileField(upload_to='pictures', default='pictures/test.svg')
    name = models.CharField(max_length=20, verbose_name="Назва")
    description = models.TextField(blank=True, verbose_name="Опис")
    timestamp = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'Зображення: {self.name}'

    class Meta:
        verbose_name = "Зображення"
        verbose_name_plural = "Зображення"

class Sounds(models.Model):
    sound = models.FileField(upload_to='sounds', default='sounds/test.midi')
    name = models.CharField(max_length=20, verbose_name="Назва")
    description = models.TextField(blank=True, verbose_name="Опис")
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Звуки: {self.name}'

    class Meta:
        verbose_name = "Звуки"
        verbose_name_plural = "Звуки"
