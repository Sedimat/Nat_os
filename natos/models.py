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
