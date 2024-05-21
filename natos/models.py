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


class Games(models.Model):
    img_game = models.FileField(upload_to='img_game', default='img_game/game.svg')
    name = models.CharField(max_length=20, verbose_name="Назва")
    link = models.CharField(max_length=20, verbose_name="Посилання")
    description = models.TextField(blank=True, verbose_name="Опис")


    def __str__(self):
        return f'Гра: {self.name}'

    class Meta:
        verbose_name = "Гра"
        verbose_name_plural = "Ігри"


class Nat_web(models.Model):
    title = models.CharField(max_length=20, verbose_name="Заголовок")
    description = models.CharField(max_length=100, verbose_name="Опис")
    timestamp = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'Новина сайт: {self.title}'

    class Meta:
        verbose_name = "Новина сайт"
        verbose_name_plural = "Новина сайт"

class Nat_web_img(models.Model):
    picture = models.FileField(upload_to='pictures', default='pictures/test.svg')
    name = models.CharField(max_length=30, verbose_name="Назва")
    description = models.CharField(max_length=100, verbose_name="Опис")
    timestamp = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'Зображення сайт: {self.name}'

    class Meta:
        verbose_name = "Зображення сайт"
        verbose_name_plural = "Зображення сайт"

class Website(models.Model):
    img_game = models.FileField(upload_to='img_web', default='img_web/site.svg')
    name = models.CharField(max_length=20, verbose_name="Назва")
    link = models.CharField(max_length=20, verbose_name="Посилання")
    description = models.TextField(blank=True, verbose_name="Опис")


    def __str__(self):
        return f'Сайт: {self.name}'

    class Meta:
        verbose_name = "Сайт"
        verbose_name_plural = "Сайти"