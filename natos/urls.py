from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('menu', views.menu, name='menu'),
    path('contacts', views.contacts, name='contacts'),
    path('message', views.message, name='message'),
    path('pictures', views.pictures, name='pictures'),
    path('sounds', views.sounds, name='sounds'),
    path('games', views.games, name='games'),
    path('settings', views.settings, name='settings'),
    path('get_menu', views.get_menu, name='get_menu'),
]