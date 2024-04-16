from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('menu/<int:id>', views.menu, name='menu'),
    path('contacts', views.contacts, name='contacts'),
    path('message', views.message, name='message'),
    path('pictures', views.pictures, name='pictures'),
    path('sounds', views.sounds, name='sounds'),
    path('games', views.games, name='games'),
    path('settings', views.settings, name='settings'),
    path('get_menu', views.get_menu, name='get_menu'),
    path('get_sounds', views.get_sounds, name='get_sounds'),
    path('get_pictures', views.get_pictures, name='get_pictures'),
    path('get_games', views.get_games, name='get_games'),
    path('balloon', views.balloon, name='balloon'),
]