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
    path('get_Nat_web', views.get_Nat_web, name='get_Nat_web'),
    path('get_website', views.get_website, name='get_website'),
    path('balloon', views.balloon, name='balloon'),
    path('uhelyant', views.uhelyant, name='uhelyant'),
    path('stack_attack', views.stack_attack, name='stack_attack'),
    path('tanks', views.tanks, name='tanks'),
    path('driver', views.driver, name='driver'),
    path('NatOs_web', views.natos_web, name='NatOs_web'),
    path('OneBit', views.onebit, name='OneBit'),
    path('browser', views.browser, name='browser'),
    path("onebit_share", views.onebit_share, name='onebit_share'),

]