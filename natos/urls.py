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
    path('get_games_info', views.get_games_info, name='get_games_info'),
    path('get_Nat_web', views.get_Nat_web, name='get_Nat_web'),
    path('get_website', views.get_website, name='get_website'),
    path('get_onebit', views.get_onebit, name='get_onebit'),
    path('get_animations', views.get_animations, name='get_animations'),
    path('get_user', views.get_user, name='get_user'),
    path('dell_img_user', views.dell_img_user, name='dell_img_user'),
    path('screensaver', views.screensaver, name='screensaver'),
    path('balloon', views.balloon, name='balloon'),
    path('uhelyant', views.uhelyant, name='uhelyant'),
    path('stack_attack', views.stack_attack, name='stack_attack'),
    path('tanks', views.tanks, name='tanks'),
    path('driver', views.driver, name='driver'),
    path('arkanoid', views.arkanoid, name='arkanoid'),
    path('snake', views.snake, name='snake'),
    path('natis', views.natis, name='natis'),
    path('train', views.train, name='Train_to_infinity'),

    path('NatOs_web', views.natos_web, name='NatOs_web'),
    path('OneBit', views.onebit, name='OneBit'),
    path('Pixelmove', views.pixelmove, name='Pixelmove'),
    path('CreateImg', views.create_img, name='CreateImg'),
    path('browser', views.browser, name='browser'),


    path("creat_share", views.creat_share, name='creat_share'),
    path("onebit_share", views.onebit_share, name='onebit_share'),
    path("get_login", views.get_login, name='get_login'),
    path("registration", views.registration, name='registration'),
    path("logout", views.logout_view, name='logout'),

]