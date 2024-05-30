import json
from datetime import datetime
from django.contrib.auth import authenticate, login, logout

from django.contrib.auth.models import User
from .forms import UserRegistrationForm

from .models import Menu, Sounds, Pictures, Games, Nat_web, Nat_web_img, Website, UserProfile, Animations
from django.http import JsonResponse
from django.shortcuts import render, redirect


def index(request):
    current_time = datetime.now().strftime('%H:%M:%S')
    date = datetime.now().strftime('%Y.%m.%d')
    context = {'current_time': current_time,
               'date': date}

    if request.user.username:
        user = User.objects.get(username=request.user.username)
        user_prof = UserProfile.objects.get(id_user=user)

        if user_prof.screensaver == "":
            context.update({"screensaver": "pictures/impala.svg"})
        else:
            context.update({"screensaver": user_prof.screensaver})

    else:
        context.update({"screensaver": "pictures/impala.svg"})

    return render(request, 'os/index.html', context=context)


def menu(request, id=None):
    context = {}
    return render(request, 'os/menu.html', context=context)

def get_menu(request):
    context = {}
    menu = Menu.objects.all()
    list_menu = []
    for m in menu:
        list_menu.append([str(m.img_menu), str(m.name), str(m.link), str(m.language)])
    context.update({"list_menu": list_menu})
    return JsonResponse(context)

def get_sounds(request):
    context = {}
    sounds = Sounds.objects.all()
    list_sounds = []
    for s in sounds:
        list_sounds.append([str(s.sound), str(s.name), str(s.description), str(s.timestamp)])
    context.update({"list_sounds": list_sounds})
    return JsonResponse(context)


# дає джава скрипту список зображень
def get_pictures(request):
    context = {}
    pictures = Pictures.objects.all()
    list_pictures = []
    for p in pictures:
        list_pictures.append([str(p.picture), str(p.name), str(p.description)])

    # якщо користувач авторизований додає його зображеня
    if request.user.username:
        user = User.objects.get(username=request.user.username)
        user_prof = UserProfile.objects.get(id_user=user)
        if user_prof.dict_img == "":
            read_dict_img = {}
        else:
            read_dict_img = json.loads(user_prof.dict_img)
            for k, v in read_dict_img.items():
                list_pictures.append([v[0], v[1], v[1] + "png", k])

    context.update({"list_pictures": list_pictures})
    return JsonResponse(context)

# Встановлює заставку обрану користувачем
def screensaver(request):
    context = {}

    if request.method == "POST":
        img = request.POST.get('img')
        if request.user.username:
            user = User.objects.get(username=request.user.username)
            user_prof = UserProfile.objects.get(id_user=user)
            user_prof.screensaver = img
            user_prof.save()
            context.update({"text": "Screensaver added"})
        else:
            context.update({"text": "Login"})

    return JsonResponse(context)


# видаляє зображеня користувача та повертає зображення які залишились
def dell_img_user(request):
    context = {}
    pictures = Pictures.objects.all()
    list_pictures = []
    for p in pictures:
        list_pictures.append([str(p.picture), str(p.name), str(p.description)])

    if request.method == "POST":
        numb = request.POST.get('numb')

        if request.user.username:
            user = User.objects.get(username=request.user.username)
            user_prof = UserProfile.objects.get(id_user=user)
            read_dict_img = json.loads(user_prof.dict_img)

            list_key = list(read_dict_img.keys())

            if numb in list_key:
                del read_dict_img[numb]
                dict_img_json = json.dumps(read_dict_img)
                user_prof.dict_img = dict_img_json
                user_prof.save()
                for k, v in read_dict_img.items():
                    list_pictures.append([v[0], v[1], v[1] + "png", k])

    context.update({"list_pictures": list_pictures})
    return JsonResponse(context)

def get_games(request):
    context = {}
    games = Games.objects.all()
    list_games = []
    for g in games:
        list_games.append([str(g.img_game), str(g.name), str(g.link), str(g.description)])
    context.update({"list_games": list_games})
    return JsonResponse(context)

def get_Nat_web(request):
    context = {}
    news = Nat_web.objects.all().order_by("-timestamp")
    imgs = Nat_web_img.objects.all().order_by("-timestamp")
    list_news = []
    list_imgs = []
    for n in news:
        time = str(n.timestamp)
        list_news.append([str(n.title), str(n.description), time[:16]])

    for i in imgs:
        img_time = str(i.timestamp)
        list_imgs.append([str(i.picture), str(i.name), str(i.description), img_time[:16], int(i.id)])

    context.update({"list_news": list_news,
                    "list_imgs": list_imgs})

    return JsonResponse(context)

def get_website(request):
    context = {}
    webs = Website.objects.all()
    list_webs = []
    for w in webs:
        list_webs.append([str(w.img_game), str(w.name), str(w.link), str(w.description)])
    context.update({"list_webs": list_webs})
    return JsonResponse(context)


def contacts(request):
    context = {}
    return render(request, 'os/contacts.html', context=context)


def message(request):
    context = {}
    return render(request, 'os/message.html', context=context)


def pictures(request):
    context = {}
    return render(request, 'os/pictures.html', context=context)


def sounds(request):
    context = {}
    return render(request, 'os/sounds.html', context=context)


def games(request):
    context = {}
    return render(request, 'os/games.html', context=context)


def settings(request):
    context = {}
    return render(request, 'os/settings.html', context=context)

def balloon(request):
    context = {}
    return render(request, 'game/balloon.html', context=context)


def uhelyant(request):
    context = {}
    return render(request, 'game/uhelyant.html', context=context)


def natos_web(request):
    context = {}
    return render(request, 'browser/NatOs_web.html', context=context)


def stack_attack(request):
    context = {}
    return render(request, 'game/stack_attack.html', context=context)


def tanks(request):
    context = {}
    return render(request, 'game/tanks.html', context=context)

def driver(request):
    context = {}
    return render(request, 'game/driver.html', context=context)

def arkanoid(request):
    context = {}
    return render(request, 'game/arkanoid.html', context=context)


def browser(request):
    context = {}
    return render(request, 'browser/browser.html', context=context)


def onebit(request):
    context = {}
    return render(request, 'browser/OneBit.html', context=context)


def onebit_share(request):
    context = {}
    if request.method == "POST":
        messeg = request.POST.get('messeg')
        messeg_dict = json.loads(messeg)
        keys = list(messeg_dict.keys())

        if request.user.username:
            user = User.objects.get(username=request.user.username)
            user_prof = UserProfile.objects.get(id_user=user)
            if user_prof.dict_img == "":
                read_dict_img = {}
            else:
                read_dict_img = json.loads(user_prof.dict_img)
            if keys[0] in read_dict_img:
                context.update({"reply": "Таке зображення вже є"})
            else:
                read_dict_img.update(messeg_dict)
                dict_img_json = json.dumps(read_dict_img)
                user_prof.dict_img = dict_img_json
                user_prof.save()
                context.update({"reply": "Успішно завантаженно"})
        else:
            context.update({"reply": "Авторизуйтесь"})

    return JsonResponse(context)


def pixelmove(request):
    context = {}
    return render(request, 'browser/Pixelmove.html', context=context)


def get_animations(request):
    context = {}
    anim = Animations.objects.all()
    list_anim = []
    for a in anim:
        list_anim.append([str(a.picture), str(a.name), int(a.height), int(a.width), int(a.description), str(a.timestamp)])
    context.update({"list_anim": list_anim})
    return JsonResponse(context)

def registration(request):
    context = {}

    if request.method == "POST":
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            user = user_form.save()
            login(request, user)
            profile = UserProfile(id_user=user, key='123456')
            profile.save()
            context.update({"reply": 1})
        else:
            # Якщо форма не валідна, отримайте доступ до помилок
            errors = user_form.errors
            context.update({"reply": errors})

    return JsonResponse(context)


def get_login(request):
    context = {}

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            context.update({"reply": 1})
        else:
            context.update({"reply": "Неправильний логін чи пароль"})
    else:
        context.update({"reply": "Форма не заповнена"})

    return JsonResponse(context)


def get_user(request):
    context = {}
    if request.user.username:
        user = User.objects.get(username=request.user.username)
        user_prof = UserProfile.objects.get(id_user=user)
        context.update({"user": user.username})
    else:
        context.update({"user": ""})


    return JsonResponse(context)

def logout_view(request):
    logout(request)
    return redirect('settings')


