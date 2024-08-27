import json
from datetime import datetime
from django.contrib.auth import authenticate, login, logout

from django.contrib.auth.models import User
from .forms import UserRegistrationForm

from .models import Menu, Sounds, Pictures, Games, Nat_web, Nat_web_img, Website, UserProfile, Animations, UserRating
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.db.models import IntegerField
from django.db.models.functions import Cast


import sys
import svgwrite


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
    list_news = []
    for n in news:
        time = str(n.timestamp)
        list_news.append([str(n.title), str(n.description), time[:16]])

    games = Games.objects.all()
    list_games = []
    for g in games:
        list_games.append([str(g.link), str(g.name)])

    list_rate = {}
    for game in list_games:
        dict_rate = UserRating.objects.filter(name_games=game[0]).annotate(
            score_int=Cast('score', IntegerField())
            ).order_by('-score_int')[:5]
        list_n_r = []
        for d_r in dict_rate:
            list_n_r.append([str(d_r.id_user), str(d_r.score)])
        list_rate.update({game[1]: list_n_r})

    context.update({"list_news": list_news,
                    "list_rate": list_rate})

    return JsonResponse(context)

def get_onebit(request):
    context = {}
    imgs = Nat_web_img.objects.all().order_by("-timestamp")
    list_imgs = []
    for i in imgs:
        img_time = str(i.timestamp)
        list_imgs.append([str(i.picture), str(i.name), str(i.description), img_time[:16], int(i.id)])

    context.update({"list_imgs": list_imgs})

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


def get_games_info(request):
    context = {}

    if request.method == 'POST':
        game = request.POST.get('game')
        score = request.POST.get('score')
        score = float(score)

        if request.user.username:
            user = User.objects.get(username=request.user.username)
            user_rat = UserRating.objects.filter(id_user=user, name_games=game)
            nickname = user.username
            user_prof = UserProfile.objects.get(id_user=user)
            # якщо немає записів з іграми створюємо пустий словник
            if user_prof.dict_games == "":
                read_dict_games = {}
            else:
                # якщо словник вже є читаємо його
                read_dict_games = json.loads(user_prof.dict_games)

            if game in read_dict_games:
                list_score = read_dict_games[game]
                # якщо менше 5 елементів просто додаємо
                if len(list_score) < 5:
                    list_score.append(score)

                list_score.sort(reverse=True)
                # якщо 5 елементів замінюємо на більший
                if len(list_score) == 5:
                    for i, v in enumerate(list_score):
                        if v <= score:
                            list_score.insert(i, score)
                            list_score.pop(5)
                            break
                read_dict_games.update({game: list_score})
                dict_games_json = json.dumps(read_dict_games)
                user_prof.dict_games = dict_games_json
                user_prof.save()
                context.update({"reply": nickname,
                                "score": list_score})

                if user_rat.exists():
                    for rating in user_rat:
                        rating.score = list_score[0]
                        rating.save()
                else:
                    user_rat1 = UserRating(id_user=user, name_games=game, score=list_score[0])
                    user_rat1.save()

            else:
                read_dict_games.update({game: [score]})
                dict_games_json = json.dumps(read_dict_games)
                user_prof.dict_games = dict_games_json
                user_prof.save()
                context.update({"reply": nickname,
                                "score": score})

                if user_rat.exists():
                    for rating in user_rat:
                        rating.score = score
                        rating.save()
                else:
                    user_rat1 = UserRating(id_user=user, name_games=game, score=score)
                    user_rat1.save()

        else:
            context.update({"reply": "Sign in to save your rating",
                            "score": 0})

    return JsonResponse(context)


def snake(request):
    context = {}
    return render(request, 'game/snake.html', context=context)


def natis(request):
    context = {}
    return render(request, 'game/natis.html', context=context)


def create_img(request):
    context = {}
    return render(request, 'browser/CreateImg.html', context=context)


def creat_share(request):
    context = {}
    if request.method == "POST":
        messeg = request.POST.get('messeg')
        txt = request.POST.get('txt')
        messeg_dict = json.loads(messeg)

        svg_creat(messeg_dict)
        size_in_bytes = sys.getsizeof(messeg_dict)
        size_in_bytes1 = sys.getsizeof(txt)

        print(f"Розмір рядка у пам'яті: {size_in_bytes},{size_in_bytes1} байт")

        # if request.user.username:
        #     user = User.objects.get(username=request.user.username)
        #     user_prof = UserProfile.objects.get(id_user=user)
        #     if user_prof.dict_img == "":
        #         read_dict_img = {}
        #     else:
        #         read_dict_img = json.loads(user_prof.dict_img)
        #     if keys[0] in read_dict_img:
        #         context.update({"reply": "Таке зображення вже є"})
        #     else:
        #         read_dict_img.update(messeg_dict)
        #         dict_img_json = json.dumps(read_dict_img)
        #         user_prof.dict_img = dict_img_json
        #         user_prof.save()
        #         context.update({"reply": "Успішно завантаженно"})
        # else:
        context.update({"reply": "Створений файл"})

    return JsonResponse(context)



def svg_creat(list_i):
    # Створює svg файл
    caunt = 0
    caunt1 = 0
    x1 = 0
    y1 = 0
    dwg = svgwrite.Drawing('exa1234.svg', size=('871px', '590px'))
    path_data = []

    for i in range(120 * 80):
        caunt += 1

        if len(list_i) > 0 and list_i[0][0] == i:
            caunt1 = list_i[0][1]
            list_i.pop(0)

        if caunt1 > 0:
            path_data.append(f'M{x1},{y1} h7 v7 h-7 Z')
            caunt1 -= 1

        x1 += 7.26
        if (caunt % 120 == 0):
            x1 = 0
            y1 += 7.26
    path_string = ' '.join(path_data)
    dwg.add(dwg.path(d=path_string, fill='#1e0e01'))
    dwg.save()


def train(request):
    context = {}
    return render(request, 'game/train.html', context=context)