var list_tank = [new Image(), new Image(), new Image(), new Image(), new Image() , new Image(), new Image(), new Image()]

list_tank[0].src = '/media/g_tanks/tank.svg';
list_tank[1].src = '/media/g_tanks/bulet.svg';
list_tank[2].src = '/media/g_tanks/train.svg';
list_tank[3].src = '/media/g_tanks/hause.svg';
list_tank[4].src = '/media/g_tanks/bulet1.svg';
list_tank[5].src = '/media/g_tanks/phone_t.svg';
list_tank[6].src = '/media/g_tanks/hud.svg';
list_tank[7].src = '/media/g_tanks/bulet2.svg';

var list_tank_e = [new Image(), new Image()]

list_tank_e[0].src = '/media/g_tanks/tank_e1.svg';
list_tank_e[1].src = '/media/g_tanks/tank_e2.svg';

var list_tank_e2 = [new Image(), new Image()]

list_tank_e2[0].src = '/media/g_tanks/tank_e21.svg';
list_tank_e2[1].src = '/media/g_tanks/tank_e22.svg';

var list_tank_e3 = [new Image(), new Image()]

list_tank_e3[0].src = '/media/g_tanks/tank_e31.svg';
list_tank_e3[1].src = '/media/g_tanks/tank_e32.svg';

var list_tank1 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_tank1[0].src = '/media/g_tanks/tank1.svg';
list_tank1[1].src = '/media/g_tanks/tank2.svg';
list_tank1[2].src = '/media/g_tanks/tank3.svg';
list_tank1[3].src = '/media/g_tanks/tank4.svg';
list_tank1[4].src = '/media/g_tanks/tank5.svg';
list_tank1[5].src = '/media/g_tanks/tank6.svg';

var list_improve = [new Image(), new Image(), new Image(), new Image()]

list_improve[0].src = '/media/g_tanks/lvl_up.svg';
list_improve[1].src = '/media/g_tanks/speed_up.svg';
list_improve[2].src = '/media/g_tanks/armor.svg';
list_improve[3].src = '/media/g_tanks/pusto.svg';

var list_armor = [new Image(), new Image(), new Image(), new Image()]

list_armor[0].src = '/media/g_tanks/armor1.svg';
list_armor[1].src = '/media/g_tanks/armor2.svg';
list_armor[2].src = '/media/g_tanks/armor3.svg';

var list_fire = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_fire[0].src = '/media/g_tanks/fire_1.svg';
list_fire[1].src = '/media/g_tanks/fire_2.svg';
list_fire[2].src = '/media/g_tanks/fire_3.svg';
list_fire[3].src = '/media/g_tanks/fire_4.svg';
list_fire[4].src = '/media/g_tanks/fire_5.svg';
list_fire[5].src = '/media/g_tanks/fire_6.svg';

var list_anim = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_anim[0].src = '/media/g_tanks/anim1.svg';
list_anim[1].src = '/media/g_tanks/anim2.svg';
list_anim[2].src = '/media/g_tanks/anim3.svg';
list_anim[3].src = '/media/g_tanks/anim4.svg';
list_anim[4].src = '/media/g_tanks/anim5.svg';

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var zastavka = new Image()
zastavka.src = '/media/g_tanks/Tanks.svg'

var tank_lvl = 1
var tank_hp = 100
var kill = 0
var spawn = 3
var score = 0

function add_zastavka(){
    var div_zastavka = document.createElement('div');
    div_zastavka.id = 'div_zastavka';
    div_zastavka.style.left = 0 + 'px';
    div_zastavka.style.top = 0 + 'px';
    div_zastavka.style.height = 1000 + 'px';
    div_zastavka.style.width = 1000 + 'px';
    //div_zastavka.style.backgroundColor = 'green';
    div_zastavka.classList.add('content');
    div_zastavka.style.position = 'absolute';


    // Рахунок та його картинка
    var img_zastavka = document.createElement('img');
    img_zastavka.setAttribute('src', zastavka.src);
    img_zastavka.id = 'zastavka';
    img_zastavka.style.left = 0 + 'px';
    img_zastavka.style.top = 100 + 'px';
    img_zastavka.style.width = 1000 + 'px';
    img_zastavka.style.position = 'absolute';
    div_zastavka.appendChild(img_zastavka);

    content.appendChild(div_zastavka);
}

function game_over(){
    var div_game_over = document.createElement('div');
    div_game_over.id = 'div_game_over';
    div_game_over.style.left = 0 + 'px';
    div_game_over.style.top = 0 + 'px';

    var img_over = document.createElement('img');
    img_over.setAttribute('src', cont.src);
    img_over.id = 'img_over';
    img_over.style.left = 230 + 'px';
    img_over.style.top = 400 + 'px';
    img_over.style.height = 250 + 'px';
    img_over.style.position = 'absolute';
    div_game_over.appendChild(img_over);

    var txt_over = document.createElement('h1');
    txt_over.textContent = "Game over";
    txt_over.id = 'txt_over1';
    txt_over.classList.add('score');
    txt_over.style.left = 300 + 'px';
    txt_over.style.top = 420 + 'px';
    txt_over.style.position = 'absolute';
    div_game_over.appendChild(txt_over);

    var txt_over1 = document.createElement('h1');
    txt_over1.textContent = "Score: " + score;
    txt_over1.id = 'txt_over2';
    txt_over1.classList.add('score');
    txt_over1.style.left = 300 + 'px';
    txt_over1.style.top = 500 + 'px';
    txt_over1.style.position = 'absolute';
    div_game_over.appendChild(txt_over1);

    content.appendChild(div_game_over);
}

function game_elements(){
    var content = document.getElementById('content');

    var div_game = document.createElement('div');
    div_game.id = 'div_game';
    div_game.style.left = 0 + 'px';
    div_game.style.top = 0 + 'px';
    div_game.classList.add('content');
    div_game.style.position = 'absolute';

    var fon = document.createElement('img');
    fon.setAttribute('src', list_tank[5].src);
    fon.id = 'fon';
    fon.style.left = -50 + 'px';
    fon.style.top = -30 + 'px';
    fon.style.width = 1100 + 'px';
    fon.style.position = 'absolute';
    div_game.appendChild(fon);

    var fon1 = document.createElement('img');
    fon1.setAttribute('src', list_tank[6].src);
    fon1.id = 'hud';
    fon1.style.left = 0 + 'px';
    fon1.style.top = 856 + 'px';
    fon1.style.width = 1000 + 'px';
    fon1.style.position = 'absolute';
    div_game.appendChild(fon1);

    var txt_lvl = document.createElement('h1');
    txt_lvl.textContent = "Lvl: " + tank_lvl;
    txt_lvl.id = 'lvl';
    txt_lvl.classList.add('menu_txt');
    txt_lvl.style.left = 20 + 'px';
    txt_lvl.style.top = 860 + 'px';
    txt_lvl.style.position = 'absolute';
    div_game.appendChild(txt_lvl);

    var txt_hp = document.createElement('h1');
    txt_hp.textContent = "HP: " + tank_hp;
    txt_hp.id = 'hp';
    txt_hp.classList.add('menu_txt');
    txt_hp.style.left = 110 + 'px';
    txt_hp.style.top = 860 + 'px';
    txt_hp.style.position = 'absolute';
    div_game.appendChild(txt_hp);

    var txt_kill = document.createElement('h1');
    txt_kill.textContent = "Kill: " + kill;
    txt_kill.id = 'kill';
    txt_kill.classList.add('menu_txt');
    txt_kill.style.left = 330 + 'px';
    txt_kill.style.top = 860 + 'px';
    txt_kill.style.position = 'absolute';
    div_game.appendChild(txt_kill);

    var txt_tank = document.createElement('h1');
    txt_tank.textContent = "Tank: " + spawn ;
    txt_tank.id = 'txt_tank';
    txt_tank.classList.add('menu_txt');
    txt_tank.style.left = 220 + 'px';
    txt_tank.style.top = 860 + 'px';
    txt_tank.style.position = 'absolute';
    div_game.appendChild(txt_tank);

    var txt_score = document.createElement('h1');
    txt_score.textContent = "Score: " + score ;
    txt_score.id = 'txt_score';
    txt_score.classList.add('menu_txt');
    txt_score.style.left = 800 + 'px';
    txt_score.style.top = 860 + 'px';
    txt_score.style.position = 'absolute';
    div_game.appendChild(txt_score);

    var img_tank = document.createElement('img');
    img_tank.setAttribute('src', list_tank1[0].src);
    img_tank.id = 'tank_gg';
    img_tank.style.left = 1100 + 'px';
    img_tank.style.top = 760 + 'px';
    img_tank.style.width = 70 + 'px';
    img_tank.style.position = 'absolute';
    img_tank.style.transform = "rotate(0deg)";
    div_game.appendChild(img_tank);

    var img_tank1 = document.createElement('img');
    img_tank1.setAttribute('src', list_tank_e[0].src);
    img_tank1.id = 'tank_enemy1';
    img_tank1.style.left = 1100 + 'px';
    img_tank1.style.top = 20 + 'px';
    img_tank1.style.width = 70 + 'px';
    img_tank1.style.position = 'absolute';
    img_tank1.style.transform = "rotate(180deg)";
    div_game.appendChild(img_tank1);

    var img_tank2 = document.createElement('img');
    img_tank2.setAttribute('src', list_tank_e2[0].src);
    img_tank2.id = 'tank_enemy2';
    img_tank2.style.left = 1100 + 'px';
    img_tank2.style.top = 120 + 'px';
    img_tank2.style.width = 70 + 'px';
    img_tank2.style.position = 'absolute';
    img_tank2.style.transform = "rotate(180deg)";
    div_game.appendChild(img_tank2);

    var img_tank3 = document.createElement('img');
    img_tank3.setAttribute('src', list_tank_e3[0].src);
    img_tank3.id = 'tank_enemy3';
    img_tank3.style.left = 1100 + 'px';
    img_tank3.style.top = 240 + 'px';
    img_tank3.style.width = 70 + 'px';
    img_tank3.style.position = 'absolute';
    img_tank3.style.transform = "rotate(180deg)";
    div_game.appendChild(img_tank3);

    var img_brick = document.createElement('img');
    img_brick.setAttribute('src', list_tank[3].src);
    img_brick.id = 'brick';
    img_brick.style.left = 100 + 'px';
    img_brick.style.top = 300 + 'px';
    img_brick.style.width = 250 + 'px';
    img_brick.style.position = 'absolute';
    img_brick.style.transform = "rotate(180deg)";
    div_game.appendChild(img_brick);

    var img_brick1 = document.createElement('img');
    img_brick1.setAttribute('src', list_tank[2].src);
    img_brick1.id = 'brick1';
    img_brick1.style.left = 500 + 'px';
    img_brick1.style.top = 580 + 'px';
    img_brick1.style.width = 380 + 'px';
    img_brick1.style.position = 'absolute';
    img_brick1.style.transform = "rotate(180deg)";
    div_game.appendChild(img_brick1);


    content.appendChild(div_game);
}

function add_menu(){
    var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.style.left = 0 + 'px';
    div_menu.classList.add('content');
    div_menu.style.top = 0 + 'px';

    var img_menu = document.createElement('img');
    img_menu.setAttribute('src', menu_h.src);
    img_menu.id = 'img_menu';
    img_menu.style.left = 0 + 'px';
    img_menu.style.top = 0 + 'px';
    img_menu.style.height = 900 + 'px';
    img_menu.style.position = 'absolute';
    div_menu.appendChild(img_menu);

    var img_select = document.createElement('img');
    img_select.setAttribute('src', select.src);
    img_select.id = 'select';
    img_select.style.left = 30 + 'px';
    img_select.style.top = 40 + 'px';
    img_select.style.height = 115 + 'px';
    img_select.style.position = 'absolute';
    div_menu.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "New game";
    new_game.id = 'new_game';
    new_game.classList.add('menu');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu.appendChild(new_game);

    var about = document.createElement('h1');
    about.textContent = "Settings";
    about.id = 'settings';
    about.classList.add('menu');
    about.style.left = 60 + 'px';
    about.style.top = 175 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var about = document.createElement('h1');
    about.textContent = "About";
    about.id = 'about';
    about.classList.add('menu');
    about.style.left = 60 + 'px';
    about.style.top = 300 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "Exit";
    score_n1.id = 'exit';
    score_n1.classList.add('menu');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 425 + 'px';
    score_n1.style.position = 'absolute';
    div_menu.appendChild(score_n1);

    content.appendChild(div_menu);
}

function add_menu1(){
    var div_menu1 = document.createElement('div');
    div_menu1.id = 'div_menu1';
    div_menu1.style.left = 0 + 'px';
    div_menu1.classList.add('content');
    div_menu1.style.top = 0 + 'px';

    var img_menu = document.createElement('img');
    img_menu.setAttribute('src', menu_h.src);
    img_menu.id = 'img_menu1';
    img_menu.style.left = 0 + 'px';
    img_menu.style.top = 0 + 'px';
    img_menu.style.height = 900 + 'px';
    img_menu.style.position = 'absolute';
    div_menu1.appendChild(img_menu);

    var img_select = document.createElement('img');
    img_select.setAttribute('src', select.src);
    img_select.id = 'select1';
    img_select.style.left = 30 + 'px';
    img_select.style.top = 40 + 'px';
    img_select.style.height = 115 + 'px';
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');

    div_menu1.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "Resume game";
    new_game.id = 'resume';
    new_game.classList.add('menu');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu1.appendChild(new_game);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "New game";
    score_n1.id = 'new';
    score_n1.classList.add('menu');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 170 + 'px';
    score_n1.style.position = 'absolute';
    div_menu1.appendChild(score_n1);

    var exit1 = document.createElement('h1');
    exit1.textContent = "Exit";
    exit1.id = 'exit1';
    exit1.classList.add('menu');
    exit1.style.left = 60 + 'px';
    exit1.style.top = 290 + 'px';
    exit1.style.position = 'absolute';
    div_menu1.appendChild(exit1);

    content.appendChild(div_menu1);
}



var anim_s = 0
var anim_key = true
var spawn_t = true
var spawn_time = 0

function anim_spawn(){
    if(document.getElementById('div_game')){
        var anim = document.createElement('img');
        anim.setAttribute('src', list_anim[0].src);
        anim.id = 'anim';
        anim.style.left = 10 + 'px';
        anim.style.top = 770 + 'px';
        anim.style.width = 70 + 'px';
        anim.style.position = 'absolute';
        document.getElementById('div_game').appendChild(anim);

        for (let i = 0; i < 22; i++) {
            setTimeout(() => {
                document.getElementById("anim").setAttribute('src', list_anim[anim_s].src);
                if(anim_key){
                    anim_s += 1
                    if(anim_s == 4){
                        anim_key = false
                    }
                }else{
                    anim_s -= 1
                    if(anim_s == 0){
                        anim_key = true
                    }
                }
                if(i == 21){
                    document.getElementById('anim').remove()
                    document.getElementById('tank_gg').style.left = 10 + 'px';
                    document.getElementById('tank_gg').style.top = 770 + 'px';
                    tank_lvl = 1
                    tank_hp = 100
                    document.getElementById("hp").textContent = "HP: " + tank_hp;
                    document.getElementById("lvl").textContent = "Lvl: " + tank_lvl;
                    ready = true
                }
            }, i * 80);
        }
    }
}

var anim_s1 = 0
var anim_key1 = true
function anim_enemy1(id){
    if(document.getElementById('div_game')){

    var r_left = Math.floor(Math.random() * (900 - (50) + 1)) + (50);

    var anim_e = document.createElement('img');
    anim_e.setAttribute('src', list_anim[0].src);
    anim_e.id = 'anim_e1';
    anim_e.style.left = r_left + 'px';
    anim_e.style.top = 10 + 'px';
    anim_e.style.width = 70 + 'px';
    anim_e.style.position = 'absolute';
    document.getElementById('div_game').appendChild(anim_e);
        for (let i = 0; i < 22; i++) {
            setTimeout(() => {
                document.getElementById("anim_e1").setAttribute('src', list_anim[anim_s1].src);
                if(anim_key1){
                    anim_s1 += 1
                    if(anim_s1 == 4){
                        anim_key1 = false
                    }
                }else{
                    anim_s1 -= 1
                    if(anim_s1 == 0){
                        anim_key1 = true
                    }
                }
                if(i == 21){
                    document.getElementById('anim_e1').remove()
                    document.getElementById(id).style.left = r_left + 'px';
                    document.getElementById(id).style.top = 10 + 'px';
                    move_t1 = true
                }
            }, i * 80);
        }
    }
}

var anim_s2 = 0
var anim_key2 = true
function anim_enemy2(id){
    if(document.getElementById('div_game')){

    var r_left = Math.floor(Math.random() * (900 - (50) + 1)) + (50);

    var anim_e = document.createElement('img');
    anim_e.setAttribute('src', list_anim[0].src);
    anim_e.id = 'anim_e2';
    anim_e.style.left = r_left + 'px';
    anim_e.style.top = 10 + 'px';
    anim_e.style.width = 70 + 'px';
    anim_e.style.position = 'absolute';
    document.getElementById('div_game').appendChild(anim_e);
        for (let i = 0; i < 22; i++) {
            setTimeout(() => {
                document.getElementById("anim_e2").setAttribute('src', list_anim[anim_s2].src);
                if(anim_key2){
                    anim_s2 += 1
                    if(anim_s2 == 4){
                        anim_key2 = false
                    }
                }else{
                    anim_s2 -= 1
                    if(anim_s2 == 0){
                        anim_key2 = true
                    }
                }
                if(i == 21){
                    document.getElementById('anim_e2').remove()
                    document.getElementById(id).style.left = r_left + 'px';
                    document.getElementById(id).style.top = 10 + 'px';
                    move_t2 = true
                }
            }, i * 80);
        }
    }
}

var anim_s3 = 0
var anim_key3 = true
function anim_enemy3(id){
    if(document.getElementById('div_game')){

    var r_left = Math.floor(Math.random() * (900 - (50) + 1)) + (50);

    var anim_e = document.createElement('img');
    anim_e.setAttribute('src', list_anim[0].src);
    anim_e.id = 'anim_e3';
    anim_e.style.left = r_left + 'px';
    anim_e.style.top = 10 + 'px';
    anim_e.style.width = 70 + 'px';
    anim_e.style.position = 'absolute';
    document.getElementById('div_game').appendChild(anim_e);
        for (let i = 0; i < 22; i++) {
            setTimeout(() => {
                document.getElementById("anim_e3").setAttribute('src', list_anim[anim_s3].src);
                if(anim_key3){
                    anim_s3 += 1
                    if(anim_s3 == 4){
                        anim_key3 = false
                    }
                }else{
                    anim_s3 -= 1
                    if(anim_s3 == 0){
                        anim_key3 = true
                    }
                }
                if(i == 21){
                    document.getElementById('anim_e3').remove()
                    document.getElementById(id).style.left = r_left + 'px';
                    document.getElementById(id).style.top = 10 + 'px';
                    move_t3 = true
                }
            }, i * 80);
        }
    }
}



function fire_tank(left, top){

    var r_word = '';
    for (let i = 0; i < 3; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }
    var img = document.createElement('img');
    img.setAttribute('src', list_fire[0].src);
    img.id = r_word;
    img.style.left = left + 'px';
    img.style.top = top + 'px';
    img.style.width = 90 + 'px';
    img.style.position = 'absolute';
    document.getElementById('div_game').appendChild(img);

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            document.getElementById(r_word).setAttribute('src', list_fire[i].src);
            if(i == 5){
                document.getElementById(r_word).remove()

            }
        }, i * 100);
    }
}

function add_improve(){
    var div_game = document.getElementById('div_game');

    var random = Math.floor(Math.random() * 3);
    var r_left = Math.floor(Math.random() * (950 - (0) + 1)) + (0);
    var r_top = Math.floor(Math.random() * (820 - (0) + 1)) + (0);

    var id = ""
    var pic = null

    if(random == 0){
        var improve = document.createElement('img');
        improve.setAttribute('src', list_improve[0].src );
        improve.id = 'lvl_up';
        improve.style.left = r_left + 'px';
        improve.style.top = r_top + 'px';
        improve.style.width = 50 + 'px';
        improve.style.position = 'absolute';
        div_game.appendChild(improve);
        id = 'lvl_up'
        pic = list_improve[0].src

    }else if(random == 1){
        var improve = document.createElement('img');
        improve.setAttribute('src', list_improve[1].src );
        improve.id = 'speed_up';
        improve.style.left = r_left + 'px';
        improve.style.top = r_top + 'px';
        improve.style.width = 50 + 'px';
        improve.style.position = 'absolute';
        div_game.appendChild(improve);
        id = 'speed_up'
        pic = list_improve[1].src

    }else if(random == 2){
        var improve = document.createElement('img');
        improve.setAttribute('src', list_improve[2].src );
        improve.id = 'armor';
        improve.style.left = r_left + 'px';
        improve.style.top = r_top + 'px';
        improve.style.width = 50 + 'px';
        improve.style.position = 'absolute';
        div_game.appendChild(improve);
        id = 'armor'
        pic = list_improve[2].src

    }

    var count = 0;
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
        if (count == 2){
            count = 0
        }
        if(document.getElementById(id)){

            if(i > 150){
                if(count == 0){
                    document.getElementById(id).setAttribute('src', pic);
                }else{
                    document.getElementById(id).setAttribute('src', list_improve[3].src);
                }

            }
        }
        if(i == 199){
            key_improve = true
            if(document.getElementById(id)){
                document.getElementById(id).remove()
            }
        }
        count++
        }, i * 100);
    }
}


function speed_minus(){
    for (let i = 0; i < 16; i++) {
        setTimeout(() => {
            if(i == 15){
                speed_gg -= 5
                }
        }, i * 1000);
    }
}

function anim_gg(){
    var n = []
    if(tank_lvl == 1){
        n = [0,2]
    }else if(tank_lvl == 2){
        n = [2,4]
    }else if(tank_lvl == 3){
        n = [4,6]
    }
    for (let i = n[0]; i < n[1]; i++) {
        setTimeout(() => {
            document.getElementById('tank_gg').setAttribute('src', list_tank1[i].src);
        }, i * 50);
    }
}

function anim_e(){
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            document.getElementById('tank_enemy1').setAttribute('src', list_tank_e[i].src);
        }, i * 50);
    }
}

function anim_e2(){
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            document.getElementById('tank_enemy2').setAttribute('src', list_tank_e2[i].src);
        }, i * 50);
    }
}

function anim_e3(){
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            document.getElementById('tank_enemy3').setAttribute('src', list_tank_e3[i].src);
        }, i * 50);
    }
}

function anim_armor(){
    var top = parseInt(document.getElementById('tank_gg').style.top) || 0;
    var left = parseInt(document.getElementById('tank_gg').style.left) || 0;

    var armor = document.createElement('img');
    armor.setAttribute('src', list_armor[0].src);
    armor.id = 'armor1';
    armor.style.left = left - 10 + 'px';
    armor.style.top = top - 10 + 'px';
    armor.style.width = 90 + 'px';
    armor.style.position = 'absolute';
    document.getElementById('div_game').appendChild(armor);

    var count = 0;
    for (let i = 0; i < 400; i++) {
        setTimeout(() => {
        if (count == 4){
            count = 0
        }
        if(document.getElementById('armor1')){
            var arm = document.getElementById('armor1')
            var cur_m_top = parseInt(document.getElementById('tank_gg').style.top) || 0;
            var cur_m_left = parseInt(document.getElementById('tank_gg').style.left) || 0;
            arm.style.top = (cur_m_top - 10) + 'px';
            arm.style.left = (cur_m_left - 10) + 'px';
            arm.setAttribute('src', list_armor[count].src);
        }
        count += 1;

        if(i == 399){
            tank_armor = false
            document.getElementById('armor1').remove()
        }
        }, i * 50);
    }
}

// список колізій для гравця
list_wall = ['brick','brick1', 'tank_enemy1' , 'tank_enemy2' , 'tank_enemy3']

// список колізій для ворога 1
list_t_e1 = ['brick', 'brick1', 'tank_gg', 'tank_enemy2' , 'tank_enemy3']

// список колізій для ворога 2
list_t_e2 = ['brick', 'brick1', 'tank_gg', 'tank_enemy1' , 'tank_enemy3']

// список колізій для ворога 3
list_t_e3 = ['brick', 'brick1', 'tank_gg', 'tank_enemy1' , 'tank_enemy2']

list_wall3 = ['brick', 'brick1', 'tank_gg']

list_wall4 = ['brick', 'brick1']

var list_move = [[20, "l"], [25, "r"], [17, "u"], [22, "d"]]


var anim = 0;

var speed_gg = 8
var time_gg = 0

// зміні 1 танку
var move_enemy1 = [0, "l"]
var move_t1 = true
var move_tank1 = 0
var time_t1 = 0
var time_e1 = 0
var tank_e1_hp = 50

// зміні 2 танку
var move_enemy2 = [0, "l"]
var move_t2 = true
var move_tank2 = 0
var time_t2 = 0
var time_e2 = 0
var tank_e2_hp = 100

// зміні 2 танку
var move_enemy3 = [0, "l"]
var move_t3 = true
var move_tank3 = 0
var time_t3 = 0
var time_e3 = 0
var tank_e3_hp = 25


var tank_armor = false

var key_improve = true
var time_improve = 0

function game(){

    // додає покращення
    if(key_improve){
        time_improve++
        if(time_improve == 400){
            time_improve = 0
            add_improve()
            key_improve = false
        }
    }


    // задає рух 1 танку середній
    if (move_tank1 == move_enemy1[0]){
        move_enemy1 = list_move[Math.floor(Math.random() * list_move.length)];
        move_tank1 = 0;
    }

    // рух 1 танку ворога
    if(move_t1){
        move_tank1++
        move_e(move_enemy1[1], "tank_enemy1")
        var fire1 = Math.floor(Math.random() * 5);
        if(fire1 == 2){
            bulet_gg("bulet_enemy1", "tank_enemy1")
        }
    }else{
        time_t1 ++ // лічильник спаму нового танку
        if(time_t1 == 100){
            time_t1 = 0
            anim_enemy1("tank_enemy1")
            tank_e1_hp = 50

        }
    }

    // задає рух 2 танку потужний
    if (move_tank2 == move_enemy2[0]){
        move_enemy2 = list_move[Math.floor(Math.random() * list_move.length)];
        move_tank2 = 0;
    }

    // рух 2 танку ворога
    if(move_t2){
        move_tank2++
        move_e2(move_enemy2[1], "tank_enemy2")

        // дає команду на постріл
        var fire2 = Math.floor(Math.random() * 20);
        if(fire2 == 2){
            bulet_gg("bulet_enemy2", "tank_enemy2")
        }
    }else{
        time_t2 ++ // лічильник спаму нового танку
        if(time_t2 == 200){
            time_t2 = 0
            anim_enemy2("tank_enemy2")
            tank_e2_hp = 100 // хп такну

        }
    }

    // задає рух 3 танку швидкий
    if (move_tank3 == move_enemy3[0]){
        move_enemy3 = list_move[Math.floor(Math.random() * list_move.length)];
        move_tank3 = 0;
    }

    // рух 3 танку ворога
    if(move_t3){
        move_tank3++
        move_e3(move_enemy3[1], "tank_enemy3")

        // дає команду на постріл
        var fire3 = Math.floor(Math.random() * 9);
        if(fire3 == 2){
            bulet_gg("bulet_enemy3", "tank_enemy3")
        }
    }else{
        time_t3 ++ // лічильник спаму нового танку
        if(time_t3 == 100){
            time_t3 = 0
            anim_enemy3("tank_enemy3")
            tank_e3_hp = 25 // хп такну

        }
    }

    var tank_gg_r = document.getElementById('tank_gg').getBoundingClientRect();

    // реагує на колізії кулі ГГ та стін
    if(document.getElementById('tank_bulet')){
        for (var i = 0; i < list_wall4.length; i++){
            var bulet_r = document.getElementById('tank_bulet').getBoundingClientRect();
            var wall_r = document.getElementById(list_wall4[i]).getBoundingClientRect();

            if (!(bulet_r.right < wall_r.left ||
                bulet_r.left > wall_r.right ||
                bulet_r.bottom < wall_r.top ||
                bulet_r.top > wall_r.bottom)) {
                    document.getElementById('tank_bulet').remove()
                    break
                }
        }
    }

    // реагує на колізії кулі 1 танку та стін
    if(document.getElementById('bulet_enemy1')){
        for (var i = 0; i < list_wall3.length; i++){
            var bulet_r = document.getElementById('bulet_enemy1').getBoundingClientRect();
            var wall_r = document.getElementById(list_wall3[i]).getBoundingClientRect();

            if (!(bulet_r.right < wall_r.left ||
                bulet_r.left > wall_r.right ||
                bulet_r.bottom < wall_r.top ||
                bulet_r.top > wall_r.bottom)) {
                    if(list_wall3[i] == "tank_gg"){
                        if(!tank_armor){
                            document.getElementById('bulet_enemy1').remove()
                            tank_hp -=25
                            document.getElementById("hp").textContent = "HP: " + tank_hp;
                            break
                        }else{
                            document.getElementById('bulet_enemy1').remove()
                        }
                    }else{
                        document.getElementById('bulet_enemy1').remove()
                        break
                    }
                }
            }
    }

    // реагує на колізії кулі 2 танку та стін
    if(document.getElementById('bulet_enemy2')){
        for (var i = 0; i < list_wall3.length; i++){
            var bulet_r = document.getElementById('bulet_enemy2').getBoundingClientRect();
            var wall_r = document.getElementById(list_wall3[i]).getBoundingClientRect();

            if (!(bulet_r.right < wall_r.left ||
                bulet_r.left > wall_r.right ||
                bulet_r.bottom < wall_r.top ||
                bulet_r.top > wall_r.bottom)) {
                    if(list_wall3[i] == "tank_gg"){
                        if(!tank_armor){
                            document.getElementById('bulet_enemy2').remove()
                            tank_hp -=50
                            document.getElementById("hp").textContent = "HP: " + tank_hp;
                            break
                        }else{
                            document.getElementById('bulet_enemy2').remove()
                        }
                    }else{
                        document.getElementById('bulet_enemy2').remove()
                        break
                    }
                }
        }
    }

    // реагує на колізії кулі 3 танку та стін
    if(document.getElementById('bulet_enemy3')){
        for (var i = 0; i < list_wall3.length; i++){
            var bulet_r = document.getElementById('bulet_enemy3').getBoundingClientRect();
            var wall_r = document.getElementById(list_wall3[i]).getBoundingClientRect();

            if (!(bulet_r.right < wall_r.left ||
                bulet_r.left > wall_r.right ||
                bulet_r.bottom < wall_r.top ||
                bulet_r.top > wall_r.bottom)) {
                    if(list_wall3[i] == "tank_gg"){
                        if(!tank_armor){
                            document.getElementById('bulet_enemy3').remove()
                            tank_hp -=25
                            document.getElementById("hp").textContent = "HP: " + tank_hp;
                            break
                        }else{
                            document.getElementById('bulet_enemy3').remove()
                        }
                    }else{
                        document.getElementById('bulet_enemy3').remove()
                        break
                    }
                }
        }
    }

    // реагує на колізії покращень
    if(document.getElementById('speed_up')){
        var speed_up_r = document.getElementById('speed_up').getBoundingClientRect();

        if (!(tank_gg_r.right < speed_up_r.left ||
            tank_gg_r.left > speed_up_r.right ||
            tank_gg_r.bottom < speed_up_r.top ||
            tank_gg_r.top > speed_up_r.bottom)) {
                document.getElementById('speed_up').remove()
                speed_gg += 5
                speed_minus()
            }
    }

    if(document.getElementById('lvl_up')){
        var lvl_up_r = document.getElementById('lvl_up').getBoundingClientRect();

        if (!(tank_gg_r.right < lvl_up_r.left ||
            tank_gg_r.left > lvl_up_r.right ||
            tank_gg_r.bottom < lvl_up_r.top ||
            tank_gg_r.top > lvl_up_r.bottom)) {
                document.getElementById('lvl_up').remove()
                if(tank_lvl < 3){
                    tank_lvl++
                    tank_hp = 100
                    document.getElementById("hp").textContent = "HP: " + tank_hp;
                }else{
                    tank_hp = 100
                    document.getElementById("hp").textContent = "HP: " + tank_hp;
                }
                document.getElementById("lvl").textContent = "Lvl: " + tank_lvl;
            }
    }

    if(document.getElementById('armor')){
        var armor_r = document.getElementById('armor').getBoundingClientRect();

        if (!(tank_gg_r.right < armor_r.left ||
            tank_gg_r.left > armor_r.right ||
            tank_gg_r.bottom < armor_r.top ||
            tank_gg_r.top > armor_r.bottom)) {

                document.getElementById('armor').remove()
                tank_armor = true
                anim_armor()
            }
    }


    // реагує на 1 танк ворога та кулі гг
    if(document.getElementById('tank_bulet')){
        var tank_enemy1_r = document.getElementById('tank_enemy1').getBoundingClientRect();
        var bulet_gg_r = document.getElementById('tank_bulet').getBoundingClientRect();

        if (!(tank_enemy1_r.right < bulet_gg_r.left ||
            tank_enemy1_r.left > bulet_gg_r.right ||
            tank_enemy1_r.bottom < bulet_gg_r.top ||
            tank_enemy1_r.top > bulet_gg_r.bottom)) {

                if(tank_lvl == 1){
                    tank_e1_hp -= 25
                    document.getElementById('tank_bulet').remove()
                }else if(tank_lvl == 2){
                tank_e1_hp -= 50
                    document.getElementById('tank_bulet').remove()
                }else if(tank_lvl == 3){
                tank_e1_hp -= 100
                    document.getElementById('tank_bulet').remove()
                }

                if(tank_e1_hp <= 0){
                    var cur_m_top = parseInt(document.getElementById('tank_enemy1').style.top) || 0;
                    var cur_m_left = parseInt(document.getElementById('tank_enemy1').style.left) || 0;
                    fire_tank(cur_m_left, cur_m_top)
                    if(document.getElementById('tank_bulet')){
                        document.getElementById('tank_bulet').remove()
                    }
                    document.getElementById('tank_enemy1').style.top = 50 + 'px';
                    document.getElementById('tank_enemy1').style.left = 1050 + 'px';
                    move_t1 = false
                    kill += 1
                    document.getElementById("kill").textContent = "Kill: " + kill;
                    score += 50
                    document.getElementById("txt_score").textContent = "Score: " + score;
                }
            }
    }

    // реагує на 2 танк ворога та кулі гг
    if(document.getElementById('tank_bulet')){
        var tank_enemy1_r = document.getElementById('tank_enemy2').getBoundingClientRect();
        var bulet_gg_r = document.getElementById('tank_bulet').getBoundingClientRect();

        if (!(tank_enemy1_r.right < bulet_gg_r.left ||
            tank_enemy1_r.left > bulet_gg_r.right ||
            tank_enemy1_r.bottom < bulet_gg_r.top ||
            tank_enemy1_r.top > bulet_gg_r.bottom)) {

                if(tank_lvl == 1){
                    tank_e2_hp -= 25
                    document.getElementById('tank_bulet').remove()
                }else if(tank_lvl == 2){
                    tank_e2_hp -= 50
                    document.getElementById('tank_bulet').remove()
                }else if(tank_lvl == 3){
                    tank_e2_hp -= 100
                    document.getElementById('tank_bulet').remove()
                }

                if(tank_e2_hp <= 0){
                    var cur_m_top = parseInt(document.getElementById('tank_enemy2').style.top) || 0;
                    var cur_m_left = parseInt(document.getElementById('tank_enemy2').style.left) || 0;
                    fire_tank(cur_m_left, cur_m_top)
                    if(document.getElementById('tank_bulet')){
                        document.getElementById('tank_bulet').remove()
                    }
                    document.getElementById('tank_enemy2').style.top = 150 + 'px';
                    document.getElementById('tank_enemy2').style.left = 1050 + 'px';
                    move_t2 = false
                    kill += 1
                    document.getElementById("kill").textContent = "Kill: " + kill;
                    score += 100
                    document.getElementById("txt_score").textContent = "Score: " + score;
                }
            }
    }

    // реагує на 3 танк ворога та кулі гг
    if(document.getElementById('tank_bulet')){
        var tank_enemy1_r = document.getElementById('tank_enemy3').getBoundingClientRect();
        var bulet_gg_r = document.getElementById('tank_bulet').getBoundingClientRect();

        if (!(tank_enemy1_r.right < bulet_gg_r.left ||
            tank_enemy1_r.left > bulet_gg_r.right ||
            tank_enemy1_r.bottom < bulet_gg_r.top ||
            tank_enemy1_r.top > bulet_gg_r.bottom)) {

                if(tank_lvl == 1){
                    tank_e3_hp -= 25
                    document.getElementById('tank_bulet').remove()
                }else if(tank_lvl == 2){
                    tank_e3_hp -= 50
                    document.getElementById('tank_bulet').remove()
                }else if(tank_lvl == 3){
                    tank_e3_hp -= 100
                    document.getElementById('tank_bulet').remove()
                }

                if(tank_e3_hp <= 0){
                    var cur_m_top = parseInt(document.getElementById('tank_enemy3').style.top) || 0;
                    var cur_m_left = parseInt(document.getElementById('tank_enemy3').style.left) || 0;
                    fire_tank(cur_m_left, cur_m_top)
                    if(document.getElementById('tank_bulet')){
                        document.getElementById('tank_bulet').remove()
                    }
                    document.getElementById('tank_enemy3').style.top = 250 + 'px';
                    document.getElementById('tank_enemy3').style.left = 1050 + 'px';
                    move_t3 = false
                    kill += 1
                    document.getElementById("kill").textContent = "Kill: " + kill;
                    score += 25
                    document.getElementById("txt_score").textContent = "Score: " + score;
                }
            }
    }

    // дає можливість рухатись гравцю після зіткненя
    if(t_up == false || t_down == false || t_left == false || t_right == false){
        time_gg++
        if(time_gg == 10){
            time_gg = 0
            t_up = true
            t_down = true
            t_right = true
            t_left = true
        }
    }

    // перевіряє колізії гравця та стін
    for (var i = 0; i < list_wall.length; i++){

        var tank_rect = document.getElementById('tank_gg').getBoundingClientRect();
        var stena_reck = document.getElementById(list_wall[i]).getBoundingClientRect();

        if (!(tank_rect.right < stena_reck.left ||
            tank_rect.left > stena_reck.right ||
            tank_rect.bottom < stena_reck.top ||
            tank_rect.top > stena_reck.bottom)) {
            if(tank_rect.top > stena_reck.bottom - 20){
                t_up = false
            }
            if(tank_rect.bottom < stena_reck.top + 20){
                t_down = false
            }
            if(tank_rect.left > stena_reck.right - 20){
                t_left = false
            }
            if(tank_rect.right < stena_reck.left + 20){
                t_right = false
            }
        }
    }

    // дає можливість рухатись 1 танку після зіткненя
    if(t_e1_up == false || t_e1_down == false || t_e1_left == false || t_e1_right == false){
        time_e1++
        if(time_e1 == 10){
            time_e1 = 0
            t_e1_up = true
            t_e1_down = true
            t_e1_right = true
            t_e1_left = true
        }
    }

    for (var i = 0; i < list_t_e1.length; i++){

        var tank_rect = document.getElementById('tank_enemy1').getBoundingClientRect();
        var stena_reck = document.getElementById(list_t_e1[i]).getBoundingClientRect();

        if (!(tank_rect.right < stena_reck.left ||
            tank_rect.left > stena_reck.right ||
            tank_rect.bottom < stena_reck.top ||
            tank_rect.top > stena_reck.bottom)) {
            if(tank_rect.top > stena_reck.bottom - 20){
                t_e1_up = false
            }
            if(tank_rect.bottom < stena_reck.top + 20){
                t_e1_down = false
            }
            if(tank_rect.left > stena_reck.right - 20){
                t_e1_left = false
            }
            if(tank_rect.right < stena_reck.left + 20){
                t_e1_right = false
            }
        }
    }

        // дає можливість рухатись 2 танку після зіткненя
    if(t_e2_up == false || t_e2_down == false || t_e2_left == false || t_e2_right == false){
        time_e2++
        if(time_e2 == 10){
            time_e2 = 0
            t_e2_up = true
            t_e2_down = true
            t_e2_right = true
            t_e2_left = true
        }
    }

    for (var i = 0; i < list_t_e2.length; i++){

        var tank_rect = document.getElementById('tank_enemy2').getBoundingClientRect();
        var stena_reck = document.getElementById(list_t_e2[i]).getBoundingClientRect();

        if (!(tank_rect.right < stena_reck.left ||
            tank_rect.left > stena_reck.right ||
            tank_rect.bottom < stena_reck.top ||
            tank_rect.top > stena_reck.bottom)) {
            if(tank_rect.top > stena_reck.bottom - 20){
                t_e2_up = false
            }
            if(tank_rect.bottom < stena_reck.top + 20){
                t_e2_down = false
            }
            if(tank_rect.left > stena_reck.right - 20){
                t_e2_left = false
            }
            if(tank_rect.right < stena_reck.left + 20){
                t_e2_right = false
            }
        }
    }

        // дає можливість рухатись 3 танку після зіткненя
    if(t_e3_up == false || t_e3_down == false || t_e3_left == false || t_e3_right == false){
        time_e3++
        if(time_e3 == 10){
            time_e3 = 0
            t_e3_up = true
            t_e3_down = true
            t_e3_right = true
            t_e3_left = true
        }
    }


    for (var i = 0; i < list_t_e3.length; i++){

        var tank_rect = document.getElementById('tank_enemy3').getBoundingClientRect();
        var stena_reck = document.getElementById(list_t_e3[i]).getBoundingClientRect();

        if (!(tank_rect.right < stena_reck.left ||
            tank_rect.left > stena_reck.right ||
            tank_rect.bottom < stena_reck.top ||
            tank_rect.top > stena_reck.bottom)) {
            if(tank_rect.top > stena_reck.bottom - 20){
                t_e3_up = false
            }
            if(tank_rect.bottom < stena_reck.top + 20){
                t_e3_down = false
            }
            if(tank_rect.left > stena_reck.right - 20){
                t_e3_left = false
            }
            if(tank_rect.right < stena_reck.left + 20){
                t_e3_right = false
            }
        }
    }

    // переносить танк ГГ якщо знищили
    if(tank_hp <= 0 ){
        spawn -= 1
        ready = false
        document.getElementById("txt_tank").textContent = "Tank: " + spawn;

        var cur_top = parseInt(document.getElementById('tank_gg').style.top) || 0;
        var cur_left = parseInt(document.getElementById('tank_gg').style.left) || 0;
        fire_tank(cur_left, cur_top)
        document.getElementById('tank_gg').style.left = 1100 + 'px';
        document.getElementById('tank_gg').style.top = 800 + 'px';
        spawn_t = false
        tank_hp = 100
    }
    // спавнить ГГ після знищеня
    if(!spawn_t){
        spawn_time++
        if(spawn_time == 5){
            spawn_t = true
            spawn_time = 0
            anim_spawn()
        }
    }

    if(spawn <= 0){
        clearInterval(gameinterval)
        gameinterval = null
        game_over()
    }

}

function bulet_gg(id_bulet, id_tank){
    var bulet_u = null
    var bulet_d = null
    var bulet_r = null
    var bulet_l = null

    if (!document.getElementById(id_bulet)){
        var div_game = document.getElementById("div_game");
        var tank_gg = document.getElementById(id_tank);

        var cur_m_left = parseInt(tank_gg.style.left) || 0;
        var cur_m_top = parseInt(tank_gg.style.top) || 0;

        if(id_tank == "tank_gg" && tank_lvl == 2){
            var img_bulet = document.createElement('img');
            img_bulet.setAttribute('src', list_tank[4].src);
            img_bulet.id = id_bulet;
            img_bulet.style.left = cur_m_left + 31 + 'px';
            img_bulet.style.top = cur_m_top + 37 + 'px';
            img_bulet.style.width = 12 + 'px';
            img_bulet.style.position = 'absolute';
            div_game.appendChild(img_bulet);
        }else if(id_tank == "tank_gg" && tank_lvl == 3){

            console.log(tank_gg.style.transform)
            if(tank_gg.style.transform == "rotate(0deg)" || tank_gg.style.transform == "rotate(180deg)"){
                console.log("Боком")
                var img_bulet = document.createElement('img');
                img_bulet.setAttribute('src', list_tank[7].src);
                img_bulet.id = id_bulet;
                img_bulet.style.left = cur_m_left + 21 + 'px';
                img_bulet.style.top = cur_m_top + 31 + 'px';
                img_bulet.style.width = 28 + 'px';
                img_bulet.style.position = 'absolute';
                img_bulet.style.transform = "rotate(90deg)"
                div_game.appendChild(img_bulet);

            }else{
                console.log("Прямо")
                var img_bulet = document.createElement('img');
                img_bulet.setAttribute('src', list_tank[7].src);
                img_bulet.id = id_bulet;
                img_bulet.style.left = cur_m_left + 31 + 'px';
                img_bulet.style.top = cur_m_top + 37 + 'px';
                img_bulet.style.width = 28 + 'px';
                img_bulet.style.position = 'absolute';
                div_game.appendChild(img_bulet);
            }

        }else if(id_bulet == "bulet_enemy2"){
            var img_bulet = document.createElement('img');
            img_bulet.setAttribute('src', list_tank[4].src);
            img_bulet.id = id_bulet;
            img_bulet.style.left = cur_m_left + 28 + 'px';
            img_bulet.style.top = cur_m_top + 35 + 'px';
            img_bulet.style.width = 12 + 'px';
            img_bulet.style.position = 'absolute';
            div_game.appendChild(img_bulet);

        }else{
            var img_bulet = document.createElement('img');
            img_bulet.setAttribute('src', list_tank[1].src);
            img_bulet.id = id_bulet;
            img_bulet.style.left = cur_m_left + 31 + 'px';
            img_bulet.style.top = cur_m_top + 37 + 'px';
            img_bulet.style.width = 8 + 'px';
            img_bulet.style.position = 'absolute';
            div_game.appendChild(img_bulet);
        }

        var bulet = img_bulet

        if(tank_gg.style.transform == "rotate(0deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_top = parseInt(bulet.style.top) || 0;
                        bulet.style.top = (cur_b_top - 15) + 'px';
                    }else{
                        clearInterval(bulet_u)
                    }
                    if(cur_b_top < 0){
                        bulet.remove()
                        clearInterval(bulet_u)
                    }
                }
                bulet_u = setInterval(b_move, 30)

        }else if(tank_gg.style.transform == "rotate(90deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_left = parseInt(bulet.style.left) || 0;
                        bulet.style.left = (cur_b_left + 15) + 'px';
                    }else{
                        clearInterval(bulet_r)
                    }
                    if(cur_b_left > 1000){
                        bulet.remove()
                        clearInterval(bulet_r)
                    }
                }
                bulet_r = setInterval(b_move, 30)

        }else if(tank_gg.style.transform == "rotate(180deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_top = parseInt(bulet.style.top) || 0;
                        bulet.style.top = (cur_b_top + 15) + 'px';
                    }else{
                        clearInterval(bulet_d)
                    }
                    if(cur_b_top > 840){
                        bulet.remove()
                        clearInterval(bulet_d)
                    }
                }
                bulet_d = setInterval(b_move, 30)

        }else if(tank_gg.style.transform == "rotate(270deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_left = parseInt(bulet.style.left) || 0;
                        bulet.style.left = (cur_b_left - 15) + 'px';
                    }else{
                        clearInterval(bulet_l)
                    }
                    if(cur_b_left < 0){
                        bulet.remove()
                        clearInterval(bulet_l)
                    }
                }
                bulet_l = setInterval(b_move, 30)

        }else{
            document.getElementById("tank_bulet").remove()
        }
    }
}

var t_up = true
var t_down = true
var t_right = true
var t_left = true

var ready = true

function move_gg(pos, id){

    if(ready && !document.getElementById('div_menu') && !document.getElementById('div_menu1')){
        var tank_gg = document.getElementById(id);

        var cur_m_top = parseInt(tank_gg.style.top) || 0;
        var cur_m_left = parseInt(tank_gg.style.left) || 0;

        if(pos == "d" ){
            tank_gg.style.transform = "rotate(180deg)";
            if(t_down && cur_m_top < 770){
                anim_gg()
                tank_gg.style.top = (cur_m_top + speed_gg) + 'px';
            }
        }else if(pos == "u"){
            tank_gg.style.transform = "rotate(0deg)";
            if(t_up && cur_m_top > 0){
                anim_gg()
                tank_gg.style.top = (cur_m_top - speed_gg) + 'px';
            }
        }else if(pos == "r"){
            tank_gg.style.transform = "rotate(90deg)";
            if(t_right && cur_m_left < 910){
                anim_gg()
                tank_gg.style.left = (cur_m_left + speed_gg) + 'px';
            }
        }else if(pos == "l"){
            tank_gg.style.transform = "rotate(270deg)";

            if(t_left && cur_m_left > 10){
                anim_gg()
                tank_gg.style.left = (cur_m_left - speed_gg) + 'px';
            }
        }
    }
}

// рух 1 танка
var t_e1_up = true
var t_e1_down = true
var t_e1_right = true
var t_e1_left = true

function move_e(pos, id){
    var tank_gg = document.getElementById(id);

    var cur_m_top = parseInt(tank_gg.style.top) || 0;
    var cur_m_left = parseInt(tank_gg.style.left) || 0;

    if(pos == "d" ){
        tank_gg.style.transform = "rotate(180deg)";
        if(t_e1_down && cur_m_top < 770){
            anim_e()
            tank_gg.style.top = (cur_m_top + 8) + 'px';
        }
    }else if(pos == "u"){
        tank_gg.style.transform = "rotate(0deg)";
        if(t_e1_up && cur_m_top > 0){
            anim_e()
            tank_gg.style.top = (cur_m_top - 8) + 'px';
        }
    }else if(pos == "r"){
        tank_gg.style.transform = "rotate(90deg)";
        if(t_e1_right && cur_m_left < 910){
            anim_e()
            tank_gg.style.left = (cur_m_left + 8) + 'px';
        }
    }else if(pos == "l"){
        tank_gg.style.transform = "rotate(270deg)";

        if(t_e1_left && cur_m_left > 10){
            anim_e()
            tank_gg.style.left = (cur_m_left - 8) + 'px';
        }
    }

}

// рух 2 танка
var t_e2_up = true
var t_e2_down = true
var t_e2_right = true
var t_e2_left = true

function move_e2(pos, id){
    var tank_gg = document.getElementById(id);

    var cur_m_top = parseInt(tank_gg.style.top) || 0;
    var cur_m_left = parseInt(tank_gg.style.left) || 0;

    if(pos == "d" && cur_m_top < 770 && t_e2_down){
        anim_e2()
        tank_gg.style.top = (cur_m_top + 6) + 'px';
        tank_gg.style.transform = "rotate(180deg)";

    }else if(pos == "u" && cur_m_top > 0 && t_e2_up){
        anim_e2()
        tank_gg.style.top = (cur_m_top - 6) + 'px';
        tank_gg.style.transform = "rotate(0deg)";

    }else if(pos == "r" && cur_m_left < 910 && t_e2_right){
        anim_e2()
        tank_gg.style.left = (cur_m_left + 6) + 'px';
        tank_gg.style.transform = "rotate(90deg)";

    }else if(pos == "l" && cur_m_left > 10 && t_e2_left){
        anim_e2()
        tank_gg.style.left = (cur_m_left - 6) + 'px';
        tank_gg.style.transform = "rotate(270deg)";
    }
}

// рух 2 танка
var t_e3_up = true
var t_e3_down = true
var t_e3_right = true
var t_e3_left = true

function move_e3(pos, id){
    var tank_gg = document.getElementById(id);

    var cur_m_top = parseInt(tank_gg.style.top) || 0;
    var cur_m_left = parseInt(tank_gg.style.left) || 0;

    if(pos == "d" && cur_m_top < 770 && t_e3_down){
        anim_e3()
        tank_gg.style.top = (cur_m_top + 10) + 'px';
        tank_gg.style.transform = "rotate(180deg)";

    }else if(pos == "u" && cur_m_top > 0 && t_e3_up){
        anim_e3()
        tank_gg.style.top = (cur_m_top - 10) + 'px';
        tank_gg.style.transform = "rotate(0deg)";

    }else if(pos == "r" && cur_m_left < 910 && t_e3_right){
        anim_e3()
        tank_gg.style.left = (cur_m_left + 10) + 'px';
        tank_gg.style.transform = "rotate(90deg)";

    }else if(pos == "l" && cur_m_left > 10 && t_e3_left){
        anim_e3()
        tank_gg.style.left = (cur_m_left - 10) + 'px';
        tank_gg.style.transform = "rotate(270deg)";
    }
}

var kluch = true
var kluch_u = true
var kluch_d = true
var kluch_r = true
var kluch_l = true

// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            if(kluch_u && down == null && left == null && right == null){
                kluch_u = false
                clearInterval(up)
                up = setInterval(() => move_gg("u", "tank_gg"), 50);
            }
            move_menu("u")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            if(kluch_d && up == null && left == null && right == null){
                kluch_d = false
                clearInterval(down)
                down = setInterval(() => move_gg("d", "tank_gg"), 50);
            }
            move_menu("d")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            if(kluch_l && down == null && up == null && right == null){
                kluch_l = false
                clearInterval(left)
                left = setInterval(() => move_gg("l", "tank_gg"), 50);
            }
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            if(kluch_r && down == null && left == null && up == null){
                kluch_r = false
                clearInterval(right)
                right = setInterval(() => move_gg("r", "tank_gg"), 50);
            }
        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
            move_menu("r")

        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        if(kluch){
            bulet_gg("tank_bulet", "tank_gg")
        }
        kluch = false

        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {

    }
});

document.addEventListener("keyup", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            clearInterval(up)
            up = null
            kluch_u = true
        }
    // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            clearInterval(down)
            down = null
            kluch_d = true
        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            clearInterval(left)
            left = null
            kluch_l = true

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            kluch_r = true
            clearInterval(right)
            right = null
        }

        // натиснута кнопка E
    if (event.keyCode === 69) {
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        kluch = true

        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
    }
});

var down = null
var up = null
var left = null
var right = null


// Кнопки тачу
// кнопка вниз
function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    clearInterval(down)
    if(up == null && left == null && right == null){
        down = setInterval(() => move_gg("d", "tank_gg"), 50);
    }
    move_menu("d")

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
    clearInterval(down)
    down = null
}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    clearInterval(up)
    if(down == null && left == null && right == null){
        up = setInterval(() => move_gg("u", "tank_gg"), 50);
    }
    move_menu("u")

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
    clearInterval(up)
    up = null
}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    clearInterval(left)
    if(down == null && up == null && right == null){
        left = setInterval(() => move_gg("l", "tank_gg"), 50);
    }
    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
    clearInterval(left)
    left = null
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    clearInterval(right)
    if(down == null && up == null && left == null){
        right = setInterval(() => move_gg("r", "tank_gg"), 50);
    }
    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
    clearInterval(right)
    right = null
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    bulet_gg("tank_bulet", "tank_gg")

    event.preventDefault();
    navigator.vibrate(50);
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";

    event.preventDefault();
    navigator.vibrate(50);
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

// правий селект
function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    move_menu("r")

    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}

function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}

var gameinterval = null


add_zastavka()


var menu_pos = 0;
var menu_pos1 = 0;

function move_menu(nav){
    if(document.getElementById('div_zastavka')){
        if(nav == "r"){
            document.getElementById('div_zastavka').remove()
            add_menu()
        }

    }else if(document.getElementById('div_menu') && !document.getElementById('div_game')){
        var cur_select = parseInt(document.getElementById("select").style.top) || 0;

        if(nav == "d" && menu_pos < 3){
            document.getElementById("select").style.top = (cur_select + 125) + 'px';
            menu_pos += 1;
        }else if(nav == "u" && menu_pos > 0){
            document.getElementById("select").style.top = (cur_select - 125) + 'px';
            menu_pos -= 1;
        }else if(nav == "r"){
            if(menu_pos == 0){
                document.getElementById('div_menu').remove()
                move_t1 = false
                move_t2 = false
                move_t3 = false
                ready = false
                spawn_t = false
                tank_lvl = 1
                tank_hp = 100
                kill = 0
                spawn = 3
                score = 0
                game_elements()
                gameinterval = setInterval(game, 50)

            }else if(menu_pos == 3){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game') && !document.getElementById('div_menu1' ) && !document.getElementById('div_game_over')){
        if(nav == "r"){
            add_menu1()
            clearInterval(gameinterval)
            gameinterval = null
        }
    }else if(document.getElementById('div_game') && document.getElementById('div_menu1')){

        var cur_select = parseInt(document.getElementById("select1").style.top) || 0;
        if(nav == "d" && menu_pos1 < 2){
            document.getElementById("select1").style.top = (cur_select + 120) + 'px';
            menu_pos1 += 1;

        }else if(nav == "u" && menu_pos1 > 0){
            document.getElementById("select1").style.top = (cur_select - 120) + 'px';
            menu_pos1 -= 1;

        }else if(nav == "r"){
            if(menu_pos1 == 0){
                document.getElementById('div_menu1').remove()
                gameinterval = setInterval(game, 50)
            }else if(menu_pos1 == 1){
                move_t1 = false
                move_t2 = false
                move_t3 = false

                ready = false
                spawn_t = false
                tank_lvl = 1
                tank_hp = 100
                kill = 0
                spawn = 3
                score = 0
                document.getElementById('div_menu1').remove()
                clearInterval(gameinterval)
                gameinterval = null
                document.getElementById('div_game').remove()
                game_elements()
                gameinterval = setInterval(game, 50)
                menu_pos1 = 0

            }else if(menu_pos1 == 2){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game') && document.getElementById('div_game_over')){
        if(nav == "r"){
            document.getElementById('div_game').remove()
            document.getElementById('div_game_over').remove()
            add_menu()
        }
    }
}