

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]

list_element[0].src = '/media/g_arkanoid/fon.svg';
list_element[1].src = '/media/g_arkanoid/enemy2.svg';
list_element[2].src = '/media/g_arkanoid/ball_e.svg';
list_element[3].src = '/media/g_arkanoid/fon1.svg';
list_element[4].src = '/media/g_arkanoid/deep.svg';
list_element[5].src = '/media/g_arkanoid/ball_e2.svg';

var list_ball = [new Image(), new Image(), new Image()]

list_ball[0].src = '/media/g_arkanoid/ball.svg';
list_ball[1].src = '/media/g_arkanoid/ball1.svg';
list_ball[2].src = '/media/g_arkanoid/ball2.svg';


var list_plat = [new Image(), new Image(), new Image()]

list_plat[0].src = '/media/g_arkanoid/platforma1.svg';
list_plat[1].src = '/media/g_arkanoid/platforma.svg';
list_plat[2].src = '/media/g_arkanoid/platforma2.svg';


var list_improve = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]

list_improve[0].src = '/media/g_arkanoid/im_m.svg';
list_improve[1].src = '/media/g_arkanoid/im_s.svg';
list_improve[2].src = '/media/g_arkanoid/im_b.svg';
list_improve[3].src = '/media/g_arkanoid/im_a.svg';
list_improve[4].src = '/media/g_arkanoid/im_minus.svg';
list_improve[5].src = '/media/g_arkanoid/im_plus.svg';
list_improve[6].src = '/media/g_arkanoid/im_b1.svg';
list_improve[7].src = '/media/g_arkanoid/im_b2.svg';

var list_im_boss = [new Image(), new Image()]

list_im_boss[0].src = '/media/g_arkanoid/im_boss1.svg';
list_im_boss[1].src = '/media/g_arkanoid/im_boss2.svg';

var list_blok = [new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image(), new Image()]

list_blok[0].src = '/media/g_arkanoid/blok1.svg';
list_blok[1].src = '/media/g_arkanoid/blok2.svg';
list_blok[2].src = '/media/g_arkanoid/blok3.svg';
list_blok[3].src = '/media/g_arkanoid/blok4.svg';
list_blok[4].src = '/media/g_arkanoid/blok5.svg';
list_blok[5].src = '/media/g_arkanoid/blok6.svg';
list_blok[6].src = '/media/g_arkanoid/blok7.svg';

var list_kill = [new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image()]

list_kill[0].src = '/media/g_arkanoid/kill1.svg';
list_kill[1].src = '/media/g_arkanoid/kill2.svg';
list_kill[2].src = '/media/g_arkanoid/kill3.svg';
list_kill[3].src = '/media/g_arkanoid/kill4.svg';
list_kill[4].src = '/media/g_arkanoid/kill5.svg';
list_kill[5].src = '/media/g_arkanoid/kill6.svg';

var list_sp = [new Image(), new Image(), new Image(), new Image()]

list_sp[0].src = '/media/g_arkanoid/sp1.svg';
list_sp[1].src = '/media/g_arkanoid/sp2.svg';
list_sp[2].src = '/media/g_arkanoid/sp3.svg';
list_sp[3].src = '/media/g_arkanoid/sp4.svg';

var list_e1 = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_e1[0].src = '/media/g_arkanoid/e_1.svg';
list_e1[1].src = '/media/g_arkanoid/e_2.svg';
list_e1[2].src = '/media/g_arkanoid/e_3.svg';
list_e1[3].src = '/media/g_arkanoid/e_4.svg';
list_e1[4].src = '/media/g_arkanoid/e_5.svg';

var list_e2 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_e2[0].src = '/media/g_arkanoid/e2_1.svg';
list_e2[1].src = '/media/g_arkanoid/e2_2.svg';
list_e2[2].src = '/media/g_arkanoid/e2_3.svg';
list_e2[3].src = '/media/g_arkanoid/e2_4.svg';
list_e2[4].src = '/media/g_arkanoid/e2_5.svg';
list_e2[5].src = '/media/g_arkanoid/e2_5.svg';

var list_fire = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_fire[0].src = '/media/g_tanks/fire_1.svg';
list_fire[1].src = '/media/g_tanks/fire_2.svg';
list_fire[2].src = '/media/g_tanks/fire_3.svg';
list_fire[3].src = '/media/g_tanks/fire_4.svg';
list_fire[4].src = '/media/g_tanks/fire_5.svg';
list_fire[5].src = '/media/g_tanks/fire_6.svg';

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var zastavka = new Image()
zastavka.src = '/media/g_arkanoid/arkanoid.svg'

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var content = document.getElementById('content')

var deep = 0
var score = 0
var n_ball = 3

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

function game_element(){

    var div_game_element = document.createElement('div');
    div_game_element.id = 'div_game_element';
    div_game_element.style.left = 0 + 'px';
    div_game_element.style.top = 0 + 'px';
    div_game_element.style.position = 'absolute';

    var div_blok = document.createElement('div');
    div_blok.id = 'div_blok';
    div_blok.style.left = 15 + 'px';
    div_blok.style.top = 72.5 + 'px';
    div_blok.style.width = 971 + 'px';
    div_blok.style.height = 828 + 'px';
//    div_blok.style.backgroundColor = 'green';
    div_blok.style.position = 'absolute';
    div_blok.style.overflow = 'hidden';
    div_game_element.appendChild(div_blok);

    var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_element[0].src);
    img_fon.id = 'img_fon';
    img_fon.style.left = 0 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.width = 1000 + 'px';
    img_fon.style.position = 'absolute';
    div_game_element.appendChild(img_fon);

    // худ швидкості
    var img_sp = document.createElement('img');
    img_sp.setAttribute('src', list_sp[0].src);
    img_sp.id = 'img_sp';
    img_sp.style.left = 920 + 'px';
    img_sp.style.top = 9 + 'px';
    img_sp.style.width = 65 + 'px';
    img_sp.style.position = 'absolute';
    div_game_element.appendChild(img_sp);

    // Ворог 1
    var div_enemy = document.createElement('div');
    div_enemy.id = 'div_enemy';
    div_enemy.style.left = 1050 + 'px';
    div_enemy.style.top = 80 + 'px';
    div_enemy.style.width = 140 + 'px';
    div_enemy.style.height = 250 + 'px';
    div_enemy.style.position = 'absolute';
//    div_enemy.style.backgroundColor = 'green';
    div_game_element.appendChild(div_enemy);

    var img_enemy = document.createElement('img');
    img_enemy.setAttribute('src', list_e2[0].src);
    img_enemy.id = 'img_enemy';
    img_enemy.style.left = -30 + 'px';
    img_enemy.style.top = 0 + 'px';
    img_enemy.style.width = 200 + 'px';
    img_enemy.style.position = 'absolute';
    div_enemy.appendChild(img_enemy);

    // Ворог 2
    var div_enemy2 = document.createElement('div');
    div_enemy2.id = 'div_enemy2';
    div_enemy2.style.left = 1250 + 'px';
    div_enemy2.style.top = 180 + 'px';
    div_enemy2.style.width = 140 + 'px';
    div_enemy2.style.height = 200 + 'px';
    div_enemy2.style.position = 'absolute';
//    div_enemy2.style.backgroundColor = 'green';
    div_game_element.appendChild(div_enemy2);

    var img_e2 = document.createElement('img');
    img_e2.setAttribute('src', list_e1[0].src);
    img_e2.id = 'img_e2';
    img_e2.style.left = -30 + 'px';
    img_e2.style.top = -100 + 'px';
    img_e2.style.width = 200 + 'px';
    img_e2.style.position = 'absolute';
    div_enemy2.appendChild(img_e2);

    // худ кульки рекошету
    var img_reco = document.createElement('img');
    img_reco.setAttribute('src', list_improve[7].src);
    img_reco.id = 'img_reco';
    img_reco.style.left = 480 + 'px';
    img_reco.style.top = 8 + 'px';
    img_reco.style.height = 49 + 'px';
    img_reco.style.position = 'absolute';
    div_game_element.appendChild(img_reco);

    var txt_reco = document.createElement('h1');
    txt_reco.textContent = "0";
    txt_reco.id = 'txt_reco';
    txt_reco.classList.add('menu_txt');
    txt_reco.style.left = 535 + 'px';
    txt_reco.style.top = 7 + 'px';
    txt_reco.style.minWidth = '290px';
    txt_reco.style.maxWidth = '300px';
    txt_reco.style.position = 'absolute';
    div_game_element.appendChild(txt_reco);

    // худ кульки пошкодження
    var img_dam = document.createElement('img');
    img_dam.setAttribute('src', list_improve[6].src);
    img_dam.id = 'img_dam';
    img_dam.style.left = 590 + 'px';
    img_dam.style.top = 8 + 'px';
    img_dam.style.height = 49 + 'px';
    img_dam.style.position = 'absolute';
    div_game_element.appendChild(img_dam);

    var txt_dam = document.createElement('h1');
    txt_dam.textContent = "0";
    txt_dam.id = 'txt_dam';
    txt_dam.classList.add('menu_txt');
    txt_dam.style.left = 645 + 'px';
    txt_dam.style.top = 7 + 'px';
    txt_dam.style.minWidth = '290px';
    txt_dam.style.maxWidth = '300px';
    txt_dam.style.position = 'absolute';
    div_game_element.appendChild(txt_dam);

    // худ броні
    var img_arm = document.createElement('img');
    img_arm.setAttribute('src', list_improve[3].src);
    img_arm.id = 'img_arm';
    img_arm.style.left = 700 + 'px';
    img_arm.style.top = 8 + 'px';
    img_arm.style.height = 49 + 'px';
    img_arm.style.position = 'absolute';
    div_game_element.appendChild(img_arm);

    var txt_arm = document.createElement('h1');
    txt_arm.textContent = "0";
    txt_arm.id = 'txt_arm';
    txt_arm.classList.add('menu_txt');
    txt_arm.style.left = 755 + 'px';
    txt_arm.style.top = 7 + 'px';
    txt_arm.style.minWidth = '290px';
    txt_arm.style.maxWidth = '300px';
    txt_arm.style.position = 'absolute';
    div_game_element.appendChild(txt_arm);

    // худ кількості кульок
    var img_ball1 = document.createElement('img');
    img_ball1.setAttribute('src', list_improve[2].src);
    img_ball1.id = 'ball1';
    img_ball1.style.left = 805 + 'px';
    img_ball1.style.top = 8 + 'px';
    img_ball1.style.height = 49 + 'px';
    img_ball1.style.position = 'absolute';
    div_game_element.appendChild(img_ball1);

    var txt_ball = document.createElement('h1');
    txt_ball.textContent = n_ball;
    txt_ball.id = 'txt_ball';
    txt_ball.classList.add('menu_txt');
    txt_ball.style.left = 860 + 'px';
    txt_ball.style.top = 7 + 'px';
    txt_ball.style.minWidth = '290px';
    txt_ball.style.maxWidth = '300px';
    txt_ball.style.position = 'absolute';
    div_game_element.appendChild(txt_ball);

    // худ рахунку
    var txt_score = document.createElement('h1');
    txt_score.textContent = "Score: " + score;
    txt_score.id = 'score';
    txt_score.classList.add('menu_txt');
    txt_score.style.left = 20 + 'px';
    txt_score.style.top = 7 + 'px';
    txt_score.style.minWidth = '290px';
    txt_score.style.maxWidth = '300px';
    txt_score.style.position = 'absolute';
    div_game_element.appendChild(txt_score);

    // худ глибини
    var txt_deep = document.createElement('h1');
    txt_deep.textContent = "Deep: " + deep;
    txt_deep.id = 'txt_deep';
    txt_deep.classList.add('menu_txt');
    txt_deep.style.left = 300 + 'px';
    txt_deep.style.top = 7 + 'px';
    txt_deep.style.minWidth = '290px';
    txt_deep.style.maxWidth = '300px';
    txt_deep.style.position = 'absolute';
    div_game_element.appendChild(txt_deep);

    var img_fon1 = document.createElement('img');
    img_fon1.setAttribute('src', list_element[3].src);
    img_fon1.id = 'img_fon1';
    img_fon1.style.left = -0.5 + 'px';
    img_fon1.style.top = 72.2 + 'px';
    img_fon1.style.width = 15 + 'px';
    img_fon1.style.position = 'absolute';
    div_game_element.appendChild(img_fon1);

    var img_fon2 = document.createElement('img');
    img_fon2.setAttribute('src', list_element[3].src);
    img_fon2.id = 'img_fon2';
    img_fon2.style.left = 985.5 + 'px';
    img_fon2.style.top = 72.2 + 'px';
    img_fon2.style.width = 15 + 'px';
    img_fon2.style.position = 'absolute';
    img_fon2.style.transform = 'scaleX(-1)'; // Відзеркалення по горизонталі
    div_game_element.appendChild(img_fon2);

    var img_fon3 = document.createElement('img');
    img_fon3.setAttribute('src', list_element[4].src);
    img_fon3.id = 'img_fon3';
    img_fon3.style.left = 15.3 + 'px';
    img_fon3.style.top = 1069 + 'px';
    img_fon3.style.width = 970 + 'px';
    img_fon3.style.position = 'absolute';
    div_game_element.appendChild(img_fon3);

    var img_ball = document.createElement('img');
    img_ball.setAttribute('src', list_ball[0].src);
    img_ball.id = 'ball';
    img_ball.style.left = 488 + 'px';
    img_ball.style.top = 840 + 'px';
    img_ball.style.height = 30 + 'px';
    img_ball.style.position = 'absolute';
    div_game_element.appendChild(img_ball);

    var div_platform = document.createElement('div');
    div_platform.id = 'div_platform';
    div_platform.style.left = 400 + 'px';
    div_platform.style.top = 870 + 'px';
    div_platform.style.height = 30 + 'px';
    div_platform.style.width = 200 + 'px';
//    div_platform.style.backgroundColor = 'blue';
    div_platform.style.position = 'absolute';
    div_game_element.appendChild(div_platform);

    var div_pl_l = document.createElement('div');
    div_pl_l.id = 'div_pl_l';
    div_pl_l.style.left = 0 + 'px';
    div_pl_l.style.top = 0 + 'px';
    div_pl_l.style.height = 30 + 'px';
    div_pl_l.style.width = 40 + 'px';
//    div_pl_l.style.backgroundColor = 'green';
    div_pl_l.style.position = 'absolute';
    div_platform.appendChild(div_pl_l);

    var div_pl_c = document.createElement('div');
    div_pl_c.id = 'div_pl_c';
    div_pl_c.style.left = 40 + 'px';
    div_pl_c.style.top = 0 + 'px';
    div_pl_c.style.height = 30 + 'px';
    div_pl_c.style.width = 120 + 'px';
//    div_pl_c.style.backgroundColor = 'red';
    div_pl_c.style.position = 'absolute';
    div_platform.appendChild(div_pl_c);

    var div_pl_r = document.createElement('div');
    div_pl_r.id = 'div_pl_r';
    div_pl_r.style.left = 160 + 'px';
    div_pl_r.style.top = 0 + 'px';
    div_pl_r.style.height = 30 + 'px';
    div_pl_r.style.width = 40 + 'px';
//    div_pl_r.style.backgroundColor = 'blue';
    div_pl_r.style.position = 'absolute';
    div_platform.appendChild(div_pl_r);

    var img_platform = document.createElement('img');
    img_platform.setAttribute('src', list_plat[1].src);
    img_platform.id = 'platform';
    img_platform.style.left = 0 + 'px';
    img_platform.style.top = 0 + 'px';
    img_platform.style.height = 30 + 'px';
    img_platform.style.position = 'absolute';
    div_platform.appendChild(img_platform);

    content.appendChild(div_game_element);

}

var list_b = []

function add_block(top){
    var left_b = 0
    var num_b = 0

    var r_numb = Math.floor(Math.random() * 5);
    if(r_numb == 0){
        left_b = 1.45
        num_b = 19
    }else if (r_numb == 1){
        left_b = 460.45
        num_b = 10
    }else if (r_numb == 2){
        left_b = 205.45
        num_b = 10
    }else if (r_numb == 3){
        left_b = 103.45
        num_b = 16
    }else if (r_numb == 4){
        left_b = 1.45
        num_b = 12
    }

    for (var i = 0; i < num_b; i++){
        var r_word = '';
            for (let i = 0; i < 5; i++) {
                let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                r_word += String.fromCharCode(randomCharCode);
            }

        var rand = Math.floor(Math.random() * 7);
        list_b.push([r_word, rand, rand])
        var blok1 = document.createElement('img');
        blok1.setAttribute('src', list_blok[rand].src);
        blok1.id = r_word;
        blok1.style.left = left_b + 'px';
        blok1.style.top = top + 'px';
        blok1.style.height = 50 + 'px';
        blok1.style.position = 'absolute';
        div_blok.appendChild(blok1);

        left_b += 51
    }
}


var m_key = 0

function move_block(){

    deep++
    document.getElementById("txt_deep").textContent = "Deep: " + deep;
    function m(){
        var ball = document.getElementById("ball");
        var cur_ball_top = parseInt(ball.style.top) || 0;

        if(cur_ball_top > 800 && m_key == 1){
            add_block(-50)
            m_key = 0

            for (var i = 0; i < list_b.length; i++){
                if(document.getElementById(list_b[i][0])){
                    var block = document.getElementById(list_b[i][0]);
                    var cur_block_top = parseInt(block.style.top) || 0;
                    block.style.top = (cur_block_top + 51) + 'px';
                }
            }
            clearInterval(inter_m)
        }
    }

    var inter_m = null
    inter_m = setInterval(m, 50)

}

function kill_block(id, s){
    var block = document.getElementById(id);
    var cur_block_top = parseInt(block.style.top) || 0;
    var cur_block_left = parseInt(block.style.left) || 0;
    document.getElementById(id).remove()
    score += s + 1
    score2 += s + 1
    document.getElementById("score").textContent = "Score: " + score;

    var r_word = '';
    for (let i = 0; i < 3; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    var img = document.createElement('img');
    img.setAttribute('src', list_kill[0].src);
    img.id = r_word;
    img.style.left = cur_block_left + 'px';
    img.style.top = cur_block_top + 'px';
    img.style.width = 50 + 'px';
    img.style.position = 'absolute';
    document.getElementById('div_blok').appendChild(img);

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if(document.getElementById(r_word)){
                document.getElementById(r_word).setAttribute('src', list_kill[i].src);
                if(i == 5){
                    document.getElementById(r_word).remove()
                    if(s > -1){
                        add_improv(cur_block_top, cur_block_left)
                    }
                }
            }
        }, i * 100);
    }
}

var list_impruve = []

function add_improv(top, left){

    var r_numb = Math.floor(Math.random() * 8);

    if(r_numb < 2){
        var r_pr = Math.floor(Math.random() * 3);
    }else if(r_numb < 5){
        var r_pr = Math.floor(Math.random() * 4);
    }else if(r_numb < 8){
        var r_pr = Math.floor(Math.random() * 6);
    }

//    var r_pr = Math.floor(Math.random() * 2);
    if(r_pr == 1){

        var r_word = 'i_';
        for (let i = 0; i < 3; i++) {
            let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
            r_word += String.fromCharCode(randomCharCode);
        }


        var img = document.createElement('img');
        img.setAttribute('src', list_improve[r_numb].src);
        img.id = r_word;
        img.style.left = left + 'px';
        img.style.top = top + 'px';
        img.style.width = 50 + 'px';
        img.style.position = 'absolute';
        document.getElementById('div_blok').appendChild(img);

        list_impruve.push([r_word, r_numb + 1])

        function m_r(){
                if(document.getElementById(r_word)){
                    var improve = document.getElementById(r_word);
                    var cur_improve_top = parseInt(improve.style.top) || 0;
                    improve.style.top = (cur_improve_top + 10) + 'px';
                    if(cur_improve_top > 950){
                        document.getElementById(r_word).remove()
                        for (var i = 0; i < list_impruve.length; i++){
                            list_impruve[i][0] == r_word
                            list_impruve.splice(i, 1)
                            clearInterval(inter_r)
                            break
                            }
                    }
                }
            }
            var inter_r = null
            inter_r = setInterval(m_r, 50)
    }
}


var list_coor = []

// відображає швидкість
function hud_speed(){
    plus1 = Math.abs(ball_r)
    if(plus1 == 6){
        document.getElementById("img_sp").setAttribute('src', list_sp[0].src)
    }else if(plus1 == 8){
        document.getElementById("img_sp").setAttribute('src', list_sp[1].src)
    }else if(plus1 == 10){
        document.getElementById("img_sp").setAttribute('src', list_sp[2].src)
    }else if(plus1 == 12){
        document.getElementById("img_sp").setAttribute('src', list_sp[3].src)
    }
}
var s_plat = 1
var r_plat = 0
var ball_center = 87

function size_platform(){

    var platf = document.getElementById("platform")
    platf.setAttribute('src', list_plat[s_plat].src);

    if(s_plat == 0){
        document.getElementById("div_pl_c").style.width = 65 + 'px';
        ball_center = 55
        var right = document.getElementById("div_pl_r")
        var cur_right_left = parseInt(right.style.left) || 0;
        r_plat = -55
        right.style.left = (cur_right_left + r_plat) + 'px';


    }else if(s_plat == 1){ // маленька платформа

        document.getElementById("div_pl_c").style.width = 120 + 'px';
        var cur_center_left = parseInt(document.getElementById("div_pl_c").style.left) || 0;

        ball_center = 87
        var right = document.getElementById("div_pl_r")

        r_plat = 0
        right.style.left = (cur_center_left + 120) + 'px';


    }else if(s_plat == 2){ // велика платформа
        document.getElementById("div_pl_c").style.width = 185 + 'px';
        ball_center = 118
        var right = document.getElementById("div_pl_r")
        var cur_right_left = parseInt(right.style.left) || 0;
        r_plat = 65
        right.style.left = (cur_right_left + r_plat) + 'px';

    }
}

function fire_enemy(left){
    if(!document.getElementById("ball_e1")){
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                document.getElementById('img_enemy').setAttribute('src', list_e2[i].src)
                if(i == 2){
                    var ball_e1 = document.createElement('img');
                    ball_e1.setAttribute('src', list_element[2].src);
                    ball_e1.id = 'ball_e1';
                    ball_e1.style.left = left + 'px';
                    ball_e1.style.top = 190 + 'px';
                    ball_e1.style.height = 30 + 'px';
                    ball_e1.style.position = 'absolute';
                    div_game_element.appendChild(ball_e1);

                    var ball_e2 = document.createElement('img');
                    ball_e2.setAttribute('src', list_element[2].src);
                    ball_e2.id = 'ball_e2';
                    ball_e2.style.left = left + 100 + 'px';
                    ball_e2.style.top = 190 + 'px';
                    ball_e2.style.height = 30 + 'px';
                    ball_e2.style.position = 'absolute';
                    div_game_element.appendChild(ball_e2);
                }
            }, i * 100);
        }
    }
}

function fire_enemy2(left){
    if(!document.getElementById("ball_e3")){
        var ball_e1 = document.createElement('img');
        ball_e1.setAttribute('src', list_element[5].src);
        ball_e1.id = 'ball_e3';
        ball_e1.style.left = left + 30 + 'px';
        ball_e1.style.top = 340 + 'px';
        ball_e1.style.height = 40 + 'px';
        ball_e1.style.position = 'absolute';
        div_game_element.appendChild(ball_e1);
    }
}

function fire_boss(id){
    var e1_elem = document.getElementById(id);
    var c_top = parseInt(e1_elem.style.top) || 0;
    var c_left = parseInt(e1_elem.style.left) || 0;

    var r_word = '';
    for (let i = 0; i < 3; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }
    var img = document.createElement('img');
    img.setAttribute('src', list_fire[0].src);
    img.id = r_word;
    img.style.left = c_left - 40 + 'px';
    img.style.top = c_top + 80 + 'px';
    img.style.width = 200 + 'px';
    img.style.position = 'absolute';
    document.getElementById('div_game_element').appendChild(img);

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if(document.getElementById(r_word)){
                document.getElementById(r_word).setAttribute('src', list_fire[i].src);
                if(i == 5){
                    document.getElementById(r_word).remove()
                    document.getElementById(id).style.left = 1050 + 'px';
                    score += 100
                    document.getElementById("score").textContent = "Score: " + score;
                }
            }
        }, i * 100);
    }
}

var key_r = true

function hits_gg(){
    if(key_r){
        key_r = false
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
            if(document.getElementById("div_platform")){
                if(i % 2 == 0){
                    document.getElementById("div_platform").style.top = 970 + 'px';
                }
                if(i % 2 != 0){
                    document.getElementById("div_platform").style.top = 870 + 'px';
                }

                if(i == 29){
                    document.getElementById("div_platform").style.top = 870 + 'px';
                    key_r = true
                }
            }

            }, i * 150);
        }
    }

}

function hit_boss1(id){
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if(document.getElementById(id)){
                if(i % 2 == 0){
                    document.getElementById(id).style.opacity = 0.7;
                }
                if(i % 2 != 0){
                    document.getElementById(id).style.opacity = 1;
                }

                if(i == 5){
                    document.getElementById(id).style.opacity = 1;
                }
            }
        }, i * 150);
    }
}

function improve_boss(){
    var n = 0
    if(!document.getElementById("im_boss" + n)){
        var img = document.createElement('img');
        img.setAttribute('src', list_im_boss[n].src);
        img.id = "im_boss" + n;
        img.style.left = 400 + 'px';
        img.style.top = 400 + 'px';
        img.style.width = 80 + 'px';
        img.style.position = 'absolute';
        document.getElementById('div_game_element').appendChild(img);
    }
}

function fire_improve_ball(t, l){
    var img = document.createElement('img');
    img.setAttribute('src', list_fire[0].src);
    img.id = "fire_b";
    img.style.left = l - 100 + 'px';
    img.style.top = t - 100 + 'px';
    img.style.width = 200 + 'px';
    img.style.position = 'absolute';
    document.getElementById('div_game_element').appendChild(img);

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if(document.getElementById("fire_b")){
                document.getElementById("fire_b").setAttribute('src', list_fire[i].src);
                if(i == 5){
                    document.getElementById("fire_b").remove()
                }
            }
        }, i * 100);
    }

}

function add_fire_boss(){

    var platform = document.getElementById("div_platform");
    var cur_p_left = parseInt(platform.style.left) || 0;

    var ball_e1 = document.createElement('img');
    ball_e1.setAttribute('src', list_element[5].src);
    ball_e1.id = 'ball_imp_e2';
    ball_e1.style.left = cur_p_left + 85 + 'px';
    ball_e1.style.top = 830 + 'px';
    ball_e1.style.height = 40 + 'px';
    ball_e1.style.position = 'absolute';
    document.getElementById('div_game_element').appendChild(ball_e1);

}

var gameinterval = null

// зміна сили пошкодженя
var damage_power = 1
var time_damage = -1
var damage_t = 0

// зміна рекошету від блоків
var ricochet = true
var time_ricochet = -1
var ricochet_t = 0

// зміна броні
var time_armor = -1
var arm_t = 0

// швидкість вертикальна
var ball_r = 0

// швидкість горизонтальна
var ball_l = 0

var speed_plat = 10

var plat_k = true

var key = true
var t_key = 0

var key_l = true
var key_r = true

// рахунок спавну босів
var score2 = 0

//зміні 1 боса
var enemy1_key = true
var enemy_control = -6
var list_enemy = [[60, 4], [70, -4], [70, 3], [60, -3]]
var t_enime = -1
var hp_enemy = 5


//зміні 2 боса
var t_e2 = 0
var enemy_control2 = -8
var list_enemy2 = [[60, 4], [70, -4], [70, 3], [60, -3]]
var t_enime2 = -1
var fire_e2 = 0
var hp_enemy2 = 5

var list_bullet = ['ball_e1','ball_e2','ball_e3']


function game(){
    if(document.getElementById("ball_imp_e2")){
        var ball_imp_e2 = document.getElementById("ball_imp_e2");
        var cur_ball_imp_e2_top = parseInt(ball_imp_e2.style.top) || 0;
        var cur_ball_imp_e2_left = parseInt(ball_imp_e2.style.left) || 0;
        ball_imp_e2.style.top = cur_ball_imp_e2_top - 8 + 'px';

        if(cur_ball_imp_e2_top < 200){
            console.log(ball_imp_e2.style.top, ball_imp_e2.style.left)
            document.getElementById("ball_imp_e2").remove()
            fire_improve_ball(cur_ball_imp_e2_top, cur_ball_imp_e2_left)
        }
    }

    // покращення від боса 1
    if(document.getElementById("im_boss0")){
        var im_boss0 = document.getElementById("im_boss0");
        var cur_im_boss0_top = parseInt(im_boss0.style.top) || 0;
        im_boss0.style.top = cur_im_boss0_top + 8 + 'px';

        var div_pl_c_reck = document.getElementById('div_pl_c').getBoundingClientRect();
        var im_boss0_reck = document.getElementById("im_boss0").getBoundingClientRect();
            if (!(div_pl_c_reck.right < im_boss0_reck.left ||
            div_pl_c_reck.left > im_boss0_reck.right ||
            div_pl_c_reck.bottom < im_boss0_reck.top ||
            div_pl_c_reck.top > im_boss0_reck.bottom)) {
                document.getElementById("im_boss0").remove()
                console.log("Пімав покращення 1")
            }

        if(cur_im_boss0_top > 1000){
            document.getElementById("im_boss0").remove()
        }

    }

    // покращення від боса 2
    if(document.getElementById("im_boss1")){
        var im_boss1 = document.getElementById("im_boss1");
        var cur_im_boss1_top = parseInt(im_boss1.style.top) || 0;
        im_boss1.style.top = cur_im_boss1_top + 8 + 'px';

        var div_pl_c_reck = document.getElementById('div_pl_c').getBoundingClientRect();
        var im_boss1_reck = document.getElementById("im_boss1").getBoundingClientRect();
            if (!(div_pl_c_reck.right < im_boss1_reck.left ||
            div_pl_c_reck.left > im_boss1_reck.right ||
            div_pl_c_reck.bottom < im_boss1_reck.top ||
            div_pl_c_reck.top > im_boss1_reck.bottom)) {
                document.getElementById("im_boss1").remove()
                console.log("Пімав покращення 2")
            }

        if(cur_im_boss1_top > 1000){
            document.getElementById("im_boss1").remove()
        }

    }


    // умови спавну босів
    if(score2 >= 100){
        score2 = 0
        var r_boss = Math.floor(Math.random() * 2);
        if(r_boss == 0){
            enemy_control = -6
            t_enime = 100
        }else if(r_boss == 1){
            enemy_control2 = -6
            t_enime2 = 100
        }
    }

    if(hp_enemy2 <= 0){
        hp_enemy2 = 5
        t_enime2 = -1
        enemy_control2 = -8
        fire_boss("div_enemy2")
    }

    // переміщеня 2 босу
    var div_enemy2 = document.getElementById("div_enemy2");
    var cur_enemy2_left = parseInt(div_enemy2.style.left) || 0;

    if(t_enime2 > 0){
        t_enime2--
        if(cur_enemy2_left > 100 && enemy_control2 < 0){
            div_enemy2.style.left = (cur_enemy2_left + enemy_control2) + 'px';
        }else if(cur_enemy2_left < 750 && enemy_control2 > 0){
            div_enemy2.style.left = (cur_enemy2_left + enemy_control2) + 'px';
        }
    }

    if(t_enime2 == 0){
        t_enime2 = -1
        var j = Math.floor(Math.random() * 4);
        t_enime2 = list_enemy2[j][0]
        enemy_control2 = list_enemy2[j][1]
    }


    t_e2++
    if(t_e2 == 8){
        t_e2 = 0
        var anim_e2 = Math.floor(Math.random() * 5);
        if(anim_e2 == 1 && cur_enemy2_left > 100 && cur_enemy2_left < 750){
            fire_e2 = 1
            fire_enemy2(cur_enemy2_left)
        }else if(anim_e2 == 2 && cur_enemy2_left > 100 && cur_enemy2_left < 750){
            fire_e2 = 2
            fire_enemy2(cur_enemy2_left)
        }else if(anim_e2 == 3 && cur_enemy2_left > 100 && cur_enemy2_left < 750){
            fire_e2 = 3
            fire_enemy2(cur_enemy2_left)
        }

        document.getElementById('img_e2').setAttribute('src', list_e1[anim_e2].src)
    }

    if(document.getElementById('ball_e3')){
        var ball_e3 = document.getElementById("ball_e3");
        var cur_ball_e3_top = parseInt(ball_e3.style.top) || 0;
        var cur_ball_e3_left = parseInt(ball_e3.style.left) || 0;

        if(fire_e2 == 1){
            ball_e3.style.top = (cur_ball_e3_top + 8) + 'px';
            ball_e3.style.left = (cur_ball_e3_left - 4) + 'px';

        }else if(fire_e2 == 2){
            ball_e3.style.top = (cur_ball_e3_top + 8) + 'px';

        }else if(fire_e2 == 3){
            ball_e3.style.top = (cur_ball_e3_top + 8) + 'px';
            ball_e3.style.left = (cur_ball_e3_left + 4) + 'px';

        }
        if(cur_ball_e3_top > 950){
            document.getElementById("ball_e3").remove()
        }
    }

    // переміщення 1 босу
    if(hp_enemy <= 0){
        hp_enemy = 5
        t_enime = -1
        enemy_control = -6
        fire_boss("div_enemy")
    }

    var cur_e1_left = parseInt(document.getElementById('div_enemy').style.left) || 0;
    if(enemy1_key && cur_e1_left < 770 && t_enime > 0){
        var e_fire = Math.floor(Math.random() * 12);
        if(e_fire == 1){
            fire_enemy(cur_e1_left)
            enemy1_key = false
        }

    }

    // кулі першого боса
    if(document.getElementById("ball_e1") && document.getElementById("ball_e2")){
        var ball_e1 = document.getElementById("ball_e1");
        var ball_e2 = document.getElementById("ball_e2");
        var cur_ball_e1_top = parseInt(ball_e1.style.top) || 0;
        var cur_ball_e1_left = parseInt(ball_e1.style.left) || 0;
        var cur_ball_e2_left = parseInt(ball_e2.style.left) || 0;

        ball_e1.style.top = (cur_ball_e1_top + 8) + 'px';
        ball_e2.style.top = (cur_ball_e1_top + 8) + 'px';

        ball_e1.style.left = (cur_ball_e1_left - 2) + 'px';
        ball_e2.style.left = (cur_ball_e2_left + 2) + 'px';

        if(cur_ball_e1_top > 950){
            enemy1_key = true
            document.getElementById("ball_e1").remove()
            document.getElementById("ball_e2").remove()
        }
    }

    var div_enemy1 = document.getElementById("div_enemy");
    var cur_enemy1_left = parseInt(div_enemy1.style.left) || 0;

    if(t_enime > 0){
        t_enime--
        if(cur_enemy1_left > 100 && enemy_control < 0){
            div_enemy1.style.left = (cur_enemy1_left + enemy_control) + 'px';
        }else if(cur_enemy1_left < 750 && enemy_control > 0){
            div_enemy1.style.left = (cur_enemy1_left + enemy_control) + 'px';
        }
    }

    if(t_enime == 0){
        var i = Math.floor(Math.random() * 4);
        t_enime = list_enemy[i][0]
        enemy_control = list_enemy[i][1]
    }


    var ball = document.getElementById("ball");

    // умова рекошету
    if(time_ricochet > 0)
        ricochet_t++
        if(ricochet_t >= 40){
            ricochet_t = 0
            time_ricochet--
            document.getElementById("txt_reco").textContent = time_ricochet;
            ball.setAttribute('src', list_ball[2].src);
            damage_power = 6
        }
    if(time_ricochet == 0){
        ricochet = true
        damage_power = 1
        time_ricochet = -1
        document.getElementById("txt_reco").textContent = "0";
        ball.setAttribute('src', list_ball[0].src);
    }

    // умови дамагу 6
    if(time_damage > 0)
        damage_t++
        if(damage_t >= 40){
            damage_t = 0
            time_damage--
            document.getElementById("txt_dam").textContent = time_damage;
            ball.setAttribute('src', list_ball[1].src);
            damage_power = 6
        }
    if(time_damage == 0){
        damage_power = 1
        time_damage = -1
        document.getElementById("txt_dam").textContent = "0";
        ball.setAttribute('src', list_ball[0].src);
    }

    // умова таймеру броні
    if(time_armor > 0){
        arm_t++
        if(arm_t >= 40){
            arm_t = 0
            time_armor--
            document.getElementById("txt_arm").textContent = time_armor;
        }
    }

    if(time_armor == 0){
        time_armor = -1
        document.getElementById("txt_arm").textContent = "0";
        document.getElementById("img_fon3").style.top = 1070 + 'px';
    }

    var cur_ball_left = parseInt(ball.style.left) || 0;
    var cur_ball_top = parseInt(ball.style.top) || 0;

    ball.style.left = (cur_ball_left + ball_l) + 'px';
    ball.style.top = (cur_ball_top + ball_r) + 'px';


    // умови керування платформою
    var platform = document.getElementById("div_platform");
    var cur_platform_left = parseInt(platform.style.left) || 0;
    var cur_platform_top = parseInt(platform.style.top) || 0;

    // якщо кулька вилетіла нижче платформу
    if(cur_ball_top > 920){
        ball_r = 0
        ball_l = 0
        time_damage = 0
        time_ricochet = 0
        ball.style.left = (cur_platform_left + ball_center) + 'px';
        ball.style.top = 840 + 'px';
        n_ball--
        document.getElementById("txt_ball").textContent = n_ball;
        document.getElementById("img_sp").setAttribute('src', list_sp[0].src)
    }
    // якщо кінчились кульки
    if(n_ball < 1){
        game_over()
        clearInterval(gameinterval)
    }

    if(list_coor[0] && list_coor[0] == 4 && cur_platform_left < (780 - r_plat)){
        if(document.getElementById("ball_imp_e2")){
            document.getElementById("ball_imp_e2").style.left = (cur_platform_left + 85 + speed_plat) + 'px';
        }
        platform.style.left = (cur_platform_left + speed_plat) + 'px';
        if(ball_r == 0 && ball_l == 0){
            ball.style.left = (cur_platform_left + ball_center + speed_plat) + 'px';
        }

    }else if(list_coor[0] && list_coor[0] == 3 && cur_platform_left > 15){
        if(document.getElementById("ball_imp_e2")){
            document.getElementById("ball_imp_e2").style.left = (cur_platform_left + 85 - speed_plat) + 'px';
        }
        platform.style.left = (cur_platform_left - speed_plat) + 'px';
        if(ball_r == 0 && ball_l == 0){
            ball.style.left = (cur_platform_left + ball_center - speed_plat) + 'px';
        }

    }else if(list_coor[0] && list_coor[0] == 1){

    }else if(list_coor[0] && list_coor[0] == 2){

    }

    // колізії покращень
    var div_pl_c_reck = document.getElementById('div_pl_c').getBoundingClientRect();

    for (var i = 0; i < list_bullet.length; i++){

        if(document.getElementById(list_bullet[i])){
            var bullet_reck = document.getElementById(list_bullet[i]).getBoundingClientRect();
            if (!(div_pl_c_reck.right < bullet_reck.left ||
                div_pl_c_reck.left > bullet_reck.right ||
                div_pl_c_reck.bottom < bullet_reck.top ||
                div_pl_c_reck.top > bullet_reck.bottom)) {

                    hits_gg()
                    if(list_bullet[i] == "ball_e1" || list_bullet[i] == "ball_e2"){
                        document.getElementById("ball_e1").remove()
                        document.getElementById("ball_e2").remove()
                        enemy1_key = true

                    }else{
                        document.getElementById(list_bullet[i]).remove()
                    }
                    break
                }
        }
    }

    for (var i = 0; i < list_impruve.length; i++){
        if(document.getElementById(list_impruve[i][0])){
            var imruve_reck = document.getElementById(list_impruve[i][0]).getBoundingClientRect();

            if (!(div_pl_c_reck.right < imruve_reck.left ||
                div_pl_c_reck.left > imruve_reck.right ||
                div_pl_c_reck.bottom < imruve_reck.top ||
                div_pl_c_reck.top > imruve_reck.bottom)) {

                plus = Math.abs(ball_r)
                if(list_impruve[i][1] == 2  && ball_r != 0){
                    if(plus < 12){
                        if(ball_r > 0){
                            ball_r += 2
                        }else{
                            ball_r -= 2
                        }
                    }
                    hud_speed()
                }else if(list_impruve[i][1] == 1  && ball_r != 0){
                    if(plus > 6){
                        if(ball_r > 0){
                            ball_r -= 2
                        }else{
                            ball_r += 2
                        }
                    }
                    hud_speed()

                }else if(list_impruve[i][1] == 3){
                    n_ball++
                    document.getElementById("txt_ball").textContent = n_ball;

                }else if(list_impruve[i][1] == 4){

                    time_armor = 60
                    document.getElementById("img_fon3").style.top = 869 + 'px';


                }else if(list_impruve[i][1] == 5){
                    if(s_plat > 0){
                        s_plat--
                        size_platform()
                    }

                }else if(list_impruve[i][1] == 6){

                    if(s_plat < 2){
                        s_plat++
                        size_platform()
                    }

                }else if(list_impruve[i][1] == 7){
                    time_damage = 60
                    ball.setAttribute('src', list_ball[1].src);
                    time_ricochet = 0

                }else if(list_impruve[i][1] == 8){
                    time_ricochet = 20
                    ricochet = false
                    ball.setAttribute('src', list_ball[2].src);
                    time_damage = 0
                }

                document.getElementById(list_impruve[i][0]).remove()
                list_impruve.splice(i, 1)

                break
            }
        }
    }

    var ball_reck = document.getElementById('ball').getBoundingClientRect();
    // умови колізій 1 ворога
    var enemy_reck = document.getElementById('div_enemy').getBoundingClientRect();

    // умови колізій 2 ворога
    var enemy2_reck = document.getElementById('div_enemy2').getBoundingClientRect();

        if (!(ball_reck.right < enemy_reck.left ||
            ball_reck.left > enemy_reck.right ||
            ball_reck.bottom < enemy_reck.top ||
            ball_reck.top > enemy_reck.bottom)) {

                if(ball_reck.top > enemy_reck.bottom - 15){
                    ball_r = -ball_r
                    ball.style.top = (cur_ball_top + 10) + 'px';

                }else if(ball_reck.bottom < enemy_reck.top + 15){
                    ball_r = -ball_r
                    ball.style.top = (cur_ball_top - 10) + 'px';


                }else if(ball_reck.left > enemy_reck.right - 15){
                    ball_l = -ball_l
                    ball.style.left = (cur_ball_left + 10) + 'px';

                }else if(ball_reck.right < enemy_reck.left + 15){
                    ball_l = -ball_l
                    ball.style.left = (cur_ball_left - 10) + 'px';
                }
                plat_k = true
                hp_enemy--
                hit_boss1("img_enemy")
            }

        if (!(ball_reck.right < enemy2_reck.left ||
            ball_reck.left > enemy2_reck.right ||
            ball_reck.bottom < enemy2_reck.top ||
            ball_reck.top > enemy2_reck.bottom)) {

                if(ball_reck.top > enemy2_reck.bottom - 15){
                    ball_r = -ball_r
                    ball.style.top = (cur_ball_top + 10) + 'px';

                }else if(ball_reck.bottom < enemy2_reck.top + 15){
                    ball_r = -ball_r
                    ball.style.top = (cur_ball_top - 10) + 'px';
                }else if(ball_reck.left > enemy2_reck.right - 15){
                    ball_l = -ball_l
                    ball.style.left = (cur_ball_left + 10) + 'px';

                }else if(ball_reck.right < enemy2_reck.left + 15){
                    ball_l = -ball_l
                    ball.style.left = (cur_ball_left - 10) + 'px';
                }
                plat_k = true
                hp_enemy2--
                hit_boss1("img_e2")
            }

    var div_fon_up_reck = document.getElementById('img_fon').getBoundingClientRect();
    var div_fon_l_reck = document.getElementById('img_fon1').getBoundingClientRect();
    var div_fon_r_reck = document.getElementById('img_fon2').getBoundingClientRect();
    var div_fon_down_reck = document.getElementById('img_fon3').getBoundingClientRect();


    var div_pl_l_reck = document.getElementById('div_pl_l').getBoundingClientRect();
    var div_pl_r_reck = document.getElementById('div_pl_r').getBoundingClientRect();

        // умови колізій стін
         if (!(ball_reck.right < div_fon_down_reck.left ||
            ball_reck.left > div_fon_down_reck.right ||
            ball_reck.bottom < div_fon_down_reck.top ||
            ball_reck.top > div_fon_down_reck.bottom)) {
                ab_Value02 = Math.abs(ball_r)
                ball_r = -ab_Value02
                plat_k = true

        }else
        if (!(ball_reck.right < div_fon_up_reck.left ||
            ball_reck.left > div_fon_up_reck.right ||
            ball_reck.bottom < div_fon_up_reck.top ||
            ball_reck.top > div_fon_up_reck.bottom)) {
                // якщо кулька вдарилась в стулю
                ab_Value01 = Math.abs(ball_r)
                ball_r = ab_Value01
                if(m_key == 0){
                   m_key = 1
                   move_block()
                }

                plat_k = true

        }else
        if (!(ball_reck.right < div_fon_l_reck.left ||
            ball_reck.left > div_fon_l_reck.right ||
            ball_reck.bottom < div_fon_l_reck.top ||
            ball_reck.top > div_fon_l_reck.bottom)) {
                ab_Value1 = Math.abs(ball_l)
                ball_l = ab_Value1
                plat_k = true

        }else
        if (!(ball_reck.right < div_fon_r_reck.left ||
            ball_reck.left > div_fon_r_reck.right ||
            ball_reck.bottom < div_fon_r_reck.top ||
            ball_reck.top > div_fon_r_reck.bottom)) {
                ab_Value2 = Math.abs(ball_l)
                ball_l = -ab_Value2
                plat_k = true


        }
        // умова колізії платформи
        if(key_r){
            if (!(ball_reck.right < div_pl_c_reck.left ||
                ball_reck.left > div_pl_c_reck.right ||
                ball_reck.bottom < div_pl_c_reck.top ||
                ball_reck.top > div_pl_c_reck.bottom)) {
                    if(ball_reck.bottom < div_pl_c_reck.top + 15){
                        if(plat_k){
                            plat_k = false
                            ab_Value02 = Math.abs(ball_r)
                            ball_r = -ab_Value02
                        }
                    }

            }else if(!(ball_reck.right < div_pl_l_reck.left ||
                    ball_reck.left > div_pl_l_reck.right ||
                    ball_reck.bottom < div_pl_l_reck.top ||
                    ball_reck.top > div_pl_l_reck.bottom)) {
                    if(ball_reck.bottom < div_pl_l_reck.top + 15){
                        if(plat_k){
                            plat_k = false
                            ball_r = -ball_r
                            if(ball_l > 0){
                                ball_l = -ball_l + 2
                            }else{
                                r_ball_r = Math.abs(ball_r)
                                ball_l = -r_ball_r
                            }
                        }
                    }else{
                        ball_l = -10
                    }
            }else if(!(ball_reck.right < div_pl_r_reck.left ||
                    ball_reck.left > div_pl_r_reck.right ||
                    ball_reck.bottom < div_pl_r_reck.top ||
                    ball_reck.top > div_pl_r_reck.bottom)) {
                    if(ball_reck.bottom < div_pl_r_reck.top + 15){
                        if(plat_k){
                            plat_k = false
                            ball_r = -ball_r
                            if(ball_l < 0){
                                ball_l = -ball_l - 2
                            }else{
                                r_ball_r = Math.abs(ball_r)
                                ball_l = r_ball_r
                            }
                        }
                    }else{
                        ball_l = -10
                    }
            }
        }





        for (var i = 0; i < list_b.length; i++){
                if(document.getElementById(list_b[i][0])){
                    var div_blok1_reck = document.getElementById(list_b[i][0]).getBoundingClientRect();

                    if(document.getElementById("fire_b")){
                        var fire_b_reck = document.getElementById("fire_b").getBoundingClientRect();
                        if (!(fire_b_reck.right < div_blok1_reck.left ||
                            fire_b_reck.left > div_blok1_reck.right ||
                            fire_b_reck.bottom < div_blok1_reck.top ||
                            fire_b_reck.top > div_blok1_reck.bottom)) {
                            kill_block(list_b[i][0], list_b[i][2])

                            }
                    }


                    var cur_ball_left = parseInt(ball.style.left) || 0;
                    var cur_ball_top = parseInt(ball.style.top) || 0;

                    if (!(ball_reck.right < div_blok1_reck.left ||
                        ball_reck.left > div_blok1_reck.right ||
                        ball_reck.bottom < div_blok1_reck.top ||
                        ball_reck.top > div_blok1_reck.bottom)) {

                            if(ball_reck.top > div_blok1_reck.bottom - 15){

                                if(ricochet){
                                    ball_r = -ball_r
                                    ball.style.top = (cur_ball_top + 10) + 'px';
                                }else if(list_b[i][1] >= 6){
                                    ball_r = -ball_r
                                    ball.style.top = (cur_ball_top + 10) + 'px';
                                    break
                                }

                                if(list_b[i][1] < 6){
                                    var hp = list_b[i][1] - damage_power
                                    if(hp > 0){
                                        list_b[i] =  [list_b[i][0], hp, list_b[i][2]]
                                        document.getElementById(list_b[i][0]).setAttribute('src', list_blok[hp].src)
                                        plat_k = true
                                        break
                                    }else{
                                        kill_block(list_b[i][0], list_b[i][2])
                                        list_b.splice(i, 1)
                                        plat_k = true
                                        break
                                    }
                                }

                            }else

                             if(ball_reck.bottom < div_blok1_reck.top + 15){

                                if(ricochet){
                                    ball_r = -ball_r
                                    ball.style.top = (cur_ball_top - 10) + 'px';
                                }else if(list_b[i][1] >= 6){
                                    ball_r = -ball_r
                                    ball.style.top = (cur_ball_top - 10) + 'px';
                                    break
                                }

                                if(list_b[i][1] < 6){
                                    var hp = list_b[i][1] - damage_power
                                    if(hp > 0){
                                        list_b[i] =  [list_b[i][0], hp, list_b[i][2]]
                                        document.getElementById(list_b[i][0]).setAttribute('src', list_blok[hp].src)
                                        plat_k = true
                                        break
                                    }else{
                                        kill_block(list_b[i][0], list_b[i][2])
                                        list_b.splice(i, 1)
                                        plat_k = true
                                        break
                                    }
                                }

                            }else if(ball_reck.left > div_blok1_reck.right - 15){

                                if(ricochet){
                                    ball_l = -ball_l
                                    ball.style.left = (cur_ball_left + 10) + 'px';
                                }else if(list_b[i][1] >= 6){
                                    ball_l = -ball_l
                                    ball.style.left = (cur_ball_left + 10) + 'px';
                                    break
                                }

                                if(list_b[i][1] < 6){
                                    var hp = list_b[i][1] - damage_power
                                    if(hp > 0){
                                        list_b[i] =  [list_b[i][0], hp, list_b[i][2]]
                                        document.getElementById(list_b[i][0]).setAttribute('src', list_blok[hp].src)
                                        plat_k = true
                                        break
                                    }else{
                                        kill_block(list_b[i][0], list_b[i][2])
                                        list_b.splice(i, 1)
                                        plat_k = true
                                        break
                                    }
                                }

                            }else if(ball_reck.right < div_blok1_reck.left + 15){

                                if(ricochet){
                                    ball_l = -ball_l
                                    ball.style.left = (cur_ball_left - 10) + 'px';
                                }else if(list_b[i][1] >= 6){
                                    ball_l = -ball_l
                                    ball.style.left = (cur_ball_left - 10) + 'px';
                                    break
                                }

                                if(list_b[i][1] < 6){
                                    var hp = list_b[i][1] - damage_power
                                    if(hp > 0){
                                        list_b[i] =  [list_b[i][0], hp, list_b[i][2]]
                                        document.getElementById(list_b[i][0]).setAttribute('src', list_blok[hp].src)
                                        plat_k = true
                                        break
                                    }else{
                                        kill_block(list_b[i][0], list_b[i][2])
                                        list_b.splice(i, 1)
                                        plat_k = true
                                        break
                                    }
                                }

                            }
                    }
                }
        }
        // видаляє блоки які нижче 700 пікселів
        for (var i = 0; i < list_b.length; i++){
            if(document.getElementById(list_b[i][0])){
                var block = document.getElementById(list_b[i][0]);
                var cur_block_top = parseInt(block.style.top) || 0;
                if(cur_block_top >= 700){
                    document.getElementById(list_b[i][0]).remove()
                    list_b.splice(i, 1)
                }
            }

        }

}

function start_ball(){
    if(document.getElementById('div_game_element') && !document.getElementById('div_menu')
       && !document.getElementById('div_menu1' )){
       if(ball_r == 0 && ball_l == 0){
            ball_l = -6
            ball_r = -6
        }

    }
}

var k1 = true
var k2 = true
var k3 = true
var k4 = true

document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move_menu("u")

            if(k1){
                list_coor.unshift(1);
                k1 = false
            }
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_menu("d")

            if(k2){
                list_coor.unshift(2);
                k2 = false
            }
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            if(k3){
                list_coor.unshift(3);
                k3 = false
            }
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            if(k4){
                list_coor.unshift(4);
                k4 = false
            }
        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
            move_menu("r")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        start_ball()
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        add_fire_boss()
    }
});

document.addEventListener("keyup", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            k1 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 1){
                    list_coor.splice(i, 1);
                }
            }
        }
    // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            k2 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 2){
                    list_coor.splice(i, 1);
                }
            }

        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            k3 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 3){
                    list_coor.splice(i, 1);
                }
            }

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            k4 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 4){
                    list_coor.splice(i, 1);
                }
            }

        }

        // натиснута кнопка E
    if (event.keyCode === 69) {

    }
    // натиснута кнопка F
    if (event.keyCode === 70) {

    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {

    }
});

// Кнопки тачу
// кнопка вниз
function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    move_menu("d")
    list_coor.unshift(2);

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 2){
            list_coor.splice(i, 1);
        }
    }

}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    move_menu("u")
    list_coor.unshift(1);

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 1){
            list_coor.splice(i, 1);
        }
    }
}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    list_coor.unshift(3);

    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 3){
            list_coor.splice(i, 1);
        }
    }
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    list_coor.unshift(4);

    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 4){
            list_coor.splice(i, 1);
        }
    }
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    start_ball()

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

add_zastavka()

var menu_pos = 0;
var menu_pos1 = 0;

function move_menu(nav){
    if(document.getElementById('div_zastavka')){
        if(nav == "r"){
            document.getElementById('div_zastavka').remove()
            add_menu()
        }
    }else if(document.getElementById('div_menu') && !document.getElementById('div_game_element')){
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

                // швидкість
                ball_r = 0
                ball_l = 0
                // рахунок та хп
                score = 0
                score2 = 0
                n_ball = 3
                deep = 0
                // покращення
                time_ricochet = 0
                time_damage = 0
                time_armor = 0
                // платформа
                s_plat = 1
                r_plat = 0
                ball_center = 87

                // зміні ворога 1
                enemy1_key = true
                t_enime = -1
                t_enime2 = -1
                key_r = true

                game_element()
                add_block(0)
                add_block(51)
                add_block(102)
                add_block(153)
                add_block(204)

                gameinterval = setInterval(game, 25)


            }else if(menu_pos == 3){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game_element') && !document.getElementById('div_menu1' ) && !document.getElementById('div_game_over')){
        if(nav == "r"){
            add_menu1()
            clearInterval(gameinterval)
            gameinterval = null
        }
    }else if(document.getElementById('div_game_element') && document.getElementById('div_menu1')){
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
                gameinterval = setInterval(game, 25)
            }else if(menu_pos1 == 1){
                document.getElementById("div_game_element").remove()
                document.getElementById("div_menu1").remove()

                // швидкість
                ball_r = 0
                ball_l = 0
                // рахунок та хп
                score = 0
                score2 = 0
                n_ball = 3
                deep = 0
                // покращення
                time_ricochet = 0
                time_damage = 0
                time_armor = 0
                // платформа
                s_plat = 1
                r_plat = 0
                ball_center = 87

                // зміні ворога 1
                enemy1_key = true
                t_enime = -1
                t_enime2 = -1
                key_r = true

                game_element()
                add_block(0)
                add_block(51)
                add_block(102)
                add_block(153)
                add_block(204)

                gameinterval = setInterval(game, 25)

                menu_pos1 = 0

            }else if(menu_pos1 == 2){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game_element') && document.getElementById('div_game_over')){
        if(nav == "r"){
            document.getElementById('div_game_element').remove()
            document.getElementById('div_game_over').remove()
            add_menu()
        }
    }
}