

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]


list_element[0].src = '/media/g_snake/score.svg';
list_element[1].src = '/media/g_snake/b1.svg';
list_element[2].src = '/media/g_snake/b2.svg';
list_element[3].src = '/media/g_snake/ball2.svg';

var list_ball1 = [new Image(), new Image(), new Image(), new Image()]

list_ball1[0].src = '/media/g_snake/ball_1.svg';
list_ball1[1].src = '/media/g_snake/ball_2.svg';
list_ball1[2].src = '/media/g_snake/ball_3.svg';
list_ball1[3].src = '/media/g_snake/ball_4.svg';


var list_snake = [new Image(), new Image(), new Image(), new Image(), new Image(),
                  new Image(), new Image(), new Image(), new Image(), new Image(),
                  new Image(), new Image()]

list_snake[0].src = '/media/g_snake/s_0_1.svg';
list_snake[1].src = '/media/g_snake/s_0_2.svg';
list_snake[2].src = '/media/g_snake/s_0_3.svg';
list_snake[3].src = '/media/g_snake/s_0_4.svg';
list_snake[4].src = '/media/g_snake/s_0_5.svg';
list_snake[5].src = '/media/g_snake/s_0_6.svg';
//list_snake[6].src = '/media/g_snake/s_7.svg';
list_snake[7].src = '/media/g_snake/s_0_8.svg';
list_snake[8].src = '/media/g_snake/s_0_9.svg';
list_snake[9].src = '/media/g_snake/s_0_10.svg';
list_snake[10].src = '/media/g_snake/s_101.svg';
list_snake[11].src = '/media/g_snake/s_120.svg';

var list_snake1 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_snake1[0].src = '/media/g_snake/h_0_1.svg';
list_snake1[1].src = '/media/g_snake/h_0_2.svg';
list_snake1[2].src = '/media/g_snake/h_0_3.svg';
list_snake1[3].src = '/media/g_snake/h_0_4.svg';
list_snake1[4].src = '/media/g_snake/h_0_5.svg';
list_snake1[5].src = '/media/g_snake/h_0_6.svg';
list_snake1[6].src = '/media/g_snake/h_0_7.svg';


var list_big = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_big[0].src = '/media/g_snake/big_7.svg';
list_big[1].src = '/media/g_snake/big_6.svg';
list_big[2].src = '/media/g_snake/big_5.svg';
list_big[3].src = '/media/g_snake/big_4.svg';
list_big[4].src = '/media/g_snake/big_3.svg';
list_big[5].src = '/media/g_snake/big_2.svg';
list_big[6].src = '/media/g_snake/big_1.svg';

var list_h1 = [new Image(), new Image(), new Image(), new Image()]

list_h1[0].src = '/media/g_ball/h01.svg';
list_h1[1].src = '/media/g_ball/h02.svg';
list_h1[2].src = '/media/g_ball/h03.svg';
list_h1[3].src = '/media/g_ball/h04.svg';


function fire_ball(t, l){
        var img = document.createElement('img');
        img.setAttribute('src', list_h1[0].src);
        img.id = "fire_b";
        img.style.left = l - 25 + 'px';
        img.style.top = t - 25 + 'px';
        img.style.width = 100 + 'px';
        img.style.position = 'absolute';
        document.getElementById('div_blok').appendChild(img);

        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                if(document.getElementById("fire_b")){
                    document.getElementById("fire_b").setAttribute('src', list_h1[i].src);
                    if(i == 3){
                        document.getElementById("fire_b").remove()
                    }
                }
            }, i * 100);
        }
}

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var zastavka = new Image()
zastavka.src = '/media/g_snake/snake.svg'

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var plashka = new Image()
plashka.src = '/media/img/content.svg'

var txt_replay = ""
var score_history = ""

function sending_data(sc){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        game: "snake",
        score: sc,
    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/get_games_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrfToken,
        },

        body: formData.toString(),
    })

    // отримує відповідь від бекенду

    .then(response => response.json())
    .then(data => {
        txt_replay = data.reply
        score_history = data.score

    });
}

sending_data(0)

var content = document.getElementById('content')

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

function add_score(){
    var top_t = 170
    var div_score = document.createElement('div');
    div_score.id = 'div_score';
    div_score.style.left = 0 + 'px';
    div_score.style.top = 0 + 'px';

    var about_img = document.createElement('img');
    about_img.setAttribute('src', plashka.src);
    about_img.id = 'about_img';
    about_img.style.left = 25 + 'px';
    about_img.style.top = 20 + 'px';
    about_img.style.height = 730 + 'px';
    about_img.style.position = 'absolute';
    about_img.classList.add('select_img');
    div_score.appendChild(about_img);

    var about_txt = document.createElement('h1');
    about_txt.textContent = txt_replay + ":";
    about_txt.id = 'score_n2';
    about_txt.classList.add('menu');
    about_txt.style.left = 60 + 'px';
    about_txt.style.top = 80 + 'px';
    about_txt.style.maxWidth = '850px';
    about_txt.style.position = 'absolute';
    div_score.appendChild(about_txt);

    for (var i = 0; i < score_history.length; i++){
            var about_txt = document.createElement('h1');
            about_txt.textContent = score_history[i];
            about_txt.id = 'score_i' + i;
            about_txt.classList.add('menu');
            about_txt.style.left = 150 + 'px';
            about_txt.style.top = top_t + 'px';
            about_txt.style.maxWidth = '850px';
            about_txt.style.position = 'absolute';
            div_score.appendChild(about_txt);

            top_t += 100
        }
    content.appendChild(div_score);
}

var speed_numb = 1

function add_speed(){

    var div_speed = document.createElement('div');
    div_speed.id = 'div_speed';
    div_speed.style.left = 0 + 'px';
    div_speed.style.top = 0 + 'px';

    var about_img = document.createElement('img');
    about_img.setAttribute('src', plashka.src);
    about_img.id = 'speed_img';
    about_img.style.left = 25 + 'px';
    about_img.style.top = 20 + 'px';
    about_img.style.height = 730 + 'px';
    about_img.style.position = 'absolute';
    about_img.classList.add('select_img');
    div_speed.appendChild(about_img);

    var txt_speed = document.createElement('h1');
    txt_speed.textContent = "Speed: " + speed_numb;
    txt_speed.id = 'txt_speed';
    txt_speed.classList.add('menu');
    txt_speed.style.left = 380 + 'px';
    txt_speed.style.top = 300 + 'px';
    txt_speed.style.maxWidth = '900px';
    txt_speed.style.position = 'absolute';
    div_speed.appendChild(txt_speed);

    content.appendChild(div_speed);
}

function add_about(){
    var div_about = document.createElement('div');
    div_about.id = 'div_about';
    div_about.style.left = 0 + 'px';
    div_about.style.top = 0 + 'px';

    var about_img = document.createElement('img');
    about_img.setAttribute('src', plashka.src);
    about_img.id = 'about_img';
    about_img.style.left = 25 + 'px';
    about_img.style.top = 20 + 'px';
    about_img.style.height = 730 + 'px';
    about_img.style.position = 'absolute';
    about_img.classList.add('select_img');
    div_about.appendChild(about_img);

    var about_txt = document.createElement('h1');
    about_txt.textContent = "Eat the balls to make the snake longer. Also collect big balls to earn more points.";
    about_txt.id = 'score_n2';
    about_txt.classList.add('menu');
    about_txt.style.left = 60 + 'px';
    about_txt.style.top = 80 + 'px';
    about_txt.style.maxWidth = '900px';
    about_txt.style.position = 'absolute';
    div_about.appendChild(about_txt);

    content.appendChild(div_about);
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

    var speed = document.createElement('h1');
    speed.textContent = "Speed";
    speed.id = 'speed';
    speed.classList.add('menu');
    speed.style.left = 60 + 'px';
    speed.style.top = 175 + 'px';
    speed.style.position = 'absolute';
    div_menu.appendChild(speed);

    var about = document.createElement('h1');
    about.textContent = "Score";
    about.id = 'settings';
    about.classList.add('menu');
    about.style.left = 60 + 'px';
    about.style.top = 300 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var about = document.createElement('h1');
    about.textContent = "About";
    about.id = 'about';
    about.classList.add('menu');
    about.style.left = 60 + 'px';
    about.style.top = 425 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "Exit";
    score_n1.id = 'exit';
    score_n1.classList.add('menu');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 550 + 'px';
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

var score = 0

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

    sending_data(score)
}

function game_element(){

    var div_game_element = document.createElement('div');
    div_game_element.id = 'div_game_element';
    div_game_element.style.left = 0 + 'px';
    div_game_element.style.top = 0 + 'px';
    div_game_element.style.position = 'absolute';

    var div_blok = document.createElement('div');
    div_blok.id = 'div_blok';
    div_blok.style.left = 0 + 'px';
    div_blok.style.top = 100 + 'px';
    div_blok.style.width = 1000 + 'px';
    div_blok.style.height = 800 + 'px';
//    div_blok.style.backgroundColor = 'green';
    div_blok.style.position = 'absolute';
    div_blok.style.overflow = 'hidden';
    div_game_element.appendChild(div_blok);

    var s_game = document.createElement('h1');
    s_game.textContent = "Score: " + score;
    s_game.id = 's_game';
    s_game.classList.add('menu');
    s_game.style.left = 60 + 'px';
    s_game.style.top = 5 + 'px';
    s_game.style.minWidth = '500px';
    s_game.style.position = 'absolute';
    div_game_element.appendChild(s_game);

    var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_element[0].src);
    img_fon.id = 'img_fon';
    img_fon.style.left = 0 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.width = 1000 + 'px';
    img_fon.style.position = 'absolute';
    div_game_element.appendChild(img_fon);

    var img_b = document.createElement('img');
    img_b.setAttribute('src', list_ball1[0].src);
    img_b.id = "ball";
    var pos_ball = spawn_ball()
    img_b.style.left = pos_ball[0] + 3  + 'px';
    img_b.style.top = pos_ball[1] + 3 + 'px';
    img_b.style.width = 44 + 'px';
    img_b.style.position = 'absolute';
    div_blok.appendChild(img_b);


    content.appendChild(div_game_element);

}

function add_bigg_ball(){
    if(!document.getElementById("div_big_ball")){
        var content = document.getElementById('div_blok')

        var list_l = [100, 200, 300, 400, 500, 600, 700, 800]

        var list_t = [100, 200, 300, 400, 500, 600, 700]

        var r_i = Math.floor(Math.random() * list_l.length);
        var r_l =  list_l[r_i];

        var r_i1 = Math.floor(Math.random() * list_t.length);
        var r_t =  list_t[r_i1];

        var div_big_ball = document.createElement('div');
        div_big_ball.id = 'div_big_ball';
        div_big_ball.style.left = r_l + 'px';
        div_big_ball.style.top = r_t + 'px';
        div_big_ball.style.width = 50 + 'px';
        div_big_ball.style.height = 50 + 'px';
        div_big_ball.style.position = 'absolute';
        div_blok.appendChild(div_big_ball);

        var big_ball = document.createElement('img');
        big_ball.setAttribute('src', list_big[6].src);
        big_ball.id = "big_ball";
        big_ball.style.left = -25 + 'px';
        big_ball.style.top = -25 + 'px';
        big_ball.style.width = 100 + 'px';
        big_ball.style.position = 'absolute';
        div_big_ball.appendChild(big_ball);
    }

}

var list_ball = [];

// Генерує список можливих положень кульок
function add_ball_l() {
    var t_l = 0;
    var t_b = 0;
    for (let i = 0; i < 320; i++) {
        list_ball.push([t_l, t_b]);
        t_l += 50;
        if (t_l >= 1000) {
            t_l = 0;
            t_b += 50;
        }
    }
}

// Створює список з пустими місцями для кульок
function filterPositions() {
    return list_ball.filter(ballPos => {
        return !list_game.some(gameItem => ballPos[0] === gameItem[1] && ballPos[1] === gameItem[2]);
    });
}

// Ініціалізуємо список кульок
add_ball_l();

var list_game = [["b1", 800, 200, 1], ["b2", 850, 200, 1], ["b3", 900, 200, 1]];

// Генерує випадкове місце для кульки
function spawn_ball() {
    var filteredList = filterPositions();
    if (filteredList.length > 0) {
        var r_i = Math.floor(Math.random() * filteredList.length);
        var pos_b = filteredList[r_i];
        return pos_b;
    } else {

        return [0, 0]
    }
}


// виводить перші елементи змійки
function add_list(){
    var div_blok = document.getElementById("div_blok")
    for (let i = 0; i < list_game.length; i++) {
        var img_b = document.createElement('img');
        img_b.setAttribute('src', list_snake[10].src);
        img_b.id = list_game[i][0];
        img_b.style.left = list_game[i][1] + 'px';
        img_b.style.top = list_game[i][2] + 'px';
        img_b.style.width = 49.8 + 'px';
        img_b.style.position = 'absolute';
        img_b.style.transform = `rotate(${180}deg)`;
        div_blok.appendChild(img_b);
    }
}

function add_e(id, l, t, r, key_1, r1){

    var stop = true
    var id_1 = ""
    var div_blok = document.getElementById("div_blok")
    var img_b = document.createElement('img');
    img_b.setAttribute('src', list_snake[0].src);
    img_b.id = id;
    img_b.style.left = l + 'px';
    img_b.style.top = t + 'px';
    img_b.style.width = 49.8 + 'px';
    img_b.style.position = 'absolute';
    img_b.style.transform = `rotate(${r}deg)`;
    div_blok.appendChild(img_b);

    var anim_i = null
    var caunt = 0
        function anim(){
            caunt++
            document.getElementById(id).setAttribute('src', list_snake[caunt].src)

            if(caunt == 5){
                neck(id)
                clearInterval(anim_i)
            }

        }
        anim_i = setInterval(anim, speed / 12)
}

function neck(id1){
    var klv = true
    for (let i = 7; i < 11; i++) {
        setTimeout(() => {
            if(klv){
                if(k11 == 1){
                    document.getElementById(id1).setAttribute('src', list_snake[11].src)
                    document.getElementById(id1).style.transform = `rotate(${r_l1}deg)`;
                    klv = false
                    k11 = 0
                }else{
                    document.getElementById(id1).setAttribute('src', list_snake[i].src)
                }
            }

        }, i * speed / 12);
    }
}

// видаляє хвіст
function dell_b(){
    var len_s = list_game.length
    var elem = list_game[len_s -1][0]
    var numb = list_game[len_s -1][3]

    var hvist = document.getElementById(elem)
    var rot = ""
    var rot1 = hvist.style.transform
    var src = hvist.src


    if(src == "http://127.0.0.1:8000/media/g_snake/s_120.svg"){

        if(numb == "12"){
            if(rot1 =="rotate(270deg)"){
                rot = 90
            }else{
                rot = 270
            }

        }else if(numb == "21"){
            if(rot1 =="rotate(90deg)"){
                rot = 180
            }else{
                rot = 0
            }

        }else if(numb == "42"){
            if(rot1 =="rotate(0deg)"){
                rot = 90
            }else{
                rot = 270
            }
        }else if(numb == "24"){
            if(rot1 =="rotate(180deg)"){
                rot = 0
            }else{
                rot = 180
            }
        }else if(numb == "43"){
            if(rot1 =="rotate(90deg)"){
                rot = -90
            }else{
                rot = 90
            }
        }else if(numb == "34"){
            if(rot1 =="rotate(270deg)"){
                rot = 0
            }else{
                rot = 180
            }
        }else if(numb == "31"){

            if(rot1 =="rotate(0deg)"){
                rot = 180
            }else{
                rot = 0
            }
        }else if(numb == "13"){
            if(rot1 =="rotate(180deg)"){
                rot = -90
            }else{
                rot = 90
            }

        }
    }

    document.getElementById(elem).style.transform = `rotate(${rot}deg)`;

    for (let i = 0; i < 7; i++) {
        setTimeout(() => {
            if(document.getElementById(elem)){
                document.getElementById(elem).setAttribute('src', list_snake1[i].src)
            }
            if(i == 6){
                document.getElementById(elem).remove()
                list_game.pop()
            }
        }, i * speed / 8);
    }
}


var list_coor = [1, 3]

var key = list_coor[0]

var speed = 400
var k11 = 0
var r_l1 = 0

var anim_ball = 0
var key_a_b = true

var time_big_b = 0
var anim_big_ball = 6

var spawn_big = 0


function game(){

    k11 = 0
    r_l1 = 0

    var head_l = list_game[0][1]
    var head_t = list_game[0][2]
    var r_word = '';

    for (let i = 0; i < 5; i++) {
         let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
         r_word += String.fromCharCode(randomCharCode);
    }

    if(list_coor[0] == 1){

        if(head_l <= 0){
            head_l = 1000
        }

        if(key != list_coor[0]){
            key = list_coor[0]
            k11 = 1
        }

        if(list_coor[0] == 1 && list_coor[1] == 3){
            r_l1 = 0
        }else{
            r_l1 = 90
        }

        var str = list_coor[0].toString() + list_coor[1].toString()

        // вправо
        add_e(r_word, head_l - 50, head_t, 180, k1, r_l1)
        list_game.unshift([r_word, head_l - 50, head_t, str])

    }else if(list_coor[0] == 2){

        if(head_t >= 750){
            head_t = -50
        }

        if(key != list_coor[0]){
            key = list_coor[0]
            k11 = 1
        }
        if(list_coor[0] == 2 && list_coor[1] == 1){
            r_l1 = 270
        }else{
            r_l1 = 0
        }

        var str = list_coor[0].toString() + list_coor[1].toString()

        // вниз
        add_e(r_word, head_l, head_t + 50, 90, k1, r_l1)
        list_game.unshift([r_word, head_l, head_t + 50, str])

    }else if(list_coor[0] == 3){

        if(head_t <= 0){
            head_t = 800
        }

        if(key != list_coor[0]){
            key = list_coor[0]
            k11 = 1
        }

        if(list_coor[0] == 3 && list_coor[1] == 1){
            r_l1 = 180
        }else{
            r_l1 = 90
        }

        var str = list_coor[0].toString() + list_coor[1].toString()

        // верх
        add_e(r_word, head_l, head_t - 50, 270, k1, r_l1)
        list_game.unshift([r_word, head_l, head_t - 50, str])

    }else if(list_coor[0] == 4){

        if(head_l >= 950){
            head_l = -50
        }
        if(key != list_coor[0]){
            key = list_coor[0]
            k11 = 1
        }

        if(list_coor[0] == 4 && list_coor[1] == 2){
            r_l1 = 180
        }else{
            r_l1 = 270
        }

        var str = list_coor[0].toString() + list_coor[1].toString()

        // вправо
        add_e(r_word, head_l + 50, head_t, 0, k11, r_l1)
        list_game.unshift([r_word, head_l + 50, head_t, str])
    }


    var ball_reck = document.getElementById("ball").getBoundingClientRect();
    var head_reck = document.getElementById(list_game[0][0]).getBoundingClientRect();

    if (!(head_reck.right < ball_reck.left ||
        head_reck.left > ball_reck.right ||
        head_reck.bottom < ball_reck.top ||
        head_reck.top > ball_reck.bottom)) {

        var ball1 = document.getElementById("ball")

        var pos_ball = spawn_ball()
        score += speed_numb * 2
        document.getElementById("s_game").textContent = "Score: " + score;

        spawn_big++


        ball1.style.left = pos_ball[0] + 3  + 'px';
        ball1.style.top = pos_ball[1] + 3  + 'px';


    }else{

        dell_b()
    }

    var head1_reck = document.getElementById(list_game[0][0]).getBoundingClientRect();

    for (let i = 0; i < list_game.length; i++) {

        if (list_game[0][0] != list_game[i][0]){


            var hw_reck = document.getElementById(list_game[i][0]).getBoundingClientRect();

            if (!(head1_reck.right < hw_reck.left ||
            head1_reck.left > hw_reck.right ||
            head1_reck.bottom < hw_reck.top ||
            head1_reck.top > hw_reck.bottom)) {
                console.log(list_game[0][0], list_game[i][0])
                clearInterval(gameinterval)
                game_over()

            }
        }
    }

    if(key_a_b){
        anim_ball++
        if(anim_ball == 3){
            key_a_b = false
        }
    }else{
        anim_ball--
        if(anim_ball == 0){
            key_a_b = true
        }
    }

    document.getElementById("ball").setAttribute('src', list_ball1[anim_ball].src)


    // умови великої кульки

    // спавнить велику кульку
    if(spawn_big == 10){
        spawn_big = 0
        add_bigg_ball()
    }

    if(document.getElementById("div_big_ball")){

        var div_big_ball_reck = document.getElementById("div_big_ball").getBoundingClientRect();

        if (!(head1_reck.right < div_big_ball_reck.left ||
            head1_reck.left > div_big_ball_reck.right ||
            head1_reck.bottom < div_big_ball_reck.top ||
            head1_reck.top > div_big_ball_reck.bottom)) {

                var d_b_b = document.getElementById("div_big_ball");
                var cur_d_b_b_top = parseInt(d_b_b.style.top) || 0;
                var cur_d_b_b_left = parseInt(d_b_b.style.left) || 0;
                fire_ball(cur_d_b_b_top, cur_d_b_b_left)

                document.getElementById("div_big_ball").remove()
                score += (anim_big_ball * (speed_numb * 2))
                anim_big_ball = 6
                time_big_b = 0
                document.getElementById("s_game").textContent = "Score: " + score;
        }

        time_big_b++
        if(time_big_b == 5){
            anim_big_ball--
            time_big_b = 0

            if(anim_big_ball == -1){
                anim_big_ball = 6
                document.getElementById("div_big_ball").remove()
            }
            if(document.getElementById("big_ball")){
                document.getElementById("big_ball").setAttribute('src', list_big[anim_big_ball].src)
            }
        }

    }
}

var button = true

function time_b(){
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if(i == 5){
                button = true
            }

        }, i * speed / 6);
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
            if(k1 && button){
                button = false
                time_b()
                if(list_coor[0] != 2){
                list_coor.unshift(3);
                k1 = false
                }
            }
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_menu("d")

            if(k2 && button){
                button = false
                time_b()
                if(list_coor[0] != 3){
                list_coor.unshift(2);
                k2 = false
                }
            }
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            if(k3 && button){
                button = false
                time_b()
                if(list_coor[0] != 4){
                list_coor.unshift(1);
                k3 = false
                }
            }
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            if(k4 && button){
                button = false
                time_b()
                if(list_coor[0] != 1){
                list_coor.unshift(4);
                k4 = false
                }
            }
        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
            move_menu("r")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
    }
});

document.addEventListener("keyup", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            k1 = true

        }
    // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            k2 = true

        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            k3 = true

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            k4 = true

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
    if(button){
        button = false
        time_b()
        if(list_coor[0] != 3){
            list_coor.unshift(2);
        }
    }

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";

}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    move_menu("u")
    if(button){
        button = false
        time_b()
        if(list_coor[0] != 2){
            list_coor.unshift(3);
        }
    }

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    if(button){
        button = false
        time_b()
        if(list_coor[0] != 4){
            list_coor.unshift(1);
        }
    }

    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    if(button){
        button = false
        time_b()
        if(list_coor[0] != 1){
        list_coor.unshift(4);
        }
    }

    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";

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

var gameinterval = null

//add_menu()

var menu_pos = 0;
var menu_pos1 = 0;

//var speed_numb = 1
//
//function add_speed(){
//    var div_speed = document.createElement('div');
//    div_speed.id = 'div_speed';


function move_menu(nav){
    if(document.getElementById('div_zastavka')){
        if(nav == "r"){
            document.getElementById('div_zastavka').remove()
            add_menu()
        }

    }else if(document.getElementById('div_score')){
        if(nav == "r"){
            document.getElementById('div_score').remove()
        }

    }else if(document.getElementById('div_about')){
        if(nav == "r"){
            document.getElementById('div_about').remove()
        }

    }else if(document.getElementById('div_speed')){
        if(nav == "r"){
            document.getElementById('div_speed').remove()
        }else if(nav == "u" && speed_numb < 5){
            speed_numb++

            if(speed_numb == 1){
                speed = 400
            }else if(speed_numb == 2){
                speed = 350
            }else if(speed_numb == 3){
                speed = 300
            }else if(speed_numb == 4){
                speed = 200
            }else if(speed_numb == 5){
                speed = 100
            }

            document.getElementById("txt_speed").textContent = "Speed: " + speed_numb;
        }else if(nav == "d" && speed_numb > 1){
            speed_numb--

            if(speed_numb == 1){
                speed = 400
            }else if(speed_numb == 2){
                speed = 350
            }else if(speed_numb == 3){
                speed = 300
            }else if(speed_numb == 4){
                speed = 200
            }else if(speed_numb == 5){
                speed = 100
            }

            document.getElementById("txt_speed").textContent = "Speed: " + speed_numb;
        }

    }else if(document.getElementById('div_menu') && !document.getElementById('div_game_element')
             && !document.getElementById('div_score') && !document.getElementById('div_about')
             && !document.getElementById('div_speed') ){
        var cur_select = parseInt(document.getElementById("select").style.top) || 0;
        if(nav == "d" && menu_pos < 4){
            document.getElementById("select").style.top = (cur_select + 125) + 'px';
            menu_pos += 1;
        }else if(nav == "u" && menu_pos > 0){
            document.getElementById("select").style.top = (cur_select - 125) + 'px';
            menu_pos -= 1;
        }else if(nav == "r"){
            if(menu_pos == 0){
                document.getElementById('div_menu').remove()

                list_game = [["b1", 800, 200, 11], ["b2", 850, 200, 11], ["b3", 900, 200, 11]];
                list_coor = [1, 2]
                score = 0

                // зміні великої кульки
                spawn_big = 0
                time_big_b = 0
                anim_big_ball = 6

                game_element()
                add_list()
                gameinterval = setInterval(game, speed)

            }else if(menu_pos == 1){
                add_speed()

            }else if(menu_pos == 2){
                add_score()

            }else if(menu_pos == 3){
                add_about()

            }else if(menu_pos == 4){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game_element') && !document.getElementById('div_menu1') && !document.getElementById('div_game_over')){
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
                gameinterval = setInterval(game, speed)

            }else if(menu_pos1 == 1){
                document.getElementById("div_game_element").remove()
                document.getElementById("div_menu1").remove()

                list_game = [["b1", 800, 200, 11], ["b2", 850, 200, 11], ["b3", 900, 200, 11]];
                list_coor = [1, 2]
                score = 0

                // зміні великої кульки
                spawn_big = 0
                time_big_b = 0
                anim_big_ball = 6

                game_element()
                add_list()
                gameinterval = setInterval(game, speed)
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

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {

        if(document.getElementById('div_game_element') &&!document.getElementById('div_menu1')
           && !document.getElementById('div_game_over') && !document.getElementById('div_menu')){
            console.log('Вкладка неактивна');
            add_menu1()
            clearInterval(gameinterval)
        }

    }
});