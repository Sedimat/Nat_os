

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]


list_element[0].src = '/media/g_snake/score.svg';
list_element[1].src = '/media/g_snake/b1.svg';
list_element[2].src = '/media/g_snake/b2.svg';
list_element[3].src = '/media/g_snake/ball2.svg';

var list_snake = [new Image(), new Image(), new Image(), new Image(), new Image(),
                  new Image(), new Image(), new Image(), new Image(), new Image(),
                  new Image(), new Image()]

list_snake[0].src = '/media/g_snake/s_1.svg';
list_snake[1].src = '/media/g_snake/s_2.svg';
list_snake[2].src = '/media/g_snake/s_3.svg';
list_snake[3].src = '/media/g_snake/s_4.svg';
list_snake[4].src = '/media/g_snake/s_5.svg';
list_snake[5].src = '/media/g_snake/s_6.svg';
list_snake[6].src = '/media/g_snake/s_7.svg';
list_snake[7].src = '/media/g_snake/s_8.svg';
list_snake[8].src = '/media/g_snake/s_9.svg';
list_snake[9].src = '/media/g_snake/s_10.svg';
list_snake[10].src = '/media/g_snake/s_11.svg';
list_snake[11].src = '/media/g_snake/s_12.svg';

var list_snake1 = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_snake1[0].src = '/media/g_snake/h_1.svg';
list_snake1[1].src = '/media/g_snake/h_2.svg';
list_snake1[2].src = '/media/g_snake/h_3.svg';
list_snake1[3].src = '/media/g_snake/h_4.svg';
list_snake1[4].src = '/media/g_snake/h_5.svg';
list_snake1[5].src = '/media/g_snake/h_6.svg';
list_snake1[6].src = '/media/g_snake/h_7.svg';


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
    about_txt.textContent = "The player controls a small racket platform that can be moved horizontally from one wall to another, placing it under the ball, preventing it from falling down.";
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

    var about = document.createElement('h1');
    about.textContent = "Score";
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

var score1 = 10

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
    txt_over1.textContent = "Score: " + score1;
    txt_over1.id = 'txt_over2';
    txt_over1.classList.add('score');
    txt_over1.style.left = 300 + 'px';
    txt_over1.style.top = 500 + 'px';
    txt_over1.style.position = 'absolute';
    div_game_over.appendChild(txt_over1);

    content.appendChild(div_game_over);

//    sending_data(score1)
}

var score = 0

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
    img_b.setAttribute('src', list_element[3].src);
    img_b.id = "ball";
    var pos_ball = spawn_ball()
    img_b.style.left = pos_ball[0] + 7 + 'px';
    img_b.style.top = pos_ball[1] + 7 + 'px';
    img_b.style.width = 30 + 'px';
    img_b.style.position = 'absolute';
    div_blok.appendChild(img_b);

    content.appendChild(div_game_element);

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

var list_game = [["b1", 800, 200, 1], ["b2", 850, 200, 1], ["b3", 900, 200, 1], ["b4", 950, 200, 1]];

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

function move_s(){
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            var b_2 = document.getElementById(elem[1])
            var cur_b_2_left = parseInt(b_2.style.left) || 0;
            b_2.style.left = (cur_b_2_left + 8) + 'px';
        }, i * speed / 6);
    }
}

function dell_b(){
    var len_s = list_game.length
    var elem = list_game[len_s -1][0]
    var numb = list_game[len_s -1][3]

    var hvist = document.getElementById(elem)
    var rot = ""
    var rot1 = hvist.style.transform
    var src = hvist.src


    if(src == "http://127.0.0.1:8000/media/g_snake/s_12.svg"){

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
        }, i * speed / 7);
    }
}

var list_coor = [1, 3]

var key = list_coor[0]

var speed = 300
console.log(speed / 12)
var k11 = 0
var r_l1 = 0

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
        score += 10
        document.getElementById("s_game").textContent = "Score: " + score;

        ball1.style.left = pos_ball[0] + 7 + 'px';
        ball1.style.top = pos_ball[1] + 7 + 'px';

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
                clearInterval(gameinterval)
                game_over()

            }
        }
    }

//    var b1 = document.getElementById("b1")
//    var cur_b1_left = parseInt(b1.style.left) || 0;
//    b1.style.left = (cur_b1_left + 10) + 'px';

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
                if(list_coor[0] != 2){
                list_coor.unshift(3);
                k1 = false
                }
            }
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_menu("d")

            if(k2){
                if(list_coor[0] != 3){
                list_coor.unshift(2);
                k2 = false
                }
            }
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            if(k3){
                if(list_coor[0] != 4){
                list_coor.unshift(1);
                k3 = false
                }
            }
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            if(k4){
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
        clearInterval(gameinterval)
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
    if(list_coor[0] != 3){
        list_coor.unshift(2);
    }

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
//    for (var i = 0; i < list_coor.length; i++){
//        if(list_coor[i] == 2){
//            list_coor.splice(i, 1);
//        }
//    }

}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    move_menu("u")
    if(list_coor[0] != 2){
         list_coor.unshift(3);
    }

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
//    for (var i = 0; i < list_coor.length; i++){
//        if(list_coor[i] == 1){
//            list_coor.splice(i, 1);
//        }
//    }
}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    if(list_coor[0] != 4){
        list_coor.unshift(1);
    }

    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
//    for (var i = 0; i < list_coor.length; i++){
//        if(list_coor[i] == 3){
//            list_coor.splice(i, 1);
//        }
//    }
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    if(list_coor[0] != 1){
        list_coor.unshift(4);
    }

    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
//    for (var i = 0; i < list_coor.length; i++){
//        if(list_coor[i] == 4){
//            list_coor.splice(i, 1);
//        }
//    }
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

    }else if(document.getElementById('div_menu') && !document.getElementById('div_game_element')
             && !document.getElementById('div_score') && !document.getElementById('div_about')){
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

                list_game = [["b1", 800, 200, 11], ["b2", 850, 200, 11], ["b3", 900, 200, 11], ["b4", 950, 200, 11]];
                list_coor = [1, 2]
                game_element()
                add_list()
                gameinterval = setInterval(game, speed)

            }else if(menu_pos == 1){
                add_score()

            }else if(menu_pos == 2){
                add_about()

            }else if(menu_pos == 3){
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

                list_game = [["b1", 800, 200, 11], ["b2", 850, 200, 11], ["b3", 900, 200, 11], ["b4", 950, 200, 11]];
                list_coor = [1, 2]
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

        if(!document.getElementById('div_menu1')){
            console.log('Вкладка неактивна');
            add_menu1()
            clearInterval(gameinterval)
        }

    }
});