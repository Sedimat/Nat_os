console.log("snake")

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]

list_element[0].src = '/media/g_arkanoid/fon.svg';
list_element[1].src = '/media/g_arkanoid/enemy2.svg';
list_element[2].src = '/media/g_arkanoid/ball_e.svg';
list_element[3].src = '/media/g_arkanoid/fon1.svg';
list_element[4].src = '/media/g_arkanoid/deep.svg';
list_element[5].src = '/media/g_arkanoid/ball_e2.svg';

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var zastavka = new Image()
zastavka.src = '/media/g_arkanoid/arkanoid.svg'

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
//
//    sending_data(score1)
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



    content.appendChild(div_game_element);

}




var list_coor = []


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
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
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

            }else if(menu_pos == 1){
                add_score()

            }else if(menu_pos == 2){
                add_about()

            }else if(menu_pos == 3){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game_element') && !document.getElementById('div_menu1' ) && !document.getElementById('div_game_over')){
        if(nav == "r"){
            add_menu1()
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
            }else if(menu_pos1 == 1){
                document.getElementById("div_game_element").remove()
                document.getElementById("div_menu1").remove()

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