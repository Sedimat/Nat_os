
function add_button(){
    // Знаходимо дів контролу
    var controlDiv = document.getElementById('control');

    // Ліва кнопка
    var leftButton = document.createElement('button');
    leftButton.id = 'l_s';
    leftButton.className = 'left_select';
    leftButton.ontouchstart = function(event) { left_select(event); };
    leftButton.ontouchend = function() { left_select_up(); };
    leftButton.onmousedown = function(event) { left_select(event); };
    leftButton.onmouseup = function() { left_select_up(); };

    var leftImg = document.createElement('img');
    leftImg.className = 'e_img1';
    leftImg.src = '/media/img/sel.svg';

    leftButton.appendChild(leftImg);
    controlDiv.appendChild(leftButton);

    // Права кнопка
    var rightButton = document.createElement('button');
    rightButton.id = 'r_s';
    rightButton.className = 'right_select';
    rightButton.ontouchstart = function(event) { right_select(event); };
    rightButton.ontouchend = function() { right_select_up(); };
    rightButton.onmousedown = function(event) { right_select(event); };
    rightButton.onmouseup = function() { right_select_up(); };

    var rightImg = document.createElement('img');
    rightImg.className = 'e_img1';
    rightImg.src = '/media/img/sel.svg';

    rightButton.appendChild(rightImg);
    controlDiv.appendChild(rightButton);

    // Верхня кнопка
    var upButton = document.createElement('button');
    upButton.id = 'u_C';
    upButton.className = 'up_control';
    upButton.ontouchstart = function(event) { upMouseDown(event); };
    upButton.ontouchend = function() { upMouseUp(); };
    upButton.onmousedown = function(event) { upMouseDown(event); };
    upButton.onmouseup = function() { upMouseUp(); };

    var upImg = document.createElement('img');
    upImg.className = 'img_up';
    upImg.src = '/media/img/up.svg';

    upButton.appendChild(upImg);
    controlDiv.appendChild(upButton);

    // Нижня кнопка
    var downButton = document.createElement('button');
    downButton.id = 'd_C';
    downButton.className = 'down_control';
    downButton.ontouchstart = function(event) { downMouseDown(event); };
    downButton.ontouchend = function() { downMouseUp(); };
    downButton.onmousedown = function(event) { downMouseDown(event); };
    downButton.onmouseup = function() { downMouseUp(); };

    var downImg = document.createElement('img');
    downImg.className = 'img_down';
    downImg.src = '/media/img/up.svg';

    downButton.appendChild(downImg);
    controlDiv.appendChild(downButton);

    // Ліва кнопка управління
    var leftControlButton = document.createElement('button');
    leftControlButton.id = 'l_C';
    leftControlButton.className = 'left_control';
    leftControlButton.ontouchstart = function(event) { leftMouseDown(event); };
    leftControlButton.ontouchend = function() { leftMouseUp(); };
    leftControlButton.onmousedown = function(event) { leftMouseDown(event); };
    leftControlButton.onmouseup = function() { leftMouseUp(); };

    var leftControlImg = document.createElement('img');
    leftControlImg.className = 'img_left';
    leftControlImg.src = '/media/img/up.svg';

    leftControlButton.appendChild(leftControlImg);
    controlDiv.appendChild(leftControlButton);

    // Права кнопка управління
    var rightControlButton = document.createElement('button');
    rightControlButton.id = 'r_C';
    rightControlButton.className = 'right_control';
    rightControlButton.ontouchstart = function(event) { rightMouseDown(event); };
    rightControlButton.ontouchend = function() { rightMouseUp(); };
    rightControlButton.onmousedown = function(event) { rightMouseDown(event); };
    rightControlButton.onmouseup = function() { rightMouseUp(); };

    var rightControlImg = document.createElement('img');
    rightControlImg.className = 'img_right';
    rightControlImg.src = '/media/img/up.svg';

    rightControlButton.appendChild(rightControlImg);
    controlDiv.appendChild(rightControlButton);

    // Центральна кнопка
    var centerButton = document.createElement('button');
    centerButton.id = 'c_C';
    centerButton.className = 'center_control';
    centerButton.ontouchstart = function(event) { center(event); };
    centerButton.ontouchend = function() { center_up(); };
    centerButton.onmousedown = function(event) { center(event); };
    centerButton.onmouseup = function() { center_up(); };

    var centerImg = document.createElement('img');
    centerImg.className = 'img_center';
    centerImg.src = '/media/img/center.svg';

    centerButton.appendChild(centerImg);
    controlDiv.appendChild(centerButton);
}

add_button()


var zastavka = new Image()
zastavka.src = '/media/g_snake/snake.svg'

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

//add_zastavka()

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var plashka = new Image()
plashka.src = '/media/img/content.svg'

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]


list_element[0].src = '/media/g_snake/score.svg';
list_element[1].src = '/media/g_natis/floor.svg';
list_element[2].src = '/media/g_natis/floor1.svg';

var list_robot = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]


list_robot[0].src = '/media/g_natis/natis_a0_1.svg';
list_robot[1].src = '/media/g_natis/natis_a0_2.svg';
list_robot[2].src = '/media/g_natis/natis_a0_3.svg';
list_robot[3].src = '/media/g_natis/natis_a0_4.svg';
list_robot[4].src = '/media/g_natis/natis_a0_5.svg';
list_robot[5].src = '/media/g_natis/natis_a0_6.svg';
list_robot[6].src = '/media/g_natis/natis_a0_7.svg';

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

    var div_robot = document.createElement('div');
    div_robot.id = 'div_robot';
    div_robot.style.left = 200 + 'px';
    div_robot.style.top = 500 + 'px';
    div_robot.style.width = 50 + 'px';
    div_robot.style.height = 200 + 'px';
    div_robot.style.backgroundColor = 'green';
    div_robot.style.position = 'absolute';
    div_game_element.appendChild(div_robot);

    var div_foot = document.createElement('div');
    div_foot.id = 'div_foot';
    div_foot.style.left = 5 + 'px';
    div_foot.style.top = 180 + 'px';
    div_foot.style.width = 40 + 'px';
    div_foot.style.height = 20 + 'px';
    div_foot.style.backgroundColor = 'red';
    div_foot.style.position = 'absolute';
    div_robot.appendChild(div_foot);

    var img_robot = document.createElement('img');
    img_robot.setAttribute('src', list_robot[0].src);
    img_robot.id = 'img_robot';
    img_robot.style.left = -25 + 'px';
    img_robot.style.top = 0 + 'px';
    img_robot.style.height = 200 + 'px';
    img_robot.style.position = 'absolute';
    div_robot.appendChild(img_robot);

    content.appendChild(div_game_element);

}


var list_platform = []

var list_rect = []

function add_div_block(l, t){

    var list_gen = [[30, 520], [130, 500], [230, 480], [800, 320], [300, 120], [400, -80], [600, -280]]

    var list_pl = []
    var div_blok = document.getElementById('div_blok')

    var r_word_div = '';
    for (let i = 0; i < 5; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word_div += String.fromCharCode(randomCharCode);
    }

    var div_blok1 = document.createElement('div');
    div_blok1.id = 'div_' + r_word_div;

    div_blok1.style.left = l + 'px';
    div_blok1.style.top = t + 'px';
    div_blok1.style.width = 1200 + 'px';
    div_blok1.style.height = 800 + 'px';
//    div_blok.style.backgroundColor = 'green';
    div_blok1.style.position = 'absolute';
//    div_blok1.style.overflow = 'hidden';
    div_blok.appendChild(div_blok1);


    var r_floor = '';
    for (let i = 0; i < 5; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_floor += String.fromCharCode(randomCharCode);
    }
    list_pl.push('img_' + r_floor)

    var img_floor1 = document.createElement('img');
    img_floor1.setAttribute('src', list_element[2].src);
    img_floor1.id = 'img_' + r_floor;
    img_floor1.style.left = 0 + 'px';
    img_floor1.style.top = 718 + 'px';
    img_floor1.style.width = 1200 + 'px';
    img_floor1.style.position = 'absolute';
    div_blok1.appendChild(img_floor1);


    for (var j = 0; j < list_gen.length; j++) {

        var r_plat0 = '';
        for (let i = 0; i < 5; i++) {
            let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
            r_plat0 += String.fromCharCode(randomCharCode);
        }
        list_pl.push('div_p_'+ r_plat0)

        var div_foot = document.createElement('div');
        div_foot.id = 'div_p_'+ r_plat0;
        div_foot.style.left = list_gen[j][0] + 'px';
        div_foot.style.top = list_gen[j][1] + 'px';
        div_foot.style.width = 380 + 'px';
        div_foot.style.height = 10 + 'px';
        div_foot.style.backgroundColor = 'red';
        div_foot.style.position = 'absolute';
        div_blok1.appendChild(div_foot);

        var img_platform = document.createElement('img');
        img_platform.setAttribute('src', list_element[1].src);
        img_platform.id = 'plat_' + r_plat0;
        img_platform.style.left = list_gen[j][0] + 'px';
        img_platform.style.top = list_gen[j][1] + 'px';
        img_platform.style.width = 380 + 'px';
        img_platform.style.position = 'absolute';
        div_blok1.appendChild(img_platform);
    }

    var txt = 'div_' + r_word_div

    var buf = [txt, list_pl]

    list_platform.push(buf)

}

var anim = 0

var robot_s_t = 20

var kolisiya_key = true

var skok_key = true

function skok(){
    kolisiya_key = false
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {

            var robot = document.getElementById('div_robot')
            var cur_r_top = parseInt(robot.style.top) || 0;


            if(cur_r_top < 245){
                for (var j = 0; j < list_platform.length; j++){
                    var platform = document.getElementById(list_platform[j][0])
                    var cur_platform_top = parseInt(platform.style.top) || 0;
                    platform.style.top = (cur_platform_top + 25) + 'px';
                }

            }else{
                robot.style.top = (cur_r_top - 25) + 'px';
            }

            if(i == 9){
                kolisiya_key = true
                robot_s_t = 20
            }

        }, i * 20);
    }
}

var grav = true


function game(){
    if(list_coor_l[0] == 4){
        anim++
        if(anim == 7){
            anim = 0
        }
        document.getElementById('img_robot').setAttribute('src', list_robot[anim].src)
        document.getElementById('img_robot').style.transform = 'scaleX(1)';


        var d_robot = document.getElementById("div_robot")
        var cur_d_robot_left = parseInt(d_robot.style.left) || 0;

        if(cur_d_robot_left < 500){
            d_robot.style.left = (cur_d_robot_left + 10) + 'px';
        }else{

            for (var i = 0; i < list_platform.length; i++){
                var platform = document.getElementById(list_platform[i][0])
                var cur_platform_left = parseInt(platform.style.left) || 0;
                platform.style.left = (cur_platform_left - 10) + 'px';

            }
        }
        var div_first = document.getElementById(list_platform[0][0])
        var cur_div_first_left = parseInt(div_first.style.left) || 0;

        if(cur_div_first_left < -1200){
            document.getElementById(list_platform[0][0]).remove()
            list_platform.splice(0, 1);

            var plat = document.getElementById(list_platform[0][0])
            cur_first_left = parseInt(plat.style.left) || 0;
            cur_first_top = parseInt(plat.style.top) || 0;
            add_div_block(cur_first_left + 1200, cur_first_top)
        }


    }else if(list_coor_l[0] == 3){

        anim++
        if(anim == 7){
            anim = 0
        }

        document.getElementById('img_robot').setAttribute('src', list_robot[anim].src)
        document.getElementById('img_robot').style.transform = 'scaleX(-1)';

        var d_robot = document.getElementById("div_robot")
        var cur_d_robot_left = parseInt(d_robot.style.left) || 0;

        var first_left = parseInt(document.getElementById(list_platform[0][0]).style.left) || 0;

        if(cur_d_robot_left > 50){
            d_robot.style.left = (cur_d_robot_left - 10) + 'px';

        }else if(first_left < 0){
            for (var i = 0; i < list_platform.length; i++){
                var platform = document.getElementById(list_platform[i][0])
                var cur_platform_left = parseInt(platform.style.left) || 0;
                platform.style.left = (cur_platform_left + 10) + 'px';
            }
        }


    }

    var robot_rect = document.getElementById('div_foot').getBoundingClientRect();

    if(kolisiya_key){
        grav = true
        outerLoop: for (var i = 0; i < list_platform.length; i++) {
            for (var j = 0; j < list_platform[i][1].length; j++) {
                var flor_reck = document.getElementById(list_platform[i][1][j]).getBoundingClientRect();
                if (!(robot_rect.right < flor_reck.left ||
                      robot_rect.left > flor_reck.right ||
                      robot_rect.bottom < flor_reck.top ||
                      robot_rect.top > flor_reck.bottom)) {

                      var top_rect = document.getElementById(list_platform[i][1][j]).getBoundingClientRect();
                      document.getElementById('div_robot').style.top = top_rect.top - 200 + 'px';

                    skok_key = true;
                    grav = false;
//                    break outerLoop; // Виходимо з обох циклів
                }
            }
        }

        if(grav){
            var first_top = parseInt(document.getElementById(list_platform[0][0]).style.top) || 0;
            if(first_top > 0){
                for (var i = 0; i < list_platform.length; i++){
                    var platform = document.getElementById(list_platform[i][0])
                    var cur_platform_top = parseInt(platform.style.top) || 0;
                    platform.style.top = (cur_platform_top - 20) + 'px';
                }
            }
            else{
                var robot = document.getElementById('div_robot')
                var cur_r_top = parseInt(robot.style.top) || 0;
                robot.style.top = (cur_r_top + robot_s_t) + 'px';
            }
        }
    }

}




var list_coor = []
var list_coor_l = []

var k1 = true
var k2 = true
var k3 = true
var k4 = true

document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move_menu("u")
            if(k1 && skok_key && !grav){
                k1 = false
                skok_key = false
                skok()
            }
//            if(k1){
//                list_coor.unshift(1);
//                k1 = false
//            }
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
                list_coor_l.unshift(3);
                k3 = false
            }
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            if(k4){
                list_coor_l.unshift(4);
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

//            k1 = true
//            for (var i = 0; i < list_coor.length; i++){
//                if(list_coor[i] == 1){
//                    list_coor.splice(i, 1);
//                }
//            }
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
            for (var i = 0; i < list_coor_l.length; i++){
                if(list_coor_l[i] == 3){
                    list_coor_l.splice(i, 1);
                }
            }

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            k4 = true
            for (var i = 0; i < list_coor_l.length; i++){
                if(list_coor_l[i] == 4){
                    list_coor_l.splice(i, 1);
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
        if(list_coor[0] != 3){
            list_coor.unshift(2);
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
        if(list_coor[0] != 2){
            list_coor.unshift(3);
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
        if(list_coor[0] != 4){
            list_coor.unshift(1);
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
        if(list_coor[0] != 1){
        list_coor.unshift(4);
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


add_menu()

var gameinterval = null

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

    }else if(document.getElementById('div_speed')){
        if(nav == "r"){
            document.getElementById('div_speed').remove()
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


                game_element()
                add_div_block(0, 0)
                add_div_block(1200, 0)
                gameinterval = setInterval(game, 40)


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
                gameinterval = setInterval(game, 40)

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

//document.addEventListener('visibilitychange', function() {
//    if (document.hidden) {
//
//        if(document.getElementById('div_game_element') &&!document.getElementById('div_menu1')
//           && !document.getElementById('div_game_over') && !document.getElementById('div_menu')){
//            console.log('Вкладка неактивна');
//            add_menu1()
//            clearInterval(gameinterval)
//        }
//
//    }
//});