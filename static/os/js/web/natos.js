var list_fan = [new Image(), new Image(), new Image(), new Image()]

list_fan[0].src = '/media/browser/fan0.svg';
list_fan[1].src = '/media/browser/fan1.svg';
list_fan[2].src = '/media/browser/fan2.svg';
list_fan[3].src = '/media/browser/fan3.svg';


var list_elem = [new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image()
                ]

list_elem[0].src = '/media/browser/Cpu0.svg';
list_elem[1].src = '/media/browser/w_left.svg';
list_elem[2].src = '/media/browser/w_right.svg';
list_elem[3].src = '/media/browser/w_up.svg';
list_elem[4].src = '/media/browser/w_down.svg';
list_elem[5].src = '/media/browser/img_news.svg';
list_elem[6].src = '/media/browser/img_pictures.svg';
list_elem[7].src = '/media/browser/hdd.svg';
list_elem[8].src = '/media/browser/reactor2.svg';

var list_hdd = [new Image(), new Image(), new Image(), new Image()]

list_hdd[0].src = '/media/browser/hdd1.svg';
list_hdd[1].src = '/media/browser/hdd2.svg';
list_hdd[2].src = '/media/browser/hdd3.svg';
list_hdd[3].src = '/media/browser/hdd4.svg';

var list_hdd1 = [new Image(), new Image(), new Image(), new Image()]

list_hdd1[0].src = '/media/browser/hdd11.svg';
list_hdd1[1].src = '/media/browser/hdd12.svg';
list_hdd1[2].src = '/media/browser/hdd13.svg';
list_hdd1[3].src = '/media/browser/hdd14.svg';

var list_anim_r = [new Image(), new Image(), new Image(), new Image()]

list_anim_r[0].src = '/media/browser/anim1.svg';
list_anim_r[1].src = '/media/browser/anim2.svg';
list_anim_r[2].src = '/media/browser/anim3.svg';
list_anim_r[3].src = '/media/browser/anim4.svg';

var list_virus = [new Image(), new Image(), new Image(), new Image()]

list_virus[0].src = '/media/browser/virus1.svg';
list_virus[1].src = '/media/browser/virus2.svg';
list_virus[2].src = '/media/browser/virus3.svg';
list_virus[3].src = '/media/browser/virus4.svg';

var list_h1 = [new Image(), new Image(), new Image(), new Image()]

list_h1[0].src = '/media/g_ball/h01.svg';
list_h1[1].src = '/media/g_ball/h02.svg';
list_h1[2].src = '/media/g_ball/h03.svg';
list_h1[3].src = '/media/g_ball/h04.svg';


var content = document.getElementById('content');


var curs = new Image()
curs.src = '/media/browser/curs.svg'

var hud_b = new Image()
hud_b.src = '/media/browser/hud_b.svg'

var hud_virus = new Image()
hud_virus.src = '/media/browser/hud_virus.svg'

klic_s = new Audio("media/sounds/klic.mp3");

function klic(){
    klic_s.volume = 0.4; // встановлюємо гучність
    klic_s.play();
}

// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move_element("d","div_menu")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_element("u","div_menu")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            move_element("r","div_menu")
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            move_element("l","div_menu")

        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
         console.log("E")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        virus_kill()
        console.log("F")
        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        if(document.getElementById("div_mini_game")){
            document.getElementById("div_mini_game").remove();
        }else{
        window.location.href = "/";
        }
    }
});


var DOWN = null
var UP = null
var LEFT = null
var RIGHT = null


function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    klic()
    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
    clearInterval(DOWN);
    DOWN = setInterval(() => move_element("u", "div_menu"), 50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
    clearInterval(DOWN);
}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50);
    clearInterval(UP);
    UP = setInterval(() => move_element("d", "div_menu"), 50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
    clearInterval(UP);
}

function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50);
    clearInterval(LEFT);
    LEFT = setInterval(() => move_element("r", "div_menu"), 50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
    clearInterval(LEFT);
}


function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50);
    clearInterval(RIGHT);
    RIGHT = setInterval(() => move_element("l", "div_menu"), 50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
    clearInterval(RIGHT);
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50);
    virus_kill()
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50);

    if(document.getElementById("div_mini_game")){
            document.getElementById("div_mini_game").remove();
    }else{
        window.location.href = "/";
    }

}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}



function add_menu(){

    var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.classList.add('div_menu');
    div_menu.style.position = "relative";
    div_menu.style.left = 20 + 'px';
    div_menu.style.top = 20 + 'px';
    div_menu.style.width = 900 + 'px';
    div_menu.style.height = 900 + 'px';
    div_menu.style.position = 'absolute';
//    div_menu.style.backgroundColor = '#f0c55b';

    var img_anim_r = document.createElement('img');
    img_anim_r.setAttribute('src', list_anim_r[0].src);
    img_anim_r.id = 'img_anim_r';
    img_anim_r.style.left = -1020 + 'px';
    img_anim_r.style.top = -580 + 'px';
    img_anim_r.style.height = 850 + 'px';
    img_anim_r.style.position = 'absolute';
    img_anim_r.classList.add('select_img');
    div_menu.appendChild(img_anim_r);

    var img_reactor = document.createElement('img');
    img_reactor.setAttribute('src', list_elem[8].src);
    img_reactor.id = 'reactor';
    img_reactor.style.left = -960 + 'px';
    img_reactor.style.top = -590 + 'px';
    img_reactor.style.height = 827 + 'px';
    img_reactor.style.position = 'absolute';
    img_reactor.classList.add('select_img');
    div_menu.appendChild(img_reactor);

    var img_select = document.createElement('img');
    img_select.setAttribute('src', list_elem[0].src);
    img_select.id = 'select';
    img_select.style.left = 0 + 'px';
    img_select.style.top = 0 + 'px';
    img_select.style.height = 878 + 'px';
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');
    div_menu.appendChild(img_select);

    var img_left = document.createElement('img');
    img_left.setAttribute('src', list_elem[1].src);
    img_left.id = 'left';
    img_left.style.left = -1000 + 'px';
    img_left.style.top = 276 + 'px';
    img_left.style.height = 595 + 'px';
    img_left.style.position = 'absolute';
    img_left.classList.add('select_img');
    div_menu.appendChild(img_left);

    var img_right = document.createElement('img');
    img_right.setAttribute('src', list_elem[2].src);
    img_right.id = 'right';
    img_right.style.left = 972 + 'px';
    img_right.style.top = 261 + 'px';
    img_right.style.height = 631 + 'px';
    img_right.style.position = 'absolute';
    img_right.classList.add('select_img');
    div_menu.appendChild(img_right);

    var img_up = document.createElement('img');
    img_up.setAttribute('src', list_elem[3].src);
    img_up.id = 'up';
    img_up.style.left = 44 + 'px';
    img_up.style.top = -595 + 'px';
    img_up.style.height = 595 + 'px';
    img_up.style.position = 'absolute';
    img_up.classList.add('select_img');
    div_menu.appendChild(img_up);

    var img_down = document.createElement('img');
    img_down.setAttribute('src', list_elem[4].src);
    img_down.id = 'img_down';
    img_down.style.left = 51 + 'px';
    img_down.style.top = 878 + 'px';
    img_down.style.height = 319 + 'px';
    img_down.style.position = 'absolute';
    img_down.classList.add('select_img');
    div_menu.appendChild(img_down);

    var img_hdd = document.createElement('img');
    img_hdd.setAttribute('src', list_elem[7].src);
    img_hdd.id = 'img_hdd';
    img_hdd.style.left = 770 + 'px';
    img_hdd.style.top = -595 + 'px';
    img_hdd.style.height = 856 + 'px';
    img_hdd.style.position = 'absolute';
    img_hdd.classList.add('select_img');
    div_menu.appendChild(img_hdd);

    var img_hdd1 = document.createElement('img');
    img_hdd1.setAttribute('src', list_hdd[0].src);
    img_hdd1.id = 'img_hdd1';
    img_hdd1.style.left = 1250 + 'px';
    img_hdd1.style.top = -430 + 'px';
    img_hdd1.style.height = 336 + 'px';
    img_hdd1.style.position = 'absolute';
    img_hdd1.classList.add('select_img');
    div_menu.appendChild(img_hdd1);

    var img_hdd2 = document.createElement('img');
    img_hdd2.setAttribute('src', list_hdd1[0].src);
    img_hdd2.id = 'img_hdd2';
    img_hdd2.style.left = 1625 + 'px';
    img_hdd2.style.top = -350 + 'px';
    img_hdd2.style.height = 130 + 'px';
    img_hdd2.style.position = 'absolute';
    img_hdd2.classList.add('select_img');
    div_menu.appendChild(img_hdd2);

    var img_fan = document.createElement('img');
    img_fan.setAttribute('src', list_fan[0].src);
    img_fan.id = 'img_fan';
    img_fan.style.left = 378 + 'px';
    img_fan.style.top = 341 + 'px';
    img_fan.style.height = 210 + 'px';
    img_fan.style.position = 'absolute';
    img_fan.classList.add('select_img');
    div_menu.appendChild(img_fan);


    var new_game = document.createElement('h1');
    new_game.textContent = "Nat Os";
    new_game.id = 'Nat Os';
    new_game.classList.add('menu_txt');
    new_game.style.left = 140 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu.appendChild(new_game);

    var img_virus1 = document.createElement('img');
    img_virus1.setAttribute('src', list_virus[2].src);
    img_virus1.id = 'img_virus1';
    var r_left1 = Math.floor(Math.random() * (1950 - (-1000) + 1)) + (-1000);
    var r_top1 = Math.floor(Math.random() * (800 - (-600) + 1)) + (-600);
    img_virus1.style.left = r_left1 + 'px';
    img_virus1.style.top = r_top1 + 'px';
    img_virus1.style.height = 40 + 'px';
    img_virus1.style.position = 'absolute';
    img_virus1.classList.add('select_img');
    div_menu.appendChild(img_virus1);

    var img_virus2 = document.createElement('img');
    img_virus2.setAttribute('src', list_virus[0].src);
    img_virus2.id = 'img_virus2';
    var r_left2 = Math.floor(Math.random() * (1950 - (-1000) + 1)) + (-1000);
    var r_top2 = Math.floor(Math.random() * (800 - (-600) + 1)) + (-600);
    img_virus2.style.left = r_left2 + 'px';
    img_virus2.style.top = r_top2 + 'px';
    img_virus2.style.height = 35 + 'px';
    img_virus2.style.position = 'absolute';
    img_virus2.classList.add('select_img');
    div_menu.appendChild(img_virus2);

    var img_virus3 = document.createElement('img');
    img_virus3.setAttribute('src', list_virus[1].src);
    img_virus3.id = 'img_virus3';
    var r_left3 = Math.floor(Math.random() * (1950 - (-1000) + 1)) + (-1000);
    var r_top3 = Math.floor(Math.random() * (800 - (-600) + 1)) + (-600);
    img_virus3.style.left = r_left3 + 'px';
    img_virus3.style.top = r_top3 + 'px';
    img_virus3.style.height = 40 + 'px';
    img_virus3.style.position = 'absolute';
    img_virus3.classList.add('select_img');
    div_menu.appendChild(img_virus3);

    var img_virus4 = document.createElement('img');
    img_virus4.setAttribute('src', list_virus[3].src);
    img_virus4.id = 'img_virus4';
    var r_left4 = Math.floor(Math.random() * (1950 - (-1000) + 1)) + (-1000);
    var r_top4 = Math.floor(Math.random() * (800 - (-600) + 1)) + (-600);
    img_virus4.style.left = r_left4 + 'px';
    img_virus4.style.top = r_top4 + 'px';
    img_virus4.style.height = 40 + 'px';
    img_virus4.style.position = 'absolute';
    img_virus4.classList.add('select_img');
    div_menu.appendChild(img_virus4);

    content.appendChild(div_menu);
}
add_menu()

    var img_hud = document.createElement('img');
    img_hud.setAttribute('src', hud_b.src);
    img_hud.id = 'hud_b.src';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = -6 + 'px';
    img_hud.style.height = 83 + 'px';
    img_hud.style.position = 'absolute';
    img_hud.classList.add('select_img');
    content.appendChild(img_hud);

    var new_game = document.createElement('h1');
    new_game.textContent = "www.Nateskun_Os.com";
    new_game.id = 'title_web';
    new_game.classList.add('menu_txt');
    new_game.style.left = 100 + 'px';
    new_game.style.top = 10 + 'px';
    new_game.style.position = 'absolute';
    content.appendChild(new_game);

    var img_cursor = document.createElement('img');
    img_cursor.setAttribute('src', curs.src);
    img_cursor.id = 'cursor';
    img_cursor.style.left = 460 + 'px';
    img_cursor.style.top = 400 + 'px';
    img_cursor.style.height = 80 + 'px';
    img_cursor.style.position = 'absolute';
    img_cursor.classList.add('select_img');

    content.appendChild(img_cursor);

    var div_cursor = document.createElement('div');
    div_cursor.id = 'div_cursor';
    div_cursor.style.left =  460 + 'px';
    div_cursor.style.top =  400 + 'px';
    div_cursor.style.height = 5 + 'px';
    div_cursor.style.width = 5 + 'px';
    div_cursor.style.backgroundColor = 'green';
    div_cursor.style.position = 'absolute';

    content.appendChild(div_cursor);

var deep = -300;
var news_pos = 1200;

function add_news(title, description, time){
    deep += -410
    var div_menu = document.getElementById("div_menu")

    var img_news = document.createElement('img');
    img_news.setAttribute('src', list_elem[5].src);
    img_news.id = 'img_news';
    img_news.style.left = 50 + 'px';
    img_news.style.top = news_pos + 'px';
    img_news.style.height = 400 + 'px';
    img_news.style.position = 'absolute';
    img_news.classList.add('select_img');
    div_menu.appendChild(img_news);

    var news = document.createElement('h1');
    news.textContent = title;
    news.id = 'news0';
    news.classList.add('menu_txt');
    news.style.left = 80 + 'px';
    news.style.top = news_pos + 25 + 'px';
    news.style.position = 'absolute';
    div_menu.appendChild(news);

    var news1 = document.createElement('h1');
    news1.textContent = description;
    news1.id = 'news1';
    news1.style.left =  80 + 'px';
    news1.style.top =  news_pos + 100 + 'px';
    news1.style.maxWidth = '800px';
    news1.style.position = 'absolute';
    news1.classList.add('menu_txt');
    div_menu.appendChild(news1);

    var news2 = document.createElement('h1');
    news2.textContent = time;
    news2.id = 'news2';
    news2.style.left =  580 + 'px';
    news2.style.top =  news_pos + 330 + 'px';
    news2.style.position = 'absolute';
    news2.classList.add('menu_txt');
    div_menu.appendChild(news2);

    news_pos += 410

}

var deep2 = 50
var pos_img = 850;
var count_pos = 0;

function add_img(img, name, time){
    count_pos += 1;
    var pos_left = -925;
    if(count_pos == 2){
        pos_left = 1000;
    }

var div_menu = document.getElementById("div_menu")

var img_news = document.createElement('img');
    img_news.setAttribute('src', list_elem[6].src);
    img_news.id = 'img_pictures';
    img_news.style.left = pos_left + 'px';
    img_news.style.top = pos_img + 'px';
    img_news.style.height = 812 + 'px';
    img_news.style.position = 'absolute';
    img_news.classList.add('select_img');
    div_menu.appendChild(img_news);

var img_mon = document.createElement('img');
    img_mon.setAttribute('src', "/media/" + img);
    img_mon.id = 'img_mon';
    img_mon.style.left = pos_left + 15 + 'px';
    img_mon.style.top = pos_img + 100 + 'px';
    img_mon.style.height = 595 + 'px';
    img_mon.style.position = 'absolute';
    img_mon.classList.add('select_img');
    div_menu.appendChild(img_mon);

var news1 = document.createElement('h1');
    news1.textContent = name;
    news1.id = 'name_img';
    news1.style.left =  pos_left + 35 + 'px';
    news1.style.top = pos_img + 25 + 'px';
    news1.style.minWidth = '790px';
    news1.style.maxWidth = '800px';
    news1.style.position = 'absolute';
    news1.classList.add('menu_txt');
    div_menu.appendChild(news1);

var news2 = document.createElement('h1');
    news2.textContent = time;
    news2.id = 'time_img';
    news2.style.left =  pos_left + 560 + 'px';
    news2.style.top = pos_img + 745 + 'px';
    news2.style.minWidth = '400px';
    news2.style.maxWidth = '400px';
    news2.style.position = 'absolute';
    news2.classList.add('menu_txt');
    div_menu.appendChild(news2);

    if(count_pos == 2){
        count_pos = 0;

        pos_img += 820;
    }else{
        deep2 += -820
    }

}


var list_news_len = null
var list_news = null

fetch(`/get_Nat_web`)
    .then(response => response.json())
    .then(data => {
        list_news_len = data.list_news.length;
        list_news = data.list_news
        for (let i = 0; i < data.list_news.length; i++) {
            add_news(data.list_news[i][0],data.list_news[i][1],data.list_news[i][2])
        }
        for (let i = 0; i < data.list_imgs.length; i++) {
            add_img(data.list_imgs[i][0],data.list_imgs[i][1],data.list_imgs[i][3])
        }

    });

var speed = 20

var kill_virus = 0;

function add_hud_mini_game(){
    var div_mini_game = document.createElement('div');
    div_mini_game.id = 'div_mini_game';
    div_mini_game.style.left =  0 + 'px';
    div_mini_game.style.top =  832 + 'px';
    div_mini_game.style.height = 70 + 'px';
    div_mini_game.style.width = 400 + 'px';
//    div_mini_game.style.backgroundColor = 'green';
    div_mini_game.style.position = 'absolute';


    var img_hud_g = document.createElement('img');
    img_hud_g.setAttribute('src', hud_virus.src);
    img_hud_g.id = 'img_hud_g';
    img_hud_g.style.left = 0 + 'px';
    img_hud_g.style.top = 0 + 'px';
    img_hud_g.style.height = 70 + 'px';
    img_hud_g.style.position = 'absolute';
    img_hud_g.classList.add('select_img');

    div_mini_game.appendChild(img_hud_g);

    var txt_virus = document.createElement('h1');
    txt_virus.textContent = "Піймай всі віруси " + kill_virus;
    txt_virus.id = 'txt_virus';
    txt_virus.classList.add('menu_txt');
    txt_virus.style.left = 30 + 'px';
    txt_virus.style.top = 10 + 'px';
    txt_virus.style.minWidth = '600px';
    txt_virus.style.position = 'absolute';
    div_mini_game.appendChild(txt_virus);

    content.appendChild(div_mini_game);

    console.log("Додав")

}

function move_element(ref,element){
    var deep_scrol = 0

    if(deep < deep2){
        deep_scrol = deep
    }else{
        deep_scrol = deep2
    }


    var elem = document.getElementById(element)
    var cur_left = parseInt(elem.style.left) || 0;
    var cur_top = parseInt(elem.style.top) || 0;


    var cursor0 = document.getElementById("cursor")
    var cur_cursor = parseInt(cursor0.style.left) || 0;
    var cur_cursor_top = parseInt(cursor0.style.top) || 0;
    var div_cursor0 = document.getElementById("div_cursor")

    if(ref == "r"){
        if(cur_cursor > 10){
            cursor0.style.left = cur_cursor - speed + 'px';
            div_cursor0.style.left = cur_cursor - speed + 'px';
        }else{
            if(cur_left < 1000){
                elem.style.left = cur_left + speed + 'px';
            }
        }

    }else if(ref == "l"){
        if(cur_cursor < 950){
            cursor0.style.left = cur_cursor + speed + 'px';
            div_cursor0.style.left = cur_cursor + speed + 'px';
        }else{
            if(cur_left > -1010){
                elem.style.left = cur_left - speed + 'px';
            }
        }


    }else if(ref == "d"){
        if(cur_cursor_top > 10){
            cursor0.style.top = cur_cursor_top - speed + 'px';
            div_cursor0.style.top = cur_cursor_top - speed + 'px';
        }else{
            if(cur_top < 680){
                elem.style.top = cur_top + speed + 'px';
            }
        }
    }else if(ref == "u"){
        if(cur_cursor_top < 820){
            cursor0.style.top = cur_cursor_top + speed + 'px';
            div_cursor0.style.top = cur_cursor_top + speed + 'px';
        }else{
            if(cur_top > deep_scrol){
                elem.style.top = cur_top - speed + 'px';

            }
        }
    }
}

var anim_iter = null

var anim = 0

var anim_vir1 = 0
var anim_vir2 = 0
var anim_vir3 = 0
var anim_vir4 = 0


// вмикає анімацію знищення віруса
function animation(){

    document.getElementById("img_fan").setAttribute('src', list_fan[anim].src);

    anim_hdd = Math.floor(Math.random() * 3);
    document.getElementById("img_hdd1").setAttribute('src', list_hdd[anim_hdd].src);
    document.getElementById("img_hdd2").setAttribute('src', list_hdd1[anim].src);

    document.getElementById("img_anim_r").setAttribute('src', list_anim_r[anim].src);

    // Умова коли знищені всі віруси
    if(kill_virus == 4){
        kill_virus = 0
        document.getElementById("txt_virus").textContent = "Віруси видалені. +1 бонус ";
    }

    anim += 1;
    if(anim == 4){
        anim = 0;
    }

    if(caunt_v1 > 2){
        document.getElementById("img_virus1").setAttribute('src', list_h1[anim_vir1].src);
        anim_vir1 += 1
        if(anim_vir1 > 3){
            document.getElementById("img_virus1").style.display = 'none';
            caunt_v1 = 0
            kill_virus += 1

            document.getElementById("txt_virus").textContent = "Оп ще один попався " + kill_virus;
        }
    }

    if(caunt_v2 > 2){
        document.getElementById("img_virus2").setAttribute('src', list_h1[anim_vir2].src);
        anim_vir2 += 1
        if(anim_vir2 > 3){
            document.getElementById("img_virus2").style.display = 'none';
            caunt_v2 = 0
            kill_virus += 1

            document.getElementById("txt_virus").textContent = "Оп ще один попався " + kill_virus;
        }
    }
    if(caunt_v3 > 2){
        document.getElementById("img_virus3").setAttribute('src', list_h1[anim_vir3].src);
        anim_vir3 += 1
        if(anim_vir3 > 3){
            document.getElementById("img_virus3").style.display = 'none';
            caunt_v3 = 0
            kill_virus += 1

            document.getElementById("txt_virus").textContent = "Оп ще один попався " + kill_virus;
        }
    }
    if(caunt_v4 > 2){
        document.getElementById("img_virus4").setAttribute('src', list_h1[anim_vir4].src);
        anim_vir4 += 1
        if(anim_vir4 > 3){
            document.getElementById("img_virus4").style.display = 'none';
            caunt_v4 = 0
            kill_virus += 1

            document.getElementById("txt_virus").textContent = "Оп ще один попався " + kill_virus;

        }
    }

}

anim_iter = setInterval(animation, 80);

//document.getElementById("div_menu").style.top = 600 + 'px';
//document.getElementById("div_menu").style.left = 1000 + 'px';

//clearInterval(anim_iter);

var caunt_v1 = 0
var caunt_v2 = 0
var caunt_v3 = 0
var caunt_v4 = 0

function virus_kill(){
    var r_left = Math.floor(Math.random() * (1950 - (-1000) + 1)) + (-1000);
    var r_top = Math.floor(Math.random() * (800 - (-600) + 1)) + (-600);

    var cursor = document.getElementById("div_cursor").getBoundingClientRect();
    var virus1 = document.getElementById("img_virus1").getBoundingClientRect();
    var virus2 = document.getElementById("img_virus2").getBoundingClientRect();
    var virus3 = document.getElementById("img_virus3").getBoundingClientRect();
    var virus4 = document.getElementById("img_virus4").getBoundingClientRect();


        if (!(cursor.right < virus1.left ||
            cursor.left > virus1.right ||
            cursor.bottom < virus1.top ||
            cursor.top > virus1.bottom)) {

            caunt_v1 += 1

            if(!document.getElementById("div_mini_game")){
                add_hud_mini_game()
            }else{
                document.getElementById("txt_virus").textContent = "Втік, спробуй ще " + kill_virus;
            }

            if(caunt_v1 < 3){
                document.getElementById("img_virus1").style.transition = 'left 1s linear, top 1s linear';
                document.getElementById("img_virus1").style.left = r_left + 'px';
                document.getElementById("img_virus1").style.top = r_top + 'px';
            }

        }else if (!(cursor.right < virus2.left ||
            cursor.left > virus2.right ||
            cursor.bottom < virus2.top ||
            cursor.top > virus2.bottom)) {

            caunt_v2 += 1

            if(!document.getElementById("div_mini_game")){
                add_hud_mini_game()

            }else{
                document.getElementById("txt_virus").textContent = "Втік, спробуй ще " + kill_virus;
            }

            if(caunt_v2 < 3){
                document.getElementById("img_virus2").style.transition = 'left 1s linear, top 1s linear';
                document.getElementById("img_virus2").style.left = r_left + 'px';
                document.getElementById("img_virus2").style.top = r_top + 'px';
            }

        }else if (!(cursor.right < virus3.left ||
            cursor.left > virus3.right ||
            cursor.bottom < virus3.top ||
            cursor.top > virus3.bottom)) {

            caunt_v3 += 1

            if(!document.getElementById("div_mini_game")){
                add_hud_mini_game()
            }else{
                document.getElementById("txt_virus").textContent = "Втік, спробуй ще " + kill_virus;
            }

            if(caunt_v3 < 3){
                document.getElementById("img_virus3").style.transition = 'left 1s linear, top 1s linear';
                document.getElementById("img_virus3").style.left = r_left + 'px';
                document.getElementById("img_virus3").style.top = r_top + 'px';
            }

        }else if (!(cursor.right < virus4.left ||
            cursor.left > virus4.right ||
            cursor.bottom < virus4.top ||
            cursor.top > virus4.bottom)) {

            caunt_v4 += 1

            if(!document.getElementById("div_mini_game")){
                add_hud_mini_game()
            }else{
                document.getElementById("txt_virus").textContent = "Втік, спробуй ще " + kill_virus;
            }

            if(caunt_v4 < 3){
                document.getElementById("img_virus4").style.transition = 'left 1s linear, top 1s linear';
                document.getElementById("img_virus4").style.left = r_left + 'px';
                document.getElementById("img_virus4").style.top = r_top + 'px';
            }
        }

}