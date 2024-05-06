var userAgent = navigator.userAgent;

if (/Android/i.test(userAgent)) {
    console.log("Android");
} else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    console.log("iOS");
} else if (/Windows Phone/i.test(userAgent)) {
    console.log("Windows Phone");
} else if (/Mac/i.test(userAgent)) {
    console.log("macOS");
} else if (/Windows/i.test(userAgent)) {
    console.log("Windows");
} else if (/Linux/i.test(userAgent)) {
    console.log("Linux");
} else {
    console.log("Інша операційна система");
}


var list_floor = [new Image(), new Image(), new Image(),
                  new Image(), new Image(), new Image(),
                  new Image(), new Image(), new Image()]

list_floor[0].src = '/media/g_uhe/floor0.svg';
list_floor[1].src = '/media/g_uhe/floor2.svg';
list_floor[2].src = '/media/g_uhe/home1.svg';
list_floor[3].src = '/media/g_uhe/pine.svg';
list_floor[4].src = '/media/g_uhe/home2.svg';
list_floor[5].src = '/media/g_uhe/cloud.svg';
list_floor[6].src = '/media/g_uhe/tree2.svg';
list_floor[7].src = '/media/g_uhe/tree3.svg';

var list_bus = [new Image(), new Image(), new Image(), new Image()]

list_bus[0].src = '/media/g_uhe/bus1_4.svg';
list_bus[1].src = '/media/g_uhe/bus1_3.svg';
list_bus[2].src = '/media/g_uhe/bus1_2.svg';
list_bus[3].src = '/media/g_uhe/bus1_1.svg';

var list_msk = [new Image(), new Image(), new Image(), new Image()]

list_msk[0].src = '/media/g_uhe/msk_1.svg';
list_msk[1].src = '/media/g_uhe/msk_2.svg';
list_msk[2].src = '/media/g_uhe/msk_3.svg';
list_msk[3].src = '/media/g_uhe/msk_4.svg';

var list_mr = [new Image(), new Image(), new Image(), new Image()]

list_mr[0].src = '/media/g_uhe/mr_1.svg';
list_mr[1].src = '/media/g_uhe/mr_2.svg';
list_mr[2].src = '/media/g_uhe/mr_3.svg';
list_mr[3].src = '/media/g_uhe/mr_4.svg';

var list_kopt = [new Image(), new Image(), new Image(), new Image()]

list_kopt[0].src = '/media/g_uhe/kopt1.svg';
list_kopt[1].src = '/media/g_uhe/kopt2.svg';
list_kopt[2].src = '/media/g_uhe/kopt3.svg';
list_kopt[3].src = '/media/g_uhe/kopt4.svg';


var list_tck = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_tck[0].src = '/media/g_uhe/tck_1.svg';
list_tck[1].src = '/media/g_uhe/tck_2.svg';
list_tck[2].src = '/media/g_uhe/tck_3.svg';
list_tck[3].src = '/media/g_uhe/tck_4.svg';
list_tck[4].src = '/media/g_uhe/tck_5.svg';


var list_man = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_man[0].src = '/media/g_uhe/man_1.svg';
list_man[1].src = '/media/g_uhe/man_2.svg';
list_man[2].src = '/media/g_uhe/man_3.svg';
list_man[3].src = '/media/g_uhe/man_4.svg';
list_man[4].src = '/media/g_uhe/man_5.svg';

var list_man_b = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_man_b[0].src = '/media/g_uhe/man_b1_1.svg';
list_man_b[1].src = '/media/g_uhe/man_b1_2.svg';
list_man_b[2].src = '/media/g_uhe/man_b1_3.svg';
list_man_b[3].src = '/media/g_uhe/man_b1_4.svg';
list_man_b[4].src = '/media/g_uhe/man_b1_5.svg';
list_man_b[5].src = '/media/g_uhe/man_b1_6.svg';

var list_koor = [400, 500, 600, 700];

var content = document.getElementById('content');

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var olya = new Image()
olya.src = "/media/g_uhe/olya.svg"

var score = 0

var meters = 0


function game_over(txt){
    var div_game_over = document.createElement('div');
    div_game_over.id = 'div_game_over';
    div_game_over.style.left = 0 + 'px';
    div_game_over.style.top = 0 + 'px';

    var img_over = document.createElement('img');
    img_over.setAttribute('src', cont.src);
    img_over.id = 'img_over';
    img_over.style.left = 230 + 'px';
    img_over.style.top = 600 + 'px';
    img_over.style.height = 250 + 'px';
    img_over.style.position = 'absolute';
    div_game_over.appendChild(img_over);

    var txt_over = document.createElement('h1');
    txt_over.textContent = txt;
    txt_over.id = 'txt_over';
    txt_over.classList.add('menu_txt');
    txt_over.style.left = 250 + 'px';
    txt_over.style.top = 620 + 'px';
    txt_over.style.position = 'absolute';
    div_game_over.appendChild(txt_over);

    var txt_over1 = document.createElement('h1');
    txt_over1.textContent = "Пройшов: " + meters + ".м";
    txt_over1.id = 'txt_over1';
    txt_over1.classList.add('menu_txt');
    txt_over1.style.left = 250 + 'px';
    txt_over1.style.top = 670 + 'px';
    txt_over1.style.position = 'absolute';
    div_game_over.appendChild(txt_over1);

    content.appendChild(div_game_over);
}


var r_car = 0;
r_car = Math.floor(Math.random() * 3);

function add_game_element(){
    var div_game1 = document.createElement('div');
    div_game1.id = 'div_game1';
    div_game1.style.left = 0 + 'px';
    div_game1.style.top = 0 + 'px';

    var img_cloud = document.createElement('img');
    img_cloud.setAttribute('src', list_floor[5].src);
    img_cloud.id = 'cloud';
    img_cloud.style.left = 200 + 'px';
    img_cloud.style.top = 20 + 'px';
    img_cloud.style.width = 350 + 'px';
    img_cloud.style.position = 'absolute';
    div_game1.appendChild(img_cloud);

    // Оля юа
    var img_olya = document.createElement('img');
    img_olya.setAttribute('src', olya.src);
    img_olya.id = 'olya';
    img_olya.style.left = 850 + 'px';
    img_olya.style.top = 0 + 'px';
    img_olya.style.width = 400 + 'px';
    img_olya.style.position = 'absolute';
    div_game1.appendChild(img_olya);

    var olya_txt = document.createElement('h1');
    olya_txt.textContent = "Чому не в окопі ??";
    olya_txt.id = 'olya_txt';
    olya_txt.classList.add('olya_txt');
    olya_txt.style.left = 970 + 'px';
    olya_txt.style.top = 100 + 'px';
    olya_txt.style.width = 400 + 'px';
    olya_txt.style.position = 'absolute';
    div_game1.appendChild(olya_txt);

    var img_home = document.createElement('img');
    img_home.setAttribute('src', list_floor[4].src);
    img_home.id = 'home';
    img_home.style.left = 800 + 'px';
    img_home.style.top = 150 + 'px';
    img_home.style.width = 270 + 'px';
    img_home.style.position = 'absolute';
    div_game1.appendChild(img_home);

    var img_home2 = document.createElement('img');
    img_home2.setAttribute('src', list_floor[2].src);
    img_home2.id = 'home2';
    img_home2.style.left = 200 + 'px';
    img_home2.style.top = 150 + 'px';
    img_home2.style.width = 270 + 'px';
    img_home2.style.position = 'absolute';
    div_game1.appendChild(img_home2);

    var img_tree2 = document.createElement('img');
    img_tree2.setAttribute('src', list_floor[6].src);
    img_tree2.id = 'tree2';
    img_tree2.style.left = -40 + 'px';
    img_tree2.style.top = 130 + 'px';
    img_tree2.style.width = 290 + 'px';
    img_tree2.style.position = 'absolute';
    div_game1.appendChild(img_tree2);

    var img_tree3 = document.createElement('img');
    img_tree3.setAttribute('src', list_floor[7].src);
    img_tree3.id = 'tree3';
    img_tree3.style.left = 1050 + 'px';
    img_tree3.style.top = 70 + 'px';
    img_tree3.style.width = 140 + 'px';
    img_tree3.style.position = 'absolute';
    div_game1.appendChild(img_tree3);

    var img_tree = document.createElement('img');
    img_tree.setAttribute('src', list_floor[3].src);
    img_tree.id = 'tree';
    img_tree.style.left = 600 + 'px';
    img_tree.style.top = 50 + 'px';
    img_tree.style.width = 240 + 'px';
    img_tree.style.position = 'absolute';
    div_game1.appendChild(img_tree);

    var img_floor = document.createElement('img');
    img_floor.setAttribute('src', list_floor[0].src);
    img_floor.id = 'floor';
    img_floor.style.left = 0 + 'px';
    img_floor.style.top = 510 + 'px';
    img_floor.style.width = 1220 + 'px';
    img_floor.style.position = 'absolute';
    div_game1.appendChild(img_floor);

    var img_floor1 = document.createElement('img');
    img_floor1.setAttribute('src', list_floor[0].src);
    img_floor1.id = 'floor1';
    img_floor1.style.left = 1200 + 'px';
    img_floor1.style.top = 510 + 'px';
    img_floor1.style.width = 1220 + 'px';
    img_floor1.style.position = 'absolute';
    div_game1.appendChild(img_floor1);

    // Головний герой його картинка та колізія
    var div_v3 = document.createElement('div');
    div_v3.id = 'div_v3';
    div_v3.style.left =  420 + 'px';
    div_v3.style.top =  500 + 'px';
    div_v3.style.height = 80 + 'px';
    div_v3.style.width = 60 + 'px';
//    div_v3.style.backgroundColor = 'green';
    div_v3.style.position = 'absolute';
    div_game1.appendChild(div_v3);

    var img_man = document.createElement('img');
    img_man.setAttribute('src', list_man[0].src);
    img_man.id = 'man';
    img_man.style.left = 400 + 'px';
    img_man.style.top = 480 + 'px';
    img_man.style.height = 180 + 'px';
    img_man.style.position = 'absolute';
    div_game1.appendChild(img_man);

    // ТЦК
    var div_tck = document.createElement('div');
    div_tck.id = 'div_tck';
    div_tck.style.left =  -230 + 'px';
    div_tck.style.top =  520 + 'px';
    div_tck.style.height = 80 + 'px';
    div_tck.style.width = 50 + 'px';
//    div_tck.style.backgroundColor = 'green';
    div_tck.style.position = 'absolute';
    div_game1.appendChild(div_tck);

    var img_tck = document.createElement('img');
    img_tck.setAttribute('src', list_tck[0].src);
    img_tck.id = 'tck';
    img_tck.style.left = -210 + 'px';
    img_tck.style.top = 480 + 'px';
    img_tck.style.height = 180 + 'px';
    img_tck.style.position = 'absolute';
    div_game1.appendChild(img_tck);

    // ТЦК 2

    var img_tck2 = document.createElement('img');
    img_tck2.setAttribute('src', list_tck[0].src);
    img_tck2.style.transform = 'scaleX(-1)';
    img_tck2.id = 'tck2';
    img_tck2.style.left = 1210 + 'px';
    img_tck2.style.top = 480 + 'px';
    img_tck2.style.height = 180 + 'px';
    img_tck2.style.position = 'absolute';
    div_game1.appendChild(img_tck2);

    // Мікроавтобус
    var div_bus = document.createElement('div');
    div_bus.id = 'div_bus';
    div_bus.style.left =  1200 + 'px';
    div_bus.style.top =  730 + 'px';
    div_bus.style.height = 120 + 'px';
    div_bus.style.width = 400 + 'px';
//    div_bus.style.backgroundColor = 'green';
    div_bus.style.position = 'absolute';
    div_game1.appendChild(div_bus);

    var img_bus = document.createElement('img');
    r_car = Math.floor(Math.random() * 3) + 1;
    if(r_car == 1){
        img_bus.setAttribute('src', list_bus[0].src)
    }else if(r_car == 2){
        img_bus.setAttribute('src', list_msk[0].src)
    }else if(r_car == 3){
        img_bus.setAttribute('src', list_mr[0].src)
    }
    img_bus.id = 'bus';
    img_bus.style.left = 1200 + 'px';
    img_bus.style.top = 670 + 'px';
    img_bus.style.width = 500 + 'px';
    img_bus.style.position = 'absolute';
    div_game1.appendChild(img_bus);

    // Коптер його картинка та колізія
    var div_kopt = document.createElement('div');
    div_kopt.id = 'div_kopt';
    div_kopt.style.left =  1280 + 'px';
    var r_index = Math.floor(Math.random() * list_koor.length);
    div_kopt.style.top =  list_koor[r_index] + 'px';
    div_kopt.style.height = 50 + 'px';
    div_kopt.style.width = 70 + 'px';
//    div_kopt.style.backgroundColor = 'green';
    div_kopt.style.position = 'absolute';
    div_game1.appendChild(div_kopt);

    var img_kopt = document.createElement('img');
    img_kopt.setAttribute('src', list_kopt[0].src);
    img_kopt.id = 'kopt';
    img_kopt.style.left = 1250 + 'px';
    img_kopt.style.top = list_koor[r_index] - 50 + 'px';
    img_kopt.style.height = 100 + 'px';
    img_kopt.style.position = 'absolute';
    div_game1.appendChild(img_kopt);

    // рахунок і т.д
    var about_txt = document.createElement('h1');
    about_txt.textContent = 0;
    about_txt.id = 'score_num';
    about_txt.classList.add('menu_txt');
    about_txt.style.left = 950 + 'px';
    about_txt.style.top = 0 + 'px';
    about_txt.style.height = 500 + 'px';
    about_txt.style.position = 'absolute';
    div_game1.appendChild(about_txt);

    var about_metr = document.createElement('h1');
    about_metr.textContent = 0;
    about_metr.id = 'metr';
    about_metr.classList.add('menu_txt');
    about_metr.style.left = 20 + 'px';
    about_metr.style.top = 0 + 'px';
    about_metr.style.height = 500 + 'px';
    about_metr.style.position = 'absolute';
    div_game1.appendChild(about_metr);

    content.appendChild(div_game1);
}


function add_zastavka(){
    // Рахунок та його картинка
    var img_zastavka = document.createElement('img');
    img_zastavka.setAttribute('src', '/media/g_uhe/ukhylyant.svg');
    img_zastavka.id = 'zastavka';
    img_zastavka.style.left = 10 + 'px';
    img_zastavka.style.top = 50 + 'px';
    img_zastavka.style.width = 1000 + 'px';
    img_zastavka.style.position = 'absolute';
    content.appendChild(img_zastavka);
}


function add_menu(){
    var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.style.left = 0 + 'px';
    div_menu.classList.add('div_menu');
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
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');

    div_menu.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "New game";
    new_game.id = 'new_game';
    new_game.classList.add('menu_txt1');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu.appendChild(new_game);


    var about = document.createElement('h1');
    about.textContent = "About";
    about.id = 'about';
    about.classList.add('menu_txt1');
    about.style.left = 60 + 'px';
    about.style.top = 175 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "Exit";
    score_n1.id = 'exit';
    score_n1.classList.add('menu_txt1');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 300 + 'px';
    score_n1.style.position = 'absolute';
    div_menu.appendChild(score_n1);

    content.appendChild(div_menu);
}

function add_menu1(){
    var div_menu1 = document.createElement('div');
    div_menu1.id = 'div_menu1';
    div_menu1.style.left = 0 + 'px';
    div_menu1.classList.add('div_menu');
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
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');

    div_menu1.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "Resume game";
    new_game.id = 'resume';
    new_game.classList.add('menu_txt1');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu1.appendChild(new_game);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "New game";
    score_n1.id = 'new';
    score_n1.classList.add('menu_txt1');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 170 + 'px';
    score_n1.style.position = 'absolute';
    div_menu1.appendChild(score_n1);

    var exit1 = document.createElement('h1');
    exit1.textContent = "Exit";
    exit1.id = 'exit1';
    exit1.classList.add('menu_txt1');
    exit1.style.left = 60 + 'px';
    exit1.style.top = 290 + 'px';
    exit1.style.position = 'absolute';
    div_menu1.appendChild(exit1);

    content.appendChild(div_menu1);
}



document.addEventListener("keydown", function(event) {
    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            l_c_down(1)
            }


    // D або стрілка вправо натиснута
        if (event.keyCode === 68 || event.keyCode === 39) {
            r_c_down(1)
            }
});

document.addEventListener("keyup", function(event) {
    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            l_c_down(0)
        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            r_c_down(0)
            }
});

function l_c_down(num){
    if(num == 1){
        speed = 0
        speed1 = 0
        speed2 = 25
        anim_man = 0
        speed3 = 8
        speed4 = 7
    }else if(num == 0){

        speed = 10
        speed1 = 5
        speed2 = 25
        anim_man = 1
        speed3 = 4
        speed4 = 10
    }
}

function r_c_down(num){
    if(num == 1){
        speed = 10 * 3
        speed1 = 5 * 3
        speed2 = 50
        speed3 = -4
        anim_man = 2
        speed4 = 15
    }else if(num == 0){

        speed = 10
        speed1 = 5
        speed2 = 25
        speed3 = 4
        anim_man = 1
        speed4 = 10
    }
}

// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

        // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
             move_select_m()
             up()
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_select_p()
            down()
        }


    // натиснута кнопка E
    if (event.keyCode === 69) {
        right_select1(event)
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
    }
});

var gameUP = null

var gameDOWN = null

function up(){
    move_man(0)
}

function down(){
    move_man(1)
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// кнопка вниз
function downMouseDown(event) {
    move_select_p()
    document.getElementById('d_C').style.backgroundColor = "#613703";
    clearInterval(gameDOWN);
    gameDOWN = setInterval(down, 70);
    event.preventDefault();
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
    clearInterval(gameDOWN);
}

// кнопка верх
function upMouseDown(event) {
    move_select_m()
    document.getElementById('u_C').style.backgroundColor = "#613703";
    clearInterval(gameUP);
    gameUP = setInterval(up, 70);
    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
    clearInterval(gameUP);
}

// кнопка в ліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    l_c_down(1)
    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
    l_c_down(0)
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    r_c_down(1)
    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
    r_c_down(0)
}

// лівий селект
function left_select(event) {
    document.getElementById('l_s').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    right_select1(event)

    event.preventDefault();
    navigator.vibrate(50);
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}

// зміна заставки
add_zastavka()

// зміна запуску гри
var gameInterval = null
//add_game_element()
//gameInterval = setInterval(game, 70);


// правий селект
function right_select1(event){
    if(document.getElementById("div_game_over")){
        document.getElementById("div_game1").remove();
        document.getElementById("div_game_over").remove();
        add_menu()
        gameInterval = null

    }else if (document.getElementById("zastavka")){
        document.getElementById("zastavka").remove();
        add_menu()

    }else if (document.getElementById("div_menu")){
        if(menu_pos == 0){ // повина запустити цикл гри
            if(gameInterval == null){
                document.getElementById("div_menu").remove();
                add_game_element()
                gameInterval = setInterval(game, 70);
                    score = 0
                    meters = 0
                    anim_man = 1

            }else{
                clearInterval(gameInterval);
                gameInterval = null
            }
        }else if(menu_pos == 1){

        }else if(menu_pos == 2){
            window.location.href = "/games";
        }

    }else if (document.getElementById("div_menu1")){
            if(menu_pos1 == 0){
                document.getElementById("div_menu1").remove();
                gameInterval = setInterval(game, 70);
                anim_man = 1

            }else if(menu_pos1 == 1){
                document.getElementById("div_menu1").remove();
                document.getElementById("div_game1").remove();
                add_game_element()
                gameInterval = setInterval(game, 70);
                score = 0
                meters = 0
                anim_man = 1
                menu_pos1 = 0

            }else if(menu_pos1 == 2){
                window.location.href = "/games";
            }

    }else{
        add_menu1()
        clearInterval(gameInterval);
        anim_man = 0
    }
}

var menu_pos = 0
var menu_pos1 = 0

function move_select_p(){

        if (document.getElementById("div_menu")){
            var select = document.getElementById("select")
            var currentSelect = parseInt(select.style.top) || 0;
            if (menu_pos < 2){
            menu_pos += 1;
            select.style.top = currentSelect + 125 + 'px';
            }
        }
        if (document.getElementById("div_menu1")){
            var select1 = document.getElementById("select1")
            var currentSelect1 = parseInt(select1.style.top) || 0;
            if (menu_pos1 < 2){
            menu_pos1 += 1;
            select1.style.top = currentSelect1 + 120 + 'px';
            }

        }
}

function move_select_m(){
        if (document.getElementById("div_menu")){
            var select = document.getElementById("select")
            var currentSelect = parseInt(select.style.top) || 0;
            if (menu_pos > 0){
            menu_pos -= 1;
            select.style.top = currentSelect - 125 + 'px';
            }
        }
        if (document.getElementById("div_menu1")){
            var select1 = document.getElementById("select1")
            var currentSelect1 = parseInt(select1.style.top) || 0;
            if (menu_pos1 > 0){
            menu_pos1 -= 1;
            select1.style.top = currentSelect1 - 120 + 'px';
            }
        }
}

function move_man(pos){
    if (document.getElementById("div_game1")){
        var man_kol = document.getElementById("div_v3")
        var man = document.getElementById("man")
        cur_man_kol = parseInt(man_kol.style.top) || 0;
        cur_man = parseInt(man.style.top) || 0;
        if (!anim_man == 0 && !document.getElementById("div_game_over")){
            if (pos == 0){
                if(cur_man > 390){
                man.style.top = (cur_man - 15) + 'px';
                man_kol.style.top = (cur_man_kol - 15) + 'px';
                }
            }

            if (pos == 1){
                if(cur_man < 720){
                man.style.top = (cur_man + 15) + 'px';
                man_kol.style.top = (cur_man_kol + 15) + 'px';
                }
            }
        }
    }
}

var anim = 0
var anim12 = 0
var anim0 = 0

var anim_man = 0

//швидкість руху основного слою
var speed = 10

//швидкість руху 1 заднього слою
var speed1 = 5

//швидкість руху коптеру
var speed2 = 25

//швидкість руху ТЦК
var speed3 = 4
var speed4 = 10

var key = 0
var iterat = 0
var tck_spawn = 0

// головна функція гри
function game(){
    if(score >= 5){
    var tck2 = document.getElementById("tck2")
        tck2.setAttribute('src', list_tck[anim0].src)
        tck2.style.transform = 'scaleX(-1)';// рядок відзеркалення
        var cur_man = parseInt(document.getElementById("man").style.top) || 0;
        tck2.style.top = cur_man + 'px';
        var cur_tck2 = parseInt(tck2.style.left) || 0;
        tck2.style.left = cur_tck2 - speed4 + 'px';
    }

    var tck = document.getElementById("tck")
    var div_tck0 = document.getElementById("div_tck")
    if(tck_spawn == 100){
        div_tck0.style.left = -100 + 'px';
        tck.style.left = -90 + 'px';
    }

    var cur_tck = parseInt(tck.style.left) || 0;
        if(cur_tck > -200){
        var cur_man = parseInt(document.getElementById("man").style.top) || 0;
        tck.setAttribute('src', list_tck[anim0].src);
        tck.style.left = (cur_tck + speed3 ) + 'px';
        tck.style.top = cur_man + 'px';

        div_tck0.style.left = (cur_tck + speed3 + 20) + 'px';
        div_tck0.style.top = cur_man + 40 + 'px';
        }

    iterat += 1
    if (iterat == 10){
        iterat = 0
        tck_spawn += 1;
        if (tck_spawn > 101){
            tck_spawn = 0;
        }

        // виводе дані повісток та метрів на екран
        if (anim_man == 1){
        meters += 1
        document.getElementById("metr").textContent = meters;
        }else if(anim_man == 2){
        meters += 3
        document.getElementById("metr").textContent = meters;
        }
    }

    // асети підлоги
    var floor = document.getElementById("floor")
    var floor1 = document.getElementById("floor1")
    var home = document.getElementById("home")
    var cloud = document.getElementById("cloud")
    var home2 = document.getElementById("home2")


    var cur_home = parseInt(home.style.left) || 0;
    home.style.left = (cur_home - speed1) + 'px';
    if(cur_home <= -300){
        home.style.left = 1100 + 'px';
    }

    var cur_home2 = parseInt(home2.style.left) || 0;
    home2.style.left = (cur_home2 - speed1) + 'px';
    if(cur_home2 <= -300){
        home2.style.left = 1100 + 'px';
    }

    var cur_tree = parseInt(tree.style.left) || 0;
    tree.style.left = (cur_tree - speed1) + 'px';
    if(cur_tree <= -300){
        tree.style.left = 1100 + 'px';
    }

    var cur_tree2 = parseInt(tree2.style.left) || 0;
    tree2.style.left = (cur_tree2 - speed1) + 'px';
    if(cur_tree2 <= -300){
        tree2.style.left = 1100 + 'px';
    }

    var cur_tree3 = parseInt(tree3.style.left) || 0;
    tree3.style.left = (cur_tree3 - speed1) + 'px';
    if(cur_tree3 <= -300){
        tree3.style.left = 1100 + 'px';
    }

    var cur_cloud = parseInt(cloud.style.left) || 0;
    cloud.style.left = (cur_cloud - 2) + 'px';
    if(cur_cloud <= -350){
        cloud.style.left = 1350 + 'px';
    }

    // Оля юа
    var olya = document.getElementById("olya")
    var olya_txt = document.getElementById("olya_txt")
    var cur_olya = parseInt(olya.style.left) || 0;

    olya.style.left = (cur_olya - 2) + 'px';
    olya_txt.style.left = (cur_olya + 120 - 2) + 'px';

    if (tck_spawn === 1) {
        olya_txt.textContent = "Чому не в окопі ??";
    }else if (tck_spawn === 10) {
        olya_txt.textContent = "Огида Огида !!";
    }else if (tck_spawn === 20){
        olya_txt.textContent = "Нікчемна Аскарида !"
    }else if (tck_spawn === 30){
        olya_txt.textContent = "Ти просто Ухилянт !"
    }else if (tck_spawn === 40){
        olya_txt.textContent = "А я тримаю фронт"
    }else if (tck_spawn === 45){
        olya_txt.textContent = "В Європі"
    }

    if(cur_olya <= -410){
        olya.style.left = 1350 + 'px';
        olya_txt.style.left = 1350 + 120 + 'px';
    }


    var cur_floor0 = parseInt(floor.style.left) || 0;
    floor.style.left = (cur_floor0 - speed) + 'px';

    var cur_floor1 = parseInt(floor1.style.left) || 0;
    floor1.style.left = (cur_floor1 - speed) + 'px';

    var cur_floor0 = parseInt(floor.style.left) || 0;
    var cur_floor1 = parseInt(floor1.style.left) || 0;

    if(cur_floor0 <= -1200){
        floor.style.left = 1200 + 'px';
    }
    if(cur_floor1 <= -1200){
        floor1.style.left = 1200 + 'px';
    }

    // Головний гравець
    var man_kolisia = document.getElementById("div_v3")
    var man = document.getElementById("man")
    if (anim_man == 1){
        man.setAttribute('src', list_man[anim].src);
    }else if (anim_man == 2){
        man.setAttribute('src', list_man_b[anim12].src);
    }

    anim += 1
    if (anim == 5){
        anim = 0
    }

    anim12 += 1
    if (anim12 == 6){
        anim12 = 0
    }

    // функції коптера
    var kopt = document.getElementById("kopt")
    var div_kopt = document.getElementById("div_kopt")
    var score_num = document.getElementById("score_num")

    kopt.setAttribute('src', list_kopt[anim0].src);

    var cur_kopt = parseInt(kopt.style.left) || 0;
    kopt.style.left = (cur_kopt - speed2) + 'px';

    var cur_div_kopt = parseInt(div_kopt.style.left) || 0;
    div_kopt.style.left = (cur_div_kopt - speed2) + 'px';

    if(cur_kopt <= -250){
        var r_index1 = Math.floor(Math.random() * list_koor.length);
        kopt.style.top = list_koor[r_index1] + 'px';
        div_kopt.style.top = list_koor[r_index1] + 50 + 'px';

        kopt.style.left = 1750 + 'px';
        div_kopt.style.left = 1780 + 'px';

    }

    var man_k = man_kolisia.getBoundingClientRect();
    var kopt_k = div_kopt.getBoundingClientRect();

    var tck_k = div_tck0.getBoundingClientRect();
    var tck_k2 = document.getElementById("tck2").getBoundingClientRect();

        if (!(man_k.right < tck_k.left ||
            man_k.left > tck_k.right ||
            man_k.bottom < tck_k.top ||
            man_k.top > tck_k.bottom)) {

                anim_man = 0
                clearInterval(gameInterval);
                game_over("От ти і попався Ухилянт!")

        }

        if (!(man_k.right < tck_k2.left ||
            man_k.left > tck_k2.right ||
            man_k.bottom < tck_k2.top ||
            man_k.top > tck_k2.bottom)) {

                anim_man = 0
                clearInterval(gameInterval);
                game_over("О Ухилянт Чіназес.")
        }

        // Для першої кульки та хвоста
        if (!(man_k.right < kopt_k.left ||
            man_k.left > kopt_k.right ||
            man_k.bottom < kopt_k.top ||
            man_k.top > kopt_k.bottom)) {

            var r_index2 = Math.floor(Math.random() * list_koor.length);
            kopt.style.top = list_koor[r_index2] + 'px';
            div_kopt.style.top = list_koor[r_index2] + 50 + 'px';

            kopt.style.left = 1750 + 'px';
            div_kopt.style.left = 1780 + 'px';

            score += 1
            score_num.textContent = score;
        }

    // Бус та його анімації
    var bus = document.getElementById("bus")
    var div_bus = document.getElementById("div_bus")

    if(r_car == 1){
        bus.setAttribute('src', list_bus[anim0].src)
    }else if(r_car == 2){
        bus.setAttribute('src', list_msk[anim0].src)
    }else if(r_car == 3){
        bus.setAttribute('src', list_mr[anim0].src)
    }

    var cur_bus = parseInt(bus.style.left) || 0;
    bus.style.left = (cur_bus - 38) + 'px';
    div_bus.style.left = (cur_bus - 38) + 'px';

    if(cur_bus <= -550){
        bus.style.left = 4750 + 'px';
        div_bus.style.left = 4750 + 'px';
        r_car = Math.floor(Math.random() * 3) + 1;
    }

    anim0 += 1
    if (anim0 == 4){
        anim0 = 0
    }

    var bus_k = div_bus.getBoundingClientRect();

    if (!(man_k.right < bus_k.left ||
            man_k.left > bus_k.right ||
            man_k.bottom < bus_k.top ||
            man_k.top > bus_k.bottom)) {
                anim_man = 0
                clearInterval(gameInterval);
                game_over("Попав під авто");
        }

}