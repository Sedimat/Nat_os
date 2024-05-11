
// головна зміна гри
var gameinterval = null


klic_s = new Audio("media/sounds/klic.mp3");

function klic(){
    klic_s.volume = 0.4; // встановлюємо гучність
    klic_s.play();
}


var mov_up = false;
var mov_left = false;
var mov_right = false;

var kluch = true

var blocl_klick_l = true
var blocl_klick_r = true
var blocl_klick_up = true


document.addEventListener("keydown", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            if(kluch && blocl_klick_up){
                move_gg("up")
            }
            blocl_klick_up = false
            menu("up")
        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37 ){
            if(kluch && blocl_klick_l){
                move_gg("l")
            }
            blocl_klick_l = false
        }

    // D або стрілка вправо натиснута
        if (event.keyCode === 68 || event.keyCode === 39) {
            if(kluch && blocl_klick_r){
                move_gg("r")
            }

            blocl_klick_r = false
        }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
            menu("down")
        }

    // натиснута кнопка E
        if (event.keyCode === 69) {
            if(kluch){
                move_gg("d_r")
            }

        }
        // натиснута кнопка F
        if (event.keyCode === 70) {
                menu("r_s")
            }
        // натиснута кнопка Q
        if (event.keyCode === 81) {
            if(kluch){
                move_gg("d_l")
            }
        }
});

document.addEventListener("keyup", function(event) {
    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            blocl_klick_l = true
        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            blocl_klick_r = true
        }

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            blocl_klick_up = true
        }

        // натиснута кнопка E
    if (event.keyCode === 69) {
//         clearInterval(gameinterval);
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
    }
});


function leftDiagonalDown(event){
    document.getElementById('l_d').style.backgroundColor = "#613703";
    if(kluch){
        move_gg("d_l")
    }
    klic()
    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function leftDiagonalUp(){
    document.getElementById('l_d').style.backgroundColor = "#291701";

}

function rightDiagonalDown(event){
    document.getElementById('r_d').style.backgroundColor = "#613703";
    if(kluch){
        move_gg("d_r")
    }
    klic()
    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function rightDiagonalUp(){
    document.getElementById('r_d').style.backgroundColor = "#291701";
}


// кнопка вниз
function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    menu("down")
    klic()
    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    if(kluch){
        move_gg("up")
    }
    menu("up")
    klic()
    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    if(kluch){
        move_gg("l")
    }
    klic()
    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    if(kluch){
        move_gg("r")
    }
    klic()
    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    klic()
    event.preventDefault();
    navigator.vibrate(50);
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

}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

// правий селект
function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    menu("r_s")
    klic()
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}

var list_blok = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_blok[0].src = '/media/g_stack/b1.svg';
list_blok[1].src = '/media/g_stack/b2.svg';
list_blok[2].src = '/media/g_stack/b3.svg';
list_blok[3].src = '/media/g_stack/b4.svg';
list_blok[4].src = '/media/g_stack/b5.svg';
list_blok[5].src = '/media/g_stack/b6.svg';
list_blok[6].src = '/media/g_stack/b7.svg';

var list_h1 = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_h1[0].src = '/media/g_stack/fon1.svg';
list_h1[1].src = '/media/g_stack/kran.svg';
list_h1[2].src = '/media/g_stack/kran0.svg';
list_h1[3].src = '/media/g_stack/man_jump.svg';
list_h1[4].src = '/media/g_stack/zastavka.svg';


var man_jump = new Image()
man_jump.src = '/media/g_stack/man_jump.svg'

var list_man = [new Image(), new Image(), new Image(), new Image()]

list_man[0].src = '/media/g_stack/man1.svg';
list_man[1].src = '/media/g_stack/man2.svg';
list_man[2].src = '/media/g_stack/man3.svg';
list_man[3].src = '/media/g_stack/man4.svg';

var list_man_l = [new Image(), new Image(), new Image()]

list_man_l[0].src = '/media/g_stack/man_l_1.svg';
list_man_l[1].src = '/media/g_stack/man_l_2.svg';
list_man_l[2].src = '/media/g_stack/man_l_3.svg';

var list_man_move = [new Image(), new Image(), new Image()]

list_man_move[0].src = '/media/g_stack/man_move1.svg';
list_man_move[1].src = '/media/g_stack/man_move2.svg';
list_man_move[2].src = '/media/g_stack/man_move3.svg';

var list_del = [new Image(), new Image(), new Image()]

list_del[0].src = '/media/g_stack/del1.svg';
list_del[1].src = '/media/g_stack/del2.svg';
list_del[2].src = '/media/g_stack/del3.svg';

var list_kill = [new Image(), new Image(), new Image()]

list_kill[0].src = '/media/g_stack/kill1.svg';
list_kill[1].src = '/media/g_stack/kill2.svg';
list_kill[2].src = '/media/g_stack/kill3.svg';

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"


var list_game1 = [[0,0], [1,"b2"], [2,"Q4"], [0,0],  [1,"Q6"], [0, 0], [0,0], [1,"g6"], [0,0] ]

var list_game = []
//list_game =  [[1, 'hljky'], [0,0], [0,0], [0,'mfd4'], [1,'m56s'], [1, 'mx23'], [1,'fgbf098'], [1,'mb12'], [0,'mf45'], [1,'mnb78'],[1, 'bvg56'], [1,"f12"], [1,'m60'], [1,'m61'], [1,'m43'],
//                 [1, "fwef234we"], [1,'fwvevs'], [1,'m8'], [0,'m1'], [1,"m2"], [1, 'm3'], [1,'m4'], [1,'cm23'], [1,'m0'], [1,"wfwfwwqdwq"],[1, "m55"], [1,'ergr43'], [1,'m67'], [1,'egerrge34'], [1,'fewfwef2342d'],
//                 [1, '34rf'], [1,'fwfvsdv'], [1,'09evr'], [1,'nbnmgh'], [1,'voier0vj9'], [1, 'l1'], [1,'wefgwegh'], [1,'fer436f4'], [1,'dqwdq'], [1,'l3'],[1, 'm19'], [1,'m29'], [1,'m89'], [1,'fweccbcb'], [1,'1232dfwsf'],
//                 [1, 'fwe0'], [1,'fwef0vsdv0'], [1,'fweewf'], [1,"fwefwef"], [1,'fwefwewe3445'], [1, 'lfg'], [1,'fwefwe1'], [1,"yuy"], [1,'l1'], [1,'l2'],[1, 'nh90'], [1,'fewfwfew'], [1,'fwfwefvgbh'], [1,'fwefw34t5'], [1,"sdgege"],
//                 [1, 'fwefwefnvcbc'], [1,'09jrkj0'], [1,'gergre'], [1,"b3"], [1,"Q6"], [1,"b4"], [1,"b5"], [1,"g6"], [1,"b6"], [1,"b7"], [1,"b8"], [1,"b9"], [1,"g10"], [1,"b11"], [1,"b12"],
//                 [1,"a1"], [1,"a2"], [1,"a3"], [1,"a4"], [1,"a5"], [1,"a6"], [1,"a7"], [1,"a8"], [1,"a9"], [1,"a10"], [1,"a11"], [1,"a12"], [1,"a13"], [1,"a14"], [1,"a15"],
//                 [1,"g1"], [1,"c2"], [1,"c3"], [1,"c4"], [1,"g2"], [1,"c6"], [1,"c7"], [1,"c8"], [1,"c9"], [1,"c10"], [1,"c11"], [1,"c12"], [1,"c13"], [1,"c14"], [1,"c15"]
//                ]

function generate_list(){
    list_game = []
    var rando_man = Math.floor(Math.random() * (72 - 65 + 1)) + 65;
    for (let i = 0; i < 105; i++){

        if(i == rando_man){
            list_game.push([2, 0]);

        }else if(i > 75){
            var r_N = Math.floor(Math.random() * 2);

            if(r_N == 1){
                // генерує рондомний id
                var r_word = '';
                for (let i = 0; i < 5; i++) {
                    let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                    r_word += String.fromCharCode(randomCharCode);
                }
                list_game.push([1,r_word]);
            }else{
                list_game.push([0,0]);
            }

        }else{
            list_game.push([0,0])
        }
    }
}

generate_list()

var content = document.getElementById('content');

var body = document.body;

// виводить головний список гри
//var txt = ''
//
//for (let i = 0; i < list_game.length; i++){
//        txt += list_game[i][0] + " "
//    }
//var news1 = document.createElement('h1');
//    news1.textContent = txt;
//    news1.id = 'news1';
//    news1.style.left =  80 + 'px';
//    news1.style.top =  80 + 'px';
//    news1.style.maxWidth = '330px';
//    news1.style.position = 'absolute';
//    news1.classList.add('menu_txt');
//    body.appendChild(news1);

function add_setings(){
    var menu = document.getElementById('div_menu');

    var div_menu1 = document.createElement('div');
    div_menu1.id = 'div_setings';
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
    img_select.style.top = 300 + 'px';
    img_select.style.height = 115 + 'px';
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');
    div_menu1.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "Number of cranes = " + number_kran;
    new_game.id = 'cranes';
    new_game.classList.add('menu');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 310 + 'px';
    new_game.style.position = 'absolute';
    div_menu1.appendChild(new_game);

    menu.appendChild(div_menu1);
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
    img_zastavka.setAttribute('src', list_h1[4].src);
    img_zastavka.id = 'zastavka';
    img_zastavka.style.left = 0 + 'px';
    img_zastavka.style.top = 100 + 'px';
    img_zastavka.style.width = 1000 + 'px';
    img_zastavka.style.position = 'absolute';
    div_zastavka.appendChild(img_zastavka);

    content.appendChild(div_zastavka);
}

// виводе список з координатами
//

var score = 0;

function game_element(){

var div_game = document.createElement('div');
    div_game.id = 'div_game';
    div_game.style.left = 0 + 'px';
    div_game.style.top = 0 + 'px';
    div_game.style.height = 1000 + 'px';
    div_game.style.width = 1000 + 'px';
    //div_game.style.backgroundColor = 'green';
    div_game.style.position = 'absolute';

var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_h1[0].src);
    img_fon.id = 'fon';
    img_fon.style.left = -15 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.height = 930 + 'px';
    img_fon.style.position = 'absolute';
    content.appendChild(img_fon);

var score_game = document.createElement('h1');
    score_game.textContent = "Score: " + score;
    score_game.id = 'score';
    score_game.style.left =  50 + 'px';
    score_game.style.top =  25 + 'px';
    score_game.style.maxWidth = '830px';
    score_game.style.position = 'absolute';
    score_game.classList.add('score');
    div_game.appendChild(score_game);

var img_kran = document.createElement('img');
    img_kran.setAttribute('src', list_h1[2].src);
    img_kran.id = 'kran';
    img_kran.style.left = -173 + 'px';
    img_kran.style.top = 120 + 'px';
    img_kran.style.height = 140 + 'px';
    img_kran.style.position = 'absolute';
    div_game.appendChild(img_kran);

    content.appendChild(div_game);

var img_kran2 = document.createElement('img');
    img_kran2.setAttribute('src', list_h1[2].src);
    img_kran2.id = 'kran2';
    img_kran2.style.left = 1011 + 'px';
    img_kran2.style.top = 120 + 'px';
    img_kran2.style.height = 140 + 'px';
    img_kran2.style.position = 'absolute';
    div_game.appendChild(img_kran2);

var img_kran3 = document.createElement('img');
    img_kran3.setAttribute('src', list_h1[2].src);
    img_kran3.id = 'kran3';
    img_kran3.style.left = -293 + 'px';
    img_kran3.style.top = 120 + 'px';
    img_kran3.style.height = 140 + 'px';
    img_kran3.style.position = 'absolute';
    div_game.appendChild(img_kran3);

var img_kran4 = document.createElement('img');
    img_kran4.setAttribute('src', list_h1[2].src);
    img_kran4.id = 'kran4';
    img_kran4.style.left = 1191 + 'px';
    img_kran4.style.top = 120 + 'px';
    img_kran4.style.height = 140 + 'px';
    img_kran4.style.position = 'absolute';
    div_game.appendChild(img_kran4);

    content.appendChild(div_game);
}


var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

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
    txt_over.id = 'txt_over';
    txt_over.classList.add('score');
    txt_over.style.left = 300 + 'px';
    txt_over.style.top = 420 + 'px';
    txt_over.style.position = 'absolute';
    div_game_over.appendChild(txt_over);

    var txt_over1 = document.createElement('h1');
    txt_over1.textContent = "Score: " + score;
    txt_over1.id = 'txt_over1';
    txt_over1.classList.add('score');
    txt_over1.style.left = 300 + 'px';
    txt_over1.style.top = 500 + 'px';
    txt_over1.style.position = 'absolute';
    div_game_over.appendChild(txt_over1);

    content.appendChild(div_game_over);
}


var pos_left = 51;
var pos_top = 465;
var pos_key = -1


// розставляє блоки та гравця зі списку
function add_blok(){
    div_game = document.getElementById("div_game")

    for (let i = 0; i < list_game.length; i++) {
        pos_key += 1
        if(pos_key == 15){
            pos_key = 0;
            pos_top += 60;
            pos_left = 51;
        }

        if (list_game[i][0] == 1){
            var img_blok = document.createElement('img');
            var r_bloc = Math.floor(Math.random() * 7);
            img_blok.setAttribute('src', list_blok[r_bloc].src);
            img_blok.id = list_game[i][1];
            img_blok.style.left = pos_left + 'px';
            img_blok.style.top = pos_top + 'px';
            img_blok.style.width = 60 + 'px';
            img_blok.style.position = 'absolute';
            div_game.appendChild(img_blok);

        }else if(list_game[i][0] == 2){
            var img_man = document.createElement('img');
            img_man.setAttribute('src', list_man[0].src);
            img_man.id = 'img_man';
            img_man.style.left = pos_left + 'px';
            img_man.style.top = pos_top - 60 + 'px';
            img_man.style.width = 60 + 'px';
            img_man.style.position = 'absolute';
            div_game.appendChild(img_man);
        }
        pos_left += 60;
    }
}


var id_blok_new = ""

var list_position = [[0, 51], [1, 111], [2, 171], [3, 231], [4, 291], [5, 351], [6, 411], [7,471],
                     [8, 531], [9, 591], [10, 651], [11, 711], [12, 771], [13, 831], [14, 891]]

var throw_kran = [0,0]

// зміна з координатами щоб розбити блок каскою
var kub_1 = 0

// додає блок в кран 1
function add_blok_kran(){

    div_game = document.getElementById("div_game")
    throw_kran = list_position[Math.floor(Math.random() * list_position.length)];
    if (list_game[throw_kran[0]][0] == 1){
        var cunt_it = 0
        for (let i = 0; i < 15; i++) {
            if(list_game[i][0] == 0){
                cunt_it += 1
                throw_kran = list_position[i]
                break;
            }
        }
        if(cunt_it == 0){
                throw_kran = [16, 1000]
            }
    }

    if(throw_kran[0] === throw_kran2[0] || throw_kran[0] === throw_kran3[0] || throw_kran[0] === throw_kran4[0]){
        throw_kran = [16, 1000]
    }

    // генерує рондомний id
    var r_word = '';
    for (let i = 0; i < 5; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    id_blok_new = r_word
    var img_blok = document.createElement('img');
    var r_bloc = Math.floor(Math.random() * 7);
    img_blok.setAttribute('src', list_blok[r_bloc].src);
    img_blok.id = r_word;
    img_blok.style.left = -129 + 'px';
    img_blok.style.top = 218 + 'px';
    img_blok.style.width = 60 + 'px';
    img_blok.style.position = 'absolute';

    div_game.appendChild(img_blok);

    kub_1 = [throw_kran[1], r_word]
}

var id_blok_new2 = ""

var throw_kran2 = [-2,0]

// зміна з координатами щоб розбити блок каскою
var kub_2 = 0

// додає блок в кран 2
function add_blok_kran2(){

    div_game = document.getElementById("div_game")
    throw_kran2 = list_position[Math.floor(Math.random() * list_position.length)];

        if (list_game[throw_kran2[0]][0] == 1){
        var cunt_it = 0
        for (let i = 0; i < 15; i++) {
            if(list_game[i][0] == 0){
                cunt_it += 1
                throw_kran2 = list_position[i]
                break;
            }
        }
        if(cunt_it == 0){
                console.log("Перший Немає пустих")
                throw_kran2 = [16, 1000]
            }
    }

    if(throw_kran2[0] === throw_kran[0] || throw_kran2[0] === throw_kran3[0] || throw_kran2[0] === throw_kran4[0]){
        throw_kran2 = [16, 1000]
    }

    // генерує рондомний id
    var r_word = '';
    for (let i = 0; i < 5; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    id_blok_new2 = r_word
    var img_blok = document.createElement('img');
    var r_bloc = Math.floor(Math.random() * 7);
    img_blok.setAttribute('src', list_blok[r_bloc].src);
    img_blok.id = r_word;
    img_blok.style.left = 1056 + 'px';
    img_blok.style.top = 218 + 'px';
    img_blok.style.width = 60 + 'px';
    img_blok.style.position = 'absolute';

    div_game.appendChild(img_blok);

    kub_2 = [throw_kran2[1], r_word]
}

var id_blok_new3 = ""

var throw_kran3 = [-2,0]

// зміна з координатами щоб розбити блок каскою
var kub_3 = 0

// додає блок в кран 3
function add_blok_kran3(){

    div_game = document.getElementById("div_game")
    throw_kran3 = list_position[Math.floor(Math.random() * list_position.length)];

        if (list_game[throw_kran3[0]][0] == 1){

        var cunt_it = 0
        for (let i = 0; i < 15; i++) {
            if(list_game[i][0] == 0){
                cunt_it += 1
                throw_kran3 = list_position[i]
                break;
            }
            }
            if(cunt_it == 0){
                throw_kran3 = [16, 1000]
            }
        }

    if((throw_kran3[0] === throw_kran[0] || throw_kran3[0] === throw_kran2[0] || throw_kran3[0] === throw_kran4[0])){
        throw_kran3 = [16, 1000]
    }

    // генерує рондомний id
    var r_word = '';
    for (let i = 0; i < 5; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    id_blok_new3 = r_word
    var img_blok = document.createElement('img');
    var r_bloc = Math.floor(Math.random() * 7);
    img_blok.setAttribute('src', list_blok[r_bloc].src);
    img_blok.id = r_word;
    img_blok.style.left = -249 + 'px';
    img_blok.style.top = 218 + 'px';
    img_blok.style.width = 60 + 'px';
    img_blok.style.position = 'absolute';

    div_game.appendChild(img_blok);

    kub_3 = [throw_kran3[1], r_word]
}

var id_blok_new4 = ""

var throw_kran4 = [-2,0]

// зміна з координатами щоб розбити блок каскою
var kub_4 = 0

// додає блок в кран 4
function add_blok_kran4(){

    div_game = document.getElementById("div_game")
    throw_kran4 = list_position[Math.floor(Math.random() * list_position.length)];

        if (list_game[throw_kran4[0]][0] == 1){
        var cunt_it = 0
        for (let i = 0; i < 15; i++) {
            if(list_game[i][0] == 0){
                cunt_it += 1
                throw_kran4 = list_position[i]
                break
            }
        }
        if(cunt_it == 0){
            throw_kran4 = [16, 1000]
        }
    }

    if(throw_kran4[0] === throw_kran[0] || throw_kran4[0] === throw_kran2[0] || throw_kran4[0] === throw_kran3[0]){
        throw_kran4 = [16, 1000]
    }

    // генерує рондомний id
    var r_word = '';
    for (let i = 0; i < 5; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    id_blok_new4 = r_word
    var img_blok = document.createElement('img');
    var r_bloc = Math.floor(Math.random() * 7);
    img_blok.setAttribute('src', list_blok[r_bloc].src);
    img_blok.id = r_word;
    img_blok.style.left = 1236 + 'px';
    img_blok.style.top = 218 + 'px';
    img_blok.style.width = 60 + 'px';
    img_blok.style.position = 'absolute';

    div_game.appendChild(img_blok);

    kub_4 = [throw_kran4[1], r_word]
}


// рухає ГГ
function move_gg(pos){
    if(!document.getElementById("div_menu") && !document.getElementById("div_zastavka")){
        kluch = false
        var index_gg = 0
        for (let i = 0; i < list_game.length; i++){
            if(list_game[i][0] == 2){
                index_gg = i
                break;
            }
        }
        var gg1 = document.getElementById('img_man')
        var cur_gg1 = parseInt(gg1.style.left) || 0;
        // якщо йде на ліво
        if(pos == "r" && cur_gg1 != 891){
            if(list_game[index_gg + 1][0] == 0 && cur_gg1 != 891 && list_game[index_gg - 14][0] == 0){

                var anim = 0
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {
                        var gg = document.getElementById('img_man')
                        var cur_gg = parseInt(gg.style.left) || 0;
                        gg.style.left = (cur_gg + 15) + 'px';

                        gg.setAttribute('src', list_man_l[anim].src);
                        gg.style.transform = "scaleX(-1)";
                        anim += 1
                        if(anim == 3){
                            anim = 0
                        }
                        if (i === 3) {
                            gg.setAttribute('src', list_man[0].src);
                            gg.style.transform = "scaleX(1)";

                            if(list_game[index_gg + 1][0] == 1){
                                var cur_gg = parseInt(gg.style.left) || 0;
                                gg.style.left = (cur_gg - 60 ) + 'px';
                                kluch = true
                            }else{
                                list_game[index_gg] = [0, 0]
                                list_game[index_gg + 1] = [2, 0]
                                kluch = true
                            }
                        }
                    }, i * 100);
                }

            // якщо рухає блок на право
            }else if(list_game[index_gg + 1][0] == 1 && list_game[index_gg + 2] && list_game[index_gg + 2][0] == 0
            && list_game[index_gg - 14][0] == 0 && cur_gg1 != 831 && list_game[index_gg - 29] && list_game[index_gg - 29][0] == 0){
                var anim1 = 0
                var blok_id1 = list_game[index_gg + 1][1]
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {
//                            var blok_id = list_game[index_gg + 1][1]
                            var blok = document.getElementById(blok_id1)
                            var gg = document.getElementById('img_man')
                            var cur_blok = parseInt(blok.style.left) || 0;
                            var cur_gg = parseInt(gg.style.left) || 0;

                            gg.style.left = (cur_gg + 15) + 'px';
                            blok.style.left = (cur_blok + 15) + 'px';

                            gg.setAttribute('src', list_man_move[anim1].src);
                            gg.style.transform = "scaleX(-1)";
                            anim1 += 1
                            if(anim1 == 3){
                                anim1 = 0
                            }
                            if (i === 0) {
                                list_game[index_gg + 1] = [0, 0]
                            }

                            if (i === 3) {
                                gg.setAttribute('src', list_man[0].src);
                                gg.style.transform = "scaleX(1)";

                                if(list_game[index_gg + 2][0] == 1){
                                    gg.style.left = (cur_gg - 45) + 'px';
                                    blok.style.left = (cur_blok - 45) + 'px';
                                    list_game[index_gg] = [2, 0]
                                    list_game[index_gg + 1] = [1, blok_id1]

                                }else{
                                    list_game[index_gg] = [0, 0]
                                    list_game[index_gg + 1] = [2, 0]
                                    list_game[index_gg + 2] = [1, blok_id1]
                                }


                                kluch = true
                            }
                    }, i * 100);
                }
            }else{
                kluch = true
            }
        // якщо йде на право
        }else if(pos == "l" && cur_gg1 != 51 ){
            if(list_game[index_gg - 1][0] == 0 && list_game[index_gg - 16][0] == 0){
                var anim1 = 0
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {

                        var gg = document.getElementById('img_man')
                        var cur_gg = parseInt(gg.style.left) || 0;
                        gg.style.left = (cur_gg - 15) + 'px';

                        gg.setAttribute('src', list_man_l[anim1].src);
                        anim1 += 1
                        if(anim1 == 3){
                            anim1 = 0
                        }
                        if (i === 3) {
                            gg.setAttribute('src', list_man[0].src);
                            if(list_game[index_gg - 1][0] == 1){
                                var cur_gg = parseInt(gg.style.left) || 0;
                                gg.style.left = (cur_gg + 60 ) + 'px';
                                kluch = true
                            }else{
                            list_game[index_gg] = [0, 0]
                            list_game[index_gg - 1] = [2, 0]
                            kluch = true
                            }
                        }
                    }, i * 100);
                }
             // якщо рухає блок на ліво
            }else if(list_game[index_gg - 1][0] == 1 && list_game[index_gg - 16][0] == 0 && list_game[index_gg - 2][0] == 0
                               && cur_gg1 != 111 && list_game[index_gg - 31] && list_game[index_gg - 31][0] == 0 ){
                var anim1 = 0
                var blok_id1 = list_game[index_gg - 1][1]
                var back = 0
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {
                            back += 1
                            var blok_id = list_game[index_gg - 1][1]
                            var blok = document.getElementById(blok_id1)
                            var gg = document.getElementById('img_man')
                            var cur_blok = parseInt(blok.style.left) || 0;
                            var cur_gg = parseInt(gg.style.left) || 0;

                            gg.style.left = (cur_gg - 15) + 'px';
                            blok.style.left = (cur_blok - 15) + 'px';
                            gg.setAttribute('src', list_man_move[anim1].src);
                            anim1 += 1
                            if(anim1 == 3){
                                anim1 = 0
                            }
                            if (i === 0) {
                                list_game[index_gg - 1] = [0, 0]

                            }
                            if (i === 3) {
                                gg.setAttribute('src', list_man[0].src);

                                if(list_game[index_gg - 2][0] == 1){
                                    gg.style.left = (cur_gg + 45) + 'px';
                                    blok.style.left = (cur_blok + 45) + 'px';
                                    list_game[index_gg] = [2, 0]
                                    list_game[index_gg - 1] = [1, blok_id1]

                                }else{
                                    list_game[index_gg] = [0, 0]
                                    list_game[index_gg - 1] = [2, 0]
                                    list_game[index_gg - 2] = [1, blok_id1]

                                }
                                kluch = true
                            }

                    }, i * 100);
                }
            }else{
                kluch = true
            }

        }else if(pos == "d_r" && index_gg > 28 && cur_gg1 != 891){ // якщт гравець стрибає вправо
            if(list_game[index_gg + 1][0] == 1 && list_game[index_gg - 14][0] == 0){
                var anim = 0
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        if (i < 4){
                            var gg_t = document.getElementById('img_man')
                            var cur_gg_t = parseInt(gg_t.style.top) || 0;
                            gg_t.style.top = (cur_gg_t - 15) + 'px';
                            gg_t.setAttribute('src', list_h1[3].src);
                        }else{
                            var gg = document.getElementById('img_man')
                            var cur_gg = parseInt(gg.style.left) || 0;
                            gg.style.left = (cur_gg + 15) + 'px';
                            gg.setAttribute('src', list_man_l[anim].src);
                            gg.style.transform = "scaleX(-1)";
                            anim += 1
                            if(anim == 3){
                                anim = 0
                            }
                        }

                        if (i === 7) {
                            gg.setAttribute('src', list_man[0].src);
                            gg.style.transform = "scaleX(1)";
                            list_game[index_gg] = [0, 0]
                            list_game[index_gg - 14] = [2, 0]
                            kluch = true
                        }
                    }, i * 100);
                }
            }else if(list_game[index_gg + 1][0] == 1 && list_game[index_gg - 14][0] == 1
                     && list_game[index_gg - 13][0] == 0 && list_game[index_gg - 29][0] == 0 && cur_gg1 != 831 ){ // якщо штавха по діагоналі
                var anim = 0
                var blok_id1 = list_game[index_gg - 14][1]
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        if (i < 4){
                            var gg_t = document.getElementById('img_man')
                            var cur_gg_t = parseInt(gg_t.style.top) || 0;
                            gg_t.style.top = (cur_gg_t - 15) + 'px';
                            gg_t.setAttribute('src', list_h1[3].src);
                        }else{
                            var gg = document.getElementById('img_man')
                            var cur_gg = parseInt(gg.style.left) || 0;
                            var blok_id = list_game[index_gg - 14][1]
                            var blok = document.getElementById(blok_id1)
                            var cur_blok = parseInt(blok.style.left) || 0;
                            blok.style.left = (cur_blok + 15) + 'px';
                            gg.style.left = (cur_gg + 15) + 'px';

                            gg.setAttribute('src', list_man_l[anim].src);
                            gg.style.transform = "scaleX(-1)";
                            anim += 1
                            if(anim == 3){
                                anim = 0
                            }
                        }

                        if (i === 0) {
                            list_game[index_gg - 14] = [0, 0]
                        }


                        if (i === 7) {
                            gg.setAttribute('src', list_man[0].src);
                            gg.style.transform = "scaleX(1)";

                            list_game[index_gg] = [0, 0]
                            list_game[index_gg - 14] = [2, 0]
                            list_game[index_gg - 13] = [1, blok_id1]
                            kluch = true
                        }

                    }, i * 100);
                }
            }else{
                kluch = true
            }
        }else if(pos == "d_l" && index_gg > 28){ // якщт гравець стрибає вліво
            if(list_game[index_gg - 1][0] == 1 && list_game[index_gg - 16][0] == 0){
                var anim = 0
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        if (i < 4){
                            var gg_t = document.getElementById('img_man')
                            var cur_gg_t = parseInt(gg_t.style.top) || 0;
                            gg_t.style.top = (cur_gg_t - 15) + 'px';
                            gg_t.setAttribute('src', list_h1[3].src);
                            gg_t.style.transform = "scaleX(-1)";
                        }else{
                            var gg = document.getElementById('img_man')
                            var cur_gg = parseInt(gg.style.left) || 0;
                            gg.style.left = (cur_gg - 15) + 'px';
                            gg.setAttribute('src', list_man_l[anim].src);
                            gg.style.transform = "scaleX(1)";
                            anim += 1
                            if(anim == 3){
                                anim = 0
                            }
                        }

                        if (i === 7) {
                            gg.setAttribute('src', list_man[0].src);
                            list_game[index_gg] = [0, 0]
                            list_game[index_gg - 16] = [2, 0]
                            kluch = true
                        }
                    }, i * 100);
                }
            }else if(list_game[index_gg - 1][0] == 1 && list_game[index_gg - 16][0] == 1
                     && list_game[index_gg - 17][0] == 0 && list_game[index_gg - 31][0] == 0 && cur_gg1 != 111){
                var anim = 0
                var blok_id1 = list_game[index_gg - 16][1]
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        if (i < 4){
                            var gg_t = document.getElementById('img_man')
                            var cur_gg_t = parseInt(gg_t.style.top) || 0;
                            gg_t.style.top = (cur_gg_t - 15) + 'px';
                            gg_t.setAttribute('src', list_h1[3].src);
                            gg_t.style.transform = "scaleX(-1)";
                        }else{
                            var gg = document.getElementById('img_man')
                            var cur_gg = parseInt(gg.style.left) || 0;
                            var blok_id = list_game[index_gg - 16][1]
                            var blok = document.getElementById(blok_id1)
                            var cur_blok = parseInt(blok.style.left) || 0;
                            blok.style.left = (cur_blok - 15) + 'px';
                            gg.style.left = (cur_gg - 15) + 'px';

                            gg.setAttribute('src', list_man_l[anim].src);
                            gg.style.transform = "scaleX(1)";
                            anim += 1
                            if(anim == 3){
                                anim = 0
                            }
                        }
                        if (i === 0) {
                            list_game[index_gg - 16] = [0, 0]
                        }

                        if (i === 7) {
                            gg.setAttribute('src', list_man[0].src);
                            list_game[index_gg] = [0, 0]
                            list_game[index_gg - 16] = [2, 0]
                            list_game[index_gg - 17] = [1, blok_id1]
                            kluch = true
                        }

                    }, i * 100);
                }
            }else{
                kluch = true
            }
        }else if(pos == "up" && index_gg > 30){ // якщт гравець стрибає
            for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                var gg_t = document.getElementById('img_man')
                var cur_gg_t = parseInt(gg_t.style.top) || 0;
                gg_t.style.top = (cur_gg_t - 15) + 'px';
                gg_t.setAttribute('src', list_h1[3].src);


                if(list_game[index_gg - 30][0] == 1 && cur_gg1 == kub_1[0]){
                    list_game[index_gg - 30] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_1[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_1[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }
                }
                else if(list_game[index_gg - 45] && list_game[index_gg - 45][0] == 1 && cur_gg1 == kub_1[0]){
                    list_game[index_gg - 45] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_1[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_1[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }

                }else if(list_game[index_gg - 30][0] == 1 && cur_gg1 == kub_2[0]){
                    list_game[index_gg - 30] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_2[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_2[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }
                }else if(list_game[index_gg - 45] && list_game[index_gg - 45][0] == 1 && cur_gg1 == kub_2[0]){
                    list_game[index_gg - 45] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_2[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_2[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }

                }else if(list_game[index_gg - 30][0] == 1 && cur_gg1 == kub_3[0]){
                    list_game[index_gg - 30] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_3[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_3[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }
                }else if(list_game[index_gg - 45] && list_game[index_gg - 45][0] == 1 && cur_gg1 == kub_3[0]){
                    list_game[index_gg - 45] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_3[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_3[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }

                }else if(list_game[index_gg - 30][0] == 1 && cur_gg1 == kub_4[0]){
                    list_game[index_gg - 30] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_4[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_4[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }
                }else if(list_game[index_gg - 45] && list_game[index_gg - 45][0] == 1 && cur_gg1 == kub_4[0]){
                    list_game[index_gg - 45] = [0,0]
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            document.getElementById(kub_4[1]).setAttribute('src', list_del[i].src);
                            if (i === 2) {
                                document.getElementById(kub_4[1]).remove()
                                score += 5
                                document.getElementById("score").textContent = "Score: " + score;
                            }
                        }, i * 100);
                    }

                }

                if (i === 3) {
                    list_game[index_gg] = [0, 0]
                    list_game[index_gg - 15] = [2, 0]
                    kluch = true
                }
            }, i * 100);
        }
        }else{
                kluch = true
        }
    }
}


// видаляє блоки по одному коли в лінії
function dell_blok(id) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            document.getElementById(id).setAttribute('src', list_del[i].src);
            if (i === 2) {
                document.getElementById(id).remove()
            }
        }, i * 100);
    }
}

// додає блок коли його кидає кран
function add_block_list(id,index) {
    for (let i = 0; i < 16; i++) {
        setTimeout(() => {
            if(document.getElementById(id)){
                var cur_blok = parseInt(document.getElementById(id).style.top) || 0;
                document.getElementById(id).style.top = (cur_blok + 15) + 'px';
                if (i === 15) {
                    if(list_game[index][0] == 1){
                        document.getElementById(id).style.top = 465 + 'px';
                        document.getElementById(list_game[index][1]).remove()
                        list_game[index] = [1, id]
                    }else{
                        document.getElementById(id).style.top = 465 + 'px';
                        list_game[index] = [1, id]
                    }
                }
            }
        }, i * 100);
    }
}

// гравітація гравця
function grav_gg(index){
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            var gg = document.getElementById('img_man')
            var cur_blok = parseInt(gg.style.top) || 0;
            gg.style.top = (cur_blok + 15) + 'px';
            gg.setAttribute('src', list_h1[3].src);
            if (i === 0) {

            }
            if (i === 3) {
                kluch = true
            }

        }, i * 100);
    }

}

var list_delet = []

// рухає блок вних по масиву
function move_block(id, index, blok) {
    var count = 0
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            if(document.getElementById(id) && i < 4){
                var cur_blok = parseInt(document.getElementById(id).style.top) || 0;
                document.getElementById(id).style.top = (cur_blok + 15) + 'px';
            }
            if(i === 0){
                list_game[index] = [0,0]
            }
            if (i === 1) {
                list_game[index + 15] = blok
            }
//            if(i == 4){
//                for (let i = 0; i < list_game.length; i++){
//                    if(list_game[i][1] == id){
//                        count++
//                    }
//                }
//                if(count == 0){
//                    if(document.getElementById(id)){
//                        list_delet.push(id)
//                    }
//                }
//
//            }

        }, i * 100);
    }
}

var anim = 0;
var anim1 = 0;

var count = 0;

var jump = 0;
var key = true;
var i_right = 0

var iter_grav = 0

// кількість кранів
var number_kran = 1

function game(){
    var index_gg = 0
    for (let i = 0; i < list_game.length; i++){
        if(list_game[i][0] == 2){
            index_gg = i
            break;
        }
    }
    // Гравітація гравця
    if(kluch && index_gg + 15 < 105){
        if(list_game[index_gg + 15][0] == 0){
            kluch = false
            list_game[index_gg] = [0,0]
            list_game[index_gg + 15] = [2, 0]
            grav_gg(index_gg)
        }
    }

    if(list_game[index_gg - 15][0] == 1){
        clearInterval(gameinterval)
        gameinterval = null
        kluch = false
        kill()
        game_over()
    }

     //додає новий блок в гру краном 1
    var cur_kran = parseInt(document.getElementById("kran").style.left) || 0;
    if(id_blok_new){
        var cur_blok_left = parseInt(document.getElementById(id_blok_new).style.left) || 0;
        var cur_blok_top = parseInt(document.getElementById(id_blok_new).style.top) || 0;
        if (cur_blok_left == throw_kran[1]){
            document.getElementById("kran").setAttribute('src', list_h1[1].src); // змінює вигляд крану

            add_block_list(id_blok_new, throw_kran[0])
            id_blok_new = ""
            throw_kran = 0

        }else{
            document.getElementById(id_blok_new).style.left = (cur_blok_left + 15) + 'px';
        }
    }
        document.getElementById("kran").style.left = (cur_kran + 15) + 'px';
    if(cur_kran > 1200){
        if(cur_blok_left > 1200){
            document.getElementById(id_blok_new).remove()
            id_blok_new = ""
            throw_kran = 0
            add_blok_kran()
            document.getElementById("kran").setAttribute('src', list_h1[2].src);
            document.getElementById("kran").style.left = -173 + 'px';

        }else{
            add_blok_kran()
            document.getElementById("kran").setAttribute('src', list_h1[2].src);
            document.getElementById("kran").style.left = -173 + 'px';
        }
    }

         //додає новий блок в гру краном 2
    if(number_kran >= 2){
        var cur_kran = parseInt(document.getElementById("kran2").style.left) || 0;
        if(id_blok_new2){
            var cur_blok_left = parseInt(document.getElementById(id_blok_new2).style.left) || 0;
            var cur_blok_top = parseInt(document.getElementById(id_blok_new2).style.top) || 0;
            if (cur_blok_left == throw_kran2[1]){
                document.getElementById("kran2").setAttribute('src', list_h1[1].src); // змінює вигляд крану
                add_block_list(id_blok_new2, throw_kran2[0])
                id_blok_new2 = ""
                throw_kran2 = 0

            }else{
                document.getElementById(id_blok_new2).style.left = (cur_blok_left - 15) + 'px';
            }
        }
        document.getElementById("kran2").style.left = (cur_kran - 15) + 'px';
        if(cur_kran < -200){
            if(cur_blok_left < -100){
                document.getElementById(id_blok_new2).remove()
                id_blok_new2 = ""
                throw_kran2 = 0
                add_blok_kran2()
                document.getElementById("kran2").setAttribute('src', list_h1[2].src);
                document.getElementById("kran2").style.left = 1011 + 'px';

            }else{
                add_blok_kran2()
                document.getElementById("kran2").setAttribute('src', list_h1[2].src);
                document.getElementById("kran2").style.left = 1011 + 'px';
            }
        }
    }

    if(number_kran >= 3){
        var cur_kran = parseInt(document.getElementById("kran3").style.left) || 0;
        if(id_blok_new3){
            var cur_blok_left = parseInt(document.getElementById(id_blok_new3).style.left) || 0;
            var cur_blok_top = parseInt(document.getElementById(id_blok_new3).style.top) || 0;
            if (cur_blok_left == throw_kran3[1]){
                document.getElementById("kran3").setAttribute('src', list_h1[1].src); // змінює вигляд крану
                add_block_list(id_blok_new3, throw_kran3[0])
                id_blok_new3 = ""
                throw_kran3 = 0

            }else{
                document.getElementById(id_blok_new3).style.left = (cur_blok_left + 15) + 'px';
            }
        }
        document.getElementById("kran3").style.left = (cur_kran + 15) + 'px';
        if(cur_kran > 1300){
            if(cur_blok_left > 1200){
                document.getElementById(id_blok_new3).remove()
                id_blok_new3 = ""
                throw_kran3 = 0
                add_blok_kran3()
                document.getElementById("kran3").setAttribute('src', list_h1[2].src);
                document.getElementById("kran3").style.left = -293 + 'px';

            }else{
                add_blok_kran3()
                document.getElementById("kran3").setAttribute('src', list_h1[2].src);
                document.getElementById("kran3").style.left = -293 + 'px';
            }
        }
    }

    if(number_kran >= 4){
        var cur_kran = parseInt(document.getElementById("kran4").style.left) || 0;
        if(id_blok_new4){
            var cur_blok_left = parseInt(document.getElementById(id_blok_new4).style.left) || 0;
            var cur_blok_top = parseInt(document.getElementById(id_blok_new4).style.top) || 0;
            if (cur_blok_left == throw_kran4[1]){
                document.getElementById("kran4").setAttribute('src', list_h1[1].src); // змінює вигляд крану
                add_block_list(id_blok_new4, throw_kran4[0])
                id_blok_new4 = ""
                throw_kran4 = 0

            }else{
                document.getElementById(id_blok_new4).style.left = (cur_blok_left - 15) + 'px';
            }
        }
        document.getElementById("kran4").style.left = (cur_kran - 15) + 'px';
        if(cur_kran < -400){
            if(cur_blok_left < -300){
                document.getElementById(id_blok_new4).remove()
                id_blok_new4 = ""
                throw_kran4 = 0
                add_blok_kran4()
                document.getElementById("kran4").setAttribute('src', list_h1[2].src);
                document.getElementById("kran4").style.left = 1191 + 'px';

            }else{
            add_blok_kran4()
            document.getElementById("kran4").setAttribute('src', list_h1[2].src);
            document.getElementById("kran4").style.left = 1191 + 'px';
            }
        }
    }

    anim += 1;
    if (anim == 3){
        anim = 0
    }
    count += 1;
    if (count == 10){
        count = 0
        anim1 += 1;
//        for (let i = 0; i < list_game.length; i++) {
//            if(list_game[i][0] == 2){
//                index = i
//            }
//        }

    }

    if (anim1 == 4){
        anim1 = 0
    }

    var anim_man = Math.floor(Math.random() * 3);

    var man = document.getElementById("img_man")

    var index = 0;
    for (let i = 0; i < list_game.length; i++) {
        if(list_game[i][0] == 2){
            index = i
        }
    }

    // переміщеня як гравітація блока
    if(iter_grav == 0){
        for (let i = 0; i < 105; i++){
            if(i + 15 < 105){
                if(list_game[i][0] == 1 && list_game[i + 15][0] == 0){
                    var blok = list_game[i]
                    var id_blok = list_game[i][1]
                    move_block(id_blok, i, blok)
                }
            }
        }
    }

    iter_grav += 1
    if(iter_grav == 2){
        iter_grav = 0
    }

    // видаляє першу лінію якщо всі заповнені
    var line_right = list_game.slice(90, 105).every(function(subarray) {
        return subarray[0] === 1;
    });

    if (line_right) {
        score += 75
        document.getElementById("score").textContent = "Score: " + score;

        for (let i = 90; i < list_game.length; i++){
            dell_blok(list_game[i][1])
            list_game[i] = [0, 0]
        }
    }

    // анімує коли не рухаеться
    if(kluch){
        man.setAttribute('src', list_man[anim1].src);
    }

//    // виводе список гри
//    var txt1 = ''
//
//    for (let i = 0; i < list_game.length; i++){
//        txt1 += list_game[i][0] + " "
//        }
//
//    document.getElementById("news1").textContent = txt1;
}


function kill(){
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            document.getElementById("img_man").setAttribute('src', list_kill[i].src);
            kluch = false
        }, i * 100);
    }
}

kluch = false
add_zastavka()

var menu_pos = 0
var menu_pos1 = 0

function menu(nav){
    if(nav == "r_s"){
        if(document.getElementById("div_game_over")){
            document.getElementById("div_game_over").remove()
            document.getElementById("div_game").remove()
            pos_left = 51;
            pos_top = 465;
            pos_key = -1
            score = 0
            add_menu()

        }else if(document.getElementById("div_zastavka")){
            document.getElementById("div_zastavka").remove()
            add_menu()
        }else if(document.getElementById("div_setings")){
              document.getElementById("div_setings").remove()

        }else if (document.getElementById("div_menu")){
            if(menu_pos == 0){
                document.getElementById("div_menu").remove()
                generate_list()
                game_element()
                add_blok()
                add_blok_kran()
                add_blok_kran2()
                add_blok_kran3()
                add_blok_kran4()
                kluch = true
                gameinterval = setInterval(game, 120)
            }else if(menu_pos == 1){
                add_setings()

            }else if(menu_pos == 3){
                window.location.href = "/games";
            }
        }else if (document.getElementById("div_game") && !document.getElementById("div_menu1") ){ // Ставе гру на паузу та відкрива меню
            clearInterval(gameinterval)
            gameinterval = null
            kluch = false

            add_menu1()
        }else if(document.getElementById("div_game") && document.getElementById("div_menu1")) {
            if(menu_pos1 == 0){
                document.getElementById("div_menu1").remove()
                gameinterval = setInterval(game, 120)
                kluch = true
            }else if(menu_pos1 == 1){
                clearInterval(gameinterval)
                document.getElementById("div_game").remove() // видаляє елементи гри
                document.getElementById("div_menu1").remove()
                generate_list()
                game_element()
                kluch = true
                pos_left = 51;
                pos_top = 465;
                pos_key = -1
                score = 0

                add_blok()
                add_blok_kran()
                add_blok_kran2()
                add_blok_kran3()
                add_blok_kran4()
                gameinterval = setInterval(game, 120)
                document.getElementById("score").textContent = "Score: " + score;

                menu_pos1 = 0

            }else if(menu_pos1 == 2){
                window.location.href = "/games";
            }
        }
    //навігація в 1 меню
    }else if (nav == "down" && menu_pos < 3 && document.getElementById("div_menu") && !document.getElementById("div_setings")){
            var cur_select = parseInt(document.getElementById("select").style.top) || 0;
            document.getElementById("select").style.top = (cur_select + 125) + 'px';
            menu_pos += 1;

    }else if (nav == "up" && menu_pos > 0 && document.getElementById("div_menu") && !document.getElementById("div_setings")){
            var cur_select = parseInt(document.getElementById("select").style.top) || 0;
            document.getElementById("select").style.top = (cur_select - 125) + 'px';
            menu_pos -= 1;

    //навігація в 2 меню
    }else if (nav == "down" && menu_pos1 < 2 && document.getElementById("div_menu1")){
            var cur_select = parseInt(document.getElementById("select1").style.top) || 0;
            document.getElementById("select1").style.top = (cur_select + 120) + 'px';
            menu_pos1 += 1;

    }else if (nav == "up" && menu_pos1 > 0 && document.getElementById("div_menu1")){
            var cur_select = parseInt(document.getElementById("select1").style.top) || 0;
            document.getElementById("select1").style.top = (cur_select - 120) + 'px';
            menu_pos1 -= 1;

    }else if (nav == "down" && number_kran > 1 && document.getElementById("div_setings")){
            number_kran -= 1;
            document.getElementById("cranes").textContent = "Number of cranes = " + number_kran;

    }else if (nav == "up" && number_kran < 4 && document.getElementById("div_setings")){
            number_kran += 1;
            document.getElementById("cranes").textContent = "Number of cranes = " + number_kran;

    }
}

//add_menu1()