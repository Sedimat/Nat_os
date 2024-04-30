
klic_s = new Audio("media/sounds/klic.mp3");

function klic(){
    klic_s.volume = 0.4; // встановлюємо гучність
    klic_s.play();
}

function move_element(pos){
    console.log(pos)
}



document.addEventListener("keydown", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            mov_up = true
        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            mov_left = true

        }

    // D або стрілка вправо натиснута
        if (event.keyCode === 68 || event.keyCode === 39) {
            mov_right = true

        }
});

document.addEventListener("keyup", function(event) {
    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
//            mov_left = false

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
//            mov_right = false

        }

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){

        }
});

// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

//    // натиснута кнопка W
//        if (event.keyCode === 87 || event.keyCode === 38){
//            move_element("W")
//        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_element("S")
        }

//        // A або стрілка вліво
//        if (event.keyCode === 65 || event.keyCode === 37){
//            move_element("A")
//            mov_left = true
//        }
//
//        // D або стрілка вправо
//        if (event.keyCode === 68 || event.keyCode === 39){
//            move_element("D")
//            mov_right = true
//
//        }

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
    DOWN = setInterval(() => move_element("S"), 50);
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
    UP = setInterval(() => move_element("W"), 50);
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
    LEFT = setInterval(() => move_element("L"), 50);
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
    RIGHT = setInterval(() => move_element("R"), 50);
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

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
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

var list_h1 = [new Image(), new Image(), new Image(), new Image()]

list_h1[0].src = '/media/g_stack/fon.svg';
list_h1[1].src = '/media/g_ball/h02.svg';
list_h1[2].src = '/media/g_ball/h03.svg';
list_h1[3].src = '/media/g_ball/h04.svg';

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

var list_game = [0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 0, 1]


var content = document.getElementById('content');

var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_h1[0].src);
    img_fon.id = 'fon';
    img_fon.style.left = 0 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.height = 900 + 'px';
    img_fon.style.position = 'absolute';
    content.appendChild(img_fon);


var pos_left = 64;
function add_blok(){
    var div_game = document.createElement('div');
        div_game.id = 'div_game';
        div_game.style.left = 0 + 'px';
        div_game.style.top = 0 + 'px';
        div_game.style.height = 1000 + 'px';
        div_game.style.width = 1000 + 'px';
//        div_game.style.backgroundColor = 'green';
        div_game.style.position = 'absolute';


    for (let i = 0; i < list_game.length; i++) {

        if (list_game[i] == 1){
            var img_blok = document.createElement('img');
            var r_bloc = Math.floor(Math.random() * 7);
            img_blok.setAttribute('src', list_blok[r_bloc].src);
            img_blok.id = 'img_blok' + i;
            img_blok.style.left = pos_left + 'px';
            img_blok.style.top = 798.5 + 'px';
            img_blok.style.width = 58 + 'px';
            img_blok.style.position = 'absolute';
            div_game.appendChild(img_blok);

        }else if(list_game[i] == 2){

            var img_man = document.createElement('img');
            img_man.setAttribute('src', list_man[0].src);
            img_man.id = 'img_man';
            img_man.style.left = pos_left + 'px';
            img_man.style.top = 740.5 + 'px';
            img_man.style.width = 58 + 'px';
            img_man.style.position = 'absolute';
            div_game.appendChild(img_man);
        }
        pos_left += 58.2;
    }
    content.appendChild(div_game);
}

add_blok()

//document.getElementById("div_game").remove()

function move_man(){

    var index = list_game.indexOf(2);
    if (list_game[index + 1] == 0){
        list_game[index] = 0
        list_game[index + 1] = 2
    }else if(list_game[index + 1] == 1){
        list_game[index] = 0
        list_game[index + 1] = 2
        list_game[index + 2] = 1
    }
}

//move_man()
//move_man()



var mov_up = false;
var mov_left = false;
var mov_right = false;

var anim = 0;
var anim1 = 0;

var count = 0;

var jump = 0;
var key = true;

function game(){

    anim += 1;
    if (anim == 3){
        anim = 0
    }
    count += 1;
    if (count == 10){
        count = 0
        anim1 += 1;
    }

    if (anim1 == 4){
        anim1 = 0
    }

    var anim_man = Math.floor(Math.random() * 3);

    var man = document.getElementById("img_man")

    var index = list_game.indexOf(2);

    if(mov_right){
        var index = list_game.indexOf(2);
        if (list_game[index + 1] == 0){
            list_game[index] = 0
            list_game[index + 1] = 2
            console.log(list_game)
            var cur_man_left = parseInt(man.style.left) || 0;
            man.style.left = (cur_man_left + 58) + 'px';

            mov_right = false


        }else if(list_game[index + 1] == 1){
            list_game[index] = 0
            list_game[index + 1] = 2
            list_game[index + 2] = 1
            mov_right = false

            var cur_man_left = parseInt(man.style.left) || 0;
            man.style.left = (cur_man_left + 58) + 'px';
            var index_blok = "img_blok" + (index + 1)

            var cur_blok = parseInt(document.getElementById(index_blok).style.left) || 0;
            document.getElementById(index_blok).style.left = (cur_blok + 58) + 'px';



    }

    }
//    if(mov_left){
//        man.setAttribute('src', list_man_l[anim].src);
//        man.style.transform = "scaleX(1)";
//    }else if(mov_right){
//
//        man.setAttribute('src', list_man_l[anim].src);
//        man.style.transform = "scaleX(-1)";
//
//    }else if(mov_up){
//        man.setAttribute('src', man_jump.src);
//        man.style.transform = "scaleX(1)";
//        var cur_man = parseInt(man.style.top) || 0;
//
//        if(key){
//            jump += 1
//            man.style.top = (cur_man - 8) + 'px';
//        }else{
//            jump -= 1
//            man.style.top = (cur_man + 8) + 'px';
//        }
//
//        if(jump == 8){
//            key = false;
//        } else if(jump == 0){
//            key = true
//            mov_up = false
//        }





//    }
//    else{
//        man.setAttribute('src', list_man[anim1].src);
//        man.style.transform = "scaleX(1)";
//    }
    man.setAttribute('src', list_man[anim1].src);
}

var gameinterval = setInterval(game, 100)