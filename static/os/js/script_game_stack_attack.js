
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
         clearInterval(gameinterval);
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
list_h1[1].src = '/media/g_stack/kran.svg';
list_h1[2].src = '/media/g_stack/kran0.svg';
list_h1[3].src = '/media/g_stack/fon0.svg';

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

var list_game1 = [[0,0], [1,"b2"], [2,"Q4"], [0,0],  [1,"Q6"], [0, 0], [0,0], [1,"g6"], [0,0] ]

var list_game = [[0, 0], [0,0], [0,0], [0,0], [0,0], [0, 0], [0,0], [0,0], [0,0], [0,0],[0, 0], [1,"f12"], [0,0], [0,0], [0,0],
                 [0, 0], [0,0], [0,0], [0,0], [0,0], [0, 0], [0,0], [0,0], [0,0], [0,0],[0, 0], [0,0], [0,0], [0,0], [0,0],
                 [0, 0], [0,0], [0,0], [0,0], [0,0], [0, 0], [0,0], [0,0], [0,0], [0,0],[0, 0], [0,0], [0,0], [0,0], [0,0],
                 [0, 0], [0,0], [0,0], [0,0], [0,0], [0, 0], [0,0], [0,0], [0,0], [0,0],[0, 0], [0,0], [0,0], [0,0], [0,0],
                 [1,"b1"], [1,"b2"], [1,"Q4"], [1,"b3"], [1,"Q6"], [1,"b4"], [1,"b5"], [1,"g6"], [1,"b6"], [1,"b7"], [1,"b8"], [1,"b9"], [1,"g10"], [1,"b11"], [1,"b12"],
                 [1,"a1"], [1,"a2"], [1,"a3"], [1,"a4"], [0,"a5"], [0,"a6"], [1,"a7"], [1,"a8"], [1,"a9"], [1,"a10"], [1,"a11"], [1,"a12"], [1,"a13"], [1,"a14"], [1,"a15"],
                 [1,"g1"], [0,"c2"], [1,"c3"], [1,"c4"], [1,"g2"], [1,"c6"], [0,"c7"], [1,"c8"], [1,"c9"], [1,"c10"], [1,"c11"], [1,"c12"], [1,"c13"], [1,"c14"], [1,"c15"]
                ]


var content = document.getElementById('content');

var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_h1[0].src);
    img_fon.id = 'fon';
    img_fon.style.left = -15 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.height = 930 + 'px';
    img_fon.style.position = 'absolute';
    content.appendChild(img_fon);

var img_fon0 = document.createElement('img');
    img_fon0.setAttribute('src', list_h1[3].src);
    img_fon0.id = 'fon0';
    img_fon0.style.left = 52 + 'px';
    img_fon0.style.top = 113 + 'px';
    img_fon0.style.width = 899 + 'px';
    img_fon0.style.position = 'absolute';
    content.appendChild(img_fon0);

var img_kran = document.createElement('img');
    img_kran.setAttribute('src', list_h1[2].src);
    img_kran.id = 'kran';
    img_kran.style.left = -173 + 'px';
    img_kran.style.top = 120 + 'px';
    img_kran.style.height = 140 + 'px';
    img_kran.style.position = 'absolute';
    content.appendChild(img_kran);

var pos_left = 51;
var pos_top = 465;
var pos_key = -1


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
    content.appendChild(div_game);
}


add_blok()

var id_blok_new = ""

var list_position = [[0, 51], [1, 111], [2, 171], [3, 231], [4, 291], [5, 351], [6, 411], [7,471],
                     [8, 531], [9, 591], [10, 651], [11, 711], [12, 771], [13, 831], [14, 891]]

var throw_kran = 0

function add_blok_kran(){

    div_game = document.getElementById("div_game")

    throw_kran = list_position[Math.floor(Math.random() * list_position.length)];


    var r_word = '';
    for (let i = 0; i < 4; i++) {
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
}

add_blok_kran()

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

// рухає блок вних по масиву
function move_block(id) {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            var cur_blok = parseInt(document.getElementById(id).style.top) || 0;
            document.getElementById(id).style.top = (cur_blok + 15) + 'px';
            if (i === 7) {
            }
        }, i * 100);
    }
}

function add_block_list(id,index) {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            var cur_blok = parseInt(document.getElementById(id).style.top) || 0;
            document.getElementById(id).style.top = (cur_blok + 15) + 'px';
            if (i === 11) {
                document.getElementById(id).style.top = 465 + 'px';
                list_game[index] = [1, id]
            }
        }, i * 100);
    }
}


var mov_up = false;
var mov_left = false;
var mov_right = false;

var anim = 0;
var anim1 = 0;

var count = 0;

var jump = 0;
var key = true;
var i_right = 0


function game(){

    var cur_kran = parseInt(document.getElementById("kran").style.left) || 0;

    if(id_blok_new != 0){
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
        add_blok_kran()
        document.getElementById("kran").setAttribute('src', list_h1[2].src);
        document.getElementById("kran").style.left = -173 + 'px';

    }

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

//    var man = document.getElementById("img_man")

    var index = 0;
    for (let i = 0; i < list_game.length; i++) {
        if(list_game[i][0] == 2){
            index = i
        }
    }
    // тест переміщеня
    for (let i = 0; i < list_game.length; i++){
    if(i + 15 < 104){
        if(list_game[i][0] == 1 && list_game[i + 15][0] == 0){

            var blok = list_game[i]
            var id_blok = list_game[i][1]

            move_block(id_blok)

            list_game[i] = [0,0]
            list_game[i + 15] = blok


        }
    }
    }

//    if(mov_right){
//        if (list_game[index + 1][0] == 0){
//
//            if(i_right < 4){
//                i_right += 1
//                var cur_man_left = parseInt(man.style.left) || 0;
//                man.style.left = (cur_man_left + 15) + 'px';
//            }else{
//                i_right = 0
//                var i_man = list_game[index]
//                list_game[index] = [0,0]
//                list_game[index + 1] = i_man
//                mov_right = false
//                console.log(list_game)
//            }
//
//        }else if(list_game[index + 1][0] == 1 && list_game[index + 2][0] == 0){
//            var i_blok = list_game[index + 1]
//
//            if(i_right < 4){
//                i_right += 1
//                var cur_man_left = parseInt(man.style.left) || 0;
//                man.style.left = (cur_man_left + 15) + 'px';
//
//                var index_blok = i_blok[1]
//                var cur_blok = parseInt(document.getElementById(index_blok).style.left) || 0;
//                document.getElementById(index_blok).style.left = (cur_blok + 15) + 'px';
//            }else{
//                i_right = 0
//                var i_man = list_game[index]
//                list_game[index] = [0,0]
//                list_game[index + 1] = i_man
//                list_game[index + 2] = i_blok
//                mov_right = false
//                console.log(list_game)
//            }
//        }
//    }
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

//    }else{
//        man.setAttribute('src', list_man[anim1].src);
//        man.style.transform = "scaleX(1)";
//    }
//    man.setAttribute('src', list_man[anim1].src);
}

var gameinterval = setInterval(game, 150)