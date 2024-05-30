console.log("Arkanoid")

var list_element = [new Image(), new Image(), new Image()]

list_element[0].src = '/media/g_arkanoid/fon.svg';
list_element[1].src = '/media/g_arkanoid/platforma.svg';
list_element[2].src = '/media/g_arkanoid/ball.svg';

var list_blok = [new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image()]

list_blok[0].src = '/media/g_arkanoid/blok1.svg';
list_blok[1].src = '/media/g_arkanoid/blok2.svg';
list_blok[2].src = '/media/g_arkanoid/blok3.svg';
list_blok[3].src = '/media/g_arkanoid/blok4.svg';
list_blok[4].src = '/media/g_arkanoid/blok5.svg';
list_blok[5].src = '/media/g_arkanoid/blok6.svg';



var content = document.getElementById('content')

function game_element(){

    var div_game_element = document.createElement('div');
    div_game_element.id = 'div_game_element';
    div_game_element.style.left = 0 + 'px';
    div_game_element.style.top = 0 + 'px';
    div_game_element.style.position = 'absolute';

    var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_element[0].src);
    img_fon.id = 'img_fon';
    img_fon.style.left = 0 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.height = 899 + 'px';
    img_fon.style.position = 'absolute';

    div_game_element.appendChild(img_fon);

    var img_ball = document.createElement('img');
    img_ball.setAttribute('src', list_element[2].src);
    img_ball.id = 'ball';
    img_ball.style.left = 450 + 'px';
    img_ball.style.top = 420 + 'px';
    img_ball.style.height = 30 + 'px';
    img_ball.style.position = 'absolute';

    div_game_element.appendChild(img_ball);


    var div_pl_l = document.createElement('div');
    div_pl_l.id = 'div_pl_l';
    div_pl_l.style.left = 400 + 'px';
    div_pl_l.style.top = 870 + 'px';
    div_pl_l.style.height = 30 + 'px';
    div_pl_l.style.width = 40 + 'px';
    div_pl_l.style.backgroundColor = 'green';
    div_pl_l.style.position = 'absolute';
    div_game_element.appendChild(div_pl_l);

    var div_pl_c = document.createElement('div');
    div_pl_c.id = 'div_pl_c';
    div_pl_c.style.left = 440 + 'px';
    div_pl_c.style.top = 870 + 'px';
    div_pl_c.style.height = 30 + 'px';
    div_pl_c.style.width = 120 + 'px';
    div_pl_c.style.backgroundColor = 'red';
    div_pl_c.style.position = 'absolute';
    div_game_element.appendChild(div_pl_c);

    var div_pl_r = document.createElement('div');
    div_pl_r.id = 'div_pl_r';
    div_pl_r.style.left = 560 + 'px';
    div_pl_r.style.top = 870 + 'px';
    div_pl_r.style.height = 30 + 'px';
    div_pl_r.style.width = 40 + 'px';
    div_pl_r.style.backgroundColor = 'blue';
    div_pl_r.style.position = 'absolute';
    div_game_element.appendChild(div_pl_r);

    var img_platform = document.createElement('img');
    img_platform.setAttribute('src', list_element[1].src);
    img_platform.id = 'platform';
    img_platform.style.left = 400 + 'px';
    img_platform.style.top = 870 + 'px';
    img_platform.style.height = 30 + 'px';
    img_platform.style.position = 'absolute';
    div_game_element.appendChild(img_platform);

//    var blok1 = document.createElement('img');
//    blok1.setAttribute('src', list_blok[0].src);
//    blok1.id = 'blok1';
//    blok1.style.left = 200 + 'px';
//    blok1.style.top = 200 + 'px';
//    blok1.style.height = 50 + 'px';
//    blok1.style.position = 'absolute';
//    div_game_element.appendChild(blok1);
//
//    var blok2 = document.createElement('img');
//    blok2.setAttribute('src', list_blok[4].src);
//    blok2.id = 'blok2';
//    blok2.style.left = 600 + 'px';
//    blok2.style.top = 200 + 'px';
//    blok2.style.height = 50 + 'px';
//    blok2.style.position = 'absolute';
//    div_game_element.appendChild(blok2);

    content.appendChild(div_game_element);

}

var list_b = []

function add_block(){
    var left_b = 65

    for (var i = 0; i < 17; i++){
        var r_word = '';
            for (let i = 0; i < 5; i++) {
                let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                r_word += String.fromCharCode(randomCharCode);
            }
        list_b.push(r_word)

        var blok1 = document.createElement('img');
        blok1.setAttribute('src', list_blok[0].src);
        blok1.id = r_word;
        blok1.style.left = left_b + 'px';
        blok1.style.top = 250 + 'px';
        blok1.style.height = 50 + 'px';
        blok1.style.position = 'absolute';
        div_game_element.appendChild(blok1);

        left_b += 51
    }
}

game_element()

add_block()

console.log(list_b)


var list_coor = []

var k1 = true
var k2 = true
var k3 = true
var k4 = true

var gameinterval = null

// колізія потолок
var ball_r = 10
var key_u = true
var key_d = true

// колізія стін бокових
var ball_l = 10
var key_r = true
var key_l = true


var plat_k = true

function game(){

    var ball = document.getElementById("ball");
    var cur_ball_left = parseInt(ball.style.left) || 0;
    var cur_ball_top = parseInt(ball.style.top) || 0;
//    console.log(ball_r, ball_l,key_r)

    ball.style.left = (cur_ball_left + ball_l) + 'px';
    ball.style.top = (cur_ball_top + ball_r) + 'px';

    if(cur_ball_left > 940 && key_r){
        key_r = false
        plat_k = true
        key_l = true
        ball_l = -ball_l
    }

    if(cur_ball_left < 30 && key_l){
        key_l = false
        plat_k = true
        key_r = true
        ball_l = -ball_l
    }

    if(cur_ball_top > 850 && key_d){
        plat_k = true
        key_u = true
        ball_r = -ball_r
        key_d = false
    }

    if(cur_ball_top < 90 && key_u){
        plat_k = true
        key_d = true
        ball_r = -ball_r
        key_u = false
    }


    // умови керування платформою
    var platform = document.getElementById("platform");
    var div_pl_l = document.getElementById("div_pl_l");
    var div_pl_c = document.getElementById("div_pl_c");
    var div_pl_r = document.getElementById("div_pl_r");
    var cur_platform_left = parseInt(platform.style.left) || 0;

    if(list_coor[0] && list_coor[0] == 4 && cur_platform_left < 780){
        platform.style.left = (cur_platform_left + 10) + 'px';
        div_pl_l.style.left = (cur_platform_left + 10) + 'px';
        div_pl_c.style.left = (cur_platform_left + 40 + 10) + 'px';
        div_pl_r.style.left = (cur_platform_left + 160 + 10) + 'px';

    }else if(list_coor[0] && list_coor[0] == 3 && cur_platform_left > 10){
        platform.style.left = (cur_platform_left - 10) + 'px';
        div_pl_l.style.left = (cur_platform_left - 10) + 'px';
        div_pl_c.style.left = (cur_platform_left + 40 - 10) + 'px';
        div_pl_r.style.left = (cur_platform_left + 160 - 10) + 'px';

    }else if(list_coor[0] && list_coor[0] == 1){

    }else if(list_coor[0] && list_coor[0] == 2){

    }

    // умови колізій платформою
    var ball_reck = document.getElementById('ball').getBoundingClientRect();



    var div_pl_c_reck = document.getElementById('div_pl_c').getBoundingClientRect();
    var div_pl_l_reck = document.getElementById('div_pl_l').getBoundingClientRect();
    var div_pl_r_reck = document.getElementById('div_pl_r').getBoundingClientRect();

        // умова колізії платформи
        if (!(ball_reck.right < div_pl_c_reck.left ||
            ball_reck.left > div_pl_c_reck.right ||
            ball_reck.bottom < div_pl_c_reck.top ||
            ball_reck.top > div_pl_c_reck.bottom)) {
                if(plat_k){
                    plat_k = false
                    ball_r = -ball_r
                    key_u = true
                    key_d = true
                    key_r = true
                    key_l = true
                }
        }else if(!(ball_reck.right < div_pl_l_reck.left ||
                ball_reck.left > div_pl_l_reck.right ||
                ball_reck.bottom < div_pl_l_reck.top ||
                ball_reck.top > div_pl_l_reck.bottom)) {
                if(plat_k){
                    plat_k = false
                    ball_r = -ball_r
                    if(ball_l > 0){
                        ball_l = -ball_l + 5
                    }else{
                        ball_l = -10
                    }
                    key_u = true
                    key_d = true
                    key_r = true
                    key_l = true
                }
        }else if(!(ball_reck.right < div_pl_r_reck.left ||
                ball_reck.left > div_pl_r_reck.right ||
                ball_reck.bottom < div_pl_r_reck.top ||
                ball_reck.top > div_pl_r_reck.bottom)) {
                if(plat_k){
                    plat_k = false
                    ball_r = -ball_r
                    if(ball_l < 0){
                        ball_l = -ball_l - 5
                    }else{
                        ball_l = 10
                    }
                    key_u = true
                    key_d = true
                    key_r = true
                    key_l = true
                }
        }

        for (var i = 0; i < list_b.length; i++){
            var div_blok1_reck = document.getElementById(list_b[i]).getBoundingClientRect();
            if (!(ball_reck.right < div_blok1_reck.left ||
                ball_reck.left > div_blok1_reck.right ||
                ball_reck.bottom < div_blok1_reck.top ||
                ball_reck.top > div_blok1_reck.bottom)) {
                    if(ball_reck.top > div_blok1_reck.bottom - 10){
                        ball_r = -ball_r
                    }else if(ball_reck.bottom < div_blok1_reck.top + 10){
                        ball_r = -ball_r
                    }else if(ball_reck.left > div_blok1_reck.right - 10){
                        ball_l = -ball_l
                    }else if(ball_reck.right < div_blok1_reck.left + 10){
                        ball_l = -ball_l
                    }
                    plat_k = true
                    key_u = true
                    key_d = true
                    key_r = true
                    key_l = true
                    break
            }

        }

}



gameinterval = setInterval(game, 30)

//gameinterval = null
//clearInterval(gameiter)



document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            if(k1){
                list_coor.unshift(1);
                k1 = false
            }
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
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

    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}

function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}