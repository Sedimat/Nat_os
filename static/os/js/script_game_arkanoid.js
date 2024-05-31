

var list_element = [new Image(), new Image(), new Image(), new Image()]

list_element[0].src = '/media/g_arkanoid/fon.svg';
list_element[1].src = '/media/g_arkanoid/platforma.svg';
list_element[2].src = '/media/g_arkanoid/ball.svg';
list_element[3].src = '/media/g_arkanoid/fon1.svg';

var list_blok = [new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image()]

list_blok[0].src = '/media/g_arkanoid/blok1.svg';
list_blok[1].src = '/media/g_arkanoid/blok2.svg';
list_blok[2].src = '/media/g_arkanoid/blok3.svg';
list_blok[3].src = '/media/g_arkanoid/blok4.svg';
list_blok[4].src = '/media/g_arkanoid/blok5.svg';
list_blok[5].src = '/media/g_arkanoid/blok6.svg';

var list_kill = [new Image(), new Image(), new Image(),
                 new Image(), new Image(), new Image()]

list_kill[0].src = '/media/g_arkanoid/kill1.svg';
list_kill[1].src = '/media/g_arkanoid/kill2.svg';
list_kill[2].src = '/media/g_arkanoid/kill3.svg';
list_kill[3].src = '/media/g_arkanoid/kill4.svg';
list_kill[4].src = '/media/g_arkanoid/kill5.svg';
list_kill[5].src = '/media/g_arkanoid/kill6.svg';

var content = document.getElementById('content')

var score = 0

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

    var txt_score = document.createElement('h1');
    txt_score.textContent = "Score: " + score;
    txt_score.id = 'score';
    txt_score.classList.add('menu_txt');
    txt_score.style.left = 20 + 'px';
    txt_score.style.top = 7 + 'px';
    txt_score.style.minWidth = '290px';
    txt_score.style.maxWidth = '300px';
    txt_score.style.position = 'absolute';
    div_game_element.appendChild(txt_score);

    var img_fon1 = document.createElement('img');
    img_fon1.setAttribute('src', list_element[3].src);
    img_fon1.id = 'img_fon1';
    img_fon1.style.left = -0.5 + 'px';
    img_fon1.style.top = 72.2 + 'px';
    img_fon1.style.width = 15 + 'px';
    img_fon1.style.position = 'absolute';
    div_game_element.appendChild(img_fon1);

    var img_fon2 = document.createElement('img');
    img_fon2.setAttribute('src', list_element[3].src);
    img_fon2.id = 'img_fon2';
    img_fon2.style.left = 985.5 + 'px';
    img_fon2.style.top = 72.2 + 'px';
    img_fon2.style.width = 15 + 'px';
    img_fon2.style.position = 'absolute';
    img_fon2.style.transform = 'scaleX(-1)'; // Відзеркалення по горизонталі
    div_game_element.appendChild(img_fon2);

    var img_fon3 = document.createElement('img');
    img_fon3.setAttribute('src', list_element[0].src);
    img_fon3.id = 'img_fon3';
    img_fon3.style.left = 0 + 'px';
    img_fon3.style.top = 980 + 'px';
    img_fon3.style.width = 1000 + 'px';
    img_fon3.style.position = 'absolute';
    div_game_element.appendChild(img_fon3);

    var img_ball = document.createElement('img');
    img_ball.setAttribute('src', list_element[2].src);
    img_ball.id = 'ball';
    img_ball.style.left = 485 + 'px';
    img_ball.style.top = 840 + 'px';
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

    content.appendChild(div_game_element);

}

var list_b = []

function add_block(top){
    var left_b = 0
    var num_b = 0

    var r_numb = Math.floor(Math.random() * 5);
    if(r_numb == 0){
        left_b = 1.45
        num_b = 19
    }else if (r_numb == 1){
        left_b = 460.45
        num_b = 10
    }else if (r_numb == 2){
        left_b = 205.45
        num_b = 10
    }else if (r_numb == 3){
        left_b = 103.45
        num_b = 16
    }else if (r_numb == 4){
        left_b = 1.45
        num_b = 12
    }


    for (var i = 0; i < num_b; i++){
        var r_word = '';
            for (let i = 0; i < 5; i++) {
                let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                r_word += String.fromCharCode(randomCharCode);
            }
        list_b.push(r_word)
        var rand = Math.floor(Math.random() * 6);

        var blok1 = document.createElement('img');
        blok1.setAttribute('src', list_blok[rand].src);
        blok1.id = r_word;
        blok1.style.left = left_b + 'px';
        blok1.style.top = top + 'px';
        blok1.style.height = 50 + 'px';
        blok1.style.position = 'absolute';
        div_blok.appendChild(blok1);

        left_b += 51
    }
}

game_element()

add_block(0)
add_block(50)

function move_block(){
    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            if(j == 2){
                add_block(-50)
                for (var i = 0; i < list_b.length; i++){
                    var block = document.getElementById(list_b[i]);
                    var cur_block_top = parseInt(block.style.top) || 0;
                    block.style.top = (cur_block_top + 50) + 'px';
                }
            }
        }, j * 100);
    }

}

function kill_block(id){
    var block = document.getElementById(id);
    var cur_block_top = parseInt(block.style.top) || 0;
    var cur_block_left = parseInt(block.style.left) || 0;
    document.getElementById(id).remove()
    score += 10
    document.getElementById("score").textContent = "Score: " + score;



    var r_word = '';
    for (let i = 0; i < 3; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    var img = document.createElement('img');
    img.setAttribute('src', list_kill[0].src);
    img.id = r_word;
    img.style.left = cur_block_left + 'px';
    img.style.top = cur_block_top + 'px';
    img.style.width = 50 + 'px';
    img.style.position = 'absolute';
    document.getElementById('div_blok').appendChild(img);

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if(document.getElementById(r_word)){
                document.getElementById(r_word).setAttribute('src', list_kill[i].src);
                if(i == 5){
                    document.getElementById(r_word).remove()
                }
            }
        }, i * 100);
    }
}


var list_coor = []

var gameinterval = null

// швидкість вертикальна
var ball_r = 0

// швидкість горизонтальна
var ball_l = 0

var speed_plat = 12


var plat_k = true


var key = true
var t_key = 0

function game(){
    var ball = document.getElementById("ball");
    var cur_ball_left = parseInt(ball.style.left) || 0;
    var cur_ball_top = parseInt(ball.style.top) || 0;



    ball.style.left = (cur_ball_left + ball_l) + 'px';
    ball.style.top = (cur_ball_top + ball_r) + 'px';


    // умови керування платформою
    var platform = document.getElementById("platform");
    var div_pl_l = document.getElementById("div_pl_l");
    var div_pl_c = document.getElementById("div_pl_c");
    var div_pl_r = document.getElementById("div_pl_r");
    var cur_platform_left = parseInt(platform.style.left) || 0;
    var cur_platform_top = parseInt(platform.style.top) || 0;

    // якщо кулька вилетіла нижче платформу

    if(cur_ball_top > 940){
        ball_r = 0
        ball_l = 0
        ball.style.left = (cur_platform_left + 85) + 'px';
        ball.style.top = (cur_platform_top - 30) + 'px';

    }

    if(list_coor[0] && list_coor[0] == 4 && cur_platform_left < 780){
        platform.style.left = (cur_platform_left + speed_plat) + 'px';
        div_pl_l.style.left = (cur_platform_left + speed_plat) + 'px';
        div_pl_c.style.left = (cur_platform_left + 40 + speed_plat) + 'px';
        div_pl_r.style.left = (cur_platform_left + 160 + speed_plat) + 'px';
        if(ball_r == 0 && ball_l == 0){
            ball.style.left = (cur_platform_left + 85 + speed_plat) + 'px';
        }

    }else if(list_coor[0] && list_coor[0] == 3 && cur_platform_left > 15){
        platform.style.left = (cur_platform_left - speed_plat) + 'px';
        div_pl_l.style.left = (cur_platform_left - speed_plat) + 'px';
        div_pl_c.style.left = (cur_platform_left + 40 - speed_plat) + 'px';
        div_pl_r.style.left = (cur_platform_left + 160 - speed_plat) + 'px';
        if(ball_r == 0 && ball_l == 0){
            ball.style.left = (cur_platform_left + 85 - speed_plat) + 'px';
        }

    }else if(list_coor[0] && list_coor[0] == 1){

    }else if(list_coor[0] && list_coor[0] == 2){

    }


    // умови колізій платформою
    var ball_reck = document.getElementById('ball').getBoundingClientRect();

    var div_fon_up_reck = document.getElementById('img_fon').getBoundingClientRect();
    var div_fon_l_reck = document.getElementById('img_fon1').getBoundingClientRect();
    var div_fon_r_reck = document.getElementById('img_fon2').getBoundingClientRect();
    var div_fon_down_reck = document.getElementById('img_fon3').getBoundingClientRect();

    var div_pl_c_reck = document.getElementById('div_pl_c').getBoundingClientRect();
    var div_pl_l_reck = document.getElementById('div_pl_l').getBoundingClientRect();
    var div_pl_r_reck = document.getElementById('div_pl_r').getBoundingClientRect();


        // умови колізій стін
//         if (!(ball_reck.right < div_fon_down_reck.left ||
//            ball_reck.left > div_fon_down_reck.right ||
//            ball_reck.bottom < div_fon_down_reck.top ||
//            ball_reck.top > div_fon_down_reck.bottom)) {
//                ab_Value02 = Math.abs(ball_r)
//                ball_r = -ab_Value02
//                plat_k = true
//
//        }else
        if (!(ball_reck.right < div_fon_up_reck.left ||
            ball_reck.left > div_fon_up_reck.right ||
            ball_reck.bottom < div_fon_up_reck.top ||
            ball_reck.top > div_fon_up_reck.bottom)) {
                // якщо кулька вдарилась в стулю
                ab_Value01 = Math.abs(ball_r)
                ball_r = ab_Value01
                move_block()
                plat_k = true

        }
        if (!(ball_reck.right < div_fon_l_reck.left ||
            ball_reck.left > div_fon_l_reck.right ||
            ball_reck.bottom < div_fon_l_reck.top ||
            ball_reck.top > div_fon_l_reck.bottom)) {
                ab_Value1 = Math.abs(ball_l)
                ball_l = ab_Value1
                plat_k = true

        }
        if (!(ball_reck.right < div_fon_r_reck.left ||
            ball_reck.left > div_fon_r_reck.right ||
            ball_reck.bottom < div_fon_r_reck.top ||
            ball_reck.top > div_fon_r_reck.bottom)) {
                ab_Value2 = Math.abs(ball_l)
                ball_l = -ab_Value2
                plat_k = true

        // умова колізії платформи
        }
        if (!(ball_reck.right < div_pl_c_reck.left ||
            ball_reck.left > div_pl_c_reck.right ||
            ball_reck.bottom < div_pl_c_reck.top ||
            ball_reck.top > div_pl_c_reck.bottom)) {
                if(ball_reck.bottom < div_pl_c_reck.top + 10){
                    if(plat_k){
                        plat_k = false
                        ab_Value02 = Math.abs(ball_r)
                        ball_r = -ab_Value02
                    }
                }

        }
        if(!(ball_reck.right < div_pl_l_reck.left ||
                ball_reck.left > div_pl_l_reck.right ||
                ball_reck.bottom < div_pl_l_reck.top ||
                ball_reck.top > div_pl_l_reck.bottom)) {
                if(ball_reck.bottom < div_pl_l_reck.top + 10){
                    if(plat_k){
                        plat_k = false
                        ball_r = -ball_r
                        if(ball_l > 0){
                            ball_l = -ball_l + 2
                        }else{
                            ball_l = -10
                        }
                    }
                }else{
                    ball_l = -10
                }
        }
        if(!(ball_reck.right < div_pl_r_reck.left ||
                ball_reck.left > div_pl_r_reck.right ||
                ball_reck.bottom < div_pl_r_reck.top ||
                ball_reck.top > div_pl_r_reck.bottom)) {
                if(ball_reck.bottom < div_pl_r_reck.top + 10){
                    if(plat_k){
                        plat_k = false
                        ball_r = -ball_r
                        if(ball_l < 0){
                            ball_l = -ball_l - 2
                        }else{
                            ball_l = 10
                        }
                    }
                }else{
                    ball_l = -10
                }
        }

        for (var i = 0; i < list_b.length; i++){
//            if(document.getElementById(list_b[i])){
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
                        kill_block(list_b[i])
                        list_b.splice(i, 1)
                        plat_k = true
                        break
                }
//            }
        }
        for (var i = 0; i < list_b.length; i++){
            var block = document.getElementById(list_b[i]);
            var cur_block_top = parseInt(block.style.top) || 0;
            if(cur_block_top >= 700){
                document.getElementById(list_b[i]).remove()
                list_b.splice(i, 1)
            }

        }

}


gameinterval = setInterval(game, 30)

//gameinterval = null
//clearInterval(gameiter)

var k1 = true
var k2 = true
var k3 = true
var k4 = true

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
        if(ball_r == 0 && ball_l == 0){
            ball_l = 10
            ball_r = -10
        }

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