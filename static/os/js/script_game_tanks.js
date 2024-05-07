var list_tank = [new Image(), new Image(), new Image(), new Image()]

list_tank[0].src = '/media/g_tanks/tank.svg';
list_tank[1].src = '/media/g_tanks/bulet.svg';
list_tank[2].src = '/media/g_tanks/brick.svg';



function game_elements(){
    var content = document.getElementById('content');

    var div_game = document.createElement('div');
    div_game.id = 'div_game';
    div_game.style.left = 0 + 'px';
    div_game.style.top = 0 + 'px';
    div_game.style.height = 1000 + 'px';
    div_game.style.width = 1000 + 'px';
    div_game.classList.add('content');
    div_game.style.position = 'absolute';

    var new_game = document.createElement('h1');
    new_game.textContent = "Танкс";
    new_game.id = 'text';
    new_game.classList.add('menu');
    new_game.style.left = 10 + 'px';
    new_game.style.top = 10 + 'px';
    new_game.style.position = 'absolute';
    div_game.appendChild(new_game);

    var img_tank = document.createElement('img');
    img_tank.setAttribute('src', list_tank[0].src);
    img_tank.id = 'tank_gg';
    img_tank.style.left = 300 + 'px';
    img_tank.style.top = 400 + 'px';
    img_tank.style.width = 80 + 'px';
    img_tank.style.position = 'absolute';
    img_tank.style.transform = "rotate(0deg)";
    div_game.appendChild(img_tank);

    var img_tank1 = document.createElement('img');
    img_tank1.setAttribute('src', list_tank[0].src);
    img_tank1.id = 'tank_enemy1';
    img_tank1.style.left = 900 + 'px';
    img_tank1.style.top = 0 + 'px';
    img_tank1.style.width = 80 + 'px';
    img_tank1.style.position = 'absolute';
    img_tank1.style.transform = "rotate(180deg)";
    div_game.appendChild(img_tank1);

    var img_brick = document.createElement('img');
    img_brick.setAttribute('src', list_tank[2].src);
    img_brick.id = 'brick';
    img_brick.style.left = 200 + 'px';
    img_brick.style.top = 500 + 'px';
    img_brick.style.width = 80 + 'px';
    img_brick.style.position = 'absolute';
    img_brick.style.transform = "rotate(180deg)";
    div_game.appendChild(img_brick);

    content.appendChild(div_game);
}

game_elements()

var list_move = [[20, "l"], [25, "r"], [17, "u"], [22, "d"]]
var move_enemy = [0, "l"]

var anim = 0;
var count = 0;

var move_tank1 = 0

function game(){

    if (anim == 4){
        anim = 0
    }
//    document.getElementById('img_man').setAttribute('src', list_man[anim].src);

    count += 1;
    if (count == 5){
        count = 0
        anim += 1;
    }


    // задає рух танку
    if (move_tank1 == move_enemy[0]){
        move_enemy = list_move[Math.floor(Math.random() * list_move.length)];
        move_tank1 = 0;
    }
    move_tank1++

    move(move_enemy[1], "tank_enemy1")
    var fire1 = Math.floor(Math.random() * 5);
    if(fire1 == 2){
        bulet_gg("bulet_enemy1", "tank_enemy1")

    }

    var tank_rect = document.getElementById('tank_gg').getBoundingClientRect();
    var stena_reck = document.getElementById("brick").getBoundingClientRect();


//        if (!(tank_rect.right < stena_reck.left ||
//            tank_rect.left > stena_reck.right ||
//            tank_rect.bottom < stena_reck.top ||
//            tank_rect.top > stena_reck.bottom)) {
//
//            console.log("Контакт")
//
//        }


}

var gameinterval = null
gameinterval = setInterval(game, 50)


function bulet_gg(id_bulet, id_tank){
    var bulet_u = null
    var bulet_d = null
    var bulet_r = null
    var bulet_l = null

    if (!document.getElementById(id_bulet)){
        var div_game = document.getElementById("div_game");
        var tank_gg = document.getElementById(id_tank);

        var cur_m_left = parseInt(tank_gg.style.left) || 0;
        var cur_m_top = parseInt(tank_gg.style.top) || 0;

        var img_bulet = document.createElement('img');
        img_bulet.setAttribute('src', list_tank[1].src);
        img_bulet.id = id_bulet;
        img_bulet.style.left = cur_m_left + 36 + 'px';
        img_bulet.style.top = cur_m_top + 42 + 'px';
        img_bulet.style.width = 8 + 'px';
        img_bulet.style.position = 'absolute';
        div_game.appendChild(img_bulet);

        var bulet = img_bulet

        if(tank_gg.style.transform == "rotate(0deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_top = parseInt(bulet.style.top) || 0;
                        bulet.style.top = (cur_b_top - 15) + 'px';
                    }else{
                        clearInterval(bulet_u)
                    }
                    if(cur_b_top < 0){
                        bulet.remove()
                        clearInterval(bulet_u)
                    }
                }
                bulet_u = setInterval(b_move, 30)

        }else if(tank_gg.style.transform == "rotate(90deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_left = parseInt(bulet.style.left) || 0;
                        bulet.style.left = (cur_b_left + 15) + 'px';
                    }else{
                        clearInterval(bulet_r)
                    }
                    if(cur_b_left > 1000){
                        bulet.remove()
                        clearInterval(bulet_r)
                    }
                }
                bulet_r = setInterval(b_move, 30)

        }else if(tank_gg.style.transform == "rotate(180deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_top = parseInt(bulet.style.top) || 0;
                        bulet.style.top = (cur_b_top + 15) + 'px';
                    }else{
                        clearInterval(bulet_d)
                    }
                    if(cur_b_top > 1000){
                        bulet.remove()
                        clearInterval(bulet_d)
                    }
                }
                bulet_d = setInterval(b_move, 30)

        }else if(tank_gg.style.transform == "rotate(270deg)"){
                function b_move(){
                    if(document.getElementById(id_bulet)){
                        var cur_b_left = parseInt(bulet.style.left) || 0;
                        bulet.style.left = (cur_b_left - 15) + 'px';
                    }else{
                        clearInterval(bulet_l)
                    }
                    if(cur_b_left < 0){
                        bulet.remove()
                        clearInterval(bulet_l)
                    }
                }
                bulet_l = setInterval(b_move, 30)

        }else{
            document.getElementById("tank_bulet").remove()
        }
    }
}

function move(pos, id){
    var tank_gg = document.getElementById(id);

    var cur_m_top = parseInt(tank_gg.style.top) || 0;
    var cur_m_left = parseInt(tank_gg.style.left) || 0;


    if(pos == "d" && cur_m_top < 800){
        tank_gg.style.top = (cur_m_top + 10) + 'px';
        tank_gg.style.transform = "rotate(180deg)";

    }else if(pos == "u" && cur_m_top > 0){
        tank_gg.style.top = (cur_m_top - 10) + 'px';
        tank_gg.style.transform = "rotate(0deg)";

    }else if(pos == "r" && cur_m_left < 910){
        tank_gg.style.left = (cur_m_left + 10) + 'px';
        tank_gg.style.transform = "rotate(90deg)";

    }else if(pos == "l" && cur_m_left > 10){
        tank_gg.style.left = (cur_m_left - 10) + 'px';
        tank_gg.style.transform = "rotate(270deg)";

    }
}

var kluch = true

// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move("u", "tank_gg")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move("d", "tank_gg")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
             move("l", "tank_gg")
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            move("r", "tank_gg")
        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
         console.log("E")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        if(kluch){
            bulet_gg("tank_bulet", "tank_gg")
        }
        kluch = false

        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        console.log("Q")
        document.getElementById("tank_bulet").remove()
    }
});

document.addEventListener("keyup", function(event) {
    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
        }

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
        }

        // натиснута кнопка E
    if (event.keyCode === 69) {
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        kluch = true

        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
    }
});

var down = null
var up = null
var left = null
var right = null


// Кнопки тачу
// кнопка вниз
function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    clearInterval(down)
    down = setInterval(() => move("d", "tank_gg"), 50);

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
    clearInterval(down)
}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    clearInterval(up)
    up = setInterval(() => move("u", "tank_gg"), 50);

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
    clearInterval(up)
}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    clearInterval(left)
    left = setInterval(() => move("l", "tank_gg"), 50);

    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
    clearInterval(left)
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    clearInterval(right)
    right = setInterval(() => move("r", "tank_gg"), 50);

    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
    clearInterval(right)
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    bulet_gg("tank_bulet", "tank_gg")

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