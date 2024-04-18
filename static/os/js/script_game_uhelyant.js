console.log("Test")

var list_floor = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_floor[0].src = '/media/g_uhe/floor1.svg';
list_floor[1].src = '/media/g_uhe/floor2.svg';
list_floor[2].src = '/media/g_uhe/home1.svg';
list_floor[3].src = '/media/g_uhe/pine.svg';
list_floor[4].src = '/media/g_uhe/home2.svg';
list_floor[5].src = '/media/g_uhe/cloud.svg';
list_floor[6].src = '/media/g_uhe/tree2.svg';
list_floor[7].src = '/media/g_uhe/tree3.svg';
list_floor[8].src = '/media/g_uhe/bus.svg';

var list_bus = [new Image(), new Image(), new Image(), new Image()]

list_bus[0].src = '/media/g_uhe/bus1_4.svg';
list_bus[1].src = '/media/g_uhe/bus1_3.svg';
list_bus[2].src = '/media/g_uhe/bus1_2.svg';
list_bus[3].src = '/media/g_uhe/bus1_1.svg';


var list_man = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_man[0].src = '/media/g_uhe/man21.svg';
list_man[1].src = '/media/g_uhe/man22.svg';
list_man[2].src = '/media/g_uhe/man23.svg';
list_man[3].src = '/media/g_uhe/man24.svg';
list_man[4].src = '/media/g_uhe/man25.svg';



var content = document.getElementById('content');

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"


function add_game_element(){
    var img_floor = document.createElement('img');
    img_floor.setAttribute('src', list_floor[0].src);
    img_floor.id = 'floor';
    img_floor.style.left = 0 + 'px';
    img_floor.style.top = 600 + 'px';
    img_floor.style.width = 1000 + 'px';
    img_floor.style.position = 'absolute';
    content.appendChild(img_floor);

    var img_cloud = document.createElement('img');
    img_cloud.setAttribute('src', list_floor[5].src);
    img_cloud.id = 'cloud';
    img_cloud.style.left = 650 + 'px';
    img_cloud.style.top = 20 + 'px';
    img_cloud.style.width = 350 + 'px';
    img_cloud.style.position = 'absolute';
    content.appendChild(img_cloud);

    var img_floor1 = document.createElement('img');
    img_floor1.setAttribute('src', list_floor[1].src);
    img_floor1.id = 'floor1';
    img_floor1.style.left = 1000 + 'px';
    img_floor1.style.top = 600 + 'px';
    img_floor1.style.width = 1000 + 'px';
    img_floor1.style.position = 'absolute';
    content.appendChild(img_floor1);

    var img_home = document.createElement('img');
    img_home.setAttribute('src', list_floor[4].src);
    img_home.id = 'home';
    img_home.style.left = 800 + 'px';
    img_home.style.top = 250 + 'px';
    img_home.style.width = 270 + 'px';
    img_home.style.position = 'absolute';
    content.appendChild(img_home);

    var img_home2 = document.createElement('img');
    img_home2.setAttribute('src', list_floor[2].src);
    img_home2.id = 'home2';
    img_home2.style.left = 200 + 'px';
    img_home2.style.top = 250 + 'px';
    img_home2.style.width = 270 + 'px';
    img_home2.style.position = 'absolute';
    content.appendChild(img_home2);

    var img_tree2 = document.createElement('img');
    img_tree2.setAttribute('src', list_floor[6].src);
    img_tree2.id = 'tree2';
    img_tree2.style.left = -40 + 'px';
    img_tree2.style.top = 230 + 'px';
    img_tree2.style.width = 290 + 'px';
    img_tree2.style.position = 'absolute';
    content.appendChild(img_tree2);

    var img_tree3 = document.createElement('img');
    img_tree3.setAttribute('src', list_floor[7].src);
    img_tree3.id = 'tree3';
    img_tree3.style.left = 1050 + 'px';
    img_tree3.style.top = 170 + 'px';
    img_tree3.style.width = 140 + 'px';
    img_tree3.style.position = 'absolute';
    content.appendChild(img_tree3);

    var img_tree = document.createElement('img');
    img_tree.setAttribute('src', list_floor[3].src);
    img_tree.id = 'tree';
    img_tree.style.left = 600 + 'px';
    img_tree.style.top = 150 + 'px';
    img_tree.style.width = 240 + 'px';
    img_tree.style.position = 'absolute';
    content.appendChild(img_tree);

    var img_man = document.createElement('img');
    img_man.setAttribute('src', list_man[0].src);
    img_man.id = 'man';
    img_man.style.left = 100 + 'px';
    img_man.style.top = 426 + 'px';
    img_man.style.height = 180 + 'px';
    img_man.style.position = 'absolute';
    content.appendChild(img_man);

    var img_bus = document.createElement('img');
    img_bus.setAttribute('src', list_bus[0].src);
    img_bus.id = 'bus';
    img_bus.style.left = 500 + 'px';
    img_bus.style.top = 670 + 'px';
    img_bus.style.width = 500 + 'px';
    img_bus.style.position = 'absolute';
    content.appendChild(img_bus);
}


function add_zastavka(){
    // Рахунок та його картинка
    var img_zastavka = document.createElement('img');
    img_zastavka.setAttribute('src', '/media/g_uhe/blade_out_povestka.svg');
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
    new_game.classList.add('menu_txt');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu.appendChild(new_game);


    var about = document.createElement('h1');
    about.textContent = "About";
    about.id = 'about';
    about.classList.add('menu_txt');
    about.style.left = 60 + 'px';
    about.style.top = 175 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "Exit";
    score_n1.id = 'exit';
    score_n1.classList.add('menu_txt');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 300 + 'px';
    score_n1.style.position = 'absolute';
    div_menu.appendChild(score_n1);

    content.appendChild(div_menu);
}


// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move_select_m()
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_select_p()
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){

        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){

}

    // натиснута кнопка E
    if (event.keyCode === 69) {
         right_select(event)
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        center()
        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        left_select(event)
    }
});


function center(event){
    event.preventDefault();
    navigator.vibrate(50);

}

// кнопка вниз
function downMouseDown(event) {
    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
    move_select_p()

}

function downMouseUp() {
}

// кнопка верх
function upMouseDown(event) {
    move_select_m()
    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
}

// кнопка в ліво
function leftMouseDown(event) {
    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {

}


// кнопка в право
function rightMouseDown(event) {
    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {

}

// лівий селект
function left_select(event) {
    event.preventDefault();
    navigator.vibrate(50);

}

// зміна заставки
//add_zastavka()

// зміна запуску гри
var gameInterval = null
add_game_element()
gameInterval = setInterval(game, 70);

// правий селект
function right_select(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    if (document.getElementById("zastavka")){
        document.getElementById("zastavka").remove();
        add_menu()

    }else if (document.getElementById("div_menu")){

        if(menu_pos == 0){ // повина запустити цикл гри
            if(gameInterval == null){
                document.getElementById("div_menu").remove();
                add_game_element()
                gameInterval = setInterval(game, 100);

            }else{
            clearInterval(gameInterval);
            gameInterval = null
            }
        }else if(menu_pos == 1){

        }else if(menu_pos == 2){
            window.location.href = "/games";
        }
    }

}

var menu_pos = 0
var menu_pos1 = 0

function move_select_p(){
    if (!document.getElementById("about_div") && !document.getElementById("speed_div")){ // якщо немає елемента about
        if (document.getElementById("div_menu")){
            var select = document.getElementById("select")
            var currentSelect = parseInt(select.style.top) || 0;
            if (menu_pos < 2){
            menu_pos += 1;
            select.style.top = currentSelect + 125 + 'px';
            console.log(menu_pos,0)
            }
        }
        if (document.getElementById("div_menu1")){
            var select1 = document.getElementById("select1")
            var currentSelect1 = parseInt(select1.style.top) || 0;
            if (menu_pos1 < 2){
            menu_pos1 += 1;
            select1.style.top = currentSelect1 + 120 + 'px';
            console.log(menu_pos1,1)
            }

        }
    }
    if (document.getElementById("speed_div")){
        speed_p()
        document.getElementById("speed_txt").textContent = speed_game;

    }
}

function move_select_m(){
    if (!document.getElementById("about_div") && !document.getElementById("speed_div")){ // якщо немає елемента about
        if (document.getElementById("div_menu")){
            var select = document.getElementById("select")
            var currentSelect = parseInt(select.style.top) || 0;
            if (menu_pos > 0){
            menu_pos -= 1;
            select.style.top = currentSelect - 125 + 'px';
            console.log(menu_pos,0)
            }
        }
        if (document.getElementById("div_menu1")){
            var select1 = document.getElementById("select1")
            var currentSelect1 = parseInt(select1.style.top) || 0;
            if (menu_pos1 > 0){
            menu_pos1 -= 1;
            select1.style.top = currentSelect1 - 120 + 'px';
            console.log(menu_pos1,1)
            }
        }
    }
    if (document.getElementById("speed_div")){
        speed_m()
        document.getElementById("speed_txt").textContent = speed_game;

    }
}

var anim = 0
var anim0 = 0

//швидкість руху основного слою
var speed = 10

//швидкість руху 1 заднього слою
var speed1 = 7

var key = 0

// головна функція гри
function game(){

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


    var cur_floor0 = parseInt(floor.style.left) || 0;
    floor.style.left = (cur_floor0 - speed) + 'px';

    var cur_floor1 = parseInt(floor1.style.left) || 0;
    floor1.style.left = (cur_floor1 - speed) + 'px';

    var cur_floor0 = parseInt(floor.style.left) || 0;
    var cur_floor1 = parseInt(floor1.style.left) || 0;

    if(cur_floor0 <= -1000){
        floor.style.left = 1000 + 'px';
    }
    if(cur_floor1 <= -1000){
        floor1.style.left = 1000 + 'px';
    }

    var man = document.getElementById("man")
    man.setAttribute('src', list_man[anim].src);







    anim += 1
    if (anim == 5){
        anim = 0
    }

    var bus = document.getElementById("bus")
    bus.setAttribute('src', list_bus[anim0].src);

    var cur_bus = parseInt(bus.style.left) || 0;
    bus.style.left = (cur_bus - 18) + 'px';

    if(cur_bus <= -550){
        bus.style.left = 1750 + 'px';
    }

    anim0 += 1
    if (anim0 == 4){
        anim0 = 0
    }



//    if (key == 0){
//        anim += 1
//    }else{
//        anim -= 1
//    }
//    if (anim == 4){
//        key = 1
//    }else if(anim == 0 ){
//        key = 0
//    }

}