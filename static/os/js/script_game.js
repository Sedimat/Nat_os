var hud_menu = new Image()
hud_menu.src = '/media/img/hud_menu.svg'

var select = new Image()
select.src = "/media/img/select.svg"


var content = document.querySelector(".content")

var img_hud = document.createElement('img');
    img_hud.setAttribute('src', hud_menu.src);
    img_hud.id = 'hud_menu';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.width = 1000 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);


var div_cont = document.createElement('div');
    div_cont.id = 'cont';
    div_cont.classList.add('cont');
    div_cont.style.left = 20 + 'px';
    div_cont.style.top = 70 + 'px';
    div_cont.style.height = 750 + 'px';
    div_cont.style.width = 960 + 'px';
    div_cont.style.position = 'absolute';

    var img_select = document.createElement('img');
    img_select.setAttribute('src', select.src);
    img_select.id = 'select';
    img_select.classList.add('select_img');
    img_select.style.position = 'absolute';
    div_cont.appendChild(img_select);

    content.appendChild(div_cont);


// додаємо список ігр
function add_game(list_m){
    var img_game = list_m[0]
    var name = list_m[1]
    var game = list_m[2]

    var newDiv = document.createElement('div');
    newDiv.classList.add('menu_0'); // Додати клас "menu_0" до нового div

    var newImg = document.createElement('img');
    newImg.classList.add('img_sound'); // Додати клас "img_menu" до нового зображення
    newImg.setAttribute('src', '/media/' + img_game ); // Встановити атрибут src

    var newH1 = document.createElement('h1');
    newH1.classList.add('menu'); // Додати клас "menu" до нового заголовка
    newH1.textContent = name; // Встановити текст заголовка

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH1);

    var contDiv = document.querySelector('.cont');

    contDiv.appendChild(newDiv);
}

// довжина списку
var len_game = 0;

// список елементів звуків
var  list_games_g = null;


fetch(`/get_games`)
.then(response => response.json())
.then(data => {
    len_game = data.list_games.length;
    list_games_g = data.list_games
    for (let i = 0; i < data.list_games.length; i++) {
        add_game(data.list_games[i])
    }
});

var contentDiv = document.querySelector('.cont');

var select = document.getElementById('select');

var numb = 0;

// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {
    var scrollHeight = len_game * 125;

    var y = select.offsetTop;

    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
        if (y - 125 > -1){
            play(select,y - 125)
            contentDiv.scrollTop -= 125;
            numb -= 1
        }
    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
        if (y + 125 < scrollHeight){
            play(select,y + 125)
            contentDiv.scrollTop += 125;
            numb += 1
        }
    }
    // натиснута кнопка E
    if (event.keyCode === 69) {
        select_link()
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        back()
    }
});

function play(elem,num){
    elem.style.top = num + 'px'; // Переміщення на вказану позицію
}

function back(){
    window.location.href = "/menu/4";
}

function select_link(){
     window.location.href = "/" + list_games_g[numb][2];
}



function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    var scrollHeight = len_game * 125;
    var y = select.offsetTop;
    if (y + 125 < scrollHeight){
        play(select,y + 125)
        contentDiv.scrollTop += 125;
        numb += 1
    }
    event.preventDefault();
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    var scrollHeight = len_game * 125;
    var y = select.offsetTop;
    if (y - 125 > -1){
        play(select,y - 125)
        contentDiv.scrollTop -= 125;
        numb -= 1
    }
    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
}

function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
}


function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    back()
    event.preventDefault();
    navigator.vibrate(50);
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    select_link()
    event.preventDefault();
    navigator.vibrate(50);
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}