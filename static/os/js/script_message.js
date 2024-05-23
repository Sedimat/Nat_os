var img_content = new Image()
img_content.src = '/media/img/content.svg'

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




// додає на DOM елементи звуків
function add_picture(list_m){
    var picture = list_m[0]
    var name = list_m[1]

    var newDiv = document.createElement('div');
    newDiv.classList.add('menu_0'); // Додати клас "menu_0" до нового div

    var newImg = document.createElement('img');
    newImg.classList.add('img_sound'); // Додати клас "img_menu" до нового зображення
    newImg.setAttribute('src', '/media/img/pic.svg' ); // Встановити атрибут src

    var newH1 = document.createElement('h1');
    newH1.classList.add('menu'); // Додати клас "menu" до нового заголовка
    newH1.textContent = name; // Встановити текст заголовка

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH1);

    var div_img = document.getElementById("cont")

    div_img.appendChild(newDiv);
}

function add_content(list){
    var pic = list[0]
    var name = list[2]

    var newDiv1 = document.createElement('div');
    newDiv1.classList.add('menu_1');
    newDiv1.id = 'img_c';
    newDiv1.style.left = 20 + 'px';
    newDiv1.style.top = 70 + 'px';
    newDiv1.style.position = 'absolute';

    var newImg = document.createElement('img');
    newImg.classList.add('img_content');
    newImg.setAttribute('src', img_content.src );

    newDiv1.appendChild(newImg);

    var img_v = document.createElement('img');
    img_v.setAttribute('src', '/media/' + pic );
    img_v.id = 'img_v';
    img_v.style.left = 40 + 'px';
    img_v.style.top = 86 + 'px';
    img_v.style.width = 880 + 'px';
    img_v.style.position = 'absolute';
    newDiv1.appendChild(img_v);

    var h11 = document.createElement('h1');
    h11.textContent = name;
    h11.id = 'play_time';
    h11.classList.add('time');
    h11.style.left = 40 + 'px';
    h11.style.top = 20 + 'px';
    h11.style.minWidth = '790px';
    h11.style.maxWidth = '800px';
    h11.style.position = 'absolute';
    newDiv1.appendChild(h11);

    var contDiv = document.querySelector('.content');

    contDiv.appendChild(newDiv1);

}

function dell_elem(){
    var elementToDelete = document.getElementById("img_c");
        if (elementToDelete) {
            elementToDelete.remove();
        }
    }


// довжина списку
var len_menu = 0;

// список елементів зображень
var  list_pictures_g = null;


fetch(`/get_pictures`)
.then(response => response.json())
.then(data => {
    len_menu = data.list_pictures.length;
    list_pictures_g = data.list_pictures
    for (let i = 0; i < data.list_pictures.length; i++) {
        add_picture(data.list_pictures[i])
    }
});


var contentDiv = document.querySelector('.cont');

var numb = 0;

var select = document.getElementById('select');


// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {
    var scrollHeight = len_menu * 125;
    if(select){
        var x = select.offsetLeft;
        var y = select.offsetTop;
    }
    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
        if (y - 125 > -1){
            up()
        }

    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
        if (y + 125 < scrollHeight){
            down()
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

// повертає в меню або виходить з музики
function back(){
    var elementToDelete = document.getElementById("img_c");
        if (elementToDelete) {
            elementToDelete.remove();
        }else{
            window.location.href = "/menu/1";
    }
}


function select_link(){
    if (!document.getElementById("img_c")){
        add_content(list_pictures_g[numb])
    }

}

function up(){
    if(select){
        var y = select.offsetTop;
        play(select,y - 125)
        contentDiv.scrollTop -= 125;
        numb -= 1
        move()
    }

}

function down(){
    if(select){
        var y = select.offsetTop;
        play(select,y + 125)
        contentDiv.scrollTop += 125;
        numb += 1
        move()
    }
}

// змінює зображення при перелистувані
function move(){
    if(document.getElementById("img_c")){
        var divEl = document.getElementById("img_v")
        var h1 = document.getElementById("play_time")
        h1.textContent = list_pictures_g[numb][2];
        divEl.setAttribute('src', '/media/' + list_pictures_g[numb][0] );
    }

}

function play(elem,num){
    elem.style.top = num + 'px';
}


function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    var scrollHeight = len_menu * 125;
    var y = select.offsetTop;

        if (y + 125 < scrollHeight){
            down()
    }
    event.preventDefault();
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    var scrollHeight = len_menu * 125;
    var y = select.offsetTop;

    if (y - 125 > -1){
        up()
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

