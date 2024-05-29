
var list_elem = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_elem[0].src = '/media/browser/hud_b.svg'
list_elem[1].src = '/media/browser/curs.svg'
list_elem[2].src = '/media/browser/hud_anim.svg'

var content = document.getElementById("content")

function element(){

    var img_hud = document.createElement('img');
    img_hud.setAttribute('src', list_elem[0].src);
    img_hud.id = 'img_hud';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.width = 1000 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);

    var new_game = document.createElement('h1');
    new_game.textContent = "www.Pixelmove.com";
    new_game.id = 'title_web';
    new_game.classList.add('menu_txt');
    new_game.style.left = 120 + 'px';
    new_game.style.top = 20 + 'px';
    new_game.style.position = 'absolute';
    content.appendChild(new_game);

    var img_cursor = document.createElement('img');
    img_cursor.setAttribute('src', list_elem[1].src);
    img_cursor.id = 'cursor';
    img_cursor.style.left = 760 + 'px';
    img_cursor.style.top = 100 + 'px';
    img_cursor.style.height = 80 + 'px';
    img_cursor.style.position = 'absolute';
    img_cursor.classList.add('select_img');
    content.appendChild(img_cursor);

    var div_cursor = document.createElement('div');
    div_cursor.id = 'div_cursor';
    div_cursor.style.left =  760 + 'px';
    div_cursor.style.top =  100 + 'px';
    div_cursor.style.height = 5 + 'px';
    div_cursor.style.width = 5 + 'px';
//    div_cursor.style.backgroundColor = 'green';
    div_cursor.style.position = 'absolute';

    content.appendChild(div_cursor);

}

var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.style.position = "relative";
    div_menu.style.left = 35 + 'px';
    div_menu.style.top = 100 + 'px';
    div_menu.style.width = 900 + 'px';
    div_menu.style.height = 900 + 'px';
    div_menu.style.position = 'absolute';

    content.appendChild(div_menu);

element()





//window.addEventListener('load', function() {
//
//});

function animation(id, w, k){

    var img_id = 'img_' + id

    var anim_iter = null
    var i = 0

    function anim(){
        i++
        var img_anim = document.getElementById(img_id)
        var cur_img_anim_left = parseInt(img_anim.style.left) || 0;
        img_anim.style.left = cur_img_anim_left - w + 'px';
        if(k == 4){
        }
        if(i == k){
            i = 0
            img_anim.style.left = 0 + 'px';
        }

    }

    anim_iter = setInterval(anim, 150);

}


// отримує список зображень
var list_anim = []

fetch(`/get_animations`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.list_anim.length; i++) {

            var r_word = '';
            for (let i = 0; i < 4; i++) {
                let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                r_word += String.fromCharCode(randomCharCode);
            }
            list_anim.push([data.list_anim[i][0], data.list_anim[i][1],
                            data.list_anim[i][2], data.list_anim[i][3],
                            r_word, data.list_anim[i][4]]);

            anim_e(data.list_anim[i][0], data.list_anim[i][1], data.list_anim[i][2], data.list_anim[i][3], r_word)
        }

        for (let i = 0; i < list_anim.length; i++) {
            animation(list_anim[i][4], list_anim[i][3], list_anim[i][5])
        }
    });

var a_top = 20

function anim_e(img, txt, h, w, id){

    var div_menu = document.getElementById("div_menu")

    var d_txt = document.createElement('h1');
    d_txt.textContent = txt;
    d_txt.id = 'txt_' + id;
    d_txt.classList.add('menu_txt');
    d_txt.style.left = 50 + 'px';
    d_txt.style.top = a_top + 10 + 'px';
    d_txt.style.position = 'absolute';
    div_menu.appendChild(d_txt);

    var img_hud = document.createElement('img');
    img_hud.setAttribute('src', list_elem[2].src);
    img_hud.id = 'img_hud_' + id;
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = a_top + 'px';
    img_hud.style.height = 217 + 'px';
    img_hud.style.position = 'absolute';
    div_menu.appendChild(img_hud);

    var div_anim = document.createElement('div');
    div_anim.id = 'div_' + id;
    div_anim.style.left = 50 + 'px';
    div_anim.style.top = a_top + 110 + 'px';
    div_anim.style.height = h + 'px';
    div_anim.style.width = w + 'px';
    div_anim.style.position = 'absolute';
    div_anim.style.overflow = 'hidden';

    var img_anim = document.createElement('img');
    img_anim.setAttribute('src', "/media/" + img);
    img_anim.id = 'img_' + id;
    img_anim.style.left = 0 + 'px';
    img_anim.style.top = 0 + 'px';
    img_anim.style.height = h + 'px';
    img_anim.style.position = 'absolute';
    div_anim.appendChild(img_anim);

    div_menu.appendChild(div_anim);

    a_top += h + 130
}

function move(pos){

    var deep = 900 - a_top
    var div_menu = document.getElementById("div_menu")
    var cur_div_menu_top = parseInt(div_menu.style.top) || 0;

    if(pos == "s" && cur_div_menu_top > deep){
        div_menu.style.top = cur_div_menu_top - 20 + 'px';
    }
    if(pos == "w" &&  cur_div_menu_top < 100){
        div_menu.style.top = cur_div_menu_top + 20 + 'px';
    }

}



// Коли кнопки натиснуті
document.addEventListener("keydown", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move("w")

        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move("s")
        }
        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){

        }
        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){

        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
    }
    // натиснута кнопка F
    if (event.keyCode === 70) {

    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        window.location.href = "/browser";

    }
});

// Коли кнопки відпущені
document.addEventListener("keyup", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){

    }
    // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){

    }
    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){

    }
    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {

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



function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";

}

function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";

}


function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
}


function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    window.location.href = "/browser";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);

}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";

    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}