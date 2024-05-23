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

//var contentDiv = document.querySelector('.cont');
//
//var select = document.getElementById('select');
//
//var numb = 0;

document.addEventListener("keydown", function(event) {
//    var scrollHeight = len_game * 125;
//
//    var y = select.offsetTop;

    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
//        if (y - 125 > -1){
//            play(select,y - 125)
//            contentDiv.scrollTop -= 125;
//            numb -= 1
//        }
    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
//        if (y + 125 < scrollHeight){
//            play(select,y + 125)
//            contentDiv.scrollTop += 125;
//            numb += 1
//        }
    }
    // натиснута кнопка E
    if (event.keyCode === 69) {
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        back()
    }
});

function back(){
    window.location.href = "/menu/5";
}

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
    event.preventDefault();
    navigator.vibrate(50);
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}