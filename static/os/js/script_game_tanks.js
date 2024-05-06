var list_man = [new Image(), new Image(), new Image(), new Image()]

list_man[0].src = '/media/g_stack/man1.svg';
list_man[1].src = '/media/g_stack/man2.svg';
list_man[2].src = '/media/g_stack/man3.svg';
list_man[3].src = '/media/g_stack/man4.svg';


function add_setings(){
    var content = document.getElementById('content');

    var div_game = document.createElement('div');
    div_game.id = 'div_game';
    div_game.style.left = 0 + 'px';
    div_game.style.top = 0 + 'px';
    div_game.style.height = 1000 + 'px';
    div_game.style.width = 900 + 'px';
    div_game.classList.add('content');
    div_game.style.position = 'absolute';

    var new_game = document.createElement('h1');
    new_game.textContent = "Текст який зміниться";
    new_game.id = 'text';
    new_game.classList.add('menu');
    new_game.style.left = 260 + 'px';
    new_game.style.top = 310 + 'px';
    new_game.style.position = 'absolute';
    div_game.appendChild(new_game);

    var img_man = document.createElement('img');
    img_man.setAttribute('src', list_man[0].src);
    img_man.id = 'img_man';
    img_man.style.left = 300 + 'px';
    img_man.style.top = 400 + 'px';
    img_man.style.width = 160 + 'px';
    img_man.style.position = 'absolute';
    div_game.appendChild(img_man);

    content.appendChild(div_game);
}




add_setings()

var anim = 0;

var count = 0;

function game(){

    if (anim == 4){
        anim = 0
    }
    document.getElementById('img_man').setAttribute('src', list_man[anim].src);

    count += 1;
    if (count == 5){
        count = 0
        anim += 1;
    }

}


var gameinterval = null

gameinterval = setInterval(game, 120)



function move(pos){
    var cur_m_top = parseInt(document.getElementById("img_man").style.top) || 0;
    var cur_m_left = parseInt(document.getElementById("img_man").style.left) || 0;

    if(pos == "d"){
        document.getElementById("img_man").style.top = (cur_m_top + 10) + 'px';
    } else if(pos == "u"){
        document.getElementById("img_man").style.top = (cur_m_top - 10) + 'px';
    }
}



// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            document.getElementById("text").textContent = "Клавіша";
             console.log("W")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
             console.log("S")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
             console.log("A")
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            console.log("D")
        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
         console.log("E")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {
        console.log("F")
        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
       console.log("Q")
    }
});

var down = null
var up = null

// Кнопки тачу
// кнопка вниз
function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    document.getElementById("text").textContent = "ТАЧ";
    clearInterval(down)
    down = setInterval(() => move("d"), 100);
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
    document.getElementById("text").textContent = "ТАЧ";

    clearInterval(up)
    up = setInterval(() => move("u"), 100);
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
    document.getElementById("text").textContent = "ТАЧ";
    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    document.getElementById("text").textContent = "ТАЧ";
    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    document.getElementById("text").textContent = "ТАЧ";
    event.preventDefault();
    navigator.vibrate(50);
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    document.getElementById("text").textContent = "ТАЧ";
    event.preventDefault();
    navigator.vibrate(50);

}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

// правий селект
function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    document.getElementById("text").textContent = "ТАЧ";
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію

}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}