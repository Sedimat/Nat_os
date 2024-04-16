
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



function left_select(){
    back()
}

function right_select(){
    select_link()
}


function up_control(){
    var scrollHeight = len_game * 125;
    var y = select.offsetTop;
    if (y - 125 > -1){
        play(select,y - 125)
        contentDiv.scrollTop -= 125;
        numb -= 1
    }
}

function down_control(){
    var scrollHeight = len_game * 125;
    var y = select.offsetTop;
    if (y + 125 < scrollHeight){
        play(select,y + 125)
        contentDiv.scrollTop += 125;
        numb += 1
    }
}


function left_control(){
    console.log("Left")
}

function right_control(){
    console.log("Right")
}