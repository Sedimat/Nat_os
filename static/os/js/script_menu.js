

// додає на DOM елементи меню
function add_menu(list_m){
    var img = list_m[0]
    var name = list_m[1]

    var newDiv = document.createElement('div');
    newDiv.classList.add('menu_0'); // Додати клас "menu_0" до нового div

    var newImg = document.createElement('img');
    newImg.classList.add('img_menu'); // Додати клас "img_menu" до нового зображення
    newImg.setAttribute('src', '/media/' + img ); // Встановити атрибут src

    var newH1 = document.createElement('h1');
    newH1.classList.add('menu'); // Додати клас "menu" до нового заголовка
    newH1.textContent = name; // Встановити текст заголовка

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH1);

    var contDiv = document.querySelector('.cont');

    contDiv.appendChild(newDiv);
}


// довжина списку
var len_menu = 0;
// список елементів меню
var  list_menu_g = null;



    fetch(`/get_menu`)
    .then(response => response.json())
    .then(data => {
        len_menu = data.list_menu.length;
        list_menu_g = data.list_menu
        for (let i = 0; i < data.list_menu.length; i++) {
            add_menu(data.list_menu[i])

        }
        play(select,link_name()[0] * 125)
        numb = parseInt(link_name()[0])
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


    if (event.keyCode === 87 || event.keyCode === 38){
        if (y - 125 > -1){
            play(select,y - 125)
            contentDiv.scrollTop -= 125;
            numb -= 1

        }
    }
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

// повертає в меню або виходить з музики
function back(){
    window.location.href = "/";
}


function select_link(){
        window.location.href = "/" + list_menu_g[numb][2];
}

function play(elem,num){
//    elem.style.transition = 'top ' + 0.1 + 's linear'; // Плавний перехід з лінійною швидкістю
    elem.style.top = num + 'px'; // Переміщення на вказану позицію
}

function link_name(){
    var currentPath = window.location.pathname;
    var a = currentPath.lastIndexOf("/");
    var name = currentPath.slice(a + 1);
    var link = currentPath.slice(1, a);
    return [name, link, currentPath]
}

function left_select(){
    back()
}


function right_select(){
    select_link()
}

function up_control(){
    var scrollHeight = len_menu * 125;

    var y = select.offsetTop;
    if (y - 125 > -1){
            play(select,y - 125)
            contentDiv.scrollTop -= 125;
            numb -= 1
    }
}

function down_control(){
    var scrollHeight = len_menu * 125;
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

