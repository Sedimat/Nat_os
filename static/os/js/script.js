function updateTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
        }
    if (minutes < 10) {
        minutes = '0' + minutes;
        }
    if (seconds < 10) {
        seconds = '0' + seconds;
        }
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; // Місяці починаються з 0, тому додаємо 1
    var day = currentTime.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    var formattedDate = year + '.' + month + '.' + day;

    var timeElement = document.getElementById('time');

    timeElement.textContent = formattedTime;

    var dateElement = document.getElementById('date');

    dateElement.textContent = formattedDate;

    }

// Викликаємо функцію оновлення часу кожну секунду

if(document.getElementById('time')){
    setInterval(updateTime, 1000);
}


// Функція для вмикання/вимикання режиму на весь екран
function toggleFullScreen() {
    window.location.href = "/menu";
//    var elem = document.documentElement;
//
//    if (!document.fullscreenElement && !document.mozFullScreenElement &&
//        !document.webkitFullscreenElement && !document.msFullscreenElement) {
//        if (elem.requestFullscreen) {
//            elem.requestFullscreen();
//        } else if (elem.msRequestFullscreen) {
//            elem.msRequestFullscreen();
//        } else if (elem.mozRequestFullScreen) {
//            elem.mozRequestFullScreen();
//        } else if (elem.webkitRequestFullscreen) {
//            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//        }
//    } else {
//        if (document.exitFullscreen) {
//            document.exitFullscreen();
//        } else if (document.msExitFullscreen) {
//            document.msExitFullscreen();
//        } else if (document.mozCancelFullScreen) {
//            document.mozCancelFullScreen();
//        } else if (document.webkitExitFullscreen) {
//            document.webkitExitFullscreen();
//        }
//    }
}



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


var len_menu = 0;
var  list_menu_g = null;

if (link_name()[0] == "menu"){
    fetch(`/get_menu`)
    .then(response => response.json())
    .then(data => {
        len_menu = data.list_menu.length;
        list_menu_g = data.list_menu
        for (let i = 0; i < data.list_menu.length; i++) {
            add_menu(data.list_menu[i])
        }
    });
}

var contentDiv = document.querySelector('.cont');

var numb = 0;

var select = document.getElementById('select');


// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {
    var scrollHeight = len_menu * 125;

    var x = select.offsetLeft;
    var y = select.offsetTop;

    if (event.keyCode === 87 || event.keyCode === 38){
        if (y - 125 > -1){
            play(select,y - 125)
            contentDiv.scrollTop -= 125;
            numb -= 1
            console.log(numb)
        }
    }
    if (event.keyCode === 83 || event.keyCode === 40){
        if (y + 125 < scrollHeight){
            play(select,y + 125)
            contentDiv.scrollTop += 125;
            numb += 1
            console.log(numb)

        }
    }
    if (event.keyCode === 69) {
        window.location.href = "/" + list_menu_g[numb][2];
    }
    if (event.keyCode === 81) {
        window.location.href = "/menu";
    }
});

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




