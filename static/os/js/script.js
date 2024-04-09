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

function add_sounds(list_m){
    var sound = list_m[0]
    var name = list_m[1]

    var newDiv = document.createElement('div');
    newDiv.classList.add('menu_0'); // Додати клас "menu_0" до нового div

    var newImg = document.createElement('img');
    newImg.classList.add('img_sound'); // Додати клас "img_menu" до нового зображення
    newImg.setAttribute('src', '/media/img/sound.svg' ); // Встановити атрибут src

    var newH1 = document.createElement('h1');
    newH1.classList.add('menu'); // Додати клас "menu" до нового заголовка
    newH1.textContent = name; // Встановити текст заголовка

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH1);

    var contDiv = document.querySelector('.cont');

    contDiv.appendChild(newDiv);
}

function add_content(){
    var newDiv1 = document.createElement('div');
    newDiv1.classList.add('menu_1');
    newDiv1.id = 'img_c';

    var newImg = document.createElement('img');
    newImg.classList.add('img_content');
    newImg.setAttribute('src', '/media/img/content.svg' );

    newDiv1.appendChild(newImg);

    var h11 = document.createElement('h1');
    h11.textContent = "00:00 / 00:00";
    h11.id = 'play_time';
    h11.classList.add('time');
    h11.style.left = 300 + 'px';
    h11.style.top = 380 + 'px';
    h11.style.position = 'absolute';

    newDiv1.appendChild(h11);

    var newImg1 = document.createElement('img');
    newImg1.setAttribute('src', '/media/img/play1.svg' );
    newImg1.id = 'img_play1';
    newImg1.style.left = 130 + 'px';
    newImg1.style.top = 480 + 'px';
    newImg1.style.width = 700 + 'px';
    newImg1.style.position = 'absolute';
    newDiv1.appendChild(newImg1);

    var newdiv2 = document.createElement('div');
    newdiv2.id = 'img_play3';
    newdiv2.style.left = 130 + 'px';
    newdiv2.style.top = 480 + 'px';
    newdiv2.style.width = 700 + 'px';
    newdiv2.style.height = 100 + 'px';
    newdiv2.style.backgroundColor = "#fbe7b0";
    newdiv2.style.position = 'absolute';
    newDiv1.appendChild(newdiv2);

    var newImg1 = document.createElement('img');
    newImg1.setAttribute('src', '/media/img/play.svg' );
    newImg1.id = 'img_play';
    newImg1.style.left = 130 + 'px';
    newImg1.style.top = 480 + 'px';
    newImg1.style.width = 700 + 'px';
    newImg1.style.position = 'absolute';
    newDiv1.appendChild(newImg1);





    var contDiv = document.querySelector('.cont');

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
// список елементів меню
var  list_menu_g = null;

// список елементів звуків
var  list_sounds_g = null;

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

if (link_name()[0] == "sounds"){
    fetch(`/get_sounds`)
    .then(response => response.json())
    .then(data => {
        len_menu = data.list_sounds.length;
        list_sounds_g = data.list_sounds
        for (let i = 0; i < data.list_sounds.length; i++) {
            console.log(data.list_sounds[i])
            add_sounds(data.list_sounds[i])
        }
    });
}

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
            console.log(numb)
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


function back(){
    var elementToDelete = document.getElementById("img_c");
        if (elementToDelete) {
            elementToDelete.remove();
            sounds_stop(audio1)
        }else{
            window.location.href = "/menu";
    }
}

var audio1 = null;

function select_link(){
    console.log(link_name()[0])
    if (link_name()[0] == ""){
        window.location.href = "/menu";
    }

    if (link_name()[0] == "menu"){
        window.location.href = "/" + list_menu_g[numb][2];
    }
    if (link_name()[0] == "sounds"){

        if (!document.getElementById("img_c")){
            audio1 = new Audio("media/" + list_sounds_g[numb][0]);
            sounds_play()
            add_content()
        }

    }

}

// змінює час пісні та полосу
function move(){
    var divEl = document.getElementById("img_play3")
    var play_time = document.getElementById("play_time")
    var x = divEl.offsetLeft;
    var x1 = Math.round((700 / audio1.duration) / 10)

    divEl.style.left = x + x1 +'px';
//    divEl.style.width = (parseInt(divEl.style.width) - x1 + 'px';

    var duration = audio1.duration;
    var currentTime = audio1.currentTime
    var minutes1 = Math.floor(currentTime / 60);
    var seconds1 = Math.floor(currentTime % 60);
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);

    play_time.textContent = "0" + minutes1 + ":" + seconds1 + " / " + "0" + minutes + ":" + seconds;

    console.log(duration, currentTime);

    if(duration - 0.1 < currentTime){
        clearInterval(intervalId);
        status = 1
    }
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
            console.log(numb)
    }
}

function down_control(){
    var scrollHeight = len_menu * 125;
    var y = select.offsetTop;

    if (y + 125 < scrollHeight){
            play(select,y + 125)
            contentDiv.scrollTop += 125;
            numb += 1
            console.log(numb)
    }
}


function left_control(){
    console.log("Left")
}

function right_control(){
    console.log("Right")
}

var status = 1;
var intervalId = null;


// Включаемо музику
function sounds_play() {
    console.log(status)
    if (status == 1) {
        audio1.volume = 0.1; // встановлюємо гучність
        audio1.play();
        status = 2;
        intervalId = setInterval(move, 100);
    }
}



function sounds_stop(){
    audio1.pause();
    status = 1
    audio1.currentTime = 0; // встановлюємо час на початок
    clearInterval(intervalId);
}

