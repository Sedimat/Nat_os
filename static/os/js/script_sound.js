

// додає на DOM елементи звуків
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

function add_content(name){
    var newDiv1 = document.createElement('div');
    newDiv1.classList.add('menu_1');
    newDiv1.id = 'img_c';

    var newImg = document.createElement('img');
    newImg.classList.add('img_content');
    newImg.setAttribute('src', '/media/img/content.svg' );

    newDiv1.appendChild(newImg);

    var img_v = document.createElement('img');
    img_v.setAttribute('src', '/media/img/v1.svg' );
    img_v.id = 'img_v';
    img_v.style.left = 20 + 'px';
    img_v.style.top = 20 + 'px';
    img_v.style.height = 550 + 'px';
    img_v.style.position = 'absolute';
    newDiv1.appendChild(img_v);

    var newImg5 = document.createElement('img');
    newImg5.setAttribute('src', '/media/img/01.svg' );
    newImg5.id = 'img_r';
    newImg5.style.left = 135 + 'px';
    newImg5.style.top = 140 + 'px';
    newImg5.style.height = 200 + 'px';
    newImg5.style.position = 'absolute';
    newDiv1.appendChild(newImg5);

    var h12 = document.createElement('h1');
    h12.textContent = name;
    h12.id = 'sound_name';
    h12.classList.add('time');
    h12.style.left = 135 + 'px';
    h12.style.top = 30 + 'px';
    h12.style.position = 'absolute';
    newDiv1.appendChild(h12);

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
    newdiv2.style.left = 135 + 'px';
    newdiv2.style.top = 480 + 'px';
    newdiv2.style.width = 690 + 'px';
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

// список елементів звуків
var  list_sounds_g = null;


if (link_name()[0] == "sounds"){
    fetch(`/get_sounds`)
    .then(response => response.json())
    .then(data => {
        len_menu = data.list_sounds.length;
        list_sounds_g = data.list_sounds
        for (let i = 0; i < data.list_sounds.length; i++) {
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
    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){

        if (document.getElementById("img_c")){
            volume_pls()
        }else{
                if (y - 125 > -1){
                play(select,y - 125)
                contentDiv.scrollTop -= 125;
                numb -= 1
            }
        }
    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
        if (document.getElementById("img_c")){
            volume_minus()
        }else{
            if (y + 125 < scrollHeight){
                play(select,y + 125)
                contentDiv.scrollTop += 125;
                numb += 1
            }
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
            sounds_stop(audio1)
        }else{
            window.location.href = "/menu/3";
    }
}

var audio1 = null;

function select_link(){
    if (!document.getElementById("img_c")){
        audio1 = new Audio("media/" + list_sounds_g[numb][0]);
        sounds_play()
        add_content(list_sounds_g[numb][2])
}

}

var list_img = ["/media/img/02.svg","/media/img/03.svg","/media/img/04.svg","/media/img/01.svg",]
var num_img = 0
var time_play = 0

// змінює час пісні та полосу
function move(){
    var divEl = document.getElementById("img_play3")
    var play_time = document.getElementById("play_time")
    var x = divEl.offsetLeft;
    var time_play1 = Math.round(audio1.currentTime)
    var x1 = Math.round(700 / audio1.duration)

    if (time_play < time_play1){
        time_play = time_play1;
        divEl.style.left = x + x1 +'px';
        divEl.style.width = (parseInt(divEl.style.width) - x1 + 'px');
    }
    var img_r = document.getElementById("img_r")
    img_r.setAttribute('src', list_img[num_img] );
    num_img += 1
    if (num_img == 4){
        num_img = 0
    }

    var img_r = document.getElementById("img_v")

    if(audio1.volume.toFixed(1) == 0.2){
        img_r.setAttribute('src', '/media/img/v1.svg' );
    }else if(audio1.volume.toFixed(1) == 0.4){
        img_r.setAttribute('src', '/media/img/v2.svg' );
    }else if(audio1.volume.toFixed(1) == 0.6){
        img_r.setAttribute('src', '/media/img/v3.svg' );
    }else if(audio1.volume.toFixed(1) == 0.8){
        img_r.setAttribute('src', '/media/img/v4.svg' );
    }else if(audio1.volume.toFixed(1) == 1.0){
        img_r.setAttribute('src', '/media/img/v5.svg' );
    }



    var duration = audio1.duration;
    var currentTime = audio1.currentTime

    var minutes1 = Math.floor(currentTime / 60);
    var seconds1 = Math.floor(currentTime % 60);
    if(seconds1 < 10){
        seconds1 = "0" + seconds1
    }

    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);

    play_time.textContent = "0" + minutes1 + ":" + seconds1 + " / " + "0" + minutes + ":" + seconds;

    if(duration - 0.1 < currentTime){
        clearInterval(intervalId);
        status = 1
        time_play = 0
        back()
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

    if (document.getElementById("img_c")){
            volume_pls()
        }else{
                if (y - 125 > -1){
                play(select,y - 125)
                contentDiv.scrollTop -= 125;
                numb -= 1
            }
    }
}

function down_control(){
    var scrollHeight = len_menu * 125;
    var y = select.offsetTop;

    if (document.getElementById("img_c")){
            volume_minus()
        }else{
            if (y + 125 < scrollHeight){
                play(select,y + 125)
                contentDiv.scrollTop += 125;
                numb += 1
        }
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
    if (status == 1) {
        audio1.volume = 0.2; // встановлюємо гучність
        audio1.play();
        status = 2;
        intervalId = setInterval(move, 100);
    }
}

function sounds_stop(){
    audio1.pause();
    status = 1
    audio1.currentTime = 0; // встановлюємо час на початок
    time_play = 0
    clearInterval(intervalId);
}

function volume_pls(){
    if (audio1.volume.toFixed(1) < 1){
        audio1.volume += 0.2
    }
}
function volume_minus(){
    if (audio1.volume.toFixed(1) > 0.2){
        audio1.volume -= 0.2
    }
}
