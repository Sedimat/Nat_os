var img_content = new Image()
img_content.src = '/media/img/content.svg'

var hud_menu = new Image()
hud_menu.src = '/media/img/hud_menu.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var select0 = new Image()
select0.src = "/media/img/select0.svg"

var options = new Image()
options.src = "/media/img/options.svg"

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

function info(text){

    var r_word = '';
    for (let i = 0; i < 4; i++) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        r_word += String.fromCharCode(randomCharCode);
    }

    var div_info = document.createElement('div');
    div_info.id = r_word;
    div_info.style.left = 0 + 'px';
    div_info.style.top = 0 + 'px';

    var img_info = document.createElement('img');
    img_info.setAttribute('src', cont.src);
    img_info.id = 'img_over';
    img_info.style.left = 230 + 'px';
    img_info.style.top = 400 + 'px';
    img_info.style.height = 250 + 'px';
    img_info.style.position = 'absolute';
    div_info.appendChild(img_info);

    var txt_over = document.createElement('h1');
    txt_over.textContent = text;
    txt_over.id = 'txt_info';
    txt_over.classList.add('time');
    txt_over.style.left = 250 + 'px';
    txt_over.style.top = 420 + 'px';
    txt_over.style.maxWidth = '500px';
    txt_over.style.position = 'absolute';
    div_info.appendChild(txt_over);

    document.querySelector(".content").appendChild(div_info);

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            if(i == 9){
                document.getElementById(r_word).remove()
            }
        }, i * 100);
    }
}




var content = document.querySelector(".content")

var img_hud = document.createElement('img');
    img_hud.setAttribute('src', hud_menu.src);
    img_hud.id = 'hud_menu';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.width = 1000 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);

function elem(){
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
    }

elem()

function add_options(){

    var div_opt = document.createElement('div');
    div_opt.id = 'div_opt';
    div_opt.style.left = 20 + 'px';
    div_opt.style.top = 70 + 'px';
    div_opt.style.height = 750 + 'px';
    div_opt.style.width = 960 + 'px';
    div_opt.style.position = 'absolute';

    var img_opt = document.createElement('img');
    img_opt.classList.add('img_opt');
    img_opt.setAttribute('src', img_content.src );
    img_opt.style.width = 955 + 'px';

    div_opt.appendChild(img_opt);

    var title_menu = document.createElement('h1');
    title_menu.textContent = "Add as screensaver";
    title_menu.id = 'title_menu';
    title_menu.classList.add('menu');
    title_menu.style.left = 20 + 'px';
    title_menu.style.top = 20 + 'px';
    title_menu.style.position = 'absolute';
    div_opt.appendChild(title_menu);

    var title_menu1 = document.createElement('h1');
    title_menu1.textContent = "Delete";
    title_menu1.id = 'title_menu1';
    title_menu1.classList.add('menu');
    title_menu1.style.left = 20 + 'px';
    title_menu1.style.top = 140 + 'px';
    title_menu1.style.position = 'absolute';
    div_opt.appendChild(title_menu1);

    var img_select1 = document.createElement('img');
    img_select1.setAttribute('src', select.src);
    img_select1.id = 'select1';
    img_select1.style.left = 20 + 'px';
    img_select1.style.top = 20 + 'px';
    img_select1.style.width = 900 + 'px';
    img_select1.style.position = 'absolute';
    div_opt.appendChild(img_select1);

    var img_select0 = document.createElement('img');
    img_select0.setAttribute('src', select0.src );
    img_select0.id = 'select0';
    img_select0.style.left = 596 + 'px';
    img_select0.style.top = 745 + 'px';
    img_select0.style.width = 370 + 'px';
    img_select0.style.position = 'absolute';
    div_opt.appendChild(img_select0);

    content.appendChild(div_opt);

}



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
    newImg.style.width = 955 + 'px';

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

    var img_options = document.createElement('img');
    img_options.setAttribute('src', options.src );
    img_options.id = 'options';
    img_options.style.left = 596 + 'px';
    img_options.style.top = 745 + 'px';
    img_options.style.width = 370 + 'px';
    img_options.style.position = 'absolute';
    newDiv1.appendChild(img_options);

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





var numb = 0;



// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {
    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
        move_k("u")

    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
        move_k("d")

    }
    // натиснута кнопка E
    if (event.keyCode === 69) {
        move_k("r")
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        move_k("l")
    }
});




function up(){
    var contentDiv = document.querySelector('.cont');
    var select = document.getElementById('select');
    if(select){
        var y = select.offsetTop;
        play(select,y - 125)
        contentDiv.scrollTop -= 125;
        numb -= 1
        move()
    }

}

function down(){
    var contentDiv = document.querySelector('.cont');
    var select = document.getElementById('select');
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

var menu_pos1 = 0

//add_options()

function move_k(pos){
    var select = document.getElementById('select');
    // якщо немає елементів опцій
    if(!document.getElementById("div_opt")){
        var scrollHeight = len_menu * 125;
        var y = select.offsetTop;

        if(pos == "d"){
            if (y + 125 < scrollHeight){
                down()
            }
        }else if(pos == "u"){
            if (y - 125 > -1){
                up()
            }
        }else if(pos == "l"){
            if (document.getElementById("img_c")) {
                document.getElementById("img_c").remove();
            }else{
                window.location.href = "/menu/2";
            }

            if(document.getElementById("div_opt")){
                document.getElementById("div_opt").remove()
                menu_pos1 = 0
            }

        }else if(pos == "r"){
            if (!document.getElementById("img_c")){
                add_content(list_pictures_g[numb])
            }else if(document.getElementById("img_c")){
                add_options()
            }
        }
    }else if(document.getElementById("div_opt")){

        var select1 = document.getElementById("select1")
        var cur_select1_top = parseInt(select1.style.top) || 0;
        if(pos == "d" && menu_pos1 < 1){
            select1.style.top = cur_select1_top + 115 + 'px';
            menu_pos1++

        }else if(pos == "u" && menu_pos1 > 0){
            select1.style.top = cur_select1_top - 115 + 'px';
            menu_pos1--

        }else if(pos == "l"){
            document.getElementById("div_opt").remove()
            menu_pos1 = 0

        }else if(pos == "r"){
            if(menu_pos1 == 0){
                info("Робимо заставкою " + list_pictures_g[numb][1])
                sending_img(list_pictures_g[numb][0])
            }else if(menu_pos1 == 1){
                menu_pos1 = 0
                if(list_pictures_g[numb][3]){

//                    info("Видаляємо " + list_pictures_g[numb][1])
                    sending_data(list_pictures_g[numb][3])
                }else{
                    info("Стандартне зображення не видаляється")
                }
            }
        }
    }
}


function sending_img(img1){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        img: img1
    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/screensaver', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrfToken,
        },

        body: formData.toString(),
    })

    // отримує відповідь від бекенду
    .then(response => response.json())
    .then(data => {
        console.log(data.text)
    });
}

function sending_data(numb1){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        numb: numb1
    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/dell_img_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrfToken,
        },

        body: formData.toString(),
    })

    // отримує відповідь від бекенду

    .then(response => response.json())
    .then(data => {
        if(document.getElementById("div_opt")){
            document.getElementById("div_opt").remove()
        }
        if(document.getElementById("img_c")){
            document.getElementById("img_c").remove()
        }
        if(document.getElementById("cont")){
            document.getElementById("cont").remove()
        }
        elem()
        len_menu = data.list_pictures.length;
        list_pictures_g = data.list_pictures
        numb = 0

        for (let i = 0; i < data.list_pictures.length; i++) {
            add_picture(data.list_pictures[i])
        }
    });
}


function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
        move_k("d")

    event.preventDefault();
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
        move_k("u")


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
    move_k("l")

    event.preventDefault();
    navigator.vibrate(50);
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    move_k("r")

    event.preventDefault();
    navigator.vibrate(50);
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}

