console.log("Тест")

var list_elem = [new Image(), new Image(), new Image(), new Image()]

list_elem[0].src = '/media/browser/hud_b.svg'
list_elem[1].src = '/media/browser/curs.svg'

var content = document.getElementById("content")

    var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.classList.add('div_menu');
    div_menu.style.position = "relative";
    div_menu.style.left = 35 + 'px';
    div_menu.style.top = 100 + 'px';
    div_menu.style.width = 900 + 'px';
    div_menu.style.height = 900 + 'px';
    div_menu.style.position = 'absolute';
    content.appendChild(div_menu);

    var img_hud = document.createElement('img');
    img_hud.setAttribute('src', list_elem[0].src);
    img_hud.id = 'img_hud';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.width = 1000 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);

    var new_game = document.createElement('h1');
    new_game.textContent = "www.OneBit.com";
    new_game.id = 'title_web';
    new_game.classList.add('menu_txt');
    new_game.style.left = 120 + 'px';
    new_game.style.top = 20 + 'px';
    new_game.style.position = 'absolute';
    content.appendChild(new_game);

    var img_cursor = document.createElement('img');
    img_cursor.setAttribute('src', list_elem[1].src);
    img_cursor.id = 'cursor';
    img_cursor.style.left = 460 + 'px';
    img_cursor.style.top = 400 + 'px';
    img_cursor.style.height = 80 + 'px';
    img_cursor.style.position = 'absolute';
    img_cursor.classList.add('select_img');

    content.appendChild(img_cursor);

    var div_cursor = document.createElement('div');
    div_cursor.id = 'div_cursor';
    div_cursor.style.left =  460 + 'px';
    div_cursor.style.top =  400 + 'px';
    div_cursor.style.height = 5 + 'px';
    div_cursor.style.width = 5 + 'px';
    div_cursor.style.backgroundColor = 'green';
    div_cursor.style.position = 'absolute';

    content.appendChild(div_cursor);


var pos_img = 10;

var elem = new Image()
elem.src = '/media/browser/img_pictures.svg';

var id = 0

function add_img(img, name, time){

    var div_menu = document.getElementById("div_menu")

    var img_news = document.createElement('img');
    img_news.setAttribute('src', elem.src);
    img_news.id = 'img_pictures';
    img_news.style.left = 10 + 'px';
    img_news.style.top = pos_img + 'px';
    img_news.style.height = 812 + 'px';
    img_news.style.position = 'absolute';
    img_news.classList.add('select_img');
    div_menu.appendChild(img_news);

    var img_mon = document.createElement('img');
    img_mon.setAttribute('src', "/media/" + img);
    img_mon.id = 'img_mon';
    img_mon.style.left = 10 + 15 + 'px';
    img_mon.style.top = pos_img + 100 + 'px';
    img_mon.style.height = 595 + 'px';
    img_mon.style.position = 'absolute';
    img_mon.classList.add('select_img');
    div_menu.appendChild(img_mon);

    var news1 = document.createElement('h1');
    news1.textContent = name;
    news1.id = 'name_img';
    news1.style.left =  10 + 35 + 'px';
    news1.style.top = pos_img + 25 + 'px';
    news1.style.minWidth = '790px';
    news1.style.maxWidth = '800px';
    news1.style.position = 'absolute';
    news1.classList.add('menu_txt');
    div_menu.appendChild(news1);

    var news2 = document.createElement('h1');
    news2.textContent = time;
    news2.id = 'time_img';
    news2.style.left =  10 + 560 + 'px';
    news2.style.top = pos_img + 745 + 'px';
    news2.style.minWidth = '400px';
    news2.style.maxWidth = '400px';
    news2.style.position = 'absolute';
    news2.classList.add('menu_txt');
    div_menu.appendChild(news2);

    var news3 = document.createElement('h1');
    news3.textContent = "Завантажити";
    news3.id = 'id' + id;
    news3.style.left =  10 + 30 + 'px';
    news3.style.top = pos_img + 740 + 'px';
    news3.style.minWidth = '260px';
    news3.style.maxWidth = '260px';
    news3.style.position = 'absolute';
    news3.style.backgroundColor = 'black'
    news3.classList.add('menu_txt1');
    div_menu.appendChild(news3);

    id++
    pos_img += 820;


}

var list_id_img = []

fetch(`/get_Nat_web`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.list_imgs.length; i++) {
            add_img(data.list_imgs[i][0], data.list_imgs[i][1], data.list_imgs[i][3])
            list_id_img.push([data.list_imgs[i]["4"], data.list_imgs[i][0],]);
        }

    });

console.log(list_id_img)


function sending_data(){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        messeg: JSON.stringify({"4": "link"}),
    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/onebit_share', {
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
        console.log(data.report)
    });
}

sending_data()


function move_element(ref){

    var cursor = document.getElementById("cursor")
    var cur_cursor_left = parseInt(cursor.style.left) || 0;
    var cur_cursor_top = parseInt(cursor.style.top) || 0;

    var div_menu = document.getElementById("div_menu")
    var cur_div_menu_top = parseInt(div_menu.style.top) || 0;


    if(ref == "d"){
        if(cur_cursor_top > 10){
            cursor.style.top = cur_cursor_top - 20 + 'px';
        }else{
            if(cur_div_menu_top < 100){
                div_menu.style.top = (cur_div_menu_top + 30) + 'px';
            }
        }


    }else if(ref == "u"){
        if(cur_cursor_top < 820){
            cursor.style.top = cur_cursor_top + 20 + 'px';
        }else{
            if(cur_div_menu_top > -5700){
                div_menu.style.top = (cur_div_menu_top - 30) + 'px';
            }
        }

    }else if(ref == "r"){
        if(cur_cursor_left < 960){
            cursor.style.left = cur_cursor_left + 20 + 'px';
        }

    }else if(ref == "l"){
        if(cur_cursor_left > 0){
            cursor.style.left = cur_cursor_left - 20 + 'px';
        }

    }
}



document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move_element("d")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_element("u")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            move_element("l")
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            move_element("r")
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