// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            move_element("d","div_menu")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            move_element("u","div_menu")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            move_element("r","div_menu")
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            move_element("l","div_menu")

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

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    event.preventDefault();
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

var list_fan = [new Image(), new Image(), new Image(), new Image()]

list_fan[0].src = '/media/browser/fan0.svg';
list_fan[1].src = '/media/browser/fan1.svg';
list_fan[2].src = '/media/browser/fan2.svg';
list_fan[3].src = '/media/browser/fan3.svg';


var list_elem = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_elem[0].src = '/media/browser/Cpu0.svg';
list_elem[1].src = '/media/browser/w_left.svg';
list_elem[2].src = '/media/browser/w_right.svg';
list_elem[3].src = '/media/browser/w_up.svg';
list_elem[4].src = '/media/browser/w_down.svg';
list_elem[5].src = '/media/browser/img_news.svg';
list_elem[6].src = '/media/browser/mountains.svg';



var content = document.getElementById('content');


var curs = new Image()
curs.src = '/media/browser/curs.svg'


function add_menu(){

    var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.classList.add('div_menu');
    div_menu.style.position = "relative";
    div_menu.style.left = 20 + 'px';
    div_menu.style.top = 20 + 'px';
    div_menu.style.width = 900 + 'px';
    div_menu.style.height = 900 + 'px';
    div_menu.style.position = 'absolute';
//    div_menu.style.backgroundColor = '#f0c55b';

    var img_select = document.createElement('img');
    img_select.setAttribute('src', list_elem[0].src);
    img_select.id = 'select';
    img_select.style.left = 0 + 'px';
    img_select.style.top = 0 + 'px';
    img_select.style.height = 878 + 'px';
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');
    div_menu.appendChild(img_select);

    var img_left = document.createElement('img');
    img_left.setAttribute('src', list_elem[1].src);
    img_left.id = 'left';
    img_left.style.left = -1161 + 'px';
    img_left.style.top = 276 + 'px';
    img_left.style.height = 595 + 'px';
    img_left.style.position = 'absolute';
    img_left.classList.add('select_img');
    div_menu.appendChild(img_left);

    var img_right = document.createElement('img');
    img_right.setAttribute('src', list_elem[2].src);
    img_right.id = 'right';
    img_right.style.left = 972 + 'px';
    img_right.style.top = 261 + 'px';
    img_right.style.height = 631 + 'px';
    img_right.style.position = 'absolute';
    img_right.classList.add('select_img');
    div_menu.appendChild(img_right);

    var img_up = document.createElement('img');
    img_up.setAttribute('src', list_elem[3].src);
    img_up.id = 'up';
    img_up.style.left = 45 + 'px';
    img_up.style.top = -595 + 'px';
    img_up.style.height = 595 + 'px';
    img_up.style.position = 'absolute';
    img_up.classList.add('select_img');
    div_menu.appendChild(img_up);

    var img_down = document.createElement('img');
    img_down.setAttribute('src', list_elem[4].src);
    img_down.id = 'img_down';
    img_down.style.left = 51 + 'px';
    img_down.style.top = 878 + 'px';
    img_down.style.height = 319 + 'px';
    img_down.style.position = 'absolute';
    img_down.classList.add('select_img');
    div_menu.appendChild(img_down);

    var img_mon = document.createElement('img');
    img_mon.setAttribute('src', list_elem[6].src);
    img_mon.id = 'img_mon';
    img_mon.style.left = -1000 + 'px';
    img_mon.style.top = 878 + 'px';
    img_mon.style.height = 600 + 'px';
    img_mon.style.position = 'absolute';
    img_mon.classList.add('select_img');
    div_menu.appendChild(img_mon);



    var img_fan = document.createElement('img');
    img_fan.setAttribute('src', list_fan[0].src);
    img_fan.id = 'img_fan';
    img_fan.style.left = 378 + 'px';
    img_fan.style.top = 341 + 'px';
    img_fan.style.height = 210 + 'px';
    img_fan.style.position = 'absolute';
    img_fan.classList.add('select_img');
    div_menu.appendChild(img_fan);


    var new_game = document.createElement('h1');
    new_game.textContent = "Nat Os";
    new_game.id = 'Nat Os';
    new_game.classList.add('menu_txt');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu.appendChild(new_game);

    var div_el = document.createElement('div');
    div_el.id = 'div_el';
    div_el.style.left =  800 + 'px';
    div_el.style.top =  900 + 'px';
    div_el.style.height = 100 + 'px';
    div_el.style.width = 80 + 'px';
    div_el.style.backgroundColor = 'green';
    div_el.style.position = 'absolute';
    div_menu.appendChild(div_el);

    content.appendChild(div_menu);
}

add_menu()

var img_cursor = document.createElement('img');
    img_cursor.setAttribute('src', curs.src);
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


var deep = -300;
var news_pos = 1200;

function add_news(title, description, time){
    deep += -410
    var div_menu = document.getElementById("div_menu")

    var img_news = document.createElement('img');
    img_news.setAttribute('src', list_elem[5].src);
    img_news.id = 'img_news';
    img_news.style.left = 50 + 'px';
    img_news.style.top = news_pos + 'px';
    img_news.style.height = 400 + 'px';
    img_news.style.position = 'absolute';
    img_news.classList.add('select_img');
    div_menu.appendChild(img_news);

    var news = document.createElement('h1');
    news.textContent = title;
    news.id = 'news0';
    news.classList.add('menu_txt');
    news.style.left = 80 + 'px';
    news.style.top = news_pos + 25 + 'px';
    news.style.position = 'absolute';
    div_menu.appendChild(news);

    var news1 = document.createElement('h1');
    news1.textContent = description;
    news1.id = 'news1';
    news1.style.left =  80 + 'px';
    news1.style.top =  news_pos + 100 + 'px';
    news1.style.maxWidth = '800px';
    news1.style.position = 'absolute';
    news1.classList.add('menu_txt');
    div_menu.appendChild(news1);

    var news2 = document.createElement('h1');
    news2.textContent = time;
    news2.id = 'news2';
    news2.style.left =  580 + 'px';
    news2.style.top =  news_pos + 330 + 'px';
    news2.style.position = 'absolute';
    news2.classList.add('menu_txt');
    div_menu.appendChild(news2);

    news_pos += 410

}

var list_news_len = null
var list_news = null

fetch(`/get_Nat_web`)
    .then(response => response.json())
    .then(data => {
        list_news_len = data.list_news.length;
        list_news = data.list_news
        for (let i = 0; i < data.list_news.length; i++) {
            add_news(data.list_news[i][0],data.list_news[i][1],data.list_news[i][2])

        }
    });

var speed = 20

function move_element(ref,element){

    var elem = document.getElementById(element)
    var cur_left = parseInt(elem.style.left) || 0;
    var cur_top = parseInt(elem.style.top) || 0;


    var cursor0 = document.getElementById("cursor")
    var cur_cursor = parseInt(cursor0.style.left) || 0;
    var cur_cursor_top = parseInt(cursor0.style.top) || 0;
    var div_cursor0 = document.getElementById("div_cursor")

    if(ref == "r"){
        if(cur_cursor > 10){
            cursor0.style.left = cur_cursor - speed + 'px';
            div_cursor0.style.left = cur_cursor - speed + 'px';
        }else{
            if(cur_left < 1200){
                elem.style.left = cur_left + speed + 'px';
            }
        }

    }else if(ref == "l"){
        if(cur_cursor < 950){
            cursor0.style.left = cur_cursor + speed + 'px';
            div_cursor0.style.left = cur_cursor + speed + 'px';
        }else{
            if(cur_left > -1160){
                elem.style.left = cur_left - speed + 'px';
            }
        }


    }else if(ref == "d"){
        if(cur_cursor_top > 10){
            cursor0.style.top = cur_cursor_top - speed + 'px';
            div_cursor0.style.top = cur_cursor_top - speed + 'px';
        }else{
            if(cur_top < 620){
                elem.style.top = cur_top + speed + 'px';
            }
        }
    }else if(ref == "u"){
        if(cur_cursor_top < 820){
            cursor0.style.top = cur_cursor_top + speed + 'px';
            div_cursor0.style.top = cur_cursor_top + speed + 'px';
        }else{
            if(cur_top > deep){
                elem.style.top = cur_top - speed + 'px';
                console.log(cur_top)
            }
        }
    }
}

var anim_iter = null

var anim = 0

function animation(){

    var cursor = document.getElementById("div_cursor").getBoundingClientRect();
    var div_ele1 = document.getElementById("div_el").getBoundingClientRect();

    if (!(cursor.right < div_ele1.left ||
            cursor.left > div_ele1.right ||
            cursor.bottom < div_ele1.top ||
            cursor.top > div_ele1.bottom)) {
                console.log("Є колізія");
        }

    document.getElementById("img_fan").setAttribute('src', list_fan[anim].src);

    anim += 1;
    if(anim == 4){
        anim = 0;
    }

}

anim_iter = setInterval(animation, 100);
//clearInterval(anim_iter);