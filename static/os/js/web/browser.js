console.log("тест")

var list_elem = [new Image(), new Image(), new Image(), new Image()]

list_elem[0].src = '/media/browser/hud_browser.svg'
list_elem[1].src = '/media/browser/select_b.svg'
list_elem[2].src = '/media/browser/hud_load.svg'

var list_earth = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]

list_earth[0].src = '/media/browser/e1.svg'
list_earth[1].src = '/media/browser/e2.svg'
list_earth[2].src = '/media/browser/e3.svg'
list_earth[3].src = '/media/browser/e4.svg'
list_earth[4].src = '/media/browser/e5.svg'
list_earth[5].src = '/media/browser/e6.svg'


var content = document.getElementById("content")

function element(){
    var img_hud_l = document.createElement('img');
    img_hud_l.setAttribute('src', list_elem[2].src);
    img_hud_l.id = 'img_hud_l';
    img_hud_l.style.left = 116.25 + 'px';
    img_hud_l.style.top = 14.60 + 'px';
    img_hud_l.style.width = 769.3 + 'px';
    img_hud_l.style.clipPath = `inset(0 100% 0 0)`
    img_hud_l.style.position = 'absolute';
    content.appendChild(img_hud_l);

    var img_hud = document.createElement('img');
    img_hud.setAttribute('src', list_elem[0].src);
    img_hud.id = 'img_hud';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.height = 900 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);

    var img_earth = document.createElement('img');
    img_earth.setAttribute('src', list_earth[0].src);
    img_earth.id = 'img_earth';
    img_earth.style.left = 28 + 'px';
    img_earth.style.top = 20 + 'px';
    img_earth.style.height = 68 + 'px';
    img_earth.style.position = 'absolute';
    content.appendChild(img_earth);

    var title_web = document.createElement('h1');
    title_web.textContent = "Ваш URL";
    title_web.id = 'title_web';
    title_web.classList.add('menu_txt1');
    title_web.style.left = 140 + 'px';
    title_web.style.top = 30 + 'px';
    title_web.style.position = 'absolute';
//    title_web.style.backgroundColor = 'black'
    content.appendChild(title_web);

    var select_b = document.createElement('img');
    select_b.setAttribute('src', list_elem[1].src);
    select_b.id = 'select';
    select_b.style.left = 30 + 'px';
    select_b.style.top = 117 + 'px';
    select_b.style.height = 70 + 'px';
    select_b.style.position = 'absolute';
    content.appendChild(select_b);
}

var numb = 0
var pos_txt = 125
function web(title){
    var title_site = document.createElement('h1');
    title_site.textContent = title;
    title_site.id = 'title_site' + numb;
    title_site.classList.add('menu_txt');
    title_site.style.left = 50 + 'px';
    title_site.style.top = pos_txt + 'px';
    title_site.style.position = 'absolute';
    content.appendChild(title_site);

    numb++
    pos_txt += 80

}

element()

var list_webs = []
var len_lw = 0

var present = 100
var anim_e = 0

function anim(){
    document.getElementById('title_web').textContent = "www." + list_webs[move_pos][2] + ".com";
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {

            document.getElementById('img_earth').setAttribute('src', list_earth[anim_e].src);
            anim_e++
            if(anim_e == 6){
                anim_e = 0
            }

            var r_left = Math.floor(Math.random() * (30 - (0) + 1)) + (0);
            present -= r_left
            document.getElementById("img_hud_l").style.clipPath = `inset(0 ${present}% 0 0)`;

            if(i == 9){
               document.getElementById("img_hud_l").style.clipPath = `inset(0 100% 0 0)`;
               present = 100
               window.location.href = "/" + list_webs[move_pos][2]
            }

        }, i * 100);
    }
}



fetch(`/get_website`)
    .then(response => response.json())
    .then(data => {

        list_webs = data.list_webs
        len_lw = data.list_webs.length
        for (let i = 0; i < data.list_webs.length; i++) {
            web(data.list_webs[i][1])
        }

    });


document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            menu("u")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            menu("d")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){

        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){

        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
            menu("r")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {

    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        window.location.href = "/";

    }
});

function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    menu("d")

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";

}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    menu("u")

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";

}

function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";

}


function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";


    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";

}

function center(event){
    document.getElementById('c_C').style.backgroundColor = "#613703";


    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function center_up(){
    document.getElementById('c_C').style.backgroundColor = "#291701";
}

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    window.location.href = "/";

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);

}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    menu("r")

    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}

var move_pos = 0

function menu(pos){
    if(pos == "d" && move_pos < len_lw - 1){
        var select = document.getElementById("select")
        var cur_select_top = parseInt(select.style.top) || 0;
        select.style.top = (cur_select_top + 80) + 'px';
        move_pos++
    }else if(pos == "u" && move_pos > 0){
        var select = document.getElementById("select")
        var cur_select_top = parseInt(select.style.top) || 0;
        select.style.top = (cur_select_top - 80) + 'px';
        move_pos--
    }else if(pos == "r"){
        anim()
    }



}