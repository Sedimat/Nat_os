var hud_menu = new Image()
hud_menu.src = '/media/img/hud_menu.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var img_content = new Image()
img_content.src = '/media/img/content.svg'

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"


var content = document.querySelector(".content")

// викликає повідомлення
function element_login(txt){
    var key = txt
    if(txt == 1){
        txt = "Успішно авторизувались!"
    }

    if(!document.getElementById("div_login")){

    var div_info = document.createElement('div');
    div_info.id = 'div_login';
    div_info.style.left = 130 + 'px';
    div_info.style.top = 400 + 'px';
    div_info.style.position = 'absolute';

    var img_over = document.createElement('img');
    img_over.setAttribute('src', cont.src);
    img_over.id = 'img_login';
    img_over.style.left = 0 + 'px';
    img_over.style.top = 0 + 'px';
    img_over.style.height = 335 + 'px';
    img_over.style.position = 'absolute';
    div_info.appendChild(img_over);


    var txt_over = document.createElement('h1');
    txt_over.textContent = txt;
    txt_over.id = 'txt_login';
    txt_over.classList.add('info');
    txt_over.style.minWidth = '700px';
    txt_over.style.left = 20 + 'px';
    txt_over.style.top = 20 + 'px';
    txt_over.style.position = 'absolute';
    div_info.appendChild(txt_over);

    content.appendChild(div_info);

    for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                if(i == 9){
                    if(key == 1){
                        document.getElementById("div_login").remove()
                        document.getElementById("div_opt").remove()
                        document.getElementById("element").remove()
                        get_info_u()

                    }else{
                        document.getElementById("div_login").remove()
                    }

                }
            }, i * 150);
        }
    }
}

// викликає повідомлення
function element_info(n, p, p1){
    if(!document.getElementById("div_info")){
    var e_top = 20

    var div_info = document.createElement('div');
    div_info.id = 'div_info';
    div_info.style.left = 130 + 'px';
    div_info.style.top = 400 + 'px';
    div_info.style.position = 'absolute';

    var img_over = document.createElement('img');
    img_over.setAttribute('src', cont.src);
    img_over.id = 'img_over';
    img_over.style.left = 0 + 'px';
    img_over.style.top = 0 + 'px';
    img_over.style.height = 330 + 'px';
    img_over.style.position = 'absolute';
    div_info.appendChild(img_over);

    if(n != undefined){
        var txt_over = document.createElement('h1');
        txt_over.textContent = "Nick: " + n;
        txt_over.id = 'txt_info1';
        txt_over.classList.add('info');
        txt_over.style.minWidth = '700px';
        txt_over.style.left = 20 + 'px';
        txt_over.style.top = e_top + 'px';
        txt_over.style.position = 'absolute';
        div_info.appendChild(txt_over);
        e_top += 60
    }

    if(p != undefined){
        var txt_over1 = document.createElement('h1');
        txt_over1.textContent = "Pwd: " + p;
        txt_over1.id = 'txt_info2';
        txt_over1.classList.add('info');
        txt_over1.style.minWidth = '700px';
        txt_over1.style.left = 20 + 'px';
        txt_over1.style.top = e_top + 'px';
        txt_over1.style.position = 'absolute';
        div_info.appendChild(txt_over1);
        e_top += 60
    }

    if(p1 != undefined){
        var txt_over3 = document.createElement('h1');
        txt_over3.textContent = "Pwd2: " + p1;
        txt_over3.id = 'txt_info3';
        txt_over3.classList.add('info');
        txt_over3.style.minWidth = '700px';
        txt_over3.style.left = 20 + 'px';
        txt_over3.style.top = e_top + 'px';
        txt_over3.style.position = 'absolute';
        div_info.appendChild(txt_over3);
        e_top += 60
    }

    content.appendChild(div_info);

    for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                if(i == 9){
                    document.getElementById("div_info").remove()
                }
            }, i * 150);
        }
    }
}

// додає зображеня навігації
var img_hud = document.createElement('img');
    img_hud.setAttribute('src', hud_menu.src);
    img_hud.id = 'hud_menu';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.width = 1000 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);

// головний список налаштувань
function s_element(name){

    var txt = ""

    if (name == ""){
        txt = "Login/Registration"
    }else{
        txt = "User: " + name
    }

    var div_cont = document.createElement('div');
    div_cont.id = 'element';
    div_cont.classList.add('element');
    div_cont.style.left = 20 + 'px';
    div_cont.style.top = 70 + 'px';
    div_cont.style.height = 750 + 'px';
    div_cont.style.width = 960 + 'px';
    div_cont.style.position = 'absolute';

    var new_game = document.createElement('h1');
    new_game.textContent = txt;
    new_game.id = 'log';
    new_game.classList.add('menu');
    new_game.style.left = 0 + 'px';
    new_game.style.top = 0 + 'px';
    new_game.style.position = 'absolute';
    div_cont.appendChild(new_game);

    var about = document.createElement('h1');
    about.textContent = "About the project";
    about.id = 'about';
    about.classList.add('menu');
    about.style.left = 0 + 'px';
    about.style.top = 125 + 'px';
    about.style.position = 'absolute';
    div_cont.appendChild(about);

    var img_select = document.createElement('img');
    img_select.setAttribute('src', select.src);
    img_select.id = 'select';
    img_select.classList.add('select_img');
    img_select.style.position = 'absolute';
    div_cont.appendChild(img_select);

    content.appendChild(div_cont);
}

// виводить меню реєстрації
function add_options(){
    var pos = 410

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

    // форма для авторизіції
    var button = document.createElement('button');
    button.id = 'login';
    button.className = 'reg_button';
    button.style.top = 20 + 'px';
    button.style.left = 20 + 'px';
    button.textContent = 'Login';
    button.ontouchstart = function(event) { login(event); };
    button.ontouchend = function() { login_up(); };
    button.onmousedown = function(event) { login(event); };
    button.onmouseup = function() { login_up(); };
    div_opt.appendChild(button);

    var form_txt1 = document.createElement('h1');
    form_txt1.textContent = "Login form";
    form_txt1.style.left =  260 + 'px';
    form_txt1.style.top =  20 + 'px';
    form_txt1.style.minWidth = '400px';
    form_txt1.style.maxWidth = '900px';
    form_txt1.style.position = 'absolute';
    form_txt1.classList.add('menu');
    div_opt.appendChild(form_txt1);

    var input_l = document.createElement('input');
    input_l.type = 'text';
    input_l.name = 'username_l';
    input_l.id = 'username_l';
    input_l.className = 'input_r';
    input_l.placeholder = 'Nickname';
    input_l.style.left = 300 + 'px';
    input_l.style.top = 120 + 'px';
    div_opt.appendChild(input_l);

    var input_l2 = document.createElement('input');
    input_l2.type = 'password';
    input_l2.name = 'password_l';
    input_l2.id = 'password_l';
    input_l2.className = 'input_r';
    input_l2.placeholder = 'Password';
    input_l2.style.left = 300 + 'px';
    input_l2.style.top = 220 + 'px';
    div_opt.appendChild(input_l2);


    // форма для реєстрації
    var form_txt = document.createElement('h1');
    form_txt.textContent = "Registration form";
    form_txt.style.left =  -15 + 'px';
    form_txt.style.top =  330 + 'px';
    form_txt.style.minWidth = '400px';
    form_txt.style.maxWidth = '900px';
    form_txt.style.position = 'absolute';
    form_txt.classList.add('menu');
    div_opt.appendChild(form_txt);

    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'username';
    input.id = 'username';
    input.className = 'input_r';
    input.placeholder = 'Nickname';
    input.style.left = 20 + 'px';
    input.style.top = pos + 20 + 'px';
    div_opt.appendChild(input);

    var input2 = document.createElement('input');
    input2.type = 'password';
    input2.name = 'password1';
    input2.id = 'password1';
    input2.className = 'input_r';
    input2.placeholder = 'Password';
    input2.style.left = 20 + 'px';
    input2.style.top = pos + 120 + 'px';
    div_opt.appendChild(input2);

    var input3 = document.createElement('input');
    input3.type = 'password';
    input3.name = 'password2';
    input3.id = 'password2';
    input3.className = 'input_r';
    input3.placeholder = 'Password confirm';
    input3.style.left = 20 + 'px';
    input3.style.top = pos + 220 + 'px';
    div_opt.appendChild(input3);


    var button = document.createElement('button');
    button.id = 'registr';
    button.className = 'reg_button';
    button.style.top = pos + 20 + 'px';
    button.textContent = 'Regis';
    button.ontouchstart = function(event) { send(event); };
    button.ontouchend = function() { send_up(); };
    button.onmousedown = function(event) { send(event); };
    button.onmouseup = function() { send_up(); };
    div_opt.appendChild(button);

    content.appendChild(div_opt);

}

// виводить інформацію користувача
function add_user_info(name){
    var div_user_info = document.createElement('div');
    div_user_info.id = 'div_user_info';
    div_user_info.style.left = 20 + 'px';
    div_user_info.style.top = 70 + 'px';
    div_user_info.style.height = 750 + 'px';
    div_user_info.style.width = 960 + 'px';
    div_user_info.style.position = 'absolute';

    var img_opt = document.createElement('img');
    img_opt.classList.add('img_opt');
    img_opt.setAttribute('src', img_content.src );
    img_opt.style.width = 955 + 'px';
    div_user_info.appendChild(img_opt);

    var form_txt = document.createElement('h1');
    form_txt.textContent = name;
    form_txt.style.left =  -0 + 'px';
    form_txt.style.top = 20 + 'px';
    form_txt.style.minWidth = '400px';
    form_txt.style.maxWidth = '900px';
    form_txt.style.position = 'absolute';
    form_txt.classList.add('menu');
    div_user_info.appendChild(form_txt);

    var button1 = document.createElement('button');
    button1.id = 'logout';
    button1.className = 'logout_button';
    button1.style.top = 20 + 'px';
    button1.textContent = 'Logout';
    button1.ontouchstart = function(event) { logout(event); };
    button1.onmousedown = function(event) { logout(event); };
    div_user_info.appendChild(button1);

    content.appendChild(div_user_info);
}

// функція виходу
function logout(event) {
    window.location.href = "logout";
}


// отримує дані з форми авторизації та відправляє в бекенд
function login1(){
    username = document.getElementById("username_l").value
    password = document.getElementById("password_l").value
    get_login(username, password)
}

// отримує дані з форми реєстрації та відправляє в бекенд
function send_reg(){
    username = document.getElementById("username").value
    password1 = document.getElementById("password1").value
    password2 = document.getElementById("password2").value
    sending_data(username, password1, password2)
}


// кнопка реєстрації
function send(event) {
    document.getElementById('registr').style.backgroundColor = "#613703";
    send_reg()

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function send_up() {
    document.getElementById('registr').style.backgroundColor = "#291701";
}


// кнопка авторизації
function login(event) {
    document.getElementById('login').style.backgroundColor = "#613703";
    login1()

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function login_up() {
    document.getElementById('login').style.backgroundColor = "#291701";
}

var user_name = ""

function get_info_u(){
    fetch(`/get_user`)
    .then(response => response.json())
    .then(data => {
        user_name = data.user
        s_element(user_name)
    });
}

get_info_u()

function get_login(username1, password1){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        username: username1,
        password: password1,
    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/get_login', {
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
        txt_replay = data.reply
        if(data.reply == 1){
            element_login(1)
        }else{
            element_login(data.reply)
        }

    });
}

function sending_data(username1, password01, password02){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        username: username1,
        password1: password01,
        password2: password02,

    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/registration', {
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
        txt_replay = data.reply
        if(data.reply == 1){
            element_login(1)
        }else{
            element_info(data.reply.username, data.reply.password1, data.reply.password2)
        }
    });

}


var menu_pos = 0

function move(nav){

    if (nav == "s" && menu_pos < 1 && !document.getElementById("div_opt")
        && !document.getElementById("div_user_info")){
        var cur_select = parseInt(document.getElementById("select").style.top) || 0;
        document.getElementById("select").style.top = (cur_select + 125) + 'px';
        menu_pos += 1;

    }else if (nav == "w" && menu_pos > 0 && !document.getElementById("div_opt")
              && !document.getElementById("div_user_info")){
       var cur_select = parseInt(document.getElementById("select").style.top) || 0;
       document.getElementById("select").style.top = (cur_select - 125) + 'px';
       menu_pos -= 1;

    }else if (nav == "q"){
        if(!document.getElementById("div_opt") && !document.getElementById("div_user_info")){
            window.location.href = "/menu/5";
        }else if(document.getElementById("div_opt")){
            document.getElementById("div_opt").remove()

        }else if(document.getElementById("div_user_info")){
            document.getElementById("div_user_info").remove()
        }

    }else if (nav == "e"){
        console.log()
        if(menu_pos == 0 && !document.getElementById("div_opt") && user_name == ""){
            add_options(user_name)
        }else if(menu_pos == 0 && !document.getElementById("div_user_info") && user_name != ""){
            add_user_info(user_name)
        }

    }
//    console.log(menu_pos)
}


document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
        move("w")
    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
        move("s")
    }
    // натиснута кнопка E
    if (event.keyCode === 69) {

    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {

    }
});



function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
    move("s")

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);

}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
}

function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
    move("w")

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
    move("q")


    event.preventDefault();
    navigator.vibrate(50);
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    move("e")


    event.preventDefault();
    navigator.vibrate(50);
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}