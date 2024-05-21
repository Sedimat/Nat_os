
var list_tree_s1 = [new Image(), new Image(), new Image()]

list_tree_s1[0].src = '/media/g_driver/s1.svg';
list_tree_s1[1].src = '/media/g_driver/s2.svg';
list_tree_s1[2].src = '/media/g_driver/s3.svg';

var list_tree_s2 = [new Image(), new Image(), new Image()]

list_tree_s2[0].src = '/media/g_driver/s11.svg';
list_tree_s2[1].src = '/media/g_driver/s13.svg';

var list_b_s = [new Image(), new Image()]

list_b_s[0].src = '/media/g_driver/s_t1.svg';
list_b_s[1].src = '/media/g_driver/s_t2.svg';

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image(),
                    new Image(), new Image(), new Image(), new Image(), new Image()]

list_element[0].src = '/media/g_driver/car3.svg';
list_element[1].src = '/media/g_driver/phone_c.svg';
list_element[2].src = '/media/g_driver/fura2.svg';
list_element[3].src = '/media/g_driver/truck2.svg';
list_element[4].src = '/media/g_driver/oil.svg';
list_element[5].src = '/media/g_driver/car_e1.svg';
list_element[6].src = '/media/g_driver/car_e2.svg';
list_element[7].src = '/media/g_driver/kanistra.svg';
list_element[8].src = '/media/g_driver/panel.svg';
list_element[9].src = '/media/g_driver/panel1.svg';
list_element[10].src = '/media/g_driver/car_back.svg';
list_element[11].src = '/media/g_driver/car_back1.svg';
list_element[12].src = '/media/g_driver/car4.svg';
list_element[13].src = '/media/g_driver/car5.svg';
list_element[14].src = '/media/g_driver/kluch.svg';
list_element[15].src = '/media/g_driver/car_u1.svg';
list_element[16].src = '/media/g_driver/car_u2.svg';
list_element[17].src = '/media/g_driver/car_с1.svg';
list_element[18].src = '/media/g_driver/car_с2.svg';
list_element[19].src = '/media/g_driver/car_u1_2.svg';
list_element[20].src = '/media/g_driver/car_u2_1.svg';
list_element[21].src = '/media/g_driver/panel2.svg';

var list_crush = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_crush[0].src = '/media/g_driver/car_c1.svg';
list_crush[1].src = '/media/g_driver/car_c2.svg';
list_crush[2].src = '/media/g_driver/car_c3.svg';
list_crush[3].src = '/media/g_driver/car_c4.svg';
list_crush[4].src = '/media/g_driver/car_c5.svg';

var menu_h = new Image()
menu_h.src = '/media/g_ball/game_menu0.svg'

var select = new Image()
select.src = "/media/img/select.svg"

var zastavka = new Image()
zastavka.src = '/media/g_driver/zastavka.svg'

var cont = new Image()
cont.src = "/media/g_uhe/plashka.svg"

var score = 0

function game_over(){
    var div_game_over = document.createElement('div');
    div_game_over.id = 'div_game_over';
    div_game_over.style.left = 0 + 'px';
    div_game_over.style.top = 0 + 'px';

    var img_over = document.createElement('img');
    img_over.setAttribute('src', cont.src);
    img_over.id = 'img_over';
    img_over.style.left = 230 + 'px';
    img_over.style.top = 200 + 'px';
    img_over.style.height = 250 + 'px';
    img_over.style.position = 'absolute';
    div_game_over.appendChild(img_over);

    var txt_over = document.createElement('h1');
    txt_over.textContent = "Game over";
    txt_over.id = 'txt_over1';
    txt_over.classList.add('score');
    txt_over.style.left = 300 + 'px';
    txt_over.style.top = 220 + 'px';
    txt_over.style.position = 'absolute';
    div_game_over.appendChild(txt_over);

    var txt_over1 = document.createElement('h1');
    txt_over1.textContent = "Distance: " + (score / 1000).toFixed(1) + "km";
    txt_over1.id = 'txt_over2';
    txt_over1.classList.add('score');
    txt_over1.style.left = 300 + 'px';
    txt_over1.style.top = 300 + 'px';
    txt_over1.style.position = 'absolute';
    div_game_over.appendChild(txt_over1);

    content.appendChild(div_game_over);
}

function add_menu(){
    var div_menu = document.createElement('div');
    div_menu.id = 'div_menu';
    div_menu.style.left = 0 + 'px';
    div_menu.classList.add('content');
    div_menu.style.top = 0 + 'px';

    var img_menu = document.createElement('img');
    img_menu.setAttribute('src', menu_h.src);
    img_menu.id = 'img_menu';
    img_menu.style.left = 0 + 'px';
    img_menu.style.top = 0 + 'px';
    img_menu.style.height = 900 + 'px';
    img_menu.style.position = 'absolute';
    div_menu.appendChild(img_menu);

    var img_select = document.createElement('img');
    img_select.setAttribute('src', select.src);
    img_select.id = 'select';
    img_select.style.left = 30 + 'px';
    img_select.style.top = 40 + 'px';
    img_select.style.height = 115 + 'px';
    img_select.style.position = 'absolute';
    div_menu.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "New game";
    new_game.id = 'new_game';
    new_game.classList.add('menu');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu.appendChild(new_game);

    var about = document.createElement('h1');
    about.textContent = "About";
    about.id = 'about';
    about.classList.add('menu');
    about.style.left = 60 + 'px';
    about.style.top = 175 + 'px';
    about.style.position = 'absolute';
    div_menu.appendChild(about);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "Exit";
    score_n1.id = 'exit';
    score_n1.classList.add('menu');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 300 + 'px';
    score_n1.style.position = 'absolute';
    div_menu.appendChild(score_n1);

    content.appendChild(div_menu);
}

function add_menu1(){
    var div_menu1 = document.createElement('div');
    div_menu1.id = 'div_menu1';
    div_menu1.style.left = 0 + 'px';
    div_menu1.classList.add('content');
    div_menu1.style.top = 0 + 'px';

    var img_menu = document.createElement('img');
    img_menu.setAttribute('src', menu_h.src);
    img_menu.id = 'img_menu1';
    img_menu.style.left = 0 + 'px';
    img_menu.style.top = 0 + 'px';
    img_menu.style.height = 900 + 'px';
    img_menu.style.position = 'absolute';
    div_menu1.appendChild(img_menu);

    var img_select = document.createElement('img');
    img_select.setAttribute('src', select.src);
    img_select.id = 'select1';
    img_select.style.left = 30 + 'px';
    img_select.style.top = 40 + 'px';
    img_select.style.height = 115 + 'px';
    img_select.style.position = 'absolute';
    img_select.classList.add('select_img');

    div_menu1.appendChild(img_select);

    var new_game = document.createElement('h1');
    new_game.textContent = "Resume game";
    new_game.id = 'resume';
    new_game.classList.add('menu');
    new_game.style.left = 60 + 'px';
    new_game.style.top = 50 + 'px';
    new_game.style.position = 'absolute';
    div_menu1.appendChild(new_game);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = "New game";
    score_n1.id = 'new';
    score_n1.classList.add('menu');
    score_n1.style.left = 60 + 'px';
    score_n1.style.top = 170 + 'px';
    score_n1.style.position = 'absolute';
    div_menu1.appendChild(score_n1);

    var exit1 = document.createElement('h1');
    exit1.textContent = "Exit";
    exit1.id = 'exit1';
    exit1.classList.add('menu');
    exit1.style.left = 60 + 'px';
    exit1.style.top = 290 + 'px';
    exit1.style.position = 'absolute';
    div_menu1.appendChild(exit1);

    content.appendChild(div_menu1);
}

var speed = 0

function add_zastavka(){
    var div_zastavka = document.createElement('div');
    div_zastavka.id = 'div_zastavka';
    div_zastavka.style.left = 0 + 'px';
    div_zastavka.style.top = 0 + 'px';
    div_zastavka.style.height = 1000 + 'px';
    div_zastavka.style.width = 1000 + 'px';
    //div_zastavka.style.backgroundColor = 'green';
    div_zastavka.classList.add('content');
    div_zastavka.style.position = 'absolute';


    // Рахунок та його картинка
    var img_zastavka = document.createElement('img');
    img_zastavka.setAttribute('src', zastavka.src);
    img_zastavka.id = 'zastavka';
    img_zastavka.style.left = 0 + 'px';
    img_zastavka.style.top = 50 + 'px';
    img_zastavka.style.width = 1000 + 'px';
    img_zastavka.style.position = 'absolute';
    div_zastavka.appendChild(img_zastavka);

    content.appendChild(div_zastavka);
}

function game_elements(){
    var content = document.getElementById('content');

    var div_game = document.createElement('div');
    div_game.id = 'div_game';
    div_game.style.left = 0 + 'px';
    div_game.style.top = 0 + 'px';
    div_game.classList.add('content');
    div_game.style.position = 'absolute';

    var img_fon = document.createElement('img');
    img_fon.setAttribute('src', list_element[1].src);
    img_fon.id = 'fon1';
    img_fon.style.left = 200 + 'px';
    img_fon.style.top = 0 + 'px';
    img_fon.style.height = 1066 + 'px';
    img_fon.style.position = 'absolute';
    img_fon.style.transform = "rotate(0deg)";
    div_game.appendChild(img_fon);

    var img_fon2 = document.createElement('img');
    img_fon2.setAttribute('src', list_element[1].src);
    img_fon2.id = 'fon2';
    img_fon2.style.left = 200 + 'px';
    img_fon2.style.top = -1066 + 'px';
    img_fon2.style.height = 1066 + 'px';
    img_fon2.style.position = 'absolute';
    img_fon2.style.transform = "rotate(0deg)";
    div_game.appendChild(img_fon2);

    var img_oil = document.createElement('img');
    img_oil.setAttribute('src', list_element[4].src);
    img_oil.id = 'oil';
    img_oil.style.left = 605 + 'px';
    img_oil.style.top = 300 + 'px';
    img_oil.style.width = 75 + 'px';
    img_oil.style.position = 'absolute';
    img_oil.style.transform = "rotate(0deg)";
    div_game.appendChild(img_oil);

    var img_kan = document.createElement('img');
    img_kan.setAttribute('src', list_element[7].src);
    img_kan.id = 'kanistra';
    img_kan.style.left = 300 + 'px';
    img_kan.style.top = 900 + 'px';
    img_kan.style.width = 40 + 'px';
    img_kan.style.position = 'absolute';
    img_kan.style.transform = "rotate(0deg)";
    div_game.appendChild(img_kan);

    var img_kluch = document.createElement('img');
    img_kluch.setAttribute('src', list_element[14].src);
    img_kluch.id = 'kluch';
    img_kluch.style.left = 500 + 'px';
    img_kluch.style.top = 900 + 'px';
    img_kluch.style.width = 50 + 'px';
    img_kluch.style.position = 'absolute';
    img_kluch.style.transform = "rotate(0deg)";
    div_game.appendChild(img_kluch);

    var img_car = document.createElement('img');
    img_car.setAttribute('src', list_element[0].src);
    img_car.id = 'car';
    img_car.style.left = 685 + 'px';
    img_car.style.top = 600 + 'px';
    img_car.style.width = 65 + 'px';
    img_car.style.position = 'absolute';
    img_car.style.transform = "rotate(0deg)";
    div_game.appendChild(img_car);

    var img_car_e1 = document.createElement('img');
    img_car_e1.setAttribute('src', list_element[5].src);
    img_car_e1.id = 'car_e1';
    img_car_e1.style.left = 685 + 'px';
    img_car_e1.style.top = 200 + 'px';
    img_car_e1.style.width = 65 + 'px';
    img_car_e1.style.position = 'absolute';
    img_car_e1.style.transform = "rotate(0deg)";
    div_game.appendChild(img_car_e1);

    var img_car_e2 = document.createElement('img');
    img_car_e2.setAttribute('src', list_element[6].src);
    img_car_e2.id = 'car_e2';
    img_car_e2.style.left = 600 + 'px';
    img_car_e2.style.top = 100 + 'px';
    img_car_e2.style.width = 65 + 'px';
    img_car_e2.style.position = 'absolute';
    img_car_e2.style.transform = "rotate(0deg)";
    div_game.appendChild(img_car_e2);

    var img_fura = document.createElement('img');
    img_fura.setAttribute('src', list_element[2].src);
    img_fura.id = 'fura';
    img_fura.style.left = 250 + 'px';
    img_fura.style.top = 600 + 'px';
    img_fura.style.width = 72 + 'px';
    img_fura.style.position = 'absolute';
    img_fura.style.transform = "rotate(180deg)";
    div_game.appendChild(img_fura);

    var img_truck = document.createElement('img');
    img_truck.setAttribute('src', list_element[3].src);
    img_truck.id = 'truck';
    img_truck.style.left = 515 + 'px';
    img_truck.style.top = 600 + 'px';
    img_truck.style.width = 72 + 'px';
    img_truck.style.position = 'absolute';
    img_truck.style.transform = "rotate(0deg)";
    div_game.appendChild(img_truck);

    var img_car1 = document.createElement('img');
    img_car1.setAttribute('src', list_element[12].src);
    img_car1.id = 'car1';
    img_car1.style.left = 330 + 'px';
    img_car1.style.top = 800 + 'px';
    img_car1.style.width = 65 + 'px';
    img_car1.style.position = 'absolute';
    img_car1.style.transform = "rotate(180deg)";
    div_game.appendChild(img_car1);

    var img_car2 = document.createElement('img');
    img_car2.setAttribute('src', list_element[13].src);
    img_car2.id = 'car2';
    img_car2.style.left = 420 + 'px';
    img_car2.style.top = 0 + 'px';
    img_car2.style.width = 65 + 'px';
    img_car2.style.position = 'absolute';
    img_car2.style.transform = "rotate(180deg)";
    div_game.appendChild(img_car2);


    document.getElementById('content').appendChild(div_game);

}

function add_tree(){

    var div_tree = document.createElement('div');
    div_tree.id = 'div_tree';
    div_tree.style.left = 10 + 'px';
    div_tree.style.top = 0 + 'px';
    div_tree.style.position = 'absolute';

    var img_s1 = document.createElement('img');
    img_s1.setAttribute('src', list_tree_s1[0].src);
    img_s1.id = 's1';
    img_s1.style.left = -10 + 'px';
    img_s1.style.top = 0 + 'px';
    img_s1.style.width = 175 + 'px';
    img_s1.style.position = 'absolute';
    img_s1.style.transform = "rotate(0deg)";
    div_tree.appendChild(img_s1);

    var img_s2 = document.createElement('img');
    img_s2.setAttribute('src', list_tree_s1[1].src);
    img_s2.id = 's2';
    img_s2.style.left = 15 + 'px';
    img_s2.style.top = 17 + 'px';
    img_s2.style.width = 121 + 'px';
    img_s2.style.position = 'absolute';
    img_s2.style.transform = "rotate(0deg)";
    div_tree.appendChild(img_s2);

    var img_s3 = document.createElement('img');
    img_s3.setAttribute('src', list_tree_s1[2].src);
    img_s3.id = 's3';
    img_s3.style.left = 27 + 'px';
    img_s3.style.top = 23 + 'px';
    img_s3.style.width = 92 + 'px';
    img_s3.style.position = 'absolute';
    img_s3.style.transform = "rotate(0deg)";
    div_tree.appendChild(img_s3);

    document.getElementById('div_game').appendChild(div_tree);

}

function add_tree2(){

    var div_tree = document.createElement('div');
    div_tree.id = 'div_tree2';
    div_tree.style.left = 10 + 'px';
    div_tree.style.top = -400 + 'px';
    div_tree.style.position = 'absolute';

    var img_s1 = document.createElement('img');
    img_s1.setAttribute('src', list_tree_s2[0].src);
    img_s1.id = 's11';
    img_s1.style.left = -10 + 'px';
    img_s1.style.top = 0 + 'px';
    img_s1.style.width = 175 + 'px';
    img_s1.style.position = 'absolute';
    img_s1.style.transform = "rotate(0deg)";
    div_tree.appendChild(img_s1);

    var img_s3 = document.createElement('img');
    img_s3.setAttribute('src', list_tree_s2[1].src);
    img_s3.id = 's13';
    img_s3.style.left = 27 + 'px';
    img_s3.style.top = 23 + 'px';
    img_s3.style.width = 122 + 'px';
    img_s3.style.position = 'absolute';
    img_s3.style.transform = "rotate(0deg)";
    div_tree.appendChild(img_s3);

    document.getElementById('div_game').appendChild(div_tree);

}

function add_b_s(){

    var div_bus_stop = document.createElement('div');
    div_bus_stop.id = 'bus_stop';
    div_bus_stop.style.left = 850 + 'px';
    div_bus_stop.style.top = 50 + 'px';
    div_bus_stop.style.position = 'absolute';

    var img_s1 = document.createElement('img');
    img_s1.setAttribute('src', list_b_s[1].src);
    img_s1.id = 's_t1';
    img_s1.style.left = 0 + 'px';
    img_s1.style.top = 0 + 'px';
    img_s1.style.width = 77 + 'px';
    img_s1.style.position = 'absolute';
    div_bus_stop.appendChild(img_s1);

    var img_s2 = document.createElement('img');
    img_s2.setAttribute('src', list_b_s[0].src);
    img_s2.id = 's_t2';
    img_s2.style.left = 0 + 'px';
    img_s2.style.top = -40 + 'px';
    img_s2.style.width = 101 + 'px';
    img_s2.style.position = 'absolute';
    div_bus_stop.appendChild(img_s2);


    document.getElementById('div_game').appendChild(div_bus_stop);

}

function add_panel(){

    var div_panel = document.createElement('div');
    div_panel.id = 'div_panel';
    div_panel.style.left = 0 + 'px';
    div_panel.style.top = 766 + 'px';
    div_panel.style.position = 'absolute';

    var img_panel1 = document.createElement('img');
    img_panel1.setAttribute('src', list_element[9].src);
    img_panel1.id = 'panel1';
    img_panel1.style.left = 974 + 'px';
    img_panel1.style.top = 17 + 'px';
    img_panel1.style.height = 107 + 'px';
    img_panel1.style.position = 'absolute';
    img_panel1.style.transform = "rotate(0deg)";
    div_panel.appendChild(img_panel1);

    var img_panel = document.createElement('img');
    img_panel.setAttribute('src', list_element[8].src);
    img_panel.id = 'panel';
    img_panel.style.left = 720 + 'px';
    img_panel.style.top = 0 + 'px';
    img_panel.style.height = 135 + 'px';
    img_panel.style.position = 'absolute';
    img_panel.style.transform = "rotate(0deg)";
    div_panel.appendChild(img_panel);

    var img_panel2 = document.createElement('img');
    img_panel2.setAttribute('src', list_element[21].src);
    img_panel2.id = 'panel2';
    img_panel2.style.left = 0 + 'px';
    img_panel2.style.top = 0 + 'px';
    img_panel2.style.height = 135 + 'px';
    img_panel2.style.position = 'absolute';
    img_panel2.style.transform = "rotate(0deg)";
    div_panel.appendChild(img_panel2);

    var score_txt = document.createElement('h1');
    score_txt.textContent = score;
    score_txt.id = 'score_txt1';
    score_txt.classList.add('score_txt');
    score_txt.style.left = 40 + 'px';
    score_txt.style.top = 65 + 'px';
    score_txt.style.position = 'absolute';
    div_panel.appendChild(score_txt);

    var speed_txt = document.createElement('h1');
    speed_txt.textContent = speed * 2;
    speed_txt.id = 'speed_txt';
    speed_txt.classList.add('speed_txt');
    speed_txt.style.left = 820 + 'px';
    speed_txt.style.top = 40 + 'px';
    speed_txt.style.position = 'absolute';
    div_panel.appendChild(speed_txt);


    document.getElementById('div_game').appendChild(div_panel);

}


var key = -1

function parallax_t(cor_y){

    if(cor_y > -300 && cor_y < 0 && key != 0){
        key = 0
        play("s2", 17)
        play("s3", 23)

    }else if(cor_y > 0 && cor_y < 100 && key != 1){
        key = 1
        play("s2", 20)
        play("s3", 25)

    }else if(cor_y > 100 && cor_y < 200 && key != 2){
        key = 2
        play("s2",23)
        play("s3",37)

    }else if(cor_y > 200 && cor_y < 300 && key != 3){
        key = 3
        play("s2",26)
        play("s3",44)

    }else if(cor_y > 300 && cor_y < 400 && key != 4){
        key = 4
        play("s2",29)
        play("s3",51)

    }else if(cor_y > 400 && cor_y < 500 && key != 5){
        key = 5
        play("s2",32)
        play("s3",58)
    }else if(cor_y > 500 && cor_y < 600 && key != 6){
        key = 6
        play("s2",35)
        play("s3",65)
    }else if(cor_y > 600 && cor_y < 700 && key != 7){
        key = 7
        play("s2",38)
        play("s3",72)

    }else if(cor_y > 700 && cor_y < 800 && key != 8){
        key = 8
        play("s2",47)
        play("s3",85)
    }
}

var key2 = -1

function parallax_t2(cor_y){

    if(cor_y > -300 && cor_y < 0 && key2 != 0){
        key2 = 0
        play("s13", 5)

    }else if(cor_y > 0 && cor_y < 100 && key2 != 1){
        key2 = 1
        play("s13", 15)

    }else if(cor_y > 100 && cor_y < 200 && key2 != 2){
        key2 = 2
        play("s13",25)

    }else if(cor_y > 200 && cor_y < 300 && key2 != 3){
        key2 = 3
        play("s13",35)

    }else if(cor_y > 300 && cor_y < 400 && key2 != 4){
        key2 = 4
        play("s13",45)

    }else if(cor_y > 400 && cor_y < 500 && key2 != 5){
        key2 = 5
        play("s13",50)
    }else if(cor_y > 500 && cor_y < 600 && key2 != 6){
        key2 = 6
        play("s13",55)
    }else if(cor_y > 600 && cor_y < 700 && key2 != 7){
        key2 = 7
        play("s13",60)

    }else if(cor_y > 700 && cor_y < 800 && key2 != 8){
        key2 = 8
        play("s13",65)
    }
}

var key1 = -1
function parallax_b_t(cor_y){
    if(cor_y > -300 && cor_y < 0 && key1 != 0){
        key1 = 0
        play("s_t2", -40)
    }else if(cor_y > 0 && cor_y < 100 && key1 != 1){
        key1 = 1
        play("s_t2", -28)
    }else if(cor_y > 100 && cor_y < 200 && key1 != 2){
        key1 = 2
        play("s_t2", -16)
    }else if(cor_y > 200 && cor_y < 300 && key1 != 3){
        key1 = 3
        play("s_t2", -4)
    }else if(cor_y > 300 && cor_y < 400 && key1 != 4){
        key1 = 4
        play("s_t2", 8)
    }else if(cor_y > 400 && cor_y < 500 && key1 != 5){
        key1 = 5
        play("s_t2", 20)
    }else if(cor_y > 500 && cor_y < 600 && key1 != 6){
        key1 = 6
        play("s_t2", 32)
    }else if(cor_y > 600 && cor_y < 700 && key1 != 7){
        key1 = 7
        play("s_t2", 44)
    }else if(cor_y > 700 && cor_y < 800 && key1 != 8){
        key1 = 8
        play("s_t2", 52)
    }
}

function play(elem,num){
    document.getElementById(elem).style.transition = 'top ' + 0.3 + 's linear'; // Плавний перехід з лінійною швидкістю
    document.getElementById(elem).style.top = num + 'px'; // Переміщення на вказану позицію
}

function anim_oil(){
    var angle = 0;
    for (let i = 0; i < 9; i++) {
        setTimeout(() => {
            var car = document.getElementById("car");
            car.style.transform = `rotate(${angle}deg)`;
            var cur_car_left = parseInt(car.style.left) || 0;
            car.style.left = (cur_car_left - 10) + 'px';
            angle += 90;
            if(angle == 360){
                angle = 0
            }

        if(i == 8){
            control = true
        }

        }, i * 100);
    }
}

function anim_right(){
    for (let i = 0; i < 9; i++) {
        setTimeout(() => {
            var car = document.getElementById("car");
            var cur_car_left = parseInt(car.style.left) || 0;
            if(cur_car_left < 685){
                car.style.left = (cur_car_left + 5) + 'px';
            }
        if(i == 8){
            touch_right = true
            control = true
        }
        }, i * 30);
    }
}

function anim_left(){
    for (let i = 0; i < 9; i++) {
        setTimeout(() => {
            var car = document.getElementById("car");
            var cur_car_left = parseInt(car.style.left) || 0;
            car.style.left = (cur_car_left - 5) + 'px';
        if(i == 8){
            touch_left = true
            control = true
        }
        }, i * 30);
    }
}


// функція удару заду
var c_up = 0
var c_back = 0

function anim_teach(){
    c_back++
    if(c_back == 1 && c_up == 0){
        document.getElementById('car').setAttribute('src', list_element[10].src);
        max_speed = 45
    }else if(c_back == 2 && c_up == 0){
        document.getElementById('car').setAttribute('src', list_element[11].src);
        max_speed = 40
    }else if(c_back == 1 && c_up == 1){
        document.getElementById('car').setAttribute('src', list_element[17].src);
        max_speed = 40
    }else if(c_back == 2 && c_up == 1){
        document.getElementById('car').setAttribute('src', list_element[19].src);
        max_speed = 30
    }else if(c_back == 1 && c_up == 2){
        document.getElementById('car').setAttribute('src', list_element[20].src);
        max_speed = 30
    }else if(c_back == 2 && c_up == 2){
        document.getElementById('car').setAttribute('src', list_element[18].src);
        max_speed = 20
    }else if(c_up == 3 || c_back == 3){
        anim_crush()
        crush = false
    }
    speed += 10
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            if(speed > 0){
                speed--
            }
        if(i == 9){
            gas = true
        }

        }, i * 50);
    }
}

// функція удару спереду
function anim_up(){
    c_up++
    if(c_up == 1 && c_back == 0){
        document.getElementById('car').setAttribute('src', list_element[15].src);
        max_speed = 45
    }else if(c_up == 2 && c_back == 0){
        document.getElementById('car').setAttribute('src', list_element[16].src);
        max_speed = 40
    }else if(c_back == 1 && c_up == 1){
        document.getElementById('car').setAttribute('src', list_element[17].src);
        max_speed = 40
    }else if(c_back == 2 && c_up == 1){
        document.getElementById('car').setAttribute('src', list_element[19].src);
        max_speed = 30
    }else if(c_back == 1 && c_up == 2){
        document.getElementById('car').setAttribute('src', list_element[20].src);
        max_speed = 30
    }else if(c_back == 2 && c_up == 2){
        document.getElementById('car').setAttribute('src', list_element[18].src);
        max_speed = 20
    }else if(c_up == 3 || c_back == 3){
        anim_crush()
        crush = false
    }
}

function anim_crush(){
    speed = 0
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            document.getElementById('car').setAttribute('src', list_crush[i].src);
        if(i == 4){
        }
        }, i * 30);
    }
}

var list_coor = []

var speed_fura = 15

var speed_car1 = 18
var speed_car2 = 16

var speed_truck = 15
var speed_с1 = 18
var speed_с2 = 21


var oil_r = true

var kanistra_r = true

var touch_right = true
var touch_left = true

// зміна яка дозволяє керування
var control = true
var gas = true
var crush = true

var bak = 0
var bak1 = 0
var max_speed = 50
var s_time = 0

function game(){

    // худ бензину та його логіка
    if(bak == 20){
        bak = 0
    }
    if(speed > 0 && bak == 0){
        var cur_bak_top = parseInt(document.getElementById("panel1").style.top) || 0;
        if(speed / 20 < 1){
            if(bak1 == 2){
                document.getElementById("panel1").style.top = (cur_bak_top + 1) + 'px';
                bak1 = 0
            }
            bak1++

        }else{
            document.getElementById("panel1").style.top = (cur_bak_top + speed / 10) + 'px';
        }
    }

    var poss = parseInt(document.getElementById("panel1").style.top) || 0

    if(poss > 126){
        gas = false
        if(speed > 0){
            speed--
        }
        if(speed == 0){
//            clearInterval(gameiter)
        }

    }

    bak++
    // рух фону
    var cur_fon1_top = parseInt(document.getElementById("fon1").style.top) || 0;
    var cur_fon2_top = parseInt(document.getElementById("fon2").style.top) || 0;

    document.getElementById("fon1").style.top = (cur_fon1_top + speed) + 'px';
    document.getElementById("fon2").style.top = (cur_fon2_top + speed) + 'px';
    if(cur_fon1_top > 1066){

        var cur_fon2_top = parseInt(document.getElementById("fon2").style.top) || 0;
        document.getElementById("fon1").style.top = cur_fon2_top - 1066 + 'px';
    }
    if(cur_fon2_top > 1066){
        var cur_fon1_top = parseInt(document.getElementById("fon1").style.top) || 0;
        document.getElementById("fon2").style.top = cur_fon1_top - 1066 + 'px';
    }

    // рух мастила по дорозі
    var cur_oil_top = parseInt(document.getElementById("oil").style.top) || 0;

    document.getElementById("oil").style.top = (cur_oil_top + speed) + 'px';

    if(cur_oil_top > 1066){

        var r_left = Math.floor(Math.random() * (660 - (250) + 1)) + (250);
        document.getElementById("oil").style.top = -5066 + 'px';
        document.getElementById("oil").style.left = r_left + 'px';
        oil_r = true
    }

    // рух бензину по дорозі
    var cur_kanistra_top = parseInt(document.getElementById("kanistra").style.top) || 0;

    document.getElementById("kanistra").style.top = (cur_kanistra_top + speed) + 'px';

    if(cur_kanistra_top > 1066){

        var k_left = Math.floor(Math.random() * (660 - (250) + 1)) + (250);
        document.getElementById("kanistra").style.top = -10100 + 'px';
        document.getElementById("kanistra").style.left = k_left + 'px';
        kanistra_r = true
    }

    // рух ключа по дорозі
    var cur_kluch_top = parseInt(document.getElementById("kluch").style.top) || 0;

    document.getElementById("kluch").style.top = (cur_kluch_top + speed) + 'px';

    if(cur_kluch_top > 1066){

        var k_kluch_left = Math.floor(Math.random() * (660 - (250) + 1)) + (250);
        document.getElementById("kluch").style.top = -8100 + 'px';
        document.getElementById("kluch").style.left = k_kluch_left + 'px';
    }

    // рух 1 дерева
    var div_tree = document.getElementById("div_tree");
    var cur_tree_top = parseInt(div_tree.style.top) || 0;

    div_tree.style.top = (cur_tree_top + speed) + 'px';

    if(cur_tree_top > 1000){
        div_tree.style.top = -300 + 'px';
    }
    parallax_t(cur_tree_top)

    // рух 2 дерева
    var div_tree2 = document.getElementById("div_tree2");
    var cur_tree2_top = parseInt(div_tree2.style.top) || 0;

    div_tree2.style.top = (cur_tree2_top + speed) + 'px';

    if(cur_tree2_top > 1000){
        div_tree2.style.top = -300 + 'px';
    }
    parallax_t2(cur_tree2_top)

    // рух зупинки
    var div_bus_stop = document.getElementById("bus_stop");
    var cur_bus_stop_top = parseInt(div_bus_stop.style.top) || 0;

    div_bus_stop.style.top = (cur_bus_stop_top + speed) + 'px';

    if(cur_bus_stop_top > 1000){
        div_bus_stop.style.top = -6300 + 'px';
    }
    parallax_b_t(cur_bus_stop_top)


    // рух фури зустрічної
    var cur_fura_top = parseInt(document.getElementById("fura").style.top) || 0;
    document.getElementById("fura").style.top = cur_fura_top + (speed_fura + speed) + 'px';

    if(cur_fura_top > 1300){
        document.getElementById("fura").style.top = -3300 + 'px';
    }

    // рух 1 авто зустрічної
    var cur_car1_top = parseInt(document.getElementById("car1").style.top) || 0;
    document.getElementById("car1").style.top = cur_car1_top + (speed_car1 + speed) + 'px';

    if(cur_car1_top > 1300){
        document.getElementById("car1").style.top = -1300 + 'px';
    }

    // рух 2 авто зустрічної
    var cur_car2_top = parseInt(document.getElementById("car2").style.top) || 0;
    document.getElementById("car2").style.top = cur_car2_top + (speed_car2 + speed) + 'px';

    if(cur_car2_top > 1300){
        document.getElementById("car2").style.top = -2300 + 'px';
    }

    // рух траку попутного
    var cur_truck_top = parseInt(document.getElementById("truck").style.top) || 0;
    document.getElementById("truck").style.top = cur_truck_top - speed_truck + speed + 'px';

    if(cur_truck_top < -500){
        document.getElementById("truck").style.top = 1200 + 'px';
        speed_truck = 10
    }

    if(cur_truck_top > 1300){
        document.getElementById("truck").style.top = -300 + 'px';
        speed_truck = 10
    }

    // рух легкового 1 авто попутного


    var cur_car_e1_top = parseInt(document.getElementById("car_e1").style.top) || 0;
    document.getElementById("car_e1").style.top = cur_car_e1_top - speed_с1 + speed + 'px';

    if(cur_car_e1_top < -500){
        document.getElementById("car_e1").style.top = 1200 + 'px';
        speed_с1 = 12
    }

    if(cur_car_e1_top > 1300){
        document.getElementById("car_e1").style.top = -300 + 'px';
        speed_с1 = 12
    }

    // рух легкового 2 авто попутного
    var cur_car_e2_top = parseInt(document.getElementById("car_e2").style.top) || 0;
    document.getElementById("car_e2").style.top = cur_car_e2_top - speed_с2 + speed + 'px';

    if(cur_car_e2_top < -500){
        document.getElementById("car_e2").style.top = 1200 + 'px';
        speed_с2 = 14
    }

    if(cur_car_e2_top > 1300){
        document.getElementById("car_e2").style.top = -300 + 'px';
        speed_с2 = 14
    }



    var car = document.getElementById("car");
    var cur_car_left = parseInt(car.style.left) || 0;


    // керуваня авто

    if(speed > max_speed){
        speed = max_speed
    }

    if(control){
        if(list_coor[0] && list_coor[0] == 4 && speed > 0 && cur_car_left < 685){
            car.style.left = (cur_car_left + 10) + 'px';

        }else if(list_coor[0] && list_coor[0] == 3 && speed > 0 && cur_car_left > 245){
            car.style.left = (cur_car_left - 10) + 'px';

        }else if(list_coor[0] && list_coor[0] == 1 && gas){
            if(speed < max_speed){
                speed++
            }
        }
        else if(list_coor[0] && list_coor[0] == 2 && gas){
            if(speed > 0){
                speed--
            }
        }
    }

    var car_rect = document.getElementById('car').getBoundingClientRect();
    var car1_rect = document.getElementById('car1').getBoundingClientRect();
    var car2_rect = document.getElementById('car2').getBoundingClientRect();
    var car_e1_rect = document.getElementById('car_e1').getBoundingClientRect();
    var car_e2_rect = document.getElementById('car_e2').getBoundingClientRect();
    var truck_reck = document.getElementById('truck').getBoundingClientRect();
    var fura_reck = document.getElementById('fura').getBoundingClientRect();
    var oil_reck = document.getElementById('oil').getBoundingClientRect();
    var kanistra_reck = document.getElementById('kanistra').getBoundingClientRect();
    var kluch_reck = document.getElementById('kluch').getBoundingClientRect();

        // умова колізії бензину
        if (!(car_rect.right < kanistra_reck.left ||
            car_rect.left > kanistra_reck.right ||
            car_rect.bottom < kanistra_reck.top ||
            car_rect.top > kanistra_reck.bottom)) {
                document.getElementById("kanistra").style.top = 900 + 'px';
                document.getElementById("panel1").style.top = 17 + 'px';

            }

        // умови 1 легкової попутної
        if (!(car_rect.right < car_e1_rect.left ||
            car_rect.left > car_e1_rect.right ||
            car_rect.bottom < car_e1_rect.top ||
            car_rect.top > car_e1_rect.bottom)) {

                if(car_rect.top > car_e1_rect.bottom - 20){
                    if(crush && speed > 20){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_с1 = 0
                    }else{
                        anim_up()
                        speed = 0
                    }
                }else if(car_rect.bottom < car_e1_rect.top + 20){
                    gas = false
                    anim_teach()
                    speed_с1 = 0
                }else if(car_rect.left > car_e1_rect.right - 20){

                    if(touch_right){
                        control = false
                        touch_right = false
                        anim_right()
                    }

                }else if(car_rect.right < car_e1_rect.left + 20){
                    if(touch_left){
                        control = false
                        touch_left = false
                        anim_left()
                    }
                }else{
                    if(crush && speed > 20){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_с1 = 0
                    }else{
                        speed = 0
                    }
                }

            }

        // умови 2 легкової попутної
        if (!(car_rect.right < car_e2_rect.left ||
            car_rect.left > car_e2_rect.right ||
            car_rect.bottom < car_e2_rect.top ||
            car_rect.top > car_e2_rect.bottom)) {

                if(car_rect.top > car_e2_rect.bottom - 20){
                    if(crush && speed > 20){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_с2 = 0
                    }else{
                        anim_up()
                        speed = 0
                    }
                }else if(car_rect.bottom < car_e2_rect.top + 20){
                    gas = false
                    anim_teach()
                    speed_с2 = 0
                }else if(car_rect.left > car_e2_rect.right - 20){

                    if(touch_right){
                        control = false
                        touch_right = false
                        anim_right()
                    }

                }else if(car_rect.right < car_e2_rect.left + 20){
                    if(touch_left){
                        control = false
                        touch_left = false
                        anim_left()
                    }
                }else{
                    if(crush && speed > 20){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_truck = 0
                    }else{
                        speed = 0
                    }
                }

            }

        // умови зіткненя з траком
        if (!(car_rect.right < truck_reck.left ||
            car_rect.left > truck_reck.right ||
            car_rect.bottom < truck_reck.top ||
            car_rect.top > truck_reck.bottom)) {

                if(car_rect.top > truck_reck.bottom - 20){
                    if(crush && speed > 20){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_truck = 0
                    }else{
                        anim_up()
                        speed = 0
                    }

                }else if(car_rect.bottom < truck_reck.top + 20){
                    anim_teach()
                    speed_truck = 0

                }else if(car_rect.left > truck_reck.right - 20){

                    if(touch_right){
                        control = false
                        touch_right = false
                        anim_right()
                    }

                }else if(car_rect.right < truck_reck.left + 20){
                    if(touch_left){
                        control = false
                        touch_left = false
                        anim_left()
                    }
                }else{
                    if(crush && speed > 20){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_truck = 0
                    }else{
                        speed = 0
                    }
                }

            }

        // умови зіткненя з фурою зустрічною
        if (!(car_rect.right < fura_reck.left ||
            car_rect.left > fura_reck.right ||
            car_rect.bottom < fura_reck.top ||
            car_rect.top > fura_reck.bottom)) {

                if(car_rect.top > fura_reck.bottom - 20){
                    if(crush){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_fura = 0
                    }

                }else if(car_rect.left > fura_reck.right - 20){

                    if(touch_right){
                        control = false
                        touch_right = false
                        anim_right()
                    }
                }else if(car_rect.right < fura_reck.left + 20){
                    speed = 0
                }else{
                    if(crush){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_fura = 0
                    }
                }
            }

        // умови зіткненя з 1 авто зустрічною
        if (!(car_rect.right < car1_rect.left ||
            car_rect.left > car1_rect.right ||
            car_rect.bottom < car1_rect.top ||
            car_rect.top > car1_rect.bottom)) {

                if(car_rect.top > car1_rect.bottom - 20){
                    if(crush){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_car1 = 0
                    }

                }else if(car_rect.left > car1_rect.right - 20){

                    if(touch_right){
                        control = false
                        touch_right = false
                        anim_right()
                    }
                }else if(car_rect.right < car1_rect.left + 20){
                    speed = 0
                }else{
                    if(crush){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_car1 = 0
                    }
                }
            }

        // умови зіткненя з 2 авто зустрічною
        if (!(car_rect.right < car2_rect.left ||
            car_rect.left > car2_rect.right ||
            car_rect.bottom < car2_rect.top ||
            car_rect.top > car2_rect.bottom)) {
                if(car_rect.top > car2_rect.bottom - 20){
                    if(crush){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_car2 = 0
                    }
                }else if(car_rect.left > car2_rect.right - 20){

                    if(touch_right){
                        control = false
                        touch_right = false
                        anim_right()
                    }
                }else if(car_rect.right < car2_rect.left + 20){
                    speed = 0
                }else{
                    if(crush){
                        anim_crush()
                        crush = false
                        speed = 0
                        speed_car2 = 0
                    }
                }
            }

        // умова колізії нафтового пятна
        if (!(car_rect.right < oil_reck.left ||
            car_rect.left > oil_reck.right ||
            car_rect.bottom < oil_reck.top ||
            car_rect.top > oil_reck.bottom)) {
                if(oil_r && speed > 20 ){
                    oil_r = false
                    control = false
                    anim_oil()
                }

            }

        if (!(car_rect.right < kluch_reck.left ||
            car_rect.left > kluch_reck.right ||
            car_rect.bottom < kluch_reck.top ||
            car_rect.top > kluch_reck.bottom)) {
                console.log("Ключ")
                document.getElementById("kluch").style.top = 910 + 'px';
                document.getElementById('car').setAttribute('src', list_element[0].src);
                c_back = 0
                c_up = 0
                max_speed = 50

            }
    if(s_time == 20){
        s_time = 0
        score += speed
    }
    s_time++

    document.getElementById("speed_txt").textContent = speed * 3;
    document.getElementById("score_txt1").textContent = (score / 1000).toFixed(1);

    if(!crush){
        clearInterval(gameiter)
        game_over()
    }
}



var k1 = true
var k2 = true
var k3 = true
var k4 = true

document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            if(k1){
                list_coor.unshift(1);
                k1 = false
            }
            move_menu("u")
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            if(k2){
                list_coor.unshift(2);
                k2 = false
            }
            move_menu("d")
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            if(k3){
                list_coor.unshift(3);
                k3 = false
            }
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
            if(k4){
                list_coor.unshift(4);
                k4 = false
            }
        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
            move_menu("r")
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {

    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {

    }
});

document.addEventListener("keyup", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
            k1 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 1){
                    list_coor.splice(i, 1);
                }
            }
        }
    // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            k2 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 2){
                    list_coor.splice(i, 1);
                }
            }

        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
            k3 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 3){
                    list_coor.splice(i, 1);
                }
            }

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {
            k4 = true
            for (var i = 0; i < list_coor.length; i++){
                if(list_coor[i] == 4){
                    list_coor.splice(i, 1);
                }
            }

        }

        // натиснута кнопка E
    if (event.keyCode === 69) {
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {

        }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        }
});

// Кнопки тачу
// кнопка вниз
function downMouseDown(event) {
    document.getElementById('d_C').style.backgroundColor = "#613703";
        list_coor.unshift(2);
        move_menu("d")

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 2){
            list_coor.splice(i, 1);
        }
    }

}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";
        list_coor.unshift(1);
        move_menu("u")

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 1){
            list_coor.splice(i, 1);
        }
    }

}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";
    list_coor.unshift(3);

    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 3){
            list_coor.splice(i, 1);
        }
    }
}

// кнопка в право
function rightMouseDown(event) {
    document.getElementById('r_C').style.backgroundColor = "#613703";
    list_coor.unshift(4);

    event.preventDefault();
    navigator.vibrate(50);
}

function rightMouseUp() {
    document.getElementById('r_C').style.backgroundColor = "#291701";
    for (var i = 0; i < list_coor.length; i++){
        if(list_coor[i] == 4){
            list_coor.splice(i, 1);
        }
    }
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

// правий селект
function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    move_menu("r")

    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}

function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}

add_zastavka()

//var gameiter = null


var menu_pos = 0;
var menu_pos1 = 0;

function move_menu(nav){
    if(document.getElementById('div_zastavka')){
        if(nav == "r"){
            document.getElementById('div_zastavka').remove()
            add_menu()
        }

    }else if(document.getElementById('div_menu') && !document.getElementById('div_game')){
        var cur_select = parseInt(document.getElementById("select").style.top) || 0;
        if(nav == "d" && menu_pos < 2){
            document.getElementById("select").style.top = (cur_select + 125) + 'px';
            menu_pos += 1;
        }else if(nav == "u" && menu_pos > 0){
            document.getElementById("select").style.top = (cur_select - 125) + 'px';
            menu_pos -= 1;
        }else if(nav == "r"){
            if(menu_pos == 0){
                document.getElementById('div_menu').remove()
                if(document.getElementById('div_game')){
                    document.getElementById('div_game').remove()
                }

                // зміні швидкості транспорту
                speed_fura = 15
                speed_car1 = 18
                speed_car2 = 16
                speed_truck = 15
                speed_с1 = 18
                speed_с2 = 21

                speed = 0
                max_speed = 50
                score = 0

                // зміні пошкоджень
                c_up = 0
                c_back = 0
                gas = true
                crush = true
                game_elements()
                add_tree()
                add_tree2()
                add_b_s()
                add_panel()
                gameiter = setInterval(game, 50)



            }else if(menu_pos == 2){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game') && !document.getElementById('div_menu1' ) && !document.getElementById('div_game_over')){
        if(nav == "r"){
            add_menu1()
            clearInterval(gameiter)
            gameiter = null
        }
    }else if(document.getElementById('div_game') && document.getElementById('div_menu1')){
        var cur_select = parseInt(document.getElementById("select1").style.top) || 0;
        if(nav == "d" && menu_pos1 < 2){
            document.getElementById("select1").style.top = (cur_select + 120) + 'px';
            menu_pos1 += 1;
        }else if(nav == "u" && menu_pos1 > 0){
            document.getElementById("select1").style.top = (cur_select - 120) + 'px';
            menu_pos1 -= 1;
        }else if(nav == "r"){
            if(menu_pos1 == 0){
                document.getElementById('div_menu1').remove()
                gameiter = setInterval(game, 50)

            }else if(menu_pos1 == 1){
                document.getElementById('div_menu1').remove()

                if(document.getElementById('div_game')){
                    document.getElementById('div_game').remove()
                }

                // зміні швидкості транспорту
                speed_fura = 15
                speed_car1 = 18
                speed_car2 = 16
                speed_truck = 15
                speed_с1 = 18
                speed_с2 = 21

                speed = 0
                max_speed = 50
                score = 0

                // зміні пошкоджень
                c_up = 0
                c_back = 0

                gas = true
                crush = true
                game_elements()
                add_tree()
                add_tree2()
                add_b_s()
                add_panel()
                gameiter = setInterval(game, 50)
                menu_pos1 = 0

            }else if(menu_pos1 == 2){
                window.location.href = "/games";
            }
        }
    }else if(document.getElementById('div_game') && document.getElementById('div_game_over')){
        if(nav == "r"){
            document.getElementById('div_game').remove()
            document.getElementById('div_game_over').remove()
            add_menu()
        }
    }
}