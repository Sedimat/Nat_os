var list_tree_s1 = [new Image(), new Image(), new Image()]

list_tree_s1[0].src = '/media/g_driver/s1.svg';
list_tree_s1[1].src = '/media/g_driver/s2.svg';
list_tree_s1[2].src = '/media/g_driver/s3.svg';

var list_b_s = [new Image(), new Image()]

list_b_s[0].src = '/media/g_driver/s_t1.svg';
list_b_s[1].src = '/media/g_driver/s_t2.svg';

var list_element = [new Image(), new Image(), new Image(), new Image(), new Image()]

list_element[0].src = '/media/g_driver/car3.svg';
list_element[1].src = '/media/g_driver/phone_c.svg';
list_element[2].src = '/media/g_driver/fura2.svg';
list_element[3].src = '/media/g_driver/truck2.svg';
list_element[4].src = '/media/g_driver/oil.svg';

var zastavka = new Image()
zastavka.src = '/media/g_driver/zastavka.svg'

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

    var img_car = document.createElement('img');
    img_car.setAttribute('src', list_element[0].src);
    img_car.id = 'car';
    img_car.style.left = 685 + 'px';
    img_car.style.top = 600 + 'px';
    img_car.style.width = 65 + 'px';
    img_car.style.position = 'absolute';
    img_car.style.transform = "rotate(0deg)";
    div_game.appendChild(img_car);

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

game_elements()
add_tree()
add_b_s()


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

        }, i * 100);
    }
}

var list_coor = []

var speed = 0

var speed_fure = 10

var oil_r = true

function game(){

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
        document.getElementById("oil").style.top = -1066 + 'px';
        oil_r = true
    }

    // рух 1 дерева
    var div_tree = document.getElementById("div_tree");
    var cur_tree_top = parseInt(div_tree.style.top) || 0;

    div_tree.style.top = (cur_tree_top + speed) + 'px';

    if(cur_tree_top > 1000){
        div_tree.style.top = -300 + 'px';
    }
    parallax_t(cur_tree_top)

    // рух зупинки
    var div_bus_stop = document.getElementById("bus_stop");
    var cur_bus_stop_top = parseInt(div_bus_stop.style.top) || 0;

    div_bus_stop.style.top = (cur_bus_stop_top + speed) + 'px';

    if(cur_bus_stop_top > 1000){
        div_bus_stop.style.top = -300 + 'px';
    }
    parallax_b_t(cur_bus_stop_top)


    // рух фури зустрічної
    var cur_fura_top = parseInt(document.getElementById("fura").style.top) || 0;
    document.getElementById("fura").style.top = cur_fura_top + (speed_fure + speed) + 'px';

    if(cur_fura_top > 1300){
        document.getElementById("fura").style.top = -3300 + 'px';
    }

    // рух траку попутного
    var cur_truck_top = parseInt(document.getElementById("truck").style.top) || 0;
    document.getElementById("truck").style.top = cur_truck_top - 10 + speed + 'px';

    if(cur_truck_top < -500){
        document.getElementById("truck").style.top = 1200 + 'px';
    }

    if(cur_truck_top > 1300){
        document.getElementById("truck").style.top = -300 + 'px';
    }

    var car = document.getElementById("car");
    var cur_car_left = parseInt(car.style.left) || 0;


    // керуваня авто
    if(list_coor[0] && list_coor[0] == 4 && speed > 0 && cur_car_left < 685){
        car.style.left = (cur_car_left + 10) + 'px';

    }else if(list_coor[0] && list_coor[0] == 3 && speed > 0 && cur_car_left > 245){
        car.style.left = (cur_car_left - 10) + 'px';

    }else if(list_coor[0] && list_coor[0] == 1){
        if(speed < 100){
            speed++
        }
    }
    else if(list_coor[0] && list_coor[0] == 2){
        if(speed > 0){
            speed--
        }
    }

    var car_rect = document.getElementById('car').getBoundingClientRect();
    var truck_reck = document.getElementById('truck').getBoundingClientRect();
    var fura_reck = document.getElementById('fura').getBoundingClientRect();
    var oil_reck = document.getElementById('oil').getBoundingClientRect();

        if (!(car_rect.right < truck_reck.left ||
            car_rect.left > truck_reck.right ||
            car_rect.bottom < truck_reck.top ||
            car_rect.top > truck_reck.bottom)) {

                if(car_rect.top > truck_reck.bottom - 20){
                    speed = 0
                }else if(car_rect.bottom < truck_reck.top + 20){
                    speed += 10
                }else if(car_rect.left > truck_reck.right - 20){
                    speed = 0
                }else if(car_rect.right < truck_reck.left + 20){
                    speed = 0
                }else{
                    speed = 0
                }

            }

        if (!(car_rect.right < fura_reck.left ||
            car_rect.left > fura_reck.right ||
            car_rect.bottom < fura_reck.top ||
            car_rect.top > fura_reck.bottom)) {

                if(car_rect.top > fura_reck.bottom - 20){
                    speed = 0
                    speed_fure = 0
                }else if(car_rect.left > fura_reck.right - 20){
                    speed = 0
                }else if(car_rect.right < fura_reck.left + 20){
                    speed = 0
                }else{
                    speed = 0
                    speed_fure = 0
                }
            }

        if (!(car_rect.right < oil_reck.left ||
            car_rect.left > oil_reck.right ||
            car_rect.bottom < oil_reck.top ||
            car_rect.top > oil_reck.bottom)) {
                if(oil_r && speed > 20 ){
                    oil_r = false
                    anim_oil()
                    console.log("Наїхав")
                }

            }


}

var gameiter = null
gameiter = setInterval(game, 50)

//clearInterval(gameiter)


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
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
            if(k2){
                list_coor.unshift(2);
                k2 = false
            }
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

    event.preventDefault(); // Перешкоджаємо дії за замовчуванням
    navigator.vibrate(50);
}

function downMouseUp() {
    document.getElementById('d_C').style.backgroundColor = "#291701";

}

// кнопка верх
function upMouseDown(event) {
    document.getElementById('u_C').style.backgroundColor = "#613703";

    event.preventDefault();
    navigator.vibrate(50);
}

function upMouseUp() {
    document.getElementById('u_C').style.backgroundColor = "#291701";

}

// кнопка вліво
function leftMouseDown(event) {
    document.getElementById('l_C').style.backgroundColor = "#613703";

    event.preventDefault();
    navigator.vibrate(50);
}

function leftMouseUp() {
    document.getElementById('l_C').style.backgroundColor = "#291701";

}

// кнопка в право
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

// правий селект
function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";

    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
}

function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}