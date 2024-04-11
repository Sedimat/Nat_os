function add_content(){
    var content = document.getElementById('content');

    var img_v = document.createElement('img');
    img_v.setAttribute('src', '/media/g_ball/b01.svg');
    img_v.id = 'img_v';
    var r1 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    img_v.style.left = r1 + 'px';
    img_v.style.top = 900 + 'px';
    img_v.style.width = 100 + 'px';
    img_v.style.position = 'absolute';

    content.appendChild(img_v);

    var img_v1 = document.createElement('img');
    img_v1.setAttribute('src', '/media/g_ball/b01.svg');
    img_v1.id = 'img_v1';
    var r2 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    img_v1.style.left = r2 + 'px';
    var r_t = Math.floor(Math.random() * (1200 - 900 + 1)) + 900;
    img_v1.style.top = r_t + 'px';
    img_v1.style.width = 100 + 'px';
    img_v1.style.position = 'absolute';

    content.appendChild(img_v1);

    var prc = document.createElement('img');
    prc.setAttribute('src', '/media/g_ball/prc.svg');
    prc.id = 'prc';
    prc.style.left = 460 + 'px';
    prc.style.top = 360 + 'px';
    prc.style.width = 80 + 'px';
    prc.style.position = 'absolute';

    content.appendChild(prc);



}

add_content()

var num_img = 0;

var key = 0;



function move(){

    var list_img = ["3.svg", "4.svg", "5.svg", "1.svg", "2.svg", "6.svg",]

    // Перша кулька та його логіка
    var img_v0 = document.getElementById("img_v")
    img_v0.setAttribute('src', '/media/g_ball/b0' + list_img[num_img]);

    var currentTop0 = parseInt(img_v0.style.top) || 0;

    if (currentTop0 < -200){
        img_v0.style.top = 900 + 'px';
        var randomNumber0 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        img_v0.style.left = randomNumber0 + 'px';
        console.log(randomNumber0)
    }

    currentTop0 = parseInt(img_v0.style.top) || 0;
    img_v0.style.top = (currentTop0 - 5) + 'px';


    // Друга кулька та його логіка
    var img_v1 = document.getElementById("img_v1")
    img_v1.setAttribute('src', '/media/g_ball/b1' + list_img[num_img]);

    var currentTop = parseInt(img_v1.style.top) || 0;

    if (currentTop < -200){
        img_v1.style.top = 900 + 'px';
        var randomNumber = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        img_v1.style.left = randomNumber + 'px';
        console.log(randomNumber)
    }

    currentTop = parseInt(img_v1.style.top) || 0;
    img_v1.style.top = (currentTop - 5) + 'px';

    if (key == 0){
        num_img += 1
    }else{
        num_img -= 1
    }
    if (num_img == 5){
        key = 1
    }else if(num_img == 0 ){
        key = 0
    }

    var img_v1_rect = img_v1.getBoundingClientRect();

    var prc_rect = prc.getBoundingClientRect();

    // Перевірка на перетин прямокутників (картинок)
    if (!(img_v1_rect.right < prc_rect.left ||
          img_v1_rect.left > prc_rect.right ||
          img_v1_rect.bottom < prc_rect.top ||
          img_v1_rect.top > prc_rect.bottom)) {
          console.log("опа");
    }

    var img0 = img_v.getBoundingClientRect();

    if (!(img0.right < prc_rect.left ||
          img0.left > prc_rect.right ||
          img0.bottom < prc_rect.top ||
          img0.top > prc_rect.bottom)) {
          console.log("опа");
    }
}

var intervalId = null;

intervalId = setInterval(move, 75);

// clearInterval(intervalId);


var cursor = document.getElementById("prc")


var st = 1;
var test = 1;


// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    cursor_x = parseInt(cursor.style.top) || 0;
    cursor_y = parseInt(cursor.style.left) || 0;

    // натиснута кнопка W
    if (st == 1){
        if (event.keyCode === 87 || event.keyCode === 38){
        cursor.style.transition = 'top ' + 0.1 + 's linear';
        cursor.style.top = (cursor_x - 10) + 'px';
        }

        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
        cursor.style.transition = 'top ' + 0.1 + 's linear';
        cursor.style.top = (cursor_x + 10) + 'px';
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
        cursor.style.transition = 'left ' + 0.1 + 's linear';
        cursor.style.left = (cursor_y - 10) + 'px';
        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
        cursor.style.transition = 'left ' + 0.1 + 's linear';
        cursor.style.left = (cursor_y + 10) + 'px';
        }

    }
    // натиснута кнопка E
//    if (event.keyCode === 69) {
//        if(test == 1){
//        console.log('натиснута кнопка E');
//        test = 0;
//        }else{
//        test = 1;
//        }
//    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        if(st == 1){
            clearInterval(intervalId);
        st = 0
        }else{
            intervalId = setInterval(move, 75);
        st = 1
        }

    }
});






