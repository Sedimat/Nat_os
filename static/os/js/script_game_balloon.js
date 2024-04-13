var list_b2 = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
]

list_b2[0].src = '/media/g_ball/b23.svg';
list_b2[1].src = '/media/g_ball/b24.svg';
list_b2[2].src = '/media/g_ball/b25.svg';
list_b2[3].src = '/media/g_ball/b21.svg';
list_b2[4].src = '/media/g_ball/b21.svg';
list_b2[5].src = '/media/g_ball/b26.svg';


var content = document.getElementById('content');

var img = '/media/g_ball/score.svg';

var score = 5;
var score_number = 0;

function add_content(){

    var img_score = document.createElement('img');
    img_score.setAttribute('src', '/media/g_ball/score.svg');
    img_score.id = 'score';
    img_score.style.left = 925 + 'px';
    img_score.style.top = 5 + 'px';
    img_score.style.width = 71 + 'px';
    img_score.style.position = 'absolute';
    content.appendChild(img_score);

    var score_n = document.createElement('h1');
    score_n.textContent = score;
    score_n.id = 'score_n';
    score_n.classList.add('score');
    score_n.style.left = 890 + 'px';
    score_n.style.top = 0 + 'px';
    score_n.style.position = 'absolute';
    content.appendChild(score_n);

    var score_n1 = document.createElement('h1');
    score_n1.textContent = score_number;
    score_n1.id = 'score_n1';
    score_n1.classList.add('score');
    score_n1.style.left = 10 + 'px';
    score_n1.style.top = 0 + 'px';
    score_n1.style.position = 'absolute';
    content.appendChild(score_n1);

    // перша кулька та її хвіст
    var img_v = document.createElement('img');
    img_v.setAttribute('src', '/media/g_ball/b21.svg');
    img_v.id = 'img_v';
    var r1 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    img_v.style.left = r1 + 'px';
    img_v.style.top = 900 + 'px';
    img_v.style.width = 100 + 'px';
    img_v.style.position = 'absolute';
    content.appendChild(img_v);

    var img_x = document.createElement('img');
    img_x.setAttribute('src', '/media/g_ball/bx1.svg');
    img_x.id = 'img_x';
    img_x.style.left = r1 + 21  + 'px';
    img_x.style.top = 1016 + 'px';
    img_x.style.width = 45 + 'px';
    img_x.style.position = 'absolute';
    content.appendChild(img_x);

    // Друга кулька та її хвіст
    var img_v2 = document.createElement('img');
    img_v2.setAttribute('src', '/media/g_ball/b31.svg');
    img_v2.id = 'img_v2';
    var r_v_2 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    img_v2.style.left = r_v_2 + 'px';
    img_v2.style.top = 800 + 'px';
    img_v2.style.width = 120 + 'px';
    img_v2.style.position = 'absolute';
    content.appendChild(img_v2);

    var img_x2 = document.createElement('img');
    img_x2.setAttribute('src', '/media/g_ball/bx1.svg');
    img_x2.id = 'img_x2';
    img_x2.style.left = r_v_2 + 30  + 'px';
    img_x2.style.top = 921 + 'px';
    img_x2.style.width = 45 + 'px';
    img_x2.style.position = 'absolute';
    content.appendChild(img_x2);

    // Третя кулька та її хвіст
    var img_v3 = document.createElement('img');
    img_v3.setAttribute('src', '/media/g_ball/b11.svg');
    img_v3.id = 'img_v3';
    var r_v_3 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    img_v3.style.left = r_v_3 + 'px';
    img_v3.style.top = 400 + 'px';
    img_v3.style.width = 100 + 'px';
    img_v3.style.position = 'absolute';
    content.appendChild(img_v3);

    var div_v3 = document.createElement('div');
    div_v3.id = 'div_v3';
    div_v3.style.left = r_v_3 + 10 + 'px';
    div_v3.style.top = 570 + 'px';
    div_v3.style.width = 80 + 'px';
    div_v3.style.height = 60 + 'px';
    div_v3.style.backgroundColor = 'green';
    div_v3.style.position = 'absolute';
    content.appendChild(div_v3);

    var img_x3 = document.createElement('img');
    img_x3.setAttribute('src', '/media/g_ball/bot1.svg');
    img_x3.id = 'img_x3';
    img_x3.style.left = r_v_3 + 17  + 'px';
    img_x3.style.top = 515 + 'px';
    img_x3.style.width = 80 + 'px';
    img_x3.style.position = 'absolute';
    content.appendChild(img_x3);

    var prc = document.createElement('img');
    prc.setAttribute('src', '/media/g_ball/prc.svg');
    prc.id = 'prc';
    prc.style.left = 460 + 'px';
    prc.style.top = 360 + 'px';
    prc.style.width = 80 + 'px';
    prc.style.position = 'absolute';
    content.appendChild(prc);

    var prc0 = document.createElement('div');
    prc0.id = 'prc0';
    prc0.style.left = 490 + 'px';
    prc0.style.top = 390 + 'px';
    prc0.style.width = 20 + 'px';
    prc0.style.height = 20 + 'px';
    prc0.style.position = 'absolute';
    content.appendChild(prc0);
}

add_content()


var num_img = 0;

var key = 0;

// зміна першої кульки та хвоста
var img_v0 = document.getElementById("img_v")
var img_x = document.getElementById("img_x")
var kill_an = false
var kill_anim = 1


// зміна другої кульки та хвоста
var img_v2 = document.getElementById("img_v2")
var img_x2 = document.getElementById("img_x2")

var kill_an2 = false
var kill_anim2 = 1

// зміна третьої кульки та хвоста
var img_v3 = document.getElementById("img_v3")
var img_x3 = document.getElementById("img_x3")
var div_v3 = document.getElementById("div_v3")
var kill_an3 = false
var kill_anim3 = 1

// зміні прицелу
var prc = document.getElementById("prc")
var prc0 = document.getElementById("prc0")

var speed = 7

// зміні рахунку та життів
var score_n = document.getElementById("score_n")
var score_n1 = document.getElementById("score_n1")





function move(){

    var list_img = ["3.svg", "4.svg", "5.svg", "1.svg", "2.svg", "6.svg",]

    score_n.textContent = score;
    score_n1.textContent = score_number;



    // Перша кулька та його логіка

    var currentTop0 = parseInt(img_v0.style.top) || 0;

    if (currentTop0 < -200){
        score -= 1;
        var randomNumber0 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        var r_top = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        img_v0.style.top = r_top + 'px';
        img_x.style.top = r_top + 116 + 'px';
        console.log(r_top)

        img_v0.style.left = randomNumber0 + 'px';


        if(img_x.style.display == "none"){
            img_x.style.display = "block";
            img_x.style.left = randomNumber0 + 21 + 'px';

        }else{
            img_x.style.left = randomNumber0 + 21 + 'px';
        }
    }
    if(kill_anim == 5){
        kill_anim = 1;
        kill_an = false;

        var r_k = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        img_v0.style.left = r_k + 'px';
        var r_top1 = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        console.log(r_top1)
        img_v0.style.top = r_top1 + 'px';

            if(img_x.style.display == "none"){
                img_x.style.display = "block";
                img_x.style.left = r_k + 21 + 'px';
                img_x.style.top = r_top1 + 116 + 'px';

            }else{
                img_x.style.left = r_k + 21 + 'px';
                img_x.style.top = r_top1 + 116 + 'px';
            }
        }

    if(kill_an){
        img_v0.setAttribute('src', '/media/g_ball/h0' + kill_anim + ".svg");
        kill_anim += 1;
    }else{
        img_v0.setAttribute('src', list_b2[num_img].src);
        img_x.setAttribute('src', '/media/g_ball/bx' + list_img[num_img]);
        currentTop0 = parseInt(img_v0.style.top) || 0;
        img_v0.style.top = (currentTop0 - speed) + 'px';

        var current_x = parseInt(img_x.style.top) || 0;
        img_x.style.top = (current_x - speed) + 'px';
    }

    // Друга кулька та його логіка

    var currentTop2 = parseInt(img_v2.style.top) || 0;
    if (currentTop2 < -200){
        score -= 1;
        var randomNumber2 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        var r_top2 = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        img_v2.style.top = r_top2 + 'px';
        img_x2.style.top = r_top2 + 116 + 'px';
        img_v2.style.left = randomNumber2 + 'px';
        if(img_x2.style.display == "none"){
            img_x2.style.display = "block";
            img_x2.style.left = randomNumber2 + 30 + 'px';

        }else{
            img_x2.style.left = randomNumber2 + 30 + 'px';
        }
    }
    if(kill_anim2 == 5){
        kill_anim2 = 1;
        kill_an2 = false;

        var r_k2 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        img_v2.style.left = r_k2 + 'px';
        var r_top2 = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        img_v2.style.top = r_top2 + 'px';

            if(img_x2.style.display == "none"){
                img_x2.style.display = "block";
                img_x2.style.left = r_k2 + 30 + 'px';
                img_x2.style.top = r_top2 + 121 + 'px';

            }else{
                img_x2.style.left = r_k2 + 30 + 'px';
                img_x2.style.top = r_top2 + 121 + 'px';
            }
        }

    if(kill_an2){
        img_v2.setAttribute('src', '/media/g_ball/h0' + kill_anim2 + ".svg");
        kill_anim2 += 1;
    }else{
        img_v2.setAttribute('src', '/media/g_ball/b3' + list_img[num_img]);
        img_x2.setAttribute('src', '/media/g_ball/bx' + list_img[num_img]);

        currentTop2 = parseInt(img_v2.style.top) || 0;
        img_v2.style.top = (currentTop2 - speed) + 'px';

        var current_x2 = parseInt(img_x2.style.top) || 0;
        img_x2.style.top = (current_x2 - speed) + 'px';
    }

    // Друга кулька та його логіка

    var currentTop3 = parseInt(img_v3.style.top) || 0;
    if (currentTop3 < -200){
        score -= 1;
        var randomNumber3 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        var r_top3 = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        img_v3.style.top = r_top3 + 'px';
        img_x3.style.top = r_top3 + 115 + 'px';
        img_v3.style.left = randomNumber3 + 'px';
        div_v3.style.top = r_top3 + 170 + 'px';
        div_v3.style.left = randomNumber3 + 10 + 'px';

        if(img_x3.style.display == "none"){
            img_x3.style.display = "block";
            img_x3.style.left = randomNumber3 + 17 + 'px';

        }else{
            img_x3.style.left = randomNumber3 + 17 + 'px';

        }
    }
    if(kill_anim3 == 5){
        kill_anim3 = 1;
        kill_an3 = false;

        var r_k3 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        img_v3.style.left = r_k3 + 'px';
        div_v3.style.left = r_k3 + 10 + 'px';
        var r_top3 = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        img_v3.style.top = r_top3 + 'px';
        div_v3.style.top = r_top3 + 170 + 'px';

            if(img_x3.style.display == "none"){
                img_x3.style.display = "block";
                img_x3.style.left = r_k3 + 17 + 'px';
                img_x3.style.top = r_top3 + 115 + 'px';

            }else{
                img_x3.style.left = r_k3 + 17 + 'px';
                img_x3.style.top = r_top3 + 115 + 'px';
//                div_v3.style.left = r_k3 + 10 + 'px';
//                div_v3.style.top = r_top3 + 170 + 'px';
            }
        }

    if(kill_an3){
        img_v3.setAttribute('src', '/media/g_ball/h0' + kill_anim3 + ".svg");
        kill_anim3 += 1;
    }else{
        img_v3.setAttribute('src', '/media/g_ball/b1' + list_img[num_img]);
        img_x3.setAttribute('src', '/media/g_ball/bot' + list_img[num_img]);

        currentTop3 = parseInt(img_v3.style.top) || 0;
        img_v3.style.top = (currentTop3 - speed) + 'px';

        var current_x3 = parseInt(img_x3.style.top) || 0;
        img_x3.style.top = (current_x3 - speed) + 'px';

        var current_v3 = parseInt(div_v3.style.top) || 0;
        div_v3.style.top = (current_v3 - speed) + 'px';
    }

    // повторює анімацію
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

}

var intervalId = null;

intervalId = setInterval(move, 100);

// clearInterval(intervalId);



var st = 1;
var test = 1;


// Відслідковує кнопки на клавіатурі
document.addEventListener("keydown", function(event) {

    prc_x = parseInt(prc.style.top) || 0;
    prc_y = parseInt(prc.style.left) || 0;
    prc0_x = parseInt(prc0.style.top) || 0;
    prc0_y = parseInt(prc0.style.left) || 0;

    // натиснута кнопка W
    if (st == 1){
        if (event.keyCode === 87 || event.keyCode === 38){
        prc.style.top = (prc_x - 10) + 'px';
        prc0.style.top = (prc0_x - 10) + 'px';
            if(prc.style.top == "-50px"){
                prc.style.top = 860 + 'px';
                prc0.style.top = 890 + 'px';
            }
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
        prc.style.top = (prc_x + 10) + 'px';
        prc0.style.top = (prc0_x + 10) + 'px';
            if(prc.style.top == "870px"){
                prc.style.top = -40 + 'px';
                prc0.style.top = -10 + 'px';

            }
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){
        prc.style.left = (prc_y - 10) + 'px';
        prc0.style.left = (prc0_y - 10) + 'px';
            if(prc.style.left == "-50px"){
                prc.style.left = 960 + 'px';
                prc0.style.left = 990 + 'px';
            }

        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){
        prc.style.left = (prc_y + 10) + 'px';
        prc0.style.left = (prc0_y + 10) + 'px';
            if(prc.style.left == "970px"){
                prc.style.left = -40 + 'px';
                prc0.style.left = -10 + 'px';

            }

        }
}

    // натиснута кнопка E
    if (event.keyCode === 69) {
        var prc_rect = prc0.getBoundingClientRect();
        var img0 = img_v0.getBoundingClientRect();
        var img_x_r = img_x.getBoundingClientRect();
        var img2 = img_v2.getBoundingClientRect();
        var img_x_2 = img_x2.getBoundingClientRect();
        var img3 = img_v3.getBoundingClientRect();
        var div_v_3 = div_v3.getBoundingClientRect();


        // Для першої кульки та хвоста
        if (!(img0.right < prc_rect.left ||
            img0.left > prc_rect.right ||
            img0.bottom < prc_rect.top ||
            img0.top > prc_rect.bottom)) {
            console.log("опа_кулька");

            kill_an = true
            score_number += speed * 10
            img_x.style.display = "none"

        }
        if (!(img_x_r.right < prc_rect.left ||
            img_x_r.left > prc_rect.right ||
            img_x_r.bottom < prc_rect.top ||
            img_x_r.top > prc_rect.bottom)) {
            console.log("опа хвіст");
            img_x.style.display = "none"
        }
        // Для другої кульки та хвоста
        if (!(img2.right < prc_rect.left ||
            img2.left > prc_rect.right ||
            img2.bottom < prc_rect.top ||
            img2.top > prc_rect.bottom)) {
            console.log("опа_кулька2");

            kill_an2 = true
            score_number += speed * 9
            img_x2.style.display = "none"

        }
        if (!(img_x_2.right < prc_rect.left ||
            img_x_2.left > prc_rect.right ||
            img_x_2.bottom < prc_rect.top ||
            img_x_2.top > prc_rect.bottom)) {
            console.log("опа хвіст2");
            img_x2.style.display = "none"
        }

        // Для Третьої кульки та хвоста
        if (!(img3.right < prc_rect.left ||
            img3.left > prc_rect.right ||
            img3.bottom < prc_rect.top ||
            img3.top > prc_rect.bottom)) {
            console.log("опа_кулька3");

            kill_an3 = true
            score_number += speed * 10
            img_x3.style.display = "none"

        }
        if (!(div_v_3.right < prc_rect.left ||
            div_v_3.left > prc_rect.right ||
            div_v_3.bottom < prc_rect.top ||
            div_v_3.top > prc_rect.bottom)) {
            console.log("опа хвіст3");
            img_x3.style.display = "none"

                kill_an = true
                img_x.style.display = "none"

                kill_an2 = true
                img_x2.style.display = "none"

                kill_an3 = true
                img_x3.style.display = "none"
        }
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        if(st == 1){
            clearInterval(intervalId);
        st = 0
        }else{
            intervalId = setInterval(move, 100);
        st = 1
        }

    }
});

function right_control(){
//    kill_an = true
//    img_x.style.display = "none"
//
//    kill_an2 = true
//    img_x2.style.display = "none"
}


