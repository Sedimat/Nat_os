var content = document.getElementById('content');

var score = 5;

function add_content(){

    var img_score = document.createElement('img');
    img_score.setAttribute('src', '/media/g_ball/score.svg');
    img_score.id = 'score';
    img_score.style.left = 45 + 'px';
    img_score.style.top = 5 + 'px';
    img_score.style.width = 71 + 'px';
    img_score.style.position = 'absolute';

    content.appendChild(img_score);

    var score_n = document.createElement('h1');
    score_n.textContent = score;
    score_n.id = 'score_n';
    score_n.classList.add('score');
    score_n.style.left = 10 + 'px';
    score_n.style.top = 0 + 'px';
    score_n.style.position = 'absolute';
    content.appendChild(score_n);

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



//    var img_v1 = document.createElement('img');
//    img_v1.setAttribute('src', '/media/g_ball/b11.svg');
//    img_v1.id = 'img_v1';
//    var r2 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
//    img_v1.style.left = r2 + 'px';
//    var r_t = Math.floor(Math.random() * (1200 - 900 + 1)) + 900;
//    img_v1.style.top = 400 + 'px';
//    img_v1.style.width = 100 + 'px';
//    img_v1.style.position = 'absolute';
//
//    content.appendChild(img_v1);

    var img_v2 = document.createElement('img');
    img_v2.setAttribute('src', '/media/g_ball/b31.svg');
    img_v2.id = 'img_v2';
    var r1 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    img_v2.style.left = r1 + 'px';
    img_v2.style.top = 400 + 'px';
    img_v2.style.width = 100 + 'px';
    img_v2.style.position = 'absolute';

    content.appendChild(img_v2);

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
    prc0.style.backgroundColor = 'red';

    content.appendChild(prc0);

}



add_content()

var num_img = 0;

var key = 0;

var img_v0 = document.getElementById("img_v")

var img_v0 = document.getElementById("img_v")

var img_x = document.getElementById("img_x")

var img_v1 = document.getElementById("img_v1")
var img_v2 = document.getElementById("img_v2")

var prc = document.getElementById("prc")
var prc0 = document.getElementById("prc0")

var speed = 7

var score_n = document.getElementById("score_n")



function move(){

    var list_img = ["3.svg", "4.svg", "5.svg", "1.svg", "2.svg", "6.svg",]

    score_n.textContent = score;

    // Перша кулька та його логіка
    img_v0.setAttribute('src', '/media/g_ball/b2' + list_img[num_img]);

    var currentTop0 = parseInt(img_v0.style.top) || 0;

    img_x.setAttribute('src', '/media/g_ball/bx' + list_img[num_img]);

    // Третя кулька
    img_v2.setAttribute('src', '/media/g_ball/b3' + list_img[num_img]);


    if (currentTop0 < -200){
        score -= 1;
        img_v0.style.top = 900 + 'px';
        img_x.style.top = 1016 + 'px';
        var randomNumber0 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
        img_v0.style.left = randomNumber0 + 'px';
        console.log(img_x.style.display)

        if(img_x.style.display == "none"){
            img_x.style.display = "block";
            img_x.style.left = randomNumber0 + 21 + 'px';

        }else{
            img_x.style.left = randomNumber0 + 21 + 'px';
        }
    }

    currentTop0 = parseInt(img_v0.style.top) || 0;
    img_v0.style.top = (currentTop0 - speed) + 'px';

    var current_x = parseInt(img_x.style.top) || 0;
    img_x.style.top = (current_x - speed) + 'px';




    // Друга кулька та його логіка
//    img_v1.setAttribute('src', '/media/g_ball/b1' + list_img[num_img]);
//
//    var currentTop = parseInt(img_v1.style.top) || 0;
//
//    if (currentTop < -200){
//        img_v1.style.top = 900 + 'px';
//        var randomNumber = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
//        img_v1.style.left = randomNumber + 'px';
//        console.log(randomNumber)
//    }
//
//    currentTop = parseInt(img_v1.style.top) || 0;
//    img_v1.style.top = (currentTop - 5) + 'px';

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

    prc_x = parseInt(prc.style.top) || 0;q
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

        if (!(img0.right < prc_rect.left ||
            img0.left > prc_rect.right ||
            img0.bottom < prc_rect.top ||
            img0.top > prc_rect.bottom)) {
            console.log("опа_кулька");

            img_v0.style.top = 800 + 'px';
            var randomNumber0 = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
            img_v0.style.left = randomNumber0 + 'px';

            if(img_x.style.display == "none"){
                img_x.style.display = "block";
                img_x.style.left = randomNumber0 + 21 + 'px';
                img_x.style.top = 916 + 'px';

            }else{
                img_x.style.left = randomNumber0 + 21 + 'px';
                img_x.style.top = 916 + 'px';
            }

        }

        if (!(img_x_r.right < prc_rect.left ||
            img_x_r.left > prc_rect.right ||
            img_x_r.bottom < prc_rect.top ||
            img_x_r.top > prc_rect.bottom)) {
            console.log("опа хвіст");
            img_x.style.display = "none"
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






