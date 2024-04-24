function updateTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
        }
    if (minutes < 10) {
        minutes = '0' + minutes;
        }
    if (seconds < 10) {
        seconds = '0' + seconds;
        }
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; // Місяці починаються з 0, тому додаємо 1
    var day = currentTime.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    var formattedDate = year + '.' + month + '.' + day;

    var timeElement = document.getElementById('time');

    timeElement.textContent = formattedTime;

    var dateElement = document.getElementById('date');

    dateElement.textContent = formattedDate;

    }

// Викликаємо функцію оновлення часу кожну секунду
if(document.getElementById('time')){
    setInterval(updateTime, 1000);
}


// Функція для вмикання/вимикання режиму на весь екран
function toggleFullScreen() {
    window.location.href = "/menu";
//    var elem = document.documentElement;
//
//    if (!document.fullscreenElement && !document.mozFullScreenElement &&
//        !document.webkitFullscreenElement && !document.msFullscreenElement) {
//        if (elem.requestFullscreen) {
//            elem.requestFullscreen();
//        } else if (elem.msRequestFullscreen) {
//            elem.msRequestFullscreen();
//        } else if (elem.mozRequestFullScreen) {
//            elem.mozRequestFullScreen();
//        } else if (elem.webkitRequestFullscreen) {
//            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//        }
//    } else {
//        if (document.exitFullscreen) {
//            document.exitFullscreen();
//        } else if (document.msExitFullscreen) {
//            document.msExitFullscreen();
//        } else if (document.mozCancelFullScreen) {
//            document.mozCancelFullScreen();
//        } else if (document.webkitExitFullscreen) {
//            document.webkitExitFullscreen();
//        }
//    }
}




// Відслідковує кнопки на клавіатурі

document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
        console.log("W")
    }

    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
        console.log("S")

    }
    // натиснута кнопка E
    if (event.keyCode === 69) {
        select_link()
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        back()
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

// лівий селект
function left_select(event){
    document.getElementById('l_s').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
    back()
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
    select_link()
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}


// повертає на головну
function back(){
     window.location.href = "/NatOs_web";
}


// перенаправляє в меню
function select_link(){
    window.location.href = "/menu/0";

}


