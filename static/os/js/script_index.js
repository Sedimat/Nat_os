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


function left_select(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    back()
}

function right_select(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    select_link()
}

function up_control(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    console.log("Up")

}

function down_control(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    console.log("Down")

}


function left_control(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    console.log("Left")
}

function right_control(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    console.log("Right")
}


// повертає на головну
function back(){
     window.location.href = "/";
}


// перенаправляє в меню
function select_link(){
    window.location.href = "/menu/0";

}


