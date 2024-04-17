//var contentDiv = document.querySelector('.cont');
//
//var select = document.getElementById('select');
//
//var numb = 0;

document.addEventListener("keydown", function(event) {
//    var scrollHeight = len_game * 125;
//
//    var y = select.offsetTop;

    // натиснута кнопка W
    if (event.keyCode === 87 || event.keyCode === 38){
//        if (y - 125 > -1){
//            play(select,y - 125)
//            contentDiv.scrollTop -= 125;
//            numb -= 1
//        }
    }
    // натиснута кнопка S
    if (event.keyCode === 83 || event.keyCode === 40){
//        if (y + 125 < scrollHeight){
//            play(select,y + 125)
//            contentDiv.scrollTop += 125;
//            numb += 1
//        }
    }
    // натиснута кнопка E
    if (event.keyCode === 69) {
    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        back()
    }
});

function back(){
    window.location.href = "/menu/5";
}


function left_select(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    back()
}

function right_select(event){
    event.preventDefault();
    navigator.vibrate(50); // включаємо вібрацію
    console.log("Right select")
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