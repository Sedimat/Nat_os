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
    back()
    event.preventDefault();
    navigator.vibrate(50);
}

function left_select_up() {
    document.getElementById('l_s').style.backgroundColor = "#291701";
}

function right_select(event){
    document.getElementById('r_s').style.backgroundColor = "#613703";
    event.preventDefault();
    navigator.vibrate(50);
}


function right_select_up() {
    document.getElementById('r_s').style.backgroundColor = "#291701";
}