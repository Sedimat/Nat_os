console.log("Тест")

var list_elem = [new Image(), new Image(), new Image(), new Image()]

list_elem[0].src = '/media/browser/hud_b.svg'

var content = document.getElementById("content")

    var img_hud = document.createElement('img');
    img_hud.setAttribute('src', list_elem[0].src);
    img_hud.id = 'img_hud';
    img_hud.style.left = 0 + 'px';
    img_hud.style.top = 0 + 'px';
    img_hud.style.width = 1000 + 'px';
    img_hud.style.position = 'absolute';
    content.appendChild(img_hud);

    var new_game = document.createElement('h1');
    new_game.textContent = "www.OneBit.com";
    new_game.id = 'title_web';
    new_game.classList.add('menu_txt');
    new_game.style.left = 120 + 'px';
    new_game.style.top = 20 + 'px';
    new_game.style.position = 'absolute';
    content.appendChild(new_game);


document.addEventListener("keydown", function(event) {

    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){
        }
        // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){
        }

        // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){

        }

        // D або стрілка вправо
        if (event.keyCode === 68 || event.keyCode === 39){

        }

    // натиснута кнопка E
    if (event.keyCode === 69) {
        }
    // натиснута кнопка F
    if (event.keyCode === 70) {

    }
    // натиснута кнопка Q
    if (event.keyCode === 81) {
        window.location.href = "/browser";

    }
});