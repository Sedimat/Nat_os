console.log("Test Train")


// Відслідковує кнопки на клавіатурі
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
        window.location.href = "/games";
    }
});

document.addEventListener("keyup", function(event) {
    // натиснута кнопка W
        if (event.keyCode === 87 || event.keyCode === 38){

        }
    // натиснута кнопка S
        if (event.keyCode === 83 || event.keyCode === 40){

        }

    // A або стрілка вліво
        if (event.keyCode === 65 || event.keyCode === 37){

        }

    // D або стрілка вправо відпущена
        if (event.keyCode === 68 || event.keyCode === 39) {

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