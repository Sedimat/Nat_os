

function makeGrayscale() {

            var input = document.getElementById('imageInput');
            var slider = document.getElementById('mySlider');

            if (input && input.files && input.files[0]) {
                var list_img = []
                list_div_e = []


                var file = input.files[0];
                var reader = new FileReader();
                var img = new Image();

                reader.onload = function(e) {
                    img.src = e.target.result;
                };

                img.onload = function() {
//                    var canvas = document.getElementById('canvas');
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');

                    // Зменшити розмір зображення до 120x120 пікселів
                    canvas.width = 120;
                    canvas.height = 100;

                    // Масштабувати зображення на canvas
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    // Отримати дані пікселів
                    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    var data = imageData.data;

                    var threshold = slider.value;

                    // Перетворити зображення в чорно-біле
                    for (var i = 0; i < data.length; i += 4) {
                        var r = data[i];
                        var g = data[i + 1];
                        var b = data[i + 2];
                        // Визначити яскравість пікселя
                        var brightness = (r + g + b) / 3;
                        // Встановити піксель як чорний або білий на основі порогу
                        var value = brightness > threshold ? 255 : 0; // 255 для білого, 0 для чорного

                        if (value == 255){
                            list_img.push(0)
                        }else{
                            list_img.push(1)
                        }
                        data[i] = value;     // Red
                        data[i + 1] = value; // Green
                        data[i + 2] = value; // Blue
                    }

                    create_img(list_img)

                    // Оновити зображення на canvas
                    ctx.putImageData(imageData, 0, 0);

                    // Оновити зображення в HTML
                    var addImgDiv = document.querySelector('.add_img');
                    addImgDiv.innerHTML = ''; // Очистити div перед додаванням нового зображення
                    var grayscaleImg = new Image();
                    grayscaleImg.src = canvas.toDataURL();
                    addImgDiv.appendChild(grayscaleImg);

                };

                reader.readAsDataURL(file);

            } else {
                console.log("Немає зображення");
            }
        }

var list_div_e = []

function create_img(list_i){

    var pos_left = 50
    var pos_top = 0.7
    var count_119 = 0

    var addImgDiv = document.querySelector('.img_div');
    addImgDiv.innerHTML = '';
    add_area(addImgDiv)

    var count_div = 0

    var list_area = []

        for (var i = 0; i < list_i.length; i += 1) {

            count_div++
            var div_foot = document.createElement('div');

            if(list_i[i] == 1){
                div_foot.style.backgroundColor = 'black';
            }

            div_foot.id = 'div_' + i;
            list_area.push('div_' + i)

            div_foot.style.left = pos_left + 'px';
            div_foot.style.top = pos_top + 'px';
            div_foot.style.width = 7.5 + 'px';
            div_foot.style.height = 7.5 + 'px';
            div_foot.style.position = 'absolute';

            addImgDiv.appendChild(div_foot);

            pos_left += 7.5

            count_119++
            if(count_119 == 120){
                count_119 = 0
                pos_left = 50
                pos_top += 7.5
            }

            if(count_div == 2400){
                list_div_e.push(list_area)
                count_div = 0
                list_area = []

            }

        }
}

function create_null(){

    var pos_left = 50
    var pos_top = 1
    var count_119 = 0

    var addImgDiv = document.querySelector('.img_div');
    addImgDiv.innerHTML = '';

    add_area(addImgDiv)

    var count_div = 0

    var list_area = []

        for (var i = 0; i < 120 * 100; i += 1) {

            count_div++
            var div_foot = document.createElement('div');
            div_foot.id = 'div_' + i;
            list_area.push('div_' + i)
//            div_foot.style.backgroundColor = 'black';
            div_foot.style.left = pos_left + 'px';
            div_foot.style.top = pos_top + 'px';
            div_foot.style.width = 7.5 + 'px';
            div_foot.style.height = 7.5 + 'px';
            div_foot.style.position = 'absolute';

            addImgDiv.appendChild(div_foot);

            pos_left += 7.5

            count_119++
            if(count_119 == 120){
                count_119 = 0
                pos_left = 50
                pos_top += 7.5
            }

            if(count_div == 2400){
                list_div_e.push(list_area)
                count_div = 0
                list_area = []

            }

        }


}

var div_cursor = document.createElement('div');
div_cursor.style.backgroundColor = 'red';
div_cursor.id = 'cursor';
div_cursor.style.left = 0 + 'px';
div_cursor.style.top = 0 + 'px';
div_cursor.style.width = 2 + 'px';
div_cursor.style.height = 2 + 'px';
div_cursor.style.position = 'absolute';

document.body.appendChild(div_cursor);

create_null()
console.log(list_div_e)


function updateMouseCoordinates(event) {

            function div_chose(numb){
                for (var i = 0; i < list_div_e[numb].length; i += 1) {
                    var pixel_rect = document.getElementById(list_div_e[numb][i]).getBoundingClientRect();

                    if (!(cursor_rect.right < pixel_rect.left ||
                        cursor_rect.left > pixel_rect.right ||
                        cursor_rect.bottom < pixel_rect.top ||
                        cursor_rect.top > pixel_rect.bottom)) {
                            if(selectedValue == 1){
                                document.getElementById(list_div_e[numb][i]).style.backgroundColor = "black";
                            }else{
                                document.getElementById(list_div_e[numb][i]).style.removeProperty('background-color');
                            }
                            break
                    }
                }
            }

            // Отримати координати курсору
            var x = event.clientX;
            var y = event.clientY;

            var cursor = document.getElementById("cursor")
            cursor.style.top = y + 1 + 'px';
            cursor.style.left = x + 1 + 'px';

            if (event.buttons === 1) {

                const radios = document.getElementsByName('color');
                var selectedValue;

                // Перебір радіокнопок для визначення вибраного
                for (const radio of radios) {
                    if (radio.checked) {
                        selectedValue = radio.value;
                        break;
                    }
                }
                console.log("Значення", selectedValue)

                var cursor_rect = document.getElementById('cursor').getBoundingClientRect();
                var area0_rect = document.getElementById('area0').getBoundingClientRect();
                var area1_rect = document.getElementById('area1').getBoundingClientRect();
                var area2_rect = document.getElementById('area2').getBoundingClientRect();
                var area3_rect = document.getElementById('area3').getBoundingClientRect();
                var area4_rect = document.getElementById('area4').getBoundingClientRect();

                if (!(cursor_rect.right < area0_rect.left ||
                        cursor_rect.left > area0_rect.right ||
                        cursor_rect.bottom < area0_rect.top ||
                        cursor_rect.top > area0_rect.bottom)) {
                        event.preventDefault();
                        div_chose(0)
                }

                if (!(cursor_rect.right < area1_rect.left ||
                        cursor_rect.left > area1_rect.right ||
                        cursor_rect.bottom < area1_rect.top ||
                        cursor_rect.top > area1_rect.bottom)) {
                        event.preventDefault();
                        div_chose(1)
                }

                if (!(cursor_rect.right < area2_rect.left ||
                        cursor_rect.left > area2_rect.right ||
                        cursor_rect.bottom < area2_rect.top ||
                        cursor_rect.top > area2_rect.bottom)) {
                        event.preventDefault();
                        div_chose(2)
                }

                if (!(cursor_rect.right < area3_rect.left ||
                        cursor_rect.left > area3_rect.right ||
                        cursor_rect.bottom < area3_rect.top ||
                        cursor_rect.top > area3_rect.bottom)) {
                        event.preventDefault();
                        div_chose(3)
                }

                if (!(cursor_rect.right < area4_rect.left ||
                        cursor_rect.left > area4_rect.right ||
                        cursor_rect.bottom < area4_rect.top ||
                        cursor_rect.top > area4_rect.bottom)) {
                        event.preventDefault();
                        div_chose(4)
                }


        }
}



// Додати обробник подій для руху курсору
document.addEventListener('mousemove', updateMouseCoordinates);


document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.webkitUserSelect = 'none'; /* Safari */
    document.body.style.mozUserSelect = 'none';    /* Firefox */
    document.body.style.msUserSelect = 'none';     /* Internet Explorer/Edge */
    document.body.style.userSelect = 'none';       /* Standard */
});

function add_area(elem){

    var div_area0 = document.createElement('div');
    div_area0.id = 'area0';
    div_area0.style.left = 50 + 'px';
    div_area0.style.top = 1 + 'px';
    div_area0.style.width = 900 + 'px';
    div_area0.style.height = 150 + 'px';
    div_area0.style.position = 'absolute';
    elem.appendChild(div_area0);

    var div_area0 = document.createElement('div');
    div_area0.id = 'area1';
    div_area0.style.left = 50 + 'px';
    div_area0.style.top = 151 + 'px';
    div_area0.style.width = 900 + 'px';
    div_area0.style.height = 150 + 'px';
    div_area0.style.position = 'absolute';
    elem.appendChild(div_area0);

    var div_area0 = document.createElement('div');
    div_area0.id = 'area2';
    div_area0.style.left = 50 + 'px';
    div_area0.style.top = 301 + 'px';
    div_area0.style.width = 900 + 'px';
    div_area0.style.height = 150 + 'px';
    div_area0.style.position = 'absolute';
    elem.appendChild(div_area0);

    var div_area0 = document.createElement('div');
    div_area0.id = 'area3';
    div_area0.style.left = 50 + 'px';
    div_area0.style.top = 451 + 'px';
    div_area0.style.width = 900 + 'px';
    div_area0.style.height = 150 + 'px';
    div_area0.style.position = 'absolute';
    elem.appendChild(div_area0);

    var div_area0 = document.createElement('div');
    div_area0.id = 'area4';
    div_area0.style.left = 50 + 'px';
    div_area0.style.top = 601 + 'px';
    div_area0.style.width = 900 + 'px';
    div_area0.style.height = 150 + 'px';
    div_area0.style.position = 'absolute';
    elem.appendChild(div_area0);

}

function save_button(){
    console.log("Зберігаєм")
    var txt = ""
    var list_img_s1 = []
    var list_img_s2 = []

    //список діві з екрану
    var list_image_s = []

    for (var i = 0; i < list_div_e.length; i += 1) {
        list_image_s = list_image_s.concat(list_div_e[i]);
    }

    var count = 0
    var list_buf = []

    for (var i = 0; i < list_image_s.length; i += 1) {

        if(document.getElementById(list_image_s[i]).style.backgroundColor == "black"){
            list_img_s1.push(1)
            txt += "1"


            count++
            if (count == 1){
                list_buf = [i, count]

            }else if (count > 1){
                var c1 = list_buf[1]
                list_buf[1] = c1 + 1
            }

        }else{
            list_img_s1.push(0)
            txt += "0"

            if(count > 0){
                list_img_s2.push(list_buf)
            }


            count = 0
            list_buf = []


        }
    }

    console.log("Зробив")
    console.log(list_img_s2)
    sending_data(list_img_s2, txt)


    var pos_left = 50
    var pos_top = 1
    var count_119 = 0

    var addImgDiv = document.querySelector('.img_div');
    addImgDiv.innerHTML = '';

    add_area(addImgDiv)

    var count_div = 0

    var list_area = []

    var count_minus = 0

        for (var i = 0; i < 120 * 100; i += 1) {

            count_div++


            var div_foot = document.createElement('div');
            div_foot.id = 'div_' + i;
            list_area.push('div_' + i)

            if(list_img_s2.length > 0 && list_img_s2[0][0] == i){
                count_minus = list_img_s2[0][1]
                list_img_s2.shift();
            }

            if(count_minus > 0){
                count_minus--
                div_foot.style.backgroundColor = 'black';
            }


            div_foot.style.left = pos_left + 'px';
            div_foot.style.top = pos_top + 'px';
            div_foot.style.width = 7.5 + 'px';
            div_foot.style.height = 7.5 + 'px';
            div_foot.style.position = 'absolute';


            addImgDiv.appendChild(div_foot);


            pos_left += 7.5

            count_119++
            if(count_119 == 120){
                count_119 = 0
                pos_left = 50
                pos_top += 7.5
            }

        }

}



function sending_data(list_i, text){
    // Отримуєм токен від DTL
    var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    // Словник який буде відправлений
    var data = {
        messeg: JSON.stringify(list_i),
        txt: text,
    };

    // конвертує дані для запиту
    var formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    // відправляє інформацію на бекенд
    fetch('/creat_share', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrfToken,
        },

        body: formData.toString(),
    })

    // отримує відповідь від бекенду

    .then(response => response.json())
    .then(data => {
        txt_replay = data.reply
        console.log(txt_replay)
    });

}





