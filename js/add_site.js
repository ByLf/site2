//Добро пожаловать в мир костылей!

(function () {
    var doc = document,
        background = document.getElementById('darker'),
        placeInputImage = doc.getElementById('new_image');

        //открывает окно добавления
    function addSite(e) {
        background.classList.add('bg-active');
        background.classList.remove('passive');
    }
        //скрывает окно
    function _hide() {
        background.classList.add('passive');
        background.classList.remove('bg-active');
    }
    /*функция для изменения текста поля для отправк изображения*/
    function _changeInputOfFile() {
        var file = this.value,
            textInputImage = this.previousSibling.textContent,
            numder;
        console.dir(file);
        if (file) {
            numder = file.lastIndexOf('/') + 1;
            if (numder > 0) {
                file = file.substring(numder);
            }//я не понимаю пчему не работает
            this.previousSibling.textContent = file;
        }
    }
    /* Отдельная функция для обработки поля с отправкой изображения, запускается при отправе формы*/
    function _submitImage(e) {
        var i = 0,
            form = e.target,
            inputImage;
        while (form[i].type !== 'file') {
            i++;
        }
        inputImage = form[i];
        if (inputImage.value == "") {
            _turnOnClassError(inputImage);
        }
    }
    /*функция для "окрашивания" поля*/
    function _turnOnClassError(inputImage) {
        inputImage.offsetParent.classList.add('Error');
    }
    function _turnOffClassError() {
        this.offsetParent.classList.remove('Error');
    }
    function _getComplete() {
        // выводит сообщение о завершении
    }
    function _getFatalError() {
        // выводит сообщение об ошибке
    }
//Далее применяются настолько грязные костыли, чтоих нужно смотреть тольо с закрытыми глазами
    doc.getElementsByClassName('newproject')[0].addEventListener('click', addSite);
    doc.getElementById('close').addEventListener('click', _hide);
    placeInputImage.addEventListener('change', _changeInputOfFile);
    /* КАСТЫЛЬ*/
    placeInputImage.addEventListener('click', _turnOffClassError);
    doc.addEventListener('submit', _submitImage);
})();
