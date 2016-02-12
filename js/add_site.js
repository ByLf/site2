//Добро пожаловать в мир костылей!

(function () {
    var doc = document,
        background = document.getElementById('darker'),
        placeInputImage = doc.getElementById('new_image');
    function addSite(e) {
        //открывает окно добавления
        e.preventDefault;
        background.classList.add('bg-active');
        background.classList.remove('passive');
    }
    function _hide() {
        //скрывает окно
        background.classList.add('passive');
        background.classList.remove('bg-active');
    }
    function _changeInputOfFile() {
        var file = this.value,
            htmlOfillusion = this.offsetParent.innerHTML,
            numder;
        if (file) {
            numder = htmlOfillusion.indexOf('<');
            this.offsetParent.innerHTML = file + htmlOfillusion.substring(numder);
        console.dir(file);
            this.value = file;
        }//WARNING: не отображает имя при перезагрузке страницы: проблема в кэше. Возможно, решаемо при вынесении функции за модуль
    }
    function _submitImage(e) {
        e.preventDefault;
        var i = 0,
            form = e.target,
            inputImage;
        while (form[i].type !== 'file') {
            i++;
        }
        inputImage = form[i];
        if (inputImage.value == "") {
            console.dir(inputImage);
            _turnOnClassError(inputImage);
        }
    }
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
