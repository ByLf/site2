//Добро пожаловать в мир костылей!

(function () {
    var doc = document,
        background = document.getElementById('darker');
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
            illusion = this.offsetParent,
            htmlOfillusion = illusion.innerHTML,
            numder;
        illusion.classList.add('Error');
        if (this.className.indexOf('Error') >= 0) {
            illusion.classList.add('Error');
        }
            else {
                illusion.classList.remove('Error');
            }
        if (file) {
            numder = htmlOfillusion.indexOf('<');
            htmlOfillusion = file + htmlOfillusion.substring(numder);
                  }
        //добавление файла изображения
        //нужно добавтить реакцию на изменение, интересно, сработает ли?
    }
    function _getComplete() {
        // выводит сообщение о завершении
    }
    function _getFatalError() {
        // выводит сообщение об ошибке
    }
//Далее применяются настолько грязные костыли, чтоих нужно смотреть тольо с закрытыми глазами
    doc.getElementsByClassName('newproject')[0].addEventListener('click', addSite);
    doc.getElementsByClassName('close')[0].addEventListener('click', _hide);
    doc.getElementById('new_image').addEventListener('change', _changeInputOfFile);

})();
