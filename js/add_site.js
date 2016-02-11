

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
    function _submit(e) {
        //отправляет данные
        e.preventDefault;
        console.log('sucses');
    }
    function _addImg() {
        //добавление файла изображения
    }
    function _getComplete() {
        // выводит сообщение о завершении
    }
    function _getFatalError() {
        // выводит сообщение об ошибке
    }
    //код, объявляющий функцию вне модуля
    /*addSite.hide = hide;
    addSite.submit = submit;
    addSite.img = addImg;
    addSite.complete = complete;
    addSite.err = fatalError;
    window.addSite = addSite;*/

//Далее применяются настолько грязные костыли, чтоих нужно смотреть тольо с закрытыми глазами
    doc.getElementsByClassName('newproject')[0].addEventListener('click', addSite);
    doc.getElementsByClassName('close')[0].addEventListener('click', _hide);
    doc.addEventListener('submit', _submit);
})();
