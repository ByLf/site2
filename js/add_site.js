var doc = document;

(function () {
    function addSite() {
        //открывает окно добавления
        doc.getElementById('darker').className = 'bg-active';
    }
    function hide() {
        //скрывает окно
        doc.getElementById('darker').className = 'passive';
    }
    function submit() {
        //отправляет данные
        console.log('sucses');
    }
    function addImg() {
        //добавление файла изображения
    }
    function complete () {
        // выводит сообщение о завершении
    }
    function
    addSite.hide = hide;
    addSite.submit = submit;
    addSite.img = addImg;
    window.addSite = addSite;
})();
