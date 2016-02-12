(function () {
    var doc = document,
        area = [],
        Num,
        tooltip_error = doc.getElementById('tooltip_Error').children,
        /* Общая функция проверки*/
        _validation = function (e) {
            e.preventDefault();
            _getNumderOfInput(e.target);
            var k = 0;
            for (k = 0; k < Num; k++) {
                area[k].checkError = _checkNullString(area[k].value);
                if (area[k].checkError)
                    { area[k].checkError = _searchDangerousSymbol(area[k].value); }
                if (!area[k].checkError) {
                    _showError(k);
                    area[k].form.addEventListener('click', _clickErrorForm);
                }
            }
        },
        /*Вычисляет количество текстовых полей и объединяет их с тултипами в объект*/
        _getNumderOfInput = function (Form) {
            var i = 0,
                length = Form.length;
            Num = 0;
            for (i = 0; i < length; i++) {
                if (Form[i].type === 'text' || Form[i].type === 'textarea' || Form[i].type === 'file') {
                    area[Num] = {};
                    area[Num].form = Form[i];
                    area[Num].checkError = true;
                    area[Num].tooltip = tooltip_error[Num];
                    area[Num].value = Form[i].value;
                    Num++;
                }
            }
        },
        /*Проверяет на наличие строки*/
        _checkNullString = function (value) {
            if (value.length < 1 || value == ' ') { return false; }
                else {return true; }
        },
        /*Ищет запрещенные символы/строки */
        _searchDangerousSymbol = function (value) {
            var i = 0,
                inspect = true,
                symbol = ['<', '>', '/*', '//'],
                length = symbol.length;
            for (i = 0; i < length; i++) {
                if (value.indexOf(symbol[i]) >= 0) {
                    inspect = false;
                    break;
                }
            }
            return inspect;
        },
        /*Дополнительно: ищет обязательные в строке символы*/
        _searchNeedingSymbol = function (value, symbols) {
            var i = 0,
                inspect = true,
                length = symbols.length;
            for (i = 0; i < length; i++) {
                if (value.indexOf(symbols[i]) >= 0) {
                    inspect = false;
                    break;
                }
            }
            return inspect;
        },
        /*Выводит сообщение об ошибке*/
        _showError = function (Num) {
            while (Num !== 0 && area[Num].tooltip == null) {
                area[Num].tooltip = area[Num - 1].tooltip;
            }
            if (Num === 0 && area[Num].tooltip == null) { alert('Неверно введены данные!'); }
            area[Num].checkError = false;
            area[Num].tooltip
                .classList.add('active');
            area[Num].tooltip
                .classList.remove('passive');
            area[Num].form
                .classList.add('Error');
        },
        /*Убирает сообщение об ошибке при клике*/
        _clickErrorForm = function (e) {
            var i = 0,
                form = e.target;
            while (area[i].form !== form && i < Num) {
                i++;
            }
            _hideError(i);
        },
        /*Сама функция сокрытия сообщения об ошибке*/
        _hideError = function (Num) {
            area[Num].checkError = true;
            area[Num].tooltip
                .classList.add('passive');
            area[Num].tooltip
                .classList.remove('active');
            area[Num].form
                .classList.remove('Error');
        },
        /*Добавляет к стандартному "обнулению" форм еще и обнуление ошибок*/
        _reset = function () {
            var i = 0;
            for (i = 0; i < Num; i++) {
                if (!area[i].checkError) {_hideError(i); }
            }
        };
    doc.addEventListener('submit', _validation);
    doc.addEventListener('reset', _reset);
})();
