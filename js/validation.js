var doc = document,
    N = 4,
    sort = [[], ['.', '@'], [], []],/*Создание массива с нужными символами*/
    warning = ['<', '>', '//'],
    form = document.getElementById('page3'),
    firstError = doc.getElementById('name');
/*он нашел айди, и вложенные в него ид идут как части массива. в итоге, это сложный массив*/

var output = (function () {
    var tooltip = [],
        CheckError = [],
        i = 0;
    tooltip[0] = firstError;
    do {
        i++;
        tooltip[i] = tooltip[i - 1].nextElementSibling;
    } while (i < N && tooltip[N] !== null);
    /*Создане массива с вывесками ошибок*/
    for (i = 0; i < N; i++) { CheckError[i] = true; }
    /*Создание массива с меткой правильности заполнения*/
    function _Error_on(num) {
        while (num !== 0 && (tooltip[num] === null || tooltip[num] === undefined)) {
            tooltip[num] = tooltip[num - 1];
        }
        tooltip[num].classList.remove('passive');
        tooltip[num].classList.add('active');
        form[num].classList.add('Error');
    }
    function _Error_off(Num) {
        console.log(Num);
        tooltip[Num].classList.remove('active');
        tooltip[Num].classList.add('passive');
        form[Num].classList.remove('Error');
    }
    /*Функциии показывания/скрытия*/
    function _valid(k) {
        var _sym_sint = function () {
            var m = sort[k].length,
                w = warning.length,
                v = 0,
                trey = true,
                str = form[k].value;
            for (v = 0; v < w; v++) {
                if (str.indexOf(warning[v]) >= 0) { trey = false; }
            }
            if (trey) {
                for (v = 0; v < m; v++) {
                    if (str.lastIndexOf(sort[k][v]) < 0) {
                        trey = false;
                    }
                }
            }
            return trey;
        };
        /*Функция провеки наличия нужных символов*/
        if (CheckError[k] && form[k].value.length > 0 && _sym_sint(k)) {
            console.log(form[k].id + ' отправлено');
        } else {
            _Error_on(k);
            CheckError[k] = false;
        }
    }
    /*Функция проверки поля*/
    for (i = 0; i < N; i++) {
        console.log(i);
        form[i].addEventListener('click', hideTooltip(i)); //похоже, проблема в этом цикле. оно не делает переменную внутри. i остается внешней переменной...?!
    }
    function hideTooltip(i) {
            console.log(CheckError[i] + ' - ' + i);
        if (CheckError[i] === false) { _Error_off(i); }
    }
    /* Присвоение тултипам соотв. полей*/
    return {
        validation: function (e) {
            e.preventDefault();
            var p = 0;
            for (p = 0; p < N; p++) {
                _valid(p);
            }
        }, //запятая - это очень важно!
        clearError: function (e) {
            for (i = 0; i < N; i++) {
                if (!CheckError[i]) {_Error_off(i); }
            }
        }
    };
})();
form.addEventListener('submit', output.validation, false);
form.addEventListener('reset', output.clearError, false);
