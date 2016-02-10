var doc = document,
    N = 4,
    sort = [[], ['.', '@'], [], []],/*Создание массива с нужными символами*/
    warning = ['<', '>', '//'],
    block = document.getElementById('page3'),
    firstError = doc.getElementById('name');
/*он нашел айди, и вложенные в него ид идут как части массива. в итоге, это сложный массив*/

var output = (function () {
    var popup = [],
        Er = [],
        i = 0;
    popup[0] = firstError;
    do {
        i++;
        popup[i] = popup[i - 1].nextElementSibling;
    } while (i < N && popup[N] !== null);
    /*Создане массива с вывесками ошибок*/
    for (i = 0; i < N; i++) { Er[i] = true; }
    /*Создание массива с меткой правильности заполнения*/
    function Error_on(num) {
        while (num !== 0 && (popup[num] === null || popup[num] === undefined)) {
            popup[num] = popup[num - 1];
        }
        popup[num].classList.add('active');
        block[num].classList.add('Error');
    }
    function Error_off(Num) {
        console.log(Num);
        popup[Num].classList.remove('active');
        popup[Num].classList.add('passive');
        block[Num].classList.remove('Error');
    }
    /*Функциии показывания/скрытия*/
    function valid(k) {
        var sym_sint = function () {
            var m = sort[k].length,
                w = warning.length,
                v = 0,
                trey = true,
                str = block[k].value;
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
        if (Er[k] && block[k].value.length > 0 && sym_sint(k)) {
            console.log(block[k].id + ' отправлено');
        } else {
            Error_on(k);
            Er[k] = false;
        }
    }
    /*Функция проверки поля*/
    for (i = 0; i < N; i++) {
        console.log(i);
        block[i].addEventListener('click', function () {
            console.log(Er[i] + ' - ' + i);
            if (Er[i] === false) { Error_off(i); }
      }); //похоже, проблема в этом цикле. оно не делает переменную внутри. i остается внешней переменной...?!
    }
    /* Присвоение тултипам соотв. полей*/
    return {
        validation: function (e) {
            e.preventDefault();
            var p = 0;
            for (p = 0; p < N; p++) {
                valid(p);
            }
        }, //запятая - это очень важно!
        clearAll: function (e) {
            for (i = 0; i < N; i++) {
                if (!Er[i]) {Error_off(i); }
            }
        }
    };
})();
block.addEventListener('submit', output.validation, false);
block.addEventListener('reset', output.clearAll, false);
