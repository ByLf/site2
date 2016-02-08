var doc = document,
    N = 4,
    sort = [[], ['.', '@'], [], []],/*Создание массива с нужными символами*/
    block = document.getElementById('page3'),
    firstError = doc.getElementById('name');
/*он нашел айди, и вложенные в него ид идут как части массива. в итоге, это сложный массив*/

var output = (function () {
    var popup = [],
        i = 0,
        im = 0,
        ik = 0, //четчики. одна переменная для счет не подходит.
        popup[0] = firstError;
    do {
        i++;
        popup[N] = popup[N - 1].nextElementSibling;
    }
    while (i < N && popup[N] !== null);
    /*Создане массива с вывесками ошибок+*/
    var  Er = [],
    for (im = 0; im < N; im++) { Er[im] = true; }
    console.log(Er);
    /*Создание массива с меткой правильности заполнения*/
     function Error_on(num) {
        while (num !== 0 && (popup[num] === null || popup[num] === undefined)){
            popup[num] = popup [num - 1];
        }
        popup[num].className = 'active';
        block[num].classList.add = 'Error';
    }
    function Error_off(num) {
        popup[num].className = 'passive';
        block[num].classList.remove('Error');
    }
    /*Функциии показывания/скрытия*/
    function valid(k) {
        var sym_sint = function () {
            var m = sort[k].length,
                v = 0,
                trey = true,
                str = popup[k].value;
            for (v = 0; v < m; v++) {
                if (str.prototype.lastIndexOf(sort[k][v]) <= 0) {
                    trey = false;
                }
            }
            return trey;
        }
        alert(block[k].value)
        /*Функция провеки наличия нужных символов*/
        if ( Er[k] && block[k].value.length >= 0 && sym_sint(k)) {
              alert('yes, '+ popup.value);
        }
        else {
            Error_on(k);
            Er[k] = false;
        }
    }
    /*Функция проверки поля*/
    for (ik = 0; ik < N; ik++)
      block[ik].onclick = function() {
          if (!Er[ik]) Error_off(ik);
      }
    /* Присвоение тултипам соотв. полей*/
    return {
        validation: function (e) {
                    e.preventDefault();
                    var p = 0;
                    for (p = 0; p < N; p++) {
                        valid(p);
                    }
        }
    }
}) ();

block.addEventListener('submit', output.validation);
/*так, план такой:
  +не забыть про счетчик
  +сделать массив из вывода ошибок,
  +сделать булевый массив,
  +сделать массив с тем, чего не должно быть внутри
      +стоит сделать замыкание на проверку того, что должно быть внутри.... да, функцию внутри.
  +сделать общую для проверки функцию,
     стоит сделать какое-то обнуление красного: лучше при клике.
  +вывести, что все сделано
*/
