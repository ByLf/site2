var  doc = document,
     block = doc.getElementById('page3'),
     firstError = doc.getElementById('name');
/*он нашел айди, и вложенные в него ид идут как части массива. в итоге, это сложный массив*/

var output = function () {
    var popup = [],
        N = 0;
    popup[0] = firstError;
    do {
        N++;
        popup[N] = popup[N - 1].nextElementSibling;
    }
    while (popup[N] !== null);
    N--;
    alert(N);
    /*Создане массива с вывесками ошибок*/
    var  sort = [[], ['.', '@'], []],
         Er = [],
         i = 0;
    for (i = 0; i < N; i++) { Er[i] = true; }
    /*Создание массива с нужными символами*/
     function Error_on(num) {
        while (num !== 0 && popup[num] === null || popup[num] === undefined)
            popup[num] = popup [num - 1];
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
                if (str.lastIndexOf(sort[k][v]) <= 0) {
                    trey = false;
                }
            }
            return trey;
        }
        /*Функция провеки наличия нужных символов*/
        if (popup[i].value.length >= 0 && sym_sint(i)) {
              alert('yes, '+ popup.value);
        }
        else {
            Error_on(i);
            Er[i] = false;
        }
    }
    /*Функция проверки поля*/
    var que = 0;
    for (que = 0; que < N; que++ )
      block[que].onclick = function() {
          if (!Er) Error_off( que );
      }
    /* Присвоение тултипам соотв. полей*/
    return {
        valid: function (e) {
                    e.preventDefault();
                    var p = 0
                    for (p = 0; p < N; p++) {
                        valid(p);
                    }
        }
    }
} ();

block.addEventListener('submit', output.valid);
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
