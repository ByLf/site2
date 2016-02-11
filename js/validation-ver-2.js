(function () {
    var doc = document,
        area = [],
        data = [],
        Num = 0,
        tooltip_error = doc.getElementById('tooltip_Error').children;
    function _validation(e) {
        e.preventDefault();
        console.dir(e);
        _getNumderOfInput(e.target);
        _stringDestroy();
        var k = 0;
        for (k = 0; k < Num; k++) {
            _searchDangerousSymbol(data[k]);
        }
    }
    function _getNumderOfInput(Form) {
        var i = 0,
            length = Form.length;
        for (i = 0; i < length; i++) {
            if (Form[i].tagName === 'INPUT') {
                area[Num].form = Form[i];
                area[Num].checkError = true;
                area[Num].tooltip = tooltip_error[Num];
                Num++;
            }
        }
    }
    function _searchDangerousSymbol(value) {
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
    }
    function _searchNeedingSymbol(value, symbols) {
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
    }
    function _showError(Num) {
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
    }
    function _hideError(Num) {
        area[Num].checkError = true;
        area[Num].tooltip
            .classList.add('passive');
        area[Num].tooltip
            .classList.remove('active');
        area[Num].form
            .classList.remove('Error');
    }
    function _stringDestroy(value) {
        var begin = 0,
            end = 1,
            length = value.length,
            cash;
        while (length > begin) {
            end = value.indexOf('=');
            cash = value.substring(begin, end);
            begin = end + 1;
            end = value.indexOf('&');
            if (end < 0) { end = length; }
            data[cash] = value.substring(begin, end);
            begin = end + 1;
        }
    }
    function _reset() {
        var i = 0;
        for (i = 0; i < Num; i++) {
            if (area[i].checkError) {_hideError(i); }
        }
    }
    doc.addEventListener('submit', _validation);
    doc.addEventListener('reset', _reset);
})();
