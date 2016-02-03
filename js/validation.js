var block = document.getElementById('page3');
block.addEventListener('submit', output.valid);

var output = function () {
    function fio(ev){
        var value = block.getElementById('Fio').value;
        if(value.length >= 0){

        }
        else{

        }
    }
    function email(ev){

    }
    function message(ev){

    }
    return {
        valid: function (e){
            e.preventDefault();
            fio(e);
            email(e);
            message(e);
        }
    }
} ();
