var i = 0,
    hrefix = location.pathname,
    elem = document.getElementsByClassName('nav'),
    k = elem.length;
for (i = 0; i < k; i++) {
    if (elem[i].href.indexOf(hrefix) >= 0) {
        elem[i].className = "now";
        k--;
        if (k > i) {
            elem[i].style.position = 'static';
        }
        break;
     }
 } /*ТАК, какая разница между baseURI и просто href?!*/
/* elem[0].className = "now";
console.log(elem[0].className); -точно рботающая тварь*/
