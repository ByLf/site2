var i = 0,
    doc = document;
    hrefix = location.pathname,
    elem = doc.getElementsByClassName('nav'),
    k = elem.length;
for (i = 0; i < k; i++) {
    if (elem[i].href.indexOf(hrefix) >= 0) {
        elem[i].className = "now";
        k--;
        if (k > i) {
            elem[i].className = 'NaV';
        }
        break;
     }
 } /*ТАК, какая разница между baseURI и просто href: первое никак не изменишь.*/
/* elem[0].className = "now";
console.log(elem[0].className); -точно рботающая тварь*/
