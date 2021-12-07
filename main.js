let bkg0 = document.getElementById('background0')
let bkg1 = document.getElementById('background1')





let a = 0;
let b = -1200;


setInterval(function(){
    bkg0.style.left = -a + 'px';
    bkg1.style.left = -b + 'px';

    a = a +2;
    b = b +2;
}, 17);

