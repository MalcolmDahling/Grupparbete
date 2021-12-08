let bkg0 = document.getElementById('background0')
let bkg1 = document.getElementById('background1')

let bkg0Pos = 0;
let bkg1Pos = -1200;


setInterval(function(){
    bkg0.style.left = - bkg0Pos + 'px';
    bkg1.style.left = - bkg1Pos + 'px';

    bkg0Pos = bkg0Pos +4;
    bkg1Pos = bkg1Pos +4;

    if(bkg0Pos >= 1200){
        bkg0Pos = -1200;
    }

    if(bkg1Pos >= 1200){
        bkg1Pos = -1200;
    }
}, 17);

const dino=document.getElementById("dino");


function jump(){
    if(dino.classList!="jump"){
        dino.classList.add("jump");


setTimeout(function(){
    dino.classList.remove("jump");
},300);
}
}

document.addEventListener("keydown",function(event){
    jump()
});





    
    






