$(document).ready(function(){
   
    $(".header_menu-flex > .header__menu-item:nth-child(3)").on("mouseenter", function(){
        let rotate = 180;
        $(".menu-img").css('-webkit-transform','rotate('+rotate+'deg)');
    });

    $(".header_menu-flex > .header__menu-item:nth-child(3)").on("mouseleave", function(){
        rotate= 360;
        $(".menu-img").css('-webkit-transform','rotate('+rotate+'deg)');
    });
});


let bloc_slide = $(".slide__image");
let index_bloc_slide = bloc_slide.length;
let lastindex = bloc_slide.length-1;
let i = 0; 

$(document).on("click",".slide__fleche-droite", function()
{       
    i++;
    let valpx=-1234;
    if(i <= lastindex){
        $(".slide").css({
            transition:'1s',
            transform:'translateX('+valpx+'px)'
        });
    }
    else{
        i = 0;
    }
    console.log(i);
});

setInterval(function(){
    
},2500);


$(".slide__fleche-gauche").click(function(){
    
});


let var1 = 30 005 000;

