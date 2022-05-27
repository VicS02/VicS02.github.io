$(document).ready(main);

var contador=1;

function main(){
    $(".menu").click(function(){

        if(contador==1){
            $(".dropdown-content a").animate({
               left:"9%"
            });
            contador = 0;
        }
        else{
            contador = 1;
            $(".dropdown-content a").animate({
           left:"-100%"
        });
        }
    });
};