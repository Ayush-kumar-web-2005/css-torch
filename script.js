var on =document.getElementById('on');
var of =document.getElementById('of');
var flash =document.getElementById('flash');
var text =document.getElementById('text');







on.onclick=function(){

    on.style.opacity='0';
    of.style.opacity='1';
    of.style.zIndex='2';
    flash.style.opacity='100';
    text.style.opacity='0';

}

of.onclick=function(){

    on.style.opacity='1';
    of.style.opacity='0';
    of.style.zIndex='-1';
    flash.style.opacity='0.1';

}
    
    
