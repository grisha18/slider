const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click' , ()=>{

    hamburger.classList.toggle('is-active')
})
$(function(){
    $('.carousel-window__items').slick({
        infinity: true,
        centerMode: true,
        variableWidth: true
    });
});