const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click' , ()=>{

    hamburger.classList.toggle('is-active')
})
$(function(){
    $('.right-arrow').slick({});
});