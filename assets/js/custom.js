$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dots: false,
        nav:true,
        navText: [$('.next-nav'),$('.prev-nav')],
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
        }
    });

    $('.slider_btn_prev').on('click', function (e) {
        e.preventDefault()
        $('.owl-carousel').carousel('prev')
        $('.owl-carousel1').carousel('prev')
    })
    
    
    $('.slider_btn_next').on('click', function (e) {
        e.preventDefault()
        $('.owl-carousel').carousel('next')
        $('.owl-carousel1').carousel('next')
    })
    
});