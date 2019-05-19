$(document).ready(function () {
    $('#carousel1').owlCarousel({
        loop: true,
        nav: true,
        center: true,
        navText: ["<img src='./img/arrowleft_white.png'>","<img src='./img/arrowright_white.png'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('#carousel2').owlCarousel({
        center: false,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='./img/arrowleft.png'>","<img src='./img/arrowright.png'>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1440: {
                items: 4 
            },
        }
    });

    $('.showMore').on('click', function () { 
        $('.showMoreTarget').toggle('active');
     });

});