$(document).ready(function () {
    $('#carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
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
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1025: {
                items: 4
            }
        }
    });
});