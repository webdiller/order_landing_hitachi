$(document).ready(function () {
    $('#carousel1').owlCarousel({
<<<<<<< HEAD
        loop: true,
=======
        mouseDrag: false,
        touchDrag: false,
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed: 450,
>>>>>>> master
        nav: true,
        center: true,
        navText: ["<img src='./img/arrowleft_white.png'>","<img src='./img/arrowright_white.png'>"],
        responsive: {
            0: {
                items: 1
            }
<<<<<<< HEAD
        }
    });

=======
        },
    });


    // var owl = $('#carousel1');
    // owl.owlCarousel();
    // owl.on('changed.owl.carousel', function(event) {
    //     if($('#carousel1 > div.owl-dots > button.owl-dot:nth-child(1)').hasClass('active')){
    //         $('.bg').removeClass('bg-img1 bg-img2 bg-img3 ');
    //         $('.bg').addClass('bg-img1 animated fadeIn');
    //     }
    //     if($('#carousel1 > div.owl-dots > button.owl-dot:nth-child(2)').hasClass('active')){
    //         $('.bg').removeClass('bg-img1 bg-img2 bg-img3');
    //         $('.bg').addClass('bg-img2 animated fadeIn');
    //     }
    //     if($('#carousel1 > div.owl-dots > button.owl-dot:nth-child(3)').hasClass('active')){
    //         $('.bg').removeClass('bg-img1 bg-img2 bg-img3');
    //         $('.bg').addClass('bg-img3 animated fadeIn');
    //     }
    // });


>>>>>>> master
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

<<<<<<< HEAD
    $('.showMore').on('click', function () { 
        $('.showMoreTarget').toggle('active');
     });
=======
    var arr = document.querySelectorAll('.myrow .item');
    var x = 0;
    var y = 10;

    // Подгрузка в секции diagnostic
    $('#showMore').on('click', function (e) { 
        if($(window).width() > 1024) {
            e.preventDefault();
            $('item_hidden_1920_1024').slice(0,10).show();
            $('.item_hidden_1920_1024:hidden').slice(0,10).slideDown();
        }
        if($(window).width() < 1024) {
            e.preventDefault();
            $('item_hidden_1024_768').slice(0,10).show();
            $('.item_hidden_1024_768:hidden').slice(0,10).slideDown();
        }
        if($(window).width() < 768) {
            e.preventDefault();
            $('item_hidden_480_320').slice(0,10).show();
            $('.item_hidden_480_320:hidden').slice(0,10).slideDown();
        }
    });

>>>>>>> master

});