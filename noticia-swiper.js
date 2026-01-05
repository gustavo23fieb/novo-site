const slidesCount = document.querySelectorAll('.swiper-slide').length;

var swiper = new Swiper(".mySwiperNoticias", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,

    coverflowEffect: {
        rotate: 0,
        stretch: 90,
        modifier: 1,
        slideShadows: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    loop: slidesCount > 3,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,

        },
        992: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 0,
                stretch: 90,
                modifier: 1,
                slideShadows: false,
            },
        }
    }

});
