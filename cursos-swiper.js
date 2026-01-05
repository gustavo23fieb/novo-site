const slidesCount = document.querySelectorAll('.swiper-slide').length;

const isStatic = slidesCount < 5;

var swiper = new Swiper(".mySwiperCursos", {
    effect: isStatic ? "slide" : "coverflow", 
    grabCursor: !isStatic, 
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween:0,
    
    coverflowEffect: {
        rotate: 0,
        stretch: 0,    
        depth: 150,
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

    loop: slidesCount > 3 && !isStatic,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,

        },
        992: {
            slidesPerView: 3,
            coverflowEffect: !isStatic ? {
                rotate: 0,
                stretch: 90,
                modifier: 1,
                slideShadows: false,
            } : {},
        }
    }

});
