const swiper = new Swiper('.projects__slider', {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    speed: 1000,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});