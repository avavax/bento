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

window.addEventListener('DOMContentLoaded', () => {
    $menuBtn = document.querySelector('.header__menu-btn');
    $openMenuImg = document.querySelector('.header__menu-open');
    $closeMenuImg = document.querySelector('.header__menu-close');
    $menu = document.querySelector('.header__menu');

    $menuBtn.addEventListener('click', () => {
        $menu.classList.toggle('header__menu-hidden');
        $openMenuImg.classList.toggle('hidden');
        $closeMenuImg.classList.toggle('hidden');
    })
});