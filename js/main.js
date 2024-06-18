
// swiper  js 

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    speed: 400,
    autoplay: {
        delay: 2000,
        desibleInteraction: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});