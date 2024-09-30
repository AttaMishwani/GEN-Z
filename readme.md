live link : https://attamishwani.github.io/GEN-Z/

var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 30,
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});

gsap.from(".slide-text", {
y: 400,
opacity: 0,
duration: 1,
ease: "power2.out",
});
