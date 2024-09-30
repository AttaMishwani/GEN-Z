// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Event listener for slide change
  on: {
    slideChange: function () {
      // Get all slide texts
      const slideText = document.querySelectorAll(".slide-text");

      // Reset the slide texts (to hide them before animation)
      slideText.forEach((text) => {
        gsap.set(text, { y: 400, opacity: 0 });
      });

      // Animate the current active slide text
      const realSlideText =
        this.slides[this.realIndex].querySelector(".slide-text");
      gsap.to(realSlideText, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
  },
});

// Initial GSAP animation for the first slide
gsap.from(".swiper-slide-active .slide-text", {
  y: 400,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
