// Ensure this script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // on: {
    //   init: function () {
    //     // Hide all slides initially
    //     gsap.set(swiper.slides, { opacity: 0, y: 200 });
    //     // Animate the first slide's text on initialization
    //     animateSlideText(swiper.slides[swiper.activeIndex]);
    //   },
    // },
  });

  // Function to animate slide text
  function animateSlideText(activeSlide) {
    let slideText = activeSlide.querySelector(".slide-text");

    if (slideText) {
      // Check if slideText exists
      gsap.fromTo(
        slideText,
        { y: 200, opacity: 0 }, // Start values
        { y: 0, opacity: 1, duration: 2, ease: "power2.out" } // End values
      );
    }
  }
});
