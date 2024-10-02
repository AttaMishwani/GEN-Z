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

let cards = document.querySelectorAll(".card .card-overlay");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Animation for h2
    gsap.from(card.querySelector("h2"), {
      y: 50,
      opacity: 0, // Make sure opacity starts from 0
      duration: 1.5,
      ease: "power2.out",
    });

    // Animation for p
    gsap.from(card.querySelector("p"), {
      y: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Animation for button
    gsap.from(card.querySelector("button"), {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power2.out",
    });
  });
});

let tdCards = document.querySelectorAll(" .td-card-overlay");

tdCards.forEach((card) => {
  console.log(card);
  card.addEventListener("mouseenter", () => {
    // Animation for h2
    gsap.from(card.querySelector("h2"), {
      y: 50,
      opacity: 0, // Make sure opacity starts from 0
      duration: 1.5,
      ease: "power2.out",
    });

    // Animation for p
    gsap.from(card.querySelector("p"), {
      y: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Animation for button
    gsap.from(card.querySelector("button"), {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power2.out",
    });
  });
});
