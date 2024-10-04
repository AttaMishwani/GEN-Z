let toggleBtn = document.querySelector(".toggle-btn");
let toggleMenu = document.querySelector(".toggle-menu");
let toggleIcon = document.getElementById("toggleIcon");
let navLinks = document.querySelectorAll(".navLinks");

toggleBtn.addEventListener("click", () => {
  if (!toggleMenu.classList.contains("active")) {
    toggleMenu.classList.add("active");
    toggleIcon.classList.remove("fa-bars"); //
    toggleIcon.classList.add("fa-x");
  } else {
    toggleMenu.classList.remove("active");
    toggleIcon.classList.remove("fa-x");
    toggleIcon.classList.add("fa-bars");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("navlink clicked");
    toggleMenu.classList.remove("active");
    toggleIcon.classList.remove("fa-x");
    toggleIcon.classList.add("fa-bars");
  });
});
