const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const navbar = document.querySelector(".navbar");
const sectionTitles = document.querySelectorAll(".section-title");
const codeBlocks = document.querySelectorAll(".code-block");

let isDarkMode = true;

themeToggle.addEventListener("click", function () {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");

    navbar.classList.add("dark-mode");
    navbar.classList.remove("light-mode");

    sectionTitles.forEach((el) => {
      el.classList.add("dark-mode");
      el.classList.remove("light-mode");
    });

    codeBlocks.forEach((el) => {
      el.classList.add("dark-mode");
      el.classList.remove("light-mode");
    });

    themeToggle.className = "fa-solid fa-sun theme-toggle";
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");

    navbar.classList.add("light-mode");
    navbar.classList.remove("dark-mode");

    sectionTitles.forEach((el) => {
      el.classList.add("light-mode");
      el.classList.remove("dark-mode");
    });

    codeBlocks.forEach((el) => {
      el.classList.add("light-mode");
      el.classList.remove("dark-mode");
    });

    themeToggle.className = "fa-solid fa-moon theme-toggle";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  body.classList.add("dark-mode");
  navbar.classList.add("dark-mode");
  sectionTitles.forEach((el) => el.classList.add("dark-mode"));
  codeBlocks.forEach((el) => el.classList.add("dark-mode"));
});
