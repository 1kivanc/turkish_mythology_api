const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "rgb(18, 18, 18)") {
    document.body.style.backgroundColor = "#f8f9fa";
    document.body.style.color = "#212529";
    themeToggle.className = "fa-solid fa-moon theme-toggle";
    document
      .querySelectorAll(".navbar")
      .forEach((el) => (el.style.backgroundColor = "#f8f9fa"));
    document
      .querySelectorAll(".navbar-brand, .nav-link")
      .forEach((el) => (el.style.color = "#212529"));
    document
      .querySelectorAll(".section-title")
      .forEach((el) => (el.style.color = "#212529"));
    document
      .querySelectorAll(".code-block")
      .forEach((el) => (el.style.backgroundColor = "#e9ecef"));
  } else {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#e0e0e0";
    themeToggle.className = "fa-solid fa-sun theme-toggle";
    document
      .querySelectorAll(".navbar")
      .forEach((el) => (el.style.backgroundColor = "#1c1c1c"));
    document
      .querySelectorAll(".navbar-brand, .nav-link")
      .forEach((el) => (el.style.color = "#e0e0e0"));
    document
      .querySelectorAll(".section-title")
      .forEach((el) => (el.style.color = "#e0e0e0"));
    document
      .querySelectorAll(".code-block")
      .forEach((el) => (el.style.backgroundColor = "#1e1e1e"));
  }
});
