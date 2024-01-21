document.addEventListener("DOMContentLoaded", () => {
  const navToggleButton = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".header__nav-mobile__menu-list");
  navToggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-visibility");
    navToggleButton.setAttribute(
      "aria-expanded",
      navToggleButton.classList.toggle("open"),
    );
    navToggleButton.setAttribute(
      "aria-pressed",
      navToggleButton.matches("[aria-pressed=true]") ? false : true,
    );
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
      navToggleButton.setAttribute(
        "aria-expanded",
        navMenu.classList.toggle("toggle-visibility"),
      );
    }
  });
});
