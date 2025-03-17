"use strict";

// select all buttons
const toggleBtn = document.querySelectorAll(".toggle");
const navlinks = document.querySelectorAll(".navlink");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const navToggle = document.querySelector("#navToggle");

for (let i = 0; i < toggleBtn.length; i++) {
  const btn = toggleBtn[i];
  btn.addEventListener("click", function () {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    console.log(isExpanded); // should be false
    btn.setAttribute("aria-expanded", !isExpanded);
  });
}

// function to close nav
function closeMobileNav() {
  navToggle.setAttribute("aria-expanded", "false");
  body.classList.remove("overflow-hidden");
}
// close nav by clicking on the navlinks --- loopinng through the navlinks with forEach
navlinks.forEach((navlink) => {
  navlink.addEventListener("click", closeMobileNav);
});
// close nav with escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMobileNav();
});
// close nav by clicking on the overlay
overlay.addEventListener("click", closeMobileNav);
// close nav if window is resized while the nav is open
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768) closeMobileNav();
});
