"use strict";

// select all buttons
const toggleBtn = document.querySelectorAll(".toggle");
const navlinks = document.querySelectorAll(".navlink");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const navToggle = document.querySelector("#navToggle");
const featuresLink = document.querySelectorAll(".featuresLink");
const companyLink = document.querySelectorAll(".companyLink");

// open nav function by toggling aria expanded attribute on any of the clicked disclosure buttons
for (let i = 0; i < toggleBtn.length; i++) {
  const btn = toggleBtn[i];
  btn.addEventListener("click", function () {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    console.log(isExpanded, typeof isExpanded); // should be false
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

// functions to close either the features list button or the company list button
function closeFeaturesListBtn() {
  toggleBtn[1].setAttribute("aria-expanded", "false");
}
function closeCompayListBtn() {
  toggleBtn[2].setAttribute("aria-expanded", "false");
}

// close toggleBtn[1] and [2] -- which are the disclosure buttons on the nav -- when the links are pressed
for (let link of featuresLink) {
  link.addEventListener("click", closeFeaturesListBtn);
}

for (let link of companyLink) {
  link.addEventListener("click", closeCompayListBtn);
}

// close the disclosure content if click is outside the disclosure content
document.addEventListener("click", function (event) {
  const isClickInside =
    event.target.closest('button[aria-controls="featuresList"]') ||
    event.target.closest("#featuresList");
  if (!isClickInside && toggleBtn[1].getAttribute("aria-expanded") === "true") {
    closeFeaturesListBtn();
  }
});

document.addEventListener("click", function (event) {
  const isClickInside =
    event.target.closest('button[aria-controls="companyList"]') ||
    event.target.closest("#companyList");
  if (!isClickInside && toggleBtn[2].getAttribute("aria-expanded") === "true") {
    closeCompayListBtn();
  }
});
