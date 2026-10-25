/* ==========================================================
   script.js — interactions for the portfolio
   1. Mobile menu open/close
   2. Smooth scrolling for menu links
   3. "Coming soon" messages on project buttons
   4. Show your photo (images/profile.jpg) when the file exists
   5. Show project screenshots (images/*.jpg) when the files exist
   ========================================================== */

const menuButton = document.getElementById("mobile-nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// 1. Mobile menu
function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  menuButton.setAttribute("aria-expanded", String(open));
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    setMenu(mobileMenu.classList.contains("hidden"));
  });
}

// 2. Smooth scroll for links like href="#about"
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    const target = id && id !== "#" ? document.querySelector(id) : null;
    if (!target) return;

    event.preventDefault();
    if (mobileMenu) setMenu(false); // close the menu after tapping a link
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// 3. Buttons with data-alert="..." show a message instead of opening a page.
//    Replace these with real links (href="https://...") when your projects are ready.
document.querySelectorAll("[data-alert]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert(button.dataset.alert);
  });
});

// 4. Profile photo: if images/profile.jpg loads, show it and hide the "IT" text.
const photo = document.getElementById("profile-photo");
const photoFallback = document.getElementById("profile-fallback");
if (photo && photoFallback) {
  const showPhoto = () => {
    photo.classList.remove("hidden");
    photoFallback.classList.add("hidden");
  };
  if (photo.complete && photo.naturalWidth > 0) showPhoto();
  else photo.addEventListener("load", showPhoto);
}

// 5. Project screenshots: when an image loads, show it and hide its placeholder box.
document.querySelectorAll("img[data-shot]").forEach((img) => {
  const placeholder = img.parentElement.querySelector("[data-shot-placeholder]");
  const show = () => {
    img.classList.remove("hidden");
    if (placeholder) placeholder.classList.add("hidden");
  };
  if (img.complete && img.naturalWidth > 0) show();
  else img.addEventListener("load", show);
});
