const mobileBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
mobileBtn.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
