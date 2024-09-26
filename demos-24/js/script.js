document
  .querySelector("nav.mobile .hamburger")
  .addEventListener("click", function () {
    document.querySelector("nav.mobile ul").classList.toggle("show");
    document.querySelector("nav.mobile .hamburger").classList.toggle("active");
  });
