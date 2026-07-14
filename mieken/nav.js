document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-btn");
  var menu = document.querySelector(".mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
});
