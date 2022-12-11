const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");
//const navLinks = document.querySelectorAll(".nav-links");
//const navItems = document.querySelectorAll(".nav-item");

openBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
//close nav menu
closeBtn.addEventListener("click", (e) => {
  navMenu.classList.remove("active");
});
