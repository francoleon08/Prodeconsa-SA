const hamburger = document.getElementById("menu_hamburguesa");
const navbarPages = document.getElementById("navbar_pages");


hamburger.addEventListener("click", () => {
    navbarPages.classList.toggle("show");
});
