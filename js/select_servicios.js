//Select de servicios en navbar
const navBar = document.getElementById("select_servicios");
navBar.addEventListener("change", () => {
    urlHandler(navBar.value);
    navBar.value = "";
});

function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
