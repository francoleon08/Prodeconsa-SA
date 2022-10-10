//Select de navbar
const navbarSelect = document.querySelector(".navbar_select");
const navbarSelectBtn = navbarSelect.querySelector(".navbar_select-btn");
const navbarOpciones = navbarSelect.querySelector(".navnar_select-opciones");
const navbarSpan = navbarSelectBtn.querySelector(".navbar_select-span");
const esconderSelect = navbarSelectBtn.querySelector(".navbar_esconder-input");

navbarSelectBtn.addEventListener("click",() => {
    navbarSelect.classList.toggle("active");
})

let serviciosNavbar = ["Obras civiles", "Mármol, Quarzo y Granito", "Lavado de Pisos", 
"Hornos y Parrillas", "Enchapes en Piedra", "Carpintería"];

let url = ["obras.html", "marmol.html", "pisos.html", "hornos_parrilas.html", "enchapes.html", 
"carpinteria.html"];

//Recorro el array de servicios y url para crear los "links" dinamicamente
function añadirServiciosNavbar() {
    for (let i = 0; i < serviciosNavbar.length; i++) {
        let link;
        if (location.pathname.includes("/index.html")) {
            for (let j = 0; j < url.length; j++) {
                link = `<a href="pages/servicios/${url[i]}" onclick="selectServicioNavbar(this)">${serviciosNavbar[i]}
                </a>`;
            }
        } else if (location.pathname.includes("/pages/contacto.html") 
        || location.pathname.includes("/pages/nosotros.html")) {
            for (let j = 0; j < url.length; j++) {
                link = `<a href="./servicios/${url[i]}" onclick="selectServicioNavbar(this)">${serviciosNavbar[i]}
                        </a>`;
            }
        } else {
            for (let j = 0; j < url.length; j++) {
                link = `<a href="${url[i]}" onclick="selectServicioNavbar(this)">${serviciosNavbar[i]}
                        </a>`;
            }
        }
        navbarOpciones.insertAdjacentHTML("beforeend", link);
    }
}

//El link seleccionado pasa a quedar en el select
function selectServicioNavbar(link) {
    navbarSelect.classList.remove("active");
    navbarSelectBtn.firstElementChild.innerText = link.innerText;
    navbarSpan.innerHTML = "Servicios";
}

añadirServiciosNavbar();