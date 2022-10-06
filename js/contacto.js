//Select de seccion contactos
const select = document.querySelector(".interes_container");
const selectBtn = select.querySelector(".select_btn");
const opciones = select.querySelector(".select_opciones");
const span = selectBtn.querySelector(".select_span");
const inputHidden = selectBtn.querySelector(".esconder_input");

selectBtn.addEventListener("click",() => {
    select.classList.toggle("active");
})

let servicios = ["Obras civiles", "Mármol", "Quarzo y Granito", "Lavado de Pisos", 
"Hornos y Parrillas", "Enchapes en Piedra", "Carpintería"];

//Recorro el array de servicios para crear los "li" dinamicamente
function añadirServicios() {
    servicios.forEach(servicio => {
        let li = `<li onclick="selectServicio(this)">${servicio}</li>`;
        opciones.insertAdjacentHTML("beforeend", li);
    })
}

//El li seleccionado pasa a quedar en el select
function selectServicio(li) {
    select.classList.remove("active");
    selectBtn.firstElementChild.innerText = li.innerText;
    inputHidden.value = selectBtn.firstElementChild.textContent; //Valor del select guardado en input
    span.style.color = "black";
}

añadirServicios();

//Enviar formulario
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const consulta = document.getElementById("consulta");
const submit = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");
const form = document.getElementById("form");

function validarCampos() {
    let error;
    if (nombre.value === "") {
        return error = true;
    }
    if (telefono.value === "") {
        return error = true;
    }
    if (email.value === "" || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        return error = true;
    }
    if (inputHidden.value === "") {
        return error = true;
    }
    if (consulta.value === "") {
        return error = true;
    }
    return false;
}

//Enviar formulario con formspree
async function controlarForm(e) {
    e.preventDefault();
    let error = validarCampos();
    if (error) {
        resultado.innerHTML = `<p>¡Ups! Tu mensaje no fue enviado, vuelve a intentarlo.</p>`;
        resultado.classList.add("resultado_error");
    } else {
        const formulario = new FormData(form);
        await fetch(form.action, {
        method: form.method,
        body: formulario, 
        headers: {
            "Accept": "application/json",
        }
        })
        resultado.innerHTML = `<p>Muchas gracias por el mensaje, te contactaremos lo más pronto posible.</p>`;
        resultado.classList.remove("resultado_error");
        resultado.classList.add("resultado_correcto");
    }
    
}

submit.addEventListener("click", controlarForm);


