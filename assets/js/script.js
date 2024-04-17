const botonNavegacion = document.getElementById("botonNavegacion");
const navegacion = document.getElementById("navegacion");
const iconNav = document.getElementById("icon__nav");
const cerrarNav = document.querySelectorAll('.lista__navegacion a[href^="#"]');
const buttonContact = document.getElementById("buttonContact");

botonNavegacion.addEventListener('click', () => {
    navegacion.classList.toggle("aparecer")
    botonNavegacion.classList.toggle("aparecer")
});

cerrarNav.forEach(menulink => {
    menulink.addEventListener('click', () => {
        navegacion.classList.remove("aparecer");
        botonNavegacion.classList.remove("aparecer");
    });
});

buttonContact.addEventListener("click", (event) => {
    event.preventDefault();
    newAlert();
});


const newAlert = () => {
    swal.fire({
        title: '<span class=alertTitle>No disponible</span>',
        html: '<span class="alertMessage">Para ponerse en contacto usar el formulario del portafolio principal diegollanosr.github.io</span>',
        icon: "error",
        iconColor: `#fd1f4a`,
        background: "#2d2c2e",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        showConfirmButton: true,
        confirmButtonColor: "#295afa",
        confirmButtonAriaLabe: "Confirmar",
    })
};
/*darkmode*/
document.querySelector(".astro").addEventListener("click", function(){
    document.body.classList.toggle("modooscuro");
})