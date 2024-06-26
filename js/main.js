document.addEventListener("DOMContentLoaded", () => {
    //Validar inicio de sesion
    validarSesion();

    //Validar boton recuperar contrasenna
    const botonRecuperarSesion = document.getElementById("recuperarContrasenna");
    if (botonRecuperarSesion != null) {
        const formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    };
});

//Validar la sesión activa en el vista actual
const validarSesion = () =>{
    var usuarioSesion = JSON.parse(sessionStorage.getItem('usuarioSesion'));
    const iniciarSesion = document.getElementById("inicioSesionVista");
    const saludoUsuario = document.getElementById("saludoUsuario");
    if (usuarioSesion != null) {
        const agendarCitas = document.getElementById("agendaCitasVista");
        const botoncerrarSesion = document.getElementById("cerrarSesion");
        
        botoncerrarSesion.addEventListener("click", function() {
            cerrarSesion();
        });
        
        
        agendarCitas.style.display = "block";
        iniciarSesion.style.display = "none";
        botoncerrarSesion.style.display = "block";

        saludoUsuario.innerHTML = "Bienvenido "+usuarioSesion.nombreCompleto;
        saludoUsuario.style.display = "block";
    }else {
        iniciarSesion.style.display = "block";
    };
};

const cerrarSesion = () => {
    sessionStorage.removeItem('usuarioSesion');
    alert("Sesión cerrada");
    window.location.href = '../index.html';
};