document.addEventListener("DOMContentLoaded", () => {
    //Validar inicio de sesion
    validarSesion();

});

//Validar la sesión activa en el vista actual
const validarSesion = () =>{
    var usuarioSesion = JSON.parse(sessionStorage.getItem('usuarioSesion'));
    if (usuarioSesion != null) {
        const agendarCitas = document.getElementById("ocupoSesion");
        agendarCitas.style.display = "block";
    };
};