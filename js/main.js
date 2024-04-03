document.addEventListener("DOMContentLoaded", () => {
    
    validarSesion();

    
});

const validarSesion = () =>{
    var usuarioSesion = JSON.parse(sessionStorage.getItem('usuarioSesion'));
    if (usuarioSesion != null) {
        console.log("existo");
        const agendarCitas = document.getElementById("ocupoSesion");
        agendarCitas.style.display = "block";
    };
};