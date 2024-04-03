document.addEventListener("DOMContentLoaded", () => {
    
    validarIgualdadContrasennas();

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const elementos = document.getElementsByClassName("enviarFormulario");
        const tipoFormulario = elementos[0].value.trim();        

        if (tipoFormulario === "Ingresar") {
            const { cedula, contrasenna } = obtenerDatosFormularioInicioSesion();
            const esValido = validarContrasenna(contrasenna) && validarCedula(cedula);
            esValido ? manejarExito() : manejarError();
        }else if (tipoFormulario === "Registrar") {
            const { cedula, nombreCompleto, apellido, telefono, correo, contrasenna  } = obtenerDatosFormularioRegistro();
            const esValido = validarCedula(cedula) && validarNombre(nombreCompleto) && validarApellidos(apellido) && validarTelefono(telefono) &&
            validarCorreo(correo) && validarContrasenna(contrasenna);
            esValido ? manejarExito() : manejarError();
        }
        
    });
});

const obtenerDatosFormularioInicioSesion = () => {
    const cedula = document.getElementById("cedula").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return { cedula, contrasenna };
};

const obtenerDatosFormularioRegistro = () => {
    const cedula = document.getElementById("cedula").value.trim();
    const nombreCompleto = document.getElementById("nombreCompleto").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return { cedula, nombreCompleto, apellido, telefono, correo, contrasenna };
};

/*Validaciones*/
const validarCedula = (cedula) => /^\d{2}-\d{4}-\d{4}$/.test(cedula);

const validarContrasenna = (contrasenna) => /^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,11}$/.test(contrasenna);

const validarNombre = (nombreCompleto) => /^(?!.*\s)(?!.*\d)[a-zA-Z]{2,20}$/.test(nombreCompleto);

const validarApellidos = (apellidos) => /^(?!.*\s)(?!.*\d)[a-zA-Z]{2,30}$/.test(apellidos);

const validarTelefono = (telefono) => /^\d{4}-\d{4}$/.test(telefono);

const validarCorreo = (correo) => /^[^\s@]{2,}@[^.\s@]{4,}\.[^\s@]{3}$/.test(correo);

const manejarExito = () => {
    alert("Iniciar sesión exitoso");
    limpiarCamposTexto();
};

const manejarError = () => {
    alert("Los datos ingresados no son válidos");
};

const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password'], #formulario input[type='text']");
    campos.forEach((campo) => campo.value = "");
};

const validarIgualdadContrasennas = () => {
    const contrasenna = document.getElementById("contrasenna");
    const confirmacionContrasenna = document.getElementById("confirmarContrasenna");
    const avisoCoincidencia = document.getElementById("noConicidenciaCOntrasennas");

    if (confirmacionContrasenna != null) {
        contrasenna.addEventListener("input", () => {
            const contrasennaIngresada = contrasenna.value.trim();
            const confirmacioncontrasennaIngresada = confirmacionContrasenna.value.trim();
            if (contrasennaIngresada === confirmacioncontrasennaIngresada) {
                avisoCoincidencia.style.display = "none";
            }else{
                //Aparece el p de que no coinciden
                avisoCoincidencia.style.display = "block"; 
            };
        });
    
        confirmacionContrasenna.addEventListener("input", () => {
            const contrasennaIngresada = contrasenna.value.trim();
            const confirmacioncontrasennaIngresada = confirmacionContrasenna.value.trim();
            if (confirmacioncontrasennaIngresada === contrasennaIngresada) {
                avisoCoincidencia.style.display = "none";
            }else{
                //Aparece el p de que no coinciden
                avisoCoincidencia.style.display = "block"; 
            };
        });
    };
};
