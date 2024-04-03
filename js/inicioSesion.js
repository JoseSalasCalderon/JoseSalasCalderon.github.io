document.addEventListener("DOMContentLoaded", () => {
    
    validarIgualdadContrasennas();

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const elementos = document.getElementsByClassName("enviarFormulario");
        const tipoFormulario = elementos[0].value.trim();        

        if (tipoFormulario === "Ingresar") {
            const usuario = obtenerDatosFormularioInicioSesion();
            const esValido = validarContrasenna(usuario.contrasenna) && validarCedula(usuario.cedula);
            esValido ? manejarExitoInicioSesion(usuario) : manejarError();
        }else if (tipoFormulario === "Registrar") {
            const usuario = obtenerDatosFormularioRegistro();
            const esValido = validarCedula(usuario.cedula) && validarNombre(usuario.nombreCompleto) && validarApellidos(usuario.apellido) && validarTelefono(usuario.telefono) &&
            validarCorreo(usuario.correo) && validarContrasenna(usuario.contrasenna);
            esValido ? manejarExitoRegistro(usuario) : manejarError();
        };
        
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

const manejarExitoInicioSesion = (usuario) => {
    //Obtener los usuarios registrados
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados'));
    if (usuariosRegistrados === null) {
        alert("El usuario no existe");
    }else{
        var usuariosEncontrados = [];
        usuariosRegistrados.forEach(usuariosRegistrado => {
            if (usuario.cedula === usuariosRegistrado.cedula) {
                usuariosEncontrados.push(usuariosRegistrado);
            };
        });
        //Valida la si encontró al ususario registrado
        if (usuariosEncontrados.length === 1) {
            if (usuario.contrasenna === usuariosEncontrados[0].contrasenna) {
                //localStorage.removeItem('usuariosRegistrados');
                sessionStorage.setItem('usuarioSesion', JSON.stringify(usuariosEncontrados[0]));
                alert("Iniciar sesión exitoso");
                limpiarCamposTexto();
            }else {
                alert("Contraseña Incorrecta");
            };
        }else{
            alert("El usuario no está registrado");
        };
    };
};

const manejarExitoRegistro = (usuario) => {
    //Obtener los usuarios registrados
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados'));
    //Si no existe se crea el localStorage
    if (usuariosRegistrados === null) {
        var usuarios = [];
        usuarios.push(usuario);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
        console.log("primera vez: "+usuarios.length);
        console.log("No existo");
    }else{
        var cedulaRepetida = 0;
        usuariosRegistrados.forEach(usuariosRegistrado => {
            if (usuariosRegistrado.cedula === usuario.cedula) {
                console.log("c1"+usuariosRegistrado.cedula);
                console.log("c2"+usuario.cedula);
                cedulaRepetida = 1;
            };
        });
        //Validamos que si la cédula no existe, se guarde
        if (cedulaRepetida === 0) {
            usuariosRegistrados.push(usuario);
            localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
            console.log("Siguientes: "+usuariosRegistrados.length);
            alert("Registro Exitoso");
            limpiarCamposTexto();
        }else{
            alert("Cédula ya registrada");
        };
    };
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
