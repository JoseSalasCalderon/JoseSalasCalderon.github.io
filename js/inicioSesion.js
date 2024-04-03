var contrasennasIguales = 0;
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
            validarCorreo(usuario.correo) && validarContrasenna(usuario.contrasenna) && contrasennasIguales === 1;
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
            //Encriptar la contrasenna recibida y compararla con la registrada
            const hashPromesa = encriptarContrasenna(usuario.contrasenna);
            let contrasennaEncriptada = "";
            hashPromesa.then(hash => {
                contrasennaEncriptada=hash;
                if (contrasennaEncriptada === usuariosEncontrados[0].contrasenna) {
                    //localStorage.removeItem('usuariosRegistrados');
                    sessionStorage.setItem('usuarioSesion', JSON.stringify(usuariosEncontrados[0]));
                    alert("Iniciar sesión exitoso");
                    limpiarCamposTexto();
                    //Redirigmos a la página principal
                    window.location.href = '../../index.html';
                }else {
                    alert("Contraseña Incorrecta");
                };
            }).catch(error => {
                console.error("Error al calcular el hash de la contraseña:", error);
            });
        }else{
            alert("El usuario no está registrado");
        };
    };
};

const manejarExitoRegistro = (usuario) => {
    //Obtener los usuarios registrados
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados'));
    //Hacer la promesa del hash
    const hashPromesa = encriptarContrasenna(usuario.contrasenna);
    let contrasennaEncriptada = ""; 
    hashPromesa.then(hash => {
        contrasennaEncriptada=hash;
        usuario.contrasenna = contrasennaEncriptada;
        //Si no existe se crea el localStorage
        if (usuariosRegistrados === null) {
            var usuarios = [];
            usuarios.push(usuario);
            localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
            alert("Registro Exitoso");
        }else{
            var cedulaRepetida = 0;
            usuariosRegistrados.forEach(usuariosRegistrado => {
                if (usuariosRegistrado.cedula === usuario.cedula) {
                    cedulaRepetida = 1;
                };
            });
            //Validamos que si la cédula no existe, se guarde
            if (cedulaRepetida === 0) {
                usuariosRegistrados.push(usuario);
                localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
                alert("Registro Exitoso");
                limpiarCamposTexto();
            }else{
                alert("Cédula ya registrada");
            };
        };
    }).catch(error => {
        console.error("Error al calcular el hash de la contraseña:", error);
    }); 
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
    const avisoCoincidencia = document.getElementById("noConicidenciaContrasennas");

    if (confirmacionContrasenna != null) {
        contrasenna.addEventListener("input", () => {
            const contrasennaIngresada = contrasenna.value.trim();
            const confirmacioncontrasennaIngresada = confirmacionContrasenna.value.trim();
            if (contrasennaIngresada === confirmacioncontrasennaIngresada) {
                avisoCoincidencia.style.display = "none";
                contrasennasIguales = 1;
            }else{
                //Aparece el p de que no coinciden
                avisoCoincidencia.style.display = "block"; 
                contrasennasIguales = 0;
            };
        });
    
        confirmacionContrasenna.addEventListener("input", () => {
            const contrasennaIngresada = contrasenna.value.trim();
            const confirmacioncontrasennaIngresada = confirmacionContrasenna.value.trim();
            if (confirmacioncontrasennaIngresada === contrasennaIngresada) {
                avisoCoincidencia.style.display = "none";
                contrasennasIguales = 1;
            }else{
                //Aparece el p de que no coinciden
                avisoCoincidencia.style.display = "block"; 
                contrasennasIguales = 0;
            };
        });
    };
};

//Formato para crear una promesa y encriptar un valor y retornar una Promesa
const encriptarContrasenna = (contrasenna) => {
    return new Promise((resolve, reject) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(contrasenna);
        
        crypto.subtle.digest('SHA-256', data)
            .then(hashBuffer => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
                resolve(hashHex);
            })
            .catch(error => {
                reject(error);
            });
    });
};