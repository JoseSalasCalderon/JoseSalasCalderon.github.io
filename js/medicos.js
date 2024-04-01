const medicos = [
    {
        id: "MG001",
        nombre: "Ana",
        apellido: "Gómez",
        especialidad: "Medicina Familiar",
        ubicacion: "Consultorio Principal, Clínica Árbol de Seda",
        disponibilidad: "De lunes a viernes, de 9:00 a.m. a 5:00 p.m.",
        contacto: "+1234567890",
        email: "dr.anagomez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario1", comentario: "Excelente atención, muy amable y profesional.", calificacion: 5 },
            { usuario: "Usuario2", comentario: "Gran médico, lo recomendaría a cualquiera.", calificacion: 4 }
        ],
        biografia: "Ana ha estado practicando medicina familiar durante más de 10 años. Se graduó de la Universidad Nacional con honores y tiene una pasión por brindar atención médica compasiva y personalizada a sus pacientes."
    },
    {
        id: "PD002",
        nombre: "Javier",
        apellido: "Martínez",
        especialidad: "Pediatría",
        ubicacion: "Centro de Salud Infantil, Clínica Árbol de Seda",
        disponibilidad: "Martes y jueves de 8:00 a.m. a 3:00 p.m., sábados de 9:00 a.m. a 12:00 p.m.",
        contacto: "+1234567890",
        email: "dr.javiermartinez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario3", comentario: "Muy buen pediatra, siempre atento y paciente con los niños.", calificacion: 5 },
            { usuario: "Usuario4", comentario: "Excelente trato, mis hijos se sienten cómodos con él.", calificacion: 4.5 }
        ],
        biografia: "Javier es un pediatra experimentado con una dedicación especial a la atención infantil. Se graduó con honores de la Escuela de Medicina de su país y ha estado practicando pediatría durante más de 15 años."
    },
    {
        id: "GO003",
        nombre: "María",
        apellido: "Rodríguez",
        especialidad: "Ginecología",
        ubicacion: "Clínica de Mujeres, Clínica Árbol de Seda",
        disponibilidad: "Lunes, miércoles y viernes de 10:00 a.m. a 6:00 p.m.",
        contacto: "+1234567890",
        email: "dra.mariarodriguez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario5", comentario: "Muy profesional y amable, me hizo sentir cómoda durante la consulta.", calificacion: 4.5 },
            { usuario: "Usuario6", comentario: "La mejor ginecóloga que he tenido, definitivamente regresaré.", calificacion: 5 }
        ],
        biografia: "María es una ginecóloga y obstetra altamente calificada que se especializa en el cuidado de la salud de las mujeres. Con una vasta experiencia en su campo, la Dra. Rodríguez se esfuerza por proporcionar un cuidado compasivo y de alta calidad a todas sus pacientes."
    },
    {
        id: "CD004",
        nombre: "Carlos",
        apellido: "Fernández",
        especialidad: "Cardiología",
        ubicacion: "Hospital Cardiológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes a viernes de 8:00 a.m. a 4:00 p.m.",
        contacto: "+1234567890",
        email: "dr.carlosfernandez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario7", comentario: "Muy bien informado y profesional. Me explicó claramente mi condición.", calificacion: 4 },
            { usuario: "Usuario8", comentario: "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos.", calificacion: 5 }
        ],
        biografia: "Carlos es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    },
    {
        id: "CD008",
        nombre: "Stevan",
        apellido: "Fernández",
        especialidad: "Cardiología",
        ubicacion: "Hospital Cardiológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes a viernes de 8:00 a.m. a 4:00 p.m.",
        contacto: "+1234567890",
        email: "dr.carlosfernandez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario7", comentario: "Muy bien informado y profesional. Me explicó claramente mi condición.", calificacion: 4 },
            { usuario: "Usuario8", comentario: "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos.", calificacion: 5 }
        ],
        biografia: "Stevan es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    },
    {
        id: "CD009",
        nombre: "Sofía",
        apellido: "Fernández",
        especialidad: "Cardiología",
        ubicacion: "Hospital Cardiológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes a viernes de 8:00 a.m. a 4:00 p.m.",
        contacto: "+1234567890",
        email: "dr.carlosfernandez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario7", comentario: "Muy bien informado y profesional. Me explicó claramente mi condición.", calificacion: 4 },
            { usuario: "Usuario8", comentario: "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos.", calificacion: 5 }
        ],
        biografia: "Sofía es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    },
    {
        id: "CD009",
        nombre: "Sofía2",
        apellido: "Fernández",
        especialidad: "Cardiología",
        ubicacion: "Hospital Cardiológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes a viernes de 8:00 a.m. a 4:00 p.m.",
        contacto: "+1234567890",
        email: "dr.carlosfernandez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario7", comentario: "Muy bien informado y profesional. Me explicó claramente mi condición.", calificacion: 4 },
            { usuario: "Usuario8", comentario: "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos.", calificacion: 5 }
        ],
        biografia: "Sofía es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    },
    {
        id: "CD009",
        nombre: "Sofía3",
        apellido: "Fernández",
        especialidad: "Cardiología",
        ubicacion: "Hospital Cardiológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes a viernes de 8:00 a.m. a 4:00 p.m.",
        contacto: "+1234567890",
        email: "dr.carlosfernandez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario7", comentario: "Muy bien informado y profesional. Me explicó claramente mi condición.", calificacion: 4 },
            { usuario: "Usuario8", comentario: "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos.", calificacion: 5 }
        ],
        biografia: "Sofía es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    },
    {
        id: "CD009",
        nombre: "Sofía4",
        apellido: "Fernández",
        especialidad: "Cardiología",
        ubicacion: "Hospital Cardiológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes a viernes de 8:00 a.m. a 4:00 p.m.",
        contacto: "+1234567890",
        email: "dr.carlosfernandez@arboldeseda.com",
        reseñas: [
            { usuario: "Usuario7", comentario: "Muy bien informado y profesional. Me explicó claramente mi condición.", calificacion: 4 },
            { usuario: "Usuario8", comentario: "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos.", calificacion: 5 }
        ],
        biografia: "Sofía es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    }
];

const medicosPorPagina = 4;
let paginaActual = 1;

document.addEventListener("DOMContentLoaded", () => {
    
    //Cargar tabla primera vez (ordenar)
    cargarMedicos(medicos);
    actualizarPaginacion(medicos, medicos.length);


    const busquedaInput = document.getElementById("busqueda");
    busquedaInput.addEventListener("input", () => {
        const valorBusqueda = busquedaInput.value.trim();
        if (valorBusqueda === "") {
            paginaActual = 1;
            cargarMedicos(medicos);
            actualizarPaginacion(medicos, medicos.length);
        }else{
            const filtros = document.getElementById("filtro");
            const flitroSeleccionado =filtros.value;
            //Buscar médicos por filtro
            let medicosFiltrados = [];
            for (var id in medicos) {
                var medico = medicos[id];
                if (medico[flitroSeleccionado].toLowerCase().includes(valorBusqueda.toLowerCase())) {
                    medicosFiltrados.push(medico);
                }
            }
            //ORDENARLO ACA
            if (medicosFiltrados.length>0) {
                paginaActual = 1;
                cargarMedicos(medicosFiltrados);
                actualizarPaginacion(medicosFiltrados, medicosFiltrados.length);
            }
        }
    });

    //Formulario Buscar
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const elementos = document.getElementsByClassName("enviarFormulario");
        const tipoFormulario = elementos[0].value.trim();        
        //Verificar que es el de Buscar
        if (tipoFormulario === "Buscar") {
            
        }
        
    });
});

const cargarMedicos = (medicos) => {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    //Definir parametros paginacion
    //Inicio marca la posicion de medico que se debe tomar por página, en la uno se empieza en el 0, en la segunda en el 4..
    //Fin marca la limitación de la paginación en la cadena.
    const inicio = (paginaActual - 1) * medicosPorPagina;
    const fin = paginaActual * medicosPorPagina;
    //Validar que no se exceda de los valores de los médicos.
    for (let index = inicio; index < fin && index < medicos.length; index++) {
        const filaMedico = `
        <tr>
            <td>${medicos[index].nombre}</td>
            <td>${medicos[index].especialidad}</td>
            <td>${medicos[index].ubicacion}</td>
            <td>${medicos[index].id}</td>
            <td><button onclick="mostrarInformacionMedico('${medicos[index].nombre}', '${medicos[index].especialidad}', '${medicos[index].ubicacion}', '${medicos[index].id}')">Ver</button></td>
        </tr>`;

        cuerpoTabla.innerHTML += filaMedico;
    };
};

const actualizarPaginacion = (medicos, totalMedicos) => {
    //Cantida de páginas redondeado hacia arriba
    const totalPaginas = Math.ceil(totalMedicos / medicosPorPagina);
    const paginacion = document.getElementById("paginacion");
    paginacion.innerHTML = "";
    //Crear botones por página
    for (let i = 1; i <= totalPaginas; i++) {
        const botonPagina = document.createElement("button");
        botonPagina.textContent = i;
        botonPagina.addEventListener("click", () => {
            paginaActual = i;
            cargarMedicos(medicos);
            actualizarPaginacion(medicos, totalMedicos);
        });
        paginacion.appendChild(botonPagina);
    }
};


