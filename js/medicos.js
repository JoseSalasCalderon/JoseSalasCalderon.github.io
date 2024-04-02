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
            "Excelente atención, muy amable y profesional.",
            "Gran médico, lo recomendaría a cualquiera."
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
            "Muy buen pediatra, siempre atento y paciente con los niños.",
            "Excelente trato, mis hijos se sienten cómodos con él."
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
            "Muy profesional y amable, me hizo sentir cómoda durante la consulta.",
            "La mejor ginecóloga que he tenido, definitivamente regresaré."
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
            "Muy bien informado y profesional. Me explicó claramente mi condición.",
            "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos."
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
            "Muy bien informado y profesional. Me explicó claramente mi condición.",
            "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos."
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
            "Muy bien informado y profesional. Me explicó claramente mi condición.",
            "Excelente atención, lo recomendaría a cualquier persona con problemas cardíacos."
        ],
        biografia: "Sofía es un cardiólogo altamente experimentado y capacitado que se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Con una sólida formación médica y años de experiencia práctica, el Dr. Fernández se compromete a brindar una atención integral y personalizada a sus pacientes."
    },
    {
        id: "CD010",
        nombre: "Gabriel",
        apellido: "González",
        especialidad: "Dermatología",
        ubicacion: "Consultorio Dermatológico, Clínica Árbol de Seda",
        disponibilidad: "Lunes y jueves de 9:00 a.m. a 3:00 p.m.",
        contacto: "+1234567890",
        email: "dr.gabrielgonzalez@arboldeseda.com",
        reseñas: [
            "Gran dermatólogo, muy eficiente en su trabajo.",
            "Me ayudó mucho con mi problema de piel, lo recomiendo totalmente."
        ],
        biografia: "Gabriel es un dermatólogo con experiencia en el tratamiento de una amplia gama de enfermedades de la piel. Se especializa en ofrecer soluciones efectivas y personalizadas para las necesidades dermatológicas de sus pacientes."
    },
    {
        id: "CD011",
        nombre: "Carolina",
        apellido: "López",
        especialidad: "Endocrinología",
        ubicacion: "Consultorio de Endocrinología, Clínica Árbol de Seda",
        disponibilidad: "Martes y viernes de 10:00 a.m. a 5:00 p.m.",
        contacto: "+1234567890",
        email: "dra.carolinalopez@arboldeseda.com",
        reseñas: [
            "Excelente endocrinóloga, muy conocedora de su campo.",
            "Me ayudó a controlar mi problema hormonal, estoy muy agradecida."
        ],
        biografia: "Carolina es una endocrinóloga comprometida con proporcionar un cuidado integral y especializado a sus pacientes. Con una sólida formación en endocrinología, se esfuerza por ofrecer tratamientos efectivos y personalizados para una variedad de condiciones hormonales."
    },
    {
        id: "CD012",
        nombre: "Pedro",
        apellido: "Martínez",
        especialidad: "Neurología",
        ubicacion: "Consultorio de Neurología, Clínica Árbol de Seda",
        disponibilidad: "Miércoles de 8:00 a.m. a 12:00 p.m., viernes de 1:00 p.m. a 5:00 p.m.",
        contacto: "+1234567890",
        email: "dr.pedromartinez@arboldeseda.com",
        reseñas: [
            "Gran neurocirujano, muy profesional y compasivo.",
            "Me ayudó a entender mi condición neurológica y me brindó un excelente tratamiento."
        ],
        biografia: "Pedro es un neurocirujano altamente capacitado y experimentado en el diagnóstico y tratamiento de trastornos neurológicos. Su enfoque compasivo y su dedicación a sus pacientes lo convierten en una opción ideal para aquellos que buscan atención neurológica de calidad."
    },
    {
        id: "CD013",
        nombre: "María",
        apellido: "Sánchez",
        especialidad: "Oftalmología",
        ubicacion: "Consultorio de Oftalmología, Clínica Árbol de Seda",
        disponibilidad: "Lunes y jueves de 10:00 a.m. a 4:00 p.m., sábado de 9:00 a.m. a 1:00 p.m.",
        contacto: "+1234567890",
        email: "dra.mariasanchez@arboldeseda.com",
        reseñas: [
            "Excelente oftalmóloga, me ayudó mucho con mi problema de visión.",
            "Muy profesional y amable, la recomiendo totalmente."
        ],
        biografia: "María es una oftalmóloga con experiencia en el diagnóstico y tratamiento de una variedad de problemas oculares. Con un enfoque en la atención compasiva y personalizada, se esfuerza por brindar soluciones efectivas para mejorar la salud ocular de sus pacientes."
    },
    {
        id: "CD014",
        nombre: "David",
        apellido: "González",
        especialidad: "Ortopedia",
        ubicacion: "Consultorio de Ortopedia, Clínica Árbol de Seda",
        disponibilidad: "Martes y viernes de 9:00 a.m. a 3:00 p.m.",
        contacto: "+1234567890",
        email: "dr.davidgonzalez@arboldeseda.com",
        reseñas: [
            "Gran ortopedista, me ayudó a recuperarme rápidamente de mi lesión.",
            "Muy profesional y atento, lo recomendaría sin dudarlo."
        ],
        biografia: "David es un ortopedista con experiencia en el tratamiento de una amplia gama de lesiones y trastornos musculoesqueléticos. Su enfoque centrado en el paciente y su habilidad para proporcionar soluciones efectivas hacen de él una opción confiable para aquellos que buscan atención ortopédica de calidad."
    }
];


const medicosPorPagina = 4;
let paginaActual = 1;

document.addEventListener("DOMContentLoaded", () => {
    
    //Cargar tabla primera vez (ordenar)
    const medicosOrdenadosNombre = ordenarMedicos(medicos, "nombre");
    cargarMedicos(medicosOrdenadosNombre);
    actualizarPaginacion(medicosOrdenadosNombre, medicosOrdenadosNombre.length, "nombre");
    actualizarAutocompletar(medicosOrdenadosNombre, "nombre");

    //Cada vez que se escriba algo en el espacio de búsqueda se llama a este método
    const busquedaInput = document.getElementById("busqueda");
    busquedaInput.addEventListener("input", () => {
        const valorBusqueda = busquedaInput.value.trim();
        if (valorBusqueda === "") {
            const filtros = document.getElementById("filtro");
            const flitroSeleccionado = filtros.value;
            const medicosOrdenados = ordenarMedicos(medicos, flitroSeleccionado);
            paginaActual = 1;
            cargarMedicos(medicosOrdenados);
            actualizarPaginacion(medicosOrdenados, medicosOrdenados.length, flitroSeleccionado);
            actualizarAutocompletar(medicosOrdenados, flitroSeleccionado);
        }else {
            const filtros = document.getElementById("filtro");
            const flitroSeleccionado = filtros.value;
            //Buscar médicos por filtro
            let medicosFiltrados = [];
            for (var id in medicos) {
                var medico = medicos[id];
                if (medico[flitroSeleccionado].toLowerCase().includes(valorBusqueda.toLowerCase())) {
                    medicosFiltrados.push(medico);
                };
            };
            //Se ordenan los médicos
            const medicosOrdenados = ordenarMedicos(medicosFiltrados, flitroSeleccionado);
            if (medicosOrdenados.length>0) {
                paginaActual = 1;
                cargarMedicos(medicosOrdenados);
                actualizarPaginacion(medicosOrdenados, medicosOrdenados.length, flitroSeleccionado);
                actualizarAutocompletar(medicosOrdenados, flitroSeleccionado);
            };
        };
    });

    //Esto es para que se haga una búsqueda cuando se cambia el combo
    const filtros= document.getElementById("filtro");
    filtros.addEventListener("change", () => {
        const flitroSeleccionado = filtros.value;
        const valorBusqueda = busquedaInput.value.trim();

        // Verificar si hay un valor de búsqueda para recargar los médicos según el nuevo filtro
        if (valorBusqueda === "") {
            const medicosOrdenados = ordenarMedicos(medicos, flitroSeleccionado);
            paginaActual = 1;
            cargarMedicos(medicosOrdenados);
            actualizarPaginacion(medicosOrdenados, medicosOrdenados.length, flitroSeleccionado);
            actualizarAutocompletar(medicosOrdenados, flitroSeleccionado);
        } else {
            //Buscar médicos por filtro
            let medicosFiltrados = [];
            for (var id in medicos) {
                var medico = medicos[id];
                if (medico[flitroSeleccionado].toLowerCase().includes(valorBusqueda.toLowerCase())) {
                    medicosFiltrados.push(medico);
                };
            };
            //Se ordenan los médicos
            const medicosOrdenados = ordenarMedicos(medicosFiltrados, flitroSeleccionado);
            paginaActual = 1;
            cargarMedicos(medicosOrdenados);
            actualizarPaginacion(medicosOrdenados, medicosOrdenados.length, flitroSeleccionado);
            actualizarAutocompletar(medicosOrdenados, flitroSeleccionado);
        };
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
        //Es necesario indicar que vayan comillas simples para que no se altere la estructura html recibida
        //Se utiliza map para crar un arreglo
        const reseñasArray = medicos[index].reseñas.map(reseña => `'${reseña}'`);
        
        //Crear el botón con las reseñas formateadas como un arreglo
        const filaMedico = `
        <tr>
            <td>${medicos[index].nombre}</td>
            <td>${medicos[index].especialidad}</td>
            <td>${medicos[index].ubicacion}</td>
            <td>${medicos[index].id}</td>
            <td><button onclick="mostrarInformacionMedico('${medicos[index].id}', '${medicos[index].nombre}', '${medicos[index].apellido}', '${medicos[index].especialidad}', '${medicos[index].ubicacion}', '${medicos[index].disponibilidad}', '${medicos[index].contacto}', '${medicos[index].email}', [${reseñasArray}], '${medicos[index].biografia}')">Ver</button></td>
        </tr>`;

        cuerpoTabla.innerHTML += filaMedico;
    };
};
//Es necesario que se haga una actualización de la paginación con el filtro
const actualizarPaginacion = (medicos, totalMedicos, flitroSeleccionado) => {
    //Cantidad de páginas redondeado hacia arriba
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
            actualizarPaginacion(medicos, totalMedicos, flitroSeleccionado);
            actualizarAutocompletar(medicos, flitroSeleccionado);
        });
        paginacion.appendChild(botonPagina);
    }
};

const actualizarAutocompletar = (medicos, criterioFiltro) => {
    const opcionesAutocompletar = document.getElementById("autocompletar");
    opcionesAutocompletar.innerHTML = "";
    const criterioSinRepetir = new Set();

    const inicio = (paginaActual - 1) * medicosPorPagina;
    const fin = paginaActual * medicosPorPagina;

    for (let index = inicio; index < fin && index < medicos.length; index++) {
        const medico = medicos[index];
        criterioSinRepetir.add(medico[criterioFiltro]);   
    };

    //Se crea un arreglo que provenga del Set (necesario para usar ciclos)
    const arrregloCriterios = Array.from(criterioSinRepetir);
    arrregloCriterios.forEach(criterio => {
        //Crea un autocompletar dinámico
        const opcionAutocompletar = `
        <option value="${criterio}">
            ${criterio}
        </option>
        `;

        opcionesAutocompletar.innerHTML += opcionAutocompletar;
    });
};

const ordenarMedicos = (medicos, criterioFiltro) => {
    const medicosOrdenados = medicos.slice();

    //Se compara y ordena mediante el filtro seleccionado.
    medicosOrdenados.sort((a, b) => {
        if (a[criterioFiltro] < b[criterioFiltro]) return -1;
        if (a[criterioFiltro] > b[criterioFiltro]) return 1;
        return 0;
    });

    return medicosOrdenados;
};

const mostrarInformacionMedico = (id, nombre, apellido, especialidad, ubicacion, disponibilidad, contacto, email, reseñas, biografia) => {
    const informacionMedico = document.getElementById("informacionMedico");
    //Se leen las reseñas
    let reseñasArregladas = "<ul>";
    reseñas.forEach(reseña => {
        reseñasArregladas += `<li>${reseña}</li>`;
    });
    reseñasArregladas += "</ul>";
    //Se crea toda la inforamcion del medico
    const datosCompletosMedico = `
        <h3>Identificación:</h3>
        <p>${id}</p>
        <h3>Nombre:</h3>
        <p>${nombre}</p>
        <h3>Apellido:</h3>
        <p>${apellido}</p>
        <h3>Especialidad:</h3>
        <p>${especialidad}</p>
        <h3>Ubicación:</h3>
        <p>${ubicacion}</p>
        <h3>Disponibilidad:</h3>
        <p>${disponibilidad}</p>
        <h3>Contacto:</h3>
        <p>${contacto}</p>
        <h3>Email:</h3>
        <p>${email}</p>
        <h3>Biografía:</h3>
        <p>${biografia}</p>
        <h3>Reseñas:</h3>
        ${reseñasArregladas}
    `;

    //Se agrega el html
    informacionMedico.innerHTML = datosCompletosMedico;
    abrirModalMedicos();
};

const abrirModalMedicos = () => {
    const modal = document.getElementById("modalInformacionMedico");
    modal.style.display = "flex";
};

const cerrarModalMedicos = () => {
    const modal = document.getElementById("modalInformacionMedico");
    modal.style.display = "none";
};