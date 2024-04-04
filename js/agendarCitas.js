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

document.addEventListener("DOMContentLoaded", () => {
    
    //Primera vez (ordenar)
    const medicosOrdenadosNombre = ordenarMedicos(medicos, "nombre");
    const especialidades = obtenerEspecialidades(medicosOrdenadosNombre);
    cargarEspecialidades(especialidades);
    cargarMedicos(medicosOrdenadosNombre, especialidades[0]);

    //Esto es para que se haga una búsqueda cuando se cambia el combo
    const filtroEspecialidades= document.getElementById("filtroEspecialidades");
    filtroEspecialidades.addEventListener("change", () => {
        const especialidadSeleccionada = filtroEspecialidades.value;
        cargarMedicos(medicosOrdenadosNombre, especialidadSeleccionada);
    });

    //Obtener los botones y sus acciones resctivas para el formulario
    const botones = document.querySelectorAll(".enviarFormulario");
    botones.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            //Se obtiene el valor del botón presionado
            const tipoFormulario = boton.value.trim();
            const cita = obtenerDatosCita();
            if (tipoFormulario === "Agendar") {
                if (cita.fecha === "" || cita.hora === "") {
                    alert("Debe completar los campos.");
                }else {
                    //Agregar la cita
                    guardarCita(cita);
                }; 
            } else {
                //ELIMINAR
                cancelarCita(cita);
            };
        });
    });
});

const cargarMedicos = (medicos, especialidad) => {
    const comboMedicos = document.getElementById("filtroMedicos");
    comboMedicos.innerHTML = "";
    
    //Validar que no se exceda de los valores de los médicos.
    for (let index = 0; index < medicos.length; index++) {
        //Crear el botón con las reseñas formateadas como un arreglo
        if (medicos[index].especialidad === especialidad) {
            const filaMedico = `
            <option value="${medicos[index].id}">
            ${medicos[index].id} - ${medicos[index].nombre} ${medicos[index].apellido}
            </option>
            `;
            comboMedicos.innerHTML += filaMedico;
        };
    };
};

const cargarEspecialidades = (especialidades) => {
    const comboEspecialidades = document.getElementById("filtroEspecialidades");
    comboEspecialidades.innerHTML = "";
    
    //Validar que no se exceda de los valores de los médicos.
    for (let index = 0; index < especialidades.length; index++) {
        //Crear el botón con las reseñas formateadas como un arreglo
        const filaMedico = `
        <option value="${especialidades[index]}">
            ${especialidades[index]}
        </option>
        `;
        comboEspecialidades.innerHTML += filaMedico;
    };
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

const obtenerEspecialidades = (medicos) => {
    const especialidades = new Set();
    for (let index = 0; index < medicos.length; index++) {
        especialidades.add(medicos[index].especialidad);
    };
    const especialidadesSinRepetir = Array.from(especialidades);
    return especialidadesSinRepetir;
};

const obtenerDatosCita = () => {
    const fecha = document.getElementById("fecha").value.trim();
    const hora = document.getElementById("hora").value.trim();
    const medicosCargados = document.getElementById("filtroMedicos");
    const especialidadesCargadas = document.getElementById("filtroEspecialidades");
    const medicoSeleccionado = medicosCargados.value;
    const especialidadSeleccionada = especialidadesCargadas.value;

    const usuarioSesion = JSON.parse(sessionStorage.getItem('usuarioSesion'));
    const cedulaUsuario = usuarioSesion.cedula;
    return {fecha, hora, medicoSeleccionado, especialidadSeleccionada, cedulaUsuario};
};

const guardarCita = (cita) => {
    var citasAgendadas = JSON.parse(localStorage.getItem('citasAgendadas'));

    if (citasAgendadas === null) {
        var citas = [];
        citas.push(cita);
        localStorage.setItem('citasAgendadas', JSON.stringify(citas));
        alert("Cita Agregada");
    }else {
        var citaRepetida = 0;
        citasAgendadas.forEach(citaAgendada => {
            if (citaAgendada.fecha === cita.fecha && citaAgendada.hora === cita.hora && citaAgendada.medicoSeleccionado === cita.medicoSeleccionado &&
                 citaAgendada.especialidadSeleccionada && citaAgendada.cedulaUsuario === cita.cedulaUsuario) {
                citaRepetida = 1;
            }; 
        });
        //Validamos que si la cita no existe, se guarde
        if (citaRepetida === 0) {
            citasAgendadas.push(cita);
            localStorage.setItem('citasAgendadas', JSON.stringify(citasAgendadas));
            alert("Cita Agregada");
        }else {
            alert("Cita ya existente");
        };
    };
};

const cancelarCita = (cita) => {
    var citasAgendadas = JSON.parse(localStorage.getItem('citasAgendadas'));

    if (citasAgendadas === null) {
        alert("No hay citas registradas");
    }else {
        const citasSinRepetir = [];
        var citaRepetida = 0;
        citasAgendadas.forEach(citaAgendada => {
            if (citaAgendada.fecha === cita.fecha && citaAgendada.hora === cita.hora && citaAgendada.medicoSeleccionado === cita.medicoSeleccionado &&
                citaAgendada.especialidadSeleccionada && citaAgendada.cedulaUsuario === cita.cedulaUsuario) {
                    citaRepetida = 1;
            }else{
                citasSinRepetir.push(citaAgendada);
            }; 
        });
        //Se cancela la cita
        localStorage.setItem('citasAgendadas', JSON.stringify(citasSinRepetir));
        alert("Cita Cancelada");
    };
};