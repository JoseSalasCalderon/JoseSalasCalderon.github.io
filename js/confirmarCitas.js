document.addEventListener("DOMContentLoaded", () => {

    cargarTablaCitas();


});

const cargarTablaCitas = () => {
    var citasAgendadas = JSON.parse(localStorage.getItem('citasAgendadas'));

    //Obtener y cargar citas por confirmar
    if (citasAgendadas != null) {
        const tablaCitas = document.getElementById("cuerpoTabla");
        tablaCitas.innerHTML = "";
        for (let index = 0; index < citasAgendadas.length; index++) {
            if (citasAgendadas[index].estadoCita === "Confirmar") {
                const filaCita = `
                <tr>
                    <td>${citasAgendadas[index].cedulaUsuario}</td>
                    <td>${citasAgendadas[index].fecha}</td>
                    <td><button onclick="confirmarAgendaCita('${citasAgendadas[index].cedulaUsuario}', '${citasAgendadas[index].fecha}')">Confirmar</button></td>
                </tr>`;

                tablaCitas.innerHTML += filaCita;
            };
        };
    };
};

//Actualiza de manera constante la tabla de confirmación y el estado de las citas
const confirmarAgendaCita = (cedula, fecha) => {
    var citasAgendadas = JSON.parse(localStorage.getItem('citasAgendadas'));
    const citasActualizadas = [];
    citasAgendadas.forEach(citaAgendada => {
        if (citaAgendada.cedulaUsuario === cedula && citaAgendada.fecha === fecha) {
            citaAgendada.estadoCita = "Agendada";
            citasActualizadas.push(citaAgendada);
        }else{
            citasActualizadas.push(citaAgendada);
        };
    });
    localStorage.setItem('citasAgendadas', JSON.stringify(citasActualizadas));
    cargarTablaCitas();
};