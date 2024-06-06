document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("datos-usuario");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let ciudad = document.getElementById("ciudad").value;
        let fechaNacimiento = new Date(document.getElementById("fecha-nacimiento").value);

        let mensajeBienvenida = `Bienvenido, ${nombre} ${apellido} de ${ciudad}.`;
        document.getElementById("mensaje-bienvenida").textContent = mensajeBienvenida;

        let hoy = new Date();
        let diferenciaTiempo = hoy - fechaNacimiento;
        let diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

        let mensajeDiasVividos = `Has vivido ${diasVividos} días desde que naciste.`;
        document.getElementById("mensaje-dias-vividos").textContent = mensajeDiasVividos;
    });
});
