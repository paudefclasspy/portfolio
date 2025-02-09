// Funcionalidad de la ventana modal
const modal = document.getElementById("jobModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementsByClassName("close")[0];

// Datos de los trabajos
const jobs = {
    "Software Engineer - Telefónica": "Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como JavaScript, React y Node.js. Optimización de bases de datos SQL para mejorar el rendimiento de las consultas. Colaboración en equipos ágiles para la entrega de proyectos en tiempo y forma.",
    "Software Engineer Intern - Banco Santander": "Desarrollo de scripts en Python para la automatización de procesos financieros. Análisis y visualización de datos utilizando herramientas como Pandas y Tableau. Soporte en la migración de sistemas legacy a soluciones cloud.",
    "Software Engineer Intern - Moodle": "Contribución al desarrollo de plugins para la plataforma Moodle. Pruebas y depuración de código en PHP y JavaScript. Documentación técnica para desarrolladores."
};

// Agregar evento de clic a cada trabajo
document.querySelectorAll('.job').forEach(job => {
    job.addEventListener('click', function() {
        const title = this.querySelector('h3').innerText;
        modalTitle.innerText = title;
        modalDescription.innerText = jobs[title];
        modal.style.display = "block"; // Muestra la modal
    });
});

// Cerrar la modal al hacer clic en el botón de cerrar
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar la modal al hacer clic fuera de la modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}