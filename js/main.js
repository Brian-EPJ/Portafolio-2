document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formAdopcion");

  // Verifica que esté el formulario antes de aplicar eventos
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombreCompleto").value.trim();
      const rut = document.getElementById("rut").value.trim();
      const edad = parseInt(document.getElementById("edad").value.trim());
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
      const correo = document.getElementById("correo").value.trim();
      const nombreMascota = document.getElementById("nombreMascota").value.trim();
      const motivo = document.getElementById("motivo").value.trim();

      // Validación de campos vacíos
      if (
        !nombre || !rut || isNaN(edad) || !fechaNacimiento ||
        !correo || !nombreMascota || !motivo
      ) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
      }

      // Validación RUT chileno básico
      const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
      if (!rutRegex.test(rut)) {
        alert("El RUT no tiene un formato válido. Ejemplo: 12.345.678-9");
        return;
      }

      // Validación de edad
      if (edad < 18 || edad >= 70) {
        alert("Debes tener más de 18 y menos de 70 años para adoptar una mascota.");
        return;
      }

      // Validación de correo electrónico
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo)) {
        alert("Correo electrónico no válido.");
        return;
      }

      // Éxito
      alert("🎉 ¡Formulario enviado con éxito! Nos contactaremos contigo pronto.");
      this.reset();
    });
  }

  // Resaltar el enlace activo de la navbar
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  const currentUrl = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
