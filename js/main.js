document.getElementById("formAdopcion").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreCompleto").value.trim();
  const rut = document.getElementById("rut").value.trim();
  const edad = parseInt(document.getElementById("edad").value.trim());
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const correo = document.getElementById("correo").value.trim();
  const nombreMascota = document.getElementById("nombreMascota").value.trim();
  const motivo = document.getElementById("motivo").value.trim();

  if (nombre === "" || rut === "" || isNaN(edad) || fechaNacimiento === "" || correo === "" || nombreMascota === "" || motivo === "") {
    alert("Por favor, complete todos los campos correctamente.");
    return;
  }

  if (!/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/.test(rut)) {
    alert("El RUT no tiene un formato válido. Ej: 12.345.678-9");
    return;
  }

  if (edad < 18 || edad >= 70) {
  alert("Debes tener más de 18 y menos de 70 años para adoptar una mascota.");
  return;
}


  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    alert("Correo electrónico no válido.");
    return;
  }

  alert("Formulario enviado con éxito. Nos contactaremos contigo pronto.");
  this.reset();
});

 document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar-nav .nav-link");
    const currentUrl = window.location.pathname;

    links.forEach(link => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
