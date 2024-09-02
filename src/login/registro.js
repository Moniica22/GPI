document.addEventListener("DOMContentLoaded", function() {
    var formRegistro = document.getElementById("registro");
    var mensaje = document.getElementById("mensaje");

    formRegistro.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        var nombre = document.getElementById("usuario").value;
        var email = document.getElementById("correo").value;
        var contrasena = document.getElementById("contrasena").value;
        var repetirContrasena = document.getElementById("repetir-contrasena").value;

        // Validar formato de correo electrónico
        var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Validar que las contraseñas coincidan
        var contrasenasCoinciden = contrasena === repetirContrasena;

        // Cargar usuarios desde el almacenamiento local y verificar si el usuario o el correo ya existe
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var usuarioExiste = users.some(function(user) {
            return user.username === nombre || user.email === email;
        });

        if (!emailValido) {
            mensaje.textContent = "Formato incorrecto de correo electrónico.";
        } else if (usuarioExiste) {
            mensaje.textContent = "El usuario o el correo ya existe.";
        } else if (!contrasenasCoinciden) {
            mensaje.textContent = "Las contraseñas no coinciden.";
        } else {
            // Agregar el nuevo usuario al almacenamiento local
            users.push({ username: nombre, email: email, password: contrasena });
            localStorage.setItem('users', JSON.stringify(users));

            mensaje.textContent = "Usuario registrado exitosamente!";
            alert('Pulse en Aceptar para validar su cuenta');
            setTimeout(function() {
                window.location.href = "inicio.html"; // Redirigir a la página de inicio de sesión
            }, 2000); // Retraso para ver el mensaje antes de redirigir
        }
    });
});


