document.addEventListener("DOMContentLoaded", function() {
    var botonIngresar = document.getElementById("boton-ingresar");
    var botonReintentar = document.getElementById("boton-reintentar");
    var mensaje = document.getElementById("mensaje");

    botonIngresar.addEventListener("click", function() {
        var usuario = document.getElementById("usuario").value;
        var contrasena = document.getElementById("contrasena").value;

        // Cargar usuarios desde el almacenamiento local
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var credencialesValidas = users.some(function(user) {
            return user.username === usuario && user.password === contrasena;
        });

        // Mostrar mensaje de resultado
        if (credencialesValidas) {
            // Redirigir a la página deseada
            window.location.href = "src/home/top.html"; // Asegúrate de cambiar esta URL a la que necesites
        } else {
            // Ocultar el botón de ingresar y mostrar el de reintentar
            botonIngresar.style.display = "none";
            botonReintentar.style.display = "inline-block";
            mensaje.textContent = "Nombre de usuario o contraseña incorrectos.";
        }
    });

    botonReintentar.addEventListener("click", function() {
        // Vuelve a mostrar el botón de ingresar y oculta el de reintentar
        botonIngresar.style.display = "inline-block";
        botonReintentar.style.display = "none";
        mensaje.textContent = "";
    });
});


