
//funcion para las casilla marcadas de la info del usuario
function toggleCheckbox(checkboxNumber) {
    var checkboxId = "checkbox" + checkboxNumber;
    var checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
   
    // Obtener el elemento hermano adyacente, que es el <label> asociado a la casilla de verificación
    var label = checkbox.nextElementSibling;

    // Verificar si la casilla de verificación está marcada
    if (checkbox.checked) {
        // Si está marcada, agregar el símbolo de tick al contenido del <label>
        label.innerHTML = "&#10004;"; // Código HTML para el símbolo de tick
    } else {
        // Si no está marcada, dejar el contenido del <label> en blanco
        label.innerHTML = "";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos existentes
    if (localStorage.getItem('username')) {
        document.getElementById('username').value = localStorage.getItem('username');
    }
    if (localStorage.getItem('location')) {
        document.getElementById('location').value = localStorage.getItem('location');
    }

    // Manejar el envío del formulario
    document.getElementById('editProfileForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Guardar los datos introducidos por el usuario
        localStorage.setItem('username', document.getElementById('username').value);
        localStorage.setItem('location', document.getElementById('location').value);

        // Redirigir de vuelta a la página de perfil
        window.location.href = 'src/home/perfil.html';
    });
});




