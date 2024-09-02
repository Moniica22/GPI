document.addEventListener('DOMContentLoaded', function() {
    // Obtener el índice de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    
    // Cargar datos existentes
    if (index !== null) {
        const pets = JSON.parse(localStorage.getItem('pets')) || [];
        if (index >= 0 && index < pets.length) {
            const pet = pets[index];
            document.getElementById('petName').value = pet.name;
            document.getElementById('petBreed').value = pet.breed;
            document.getElementById('age').value = pet.age;
            document.getElementById('description').value = pet.description;
            document.getElementById('imagePreview').src = pet.image; // Asegúrate de tener un elemento img con id='imagePreview' para mostrar la imagen
        }
    }
});

// Función para actualizar la vista previa de la imagen cuando el usuario selecciona un nuevo archivo
function updateImagePreview() {
    const fileInput = document.getElementById('petImage');
    const preview = document.getElementById('imagePreview');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Escuchar el evento submit del formulario
document.getElementById('editPetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'), 10);
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    
    if (index >= 0 && index < pets.length) {
        const pet = {
            name: document.getElementById('petName').value,
            breed: document.getElementById('petBreed').value,
            age: document.getElementById('age').value,
            description: document.getElementById('description').value,
            image: document.getElementById('imagePreview').src
        };
        
        pets[index] = pet;  // Actualizar la mascota existente
        localStorage.setItem('pets', JSON.stringify(pets));  // Guardar los cambios en localStorage

        alert('Mascota actualizada con éxito!');
        window.location.href = '/src/home/mascotas.html';  // Redirigir de vuelta a la lista de mascotas
    }
});
