// Obtener el modal
var modal = document.getElementById("uploadModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModalButton");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close-button")[0];

// Cuando el usuario hace clic en el botón, abrir el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Cargar y mostrar los datos guardados
    if (localStorage.getItem('username')) {
        document.querySelector('.circle-text-container p').textContent = localStorage.getItem('username');
    }
    if (localStorage.getItem('location')) {
        document.querySelector('.text-container p').textContent = localStorage.getItem('location');
    }
    displayPhotos(); // Mostrar fotos al cargar la página
});
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const photoFile = document.getElementById('petPhoto').files[0];
    const description = document.getElementById('photoDescription').value;

    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photos = JSON.parse(localStorage.getItem('photos')) || [];
            photos.push({ image: e.target.result, description: description });
            localStorage.setItem('photos', JSON.stringify(photos));
            displayPhotos(); // Actualizar el contenedor de fotos
            document.getElementById('uploadForm').reset(); // Limpiar el formulario
        };
        reader.readAsDataURL(photoFile);
    }
});

function displayPhotos() {
    const photosContainer = document.getElementById('photosContainer');
    const photos = JSON.parse(localStorage.getItem('photos')) || [];
    photosContainer.innerHTML = ''; // Limpiar contenido anterior
    photos.forEach((photo, index) => {
        const photoDiv = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = photo.image;
        imgElement.alt = 'Foto de mascota';

        const descElement = document.createElement('p');
        descElement.textContent = photo.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() { deletePhoto(index); }; // Función para borrar la foto

        photoDiv.appendChild(imgElement);
        photoDiv.appendChild(descElement);
        photoDiv.appendChild(deleteButton); // Agrega el botón de eliminar a cada foto
        photosContainer.appendChild(photoDiv);
    });
}

function deletePhoto(index) {
    if (!confirm("¿Estás seguro de que quieres eliminar esta foto?")) {
        return;
    }
    const photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos.splice(index, 1); // Elimina la foto del array
    localStorage.setItem('photos', JSON.stringify(photos)); // Guarda el nuevo array en localStorage
    displayPhotos(); // Actualiza la visualización de fotos
}