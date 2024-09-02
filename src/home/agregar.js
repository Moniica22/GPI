document.getElementById('addPetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const petBreed = document.getElementById('petBreed').value;
    const age = document.getElementById('age').value;
    const description = document.getElementById('description').value;
    const fileInput = document.getElementById('petImage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            let pets = JSON.parse(localStorage.getItem('pets')) || [];
            pets.push({
                name: petName,
                breed: petBreed,
                age: age,
                description: description,
                image: e.target.result  // Guarda la imagen como Base64
            });
            localStorage.setItem('pets', JSON.stringify(pets));

            alert('Mascota agregada con éxito!');
            window.location.href = '/src/home/mascotas.html'; // Redirigir a la página de mascotas
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('Por favor, incluya una imagen para la mascota.');
    }
});

