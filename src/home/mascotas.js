document.addEventListener('DOMContentLoaded', function() {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petsContainer = document.getElementById('petsContainer');
    
    pets.forEach((pet, index) => {
        const petElement = document.createElement('div');
        petElement.classList.add('circle-text-container');
        petElement.innerHTML = `
            <div class="circle-container">
                <img src="${pet.image}" alt="Mascota" style="width: 100px; height: 100px; object-fit: cover;">
            </div>
            <div class="mascota-info">
                <h2>${pet.name}</h2>
                <p>Raza: ${pet.breed || 'No especificado'}</p>
                <p>Edad: ${pet.age || 'Desconocida'}</p>
                <p>Descripción: ${pet.description || 'Sin descripción'}</p>
                <button onclick="editPet(${index})">Editar</button>
                <button onclick="deletePet(${index})">Eliminar</button>
            </div>
        `;
        petsContainer.appendChild(petElement);
    });
});

function deletePet(index) {
    if (!confirm("¿Estás seguro de que quieres eliminar esta mascota?")) {
        return;
    }

    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    if (index >= 0 && index < pets.length) {
        pets.splice(index, 1);
        localStorage.setItem('pets', JSON.stringify(pets));
        window.location.reload();
    }
}

function editPet(index) {
    window.location.href = `/src/home/editar_mascota.html?index=${index}`;
}

