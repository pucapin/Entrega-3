
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Event listener for heart button clicks
document.addEventListener('click', (event) => {
    const heartButton = event.target.closest('.heart');
    if (heartButton) {
        const id = heartButton.getAttribute('data-id'); 
        if (id) { 
            toggleFavorite(id); 
        } else {
            console.error('No ID.');
        }
    }
});

function toggleFavorite(id) {
    const index = favorites.indexOf(id);

    if (index === -1) {
        // Item is not in favorites, add it
        favorites.push(id);
        console.log(`Added product with ID ${id} to favorites.`);
    } else {
        // Item is already in favorites, remove it
        favorites.splice(index, 1);
        console.log(`Removed product with ID ${id} from favorites.`);
    }
    
    // Save the updated favorites list to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateHeartIcons(); // Update all heart icons after toggle
}

function updateHeartIcons() {
    const heartImages = document.querySelectorAll('.heart'); // Select images within heart buttons
    heartImages.forEach((heartImage) => {
        const heartId = heartImage.closest('.heart').getAttribute('data-id'); // Get data-id from the closest heart button
        // Update heart image based on whether the ID is in favorites
        heartImage.src = favorites.includes(heartId) ? './pics/heart-solid.svg' : './pics/heart-regular.svg';
    });
}

// On page load, update the heart icons based on favorites
window.onload = function() {
    updateHeartIcons(); // Call to update heart icons based on current favorites
};
