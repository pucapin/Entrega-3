
favorites = []


document.addEventListener('click', (event) => {
    if (event.target.matches('.heart')) {
        const pos = event.target.getAttribute('data-pos');
        toggleFavorite(parseInt(pos));
    }
});

function toggleFavorite(pos) {
    const index = favorites.indexOf(pos);

    if (index === -1) {
        // si el producto no esta en fav, se añade.
        favorites.push(pos);
        console.log(`Added product at position ${pos} to favorites.`);
    } else {
        // si ya está en fav se quita 
        favorites.splice(index, 1);
        console.log(`Removed product at position ${pos} from favorites.`);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateHeartIcon(pos);
}

function updateHeartIcon(pos) {
    const heartImages = document.querySelectorAll('.heart');
    heartImages.forEach((heartImage) => {
        const heartPos = heartImage.getAttribute('data-pos');
        heartImage.src = favorites.includes(parseInt(heartPos)) ? './pics/heart-solid.svg' : './pics/heart-regular.svg';
    });
} //Actualiza el icono del corazon dependiendo del estado de este.