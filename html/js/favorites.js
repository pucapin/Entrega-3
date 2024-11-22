
document.addEventListener('DOMContentLoaded', () => {
    updateHeartIcons();
    document.addEventListener('click', (event) => {
        if (event.target.matches('.heart')) {
            const prodId = event.target.getAttribute('data-id');
            toggleFavorite(parseInt(prodId));  
        }
    });
});

function toggleFavorite(productId) {
    let userName = localStorage.getItem('currentUser');
    if (userName) {
        let userData = localStorage.getItem(userName);
        if (userData) {
            let parsedUserData = JSON.parse(userData);
            let favs = parsedUserData.favorites || [];
            
            const index = favs.indexOf(productId);  
            if (index !== -1) {
                favs.splice(index, 1);  
            } else {
                favs.push(productId);  
            }

            parsedUserData.favorites = favs;
            localStorage.setItem(userName, JSON.stringify(parsedUserData));

            updateHeartIcon(productId);
            renderFavorites(favs)
        }
    }
}

function updateHeartIcon(productId) {
    const heartIcon = document.querySelector(`.heart[data-id="${productId}"]`);
    if (heartIcon) {
        const userName = localStorage.getItem('currentUser');
        if (userName) {
            const userData = localStorage.getItem(userName);
            if (userData) {
                const parsedUserData = JSON.parse(userData);
                const favs = parsedUserData.favorites || [];

               
                if (favs.includes(productId)) {
                    heartIcon.src = './pics/heart-solid.svg';  
                } else {
                    heartIcon.src = './pics/heart-regular.svg';  
                }
            }
        }
    }
}

function updateHeartIcons() {
    const userName = localStorage.getItem('currentUser');
    if (userName) {
        const userData = localStorage.getItem(userName);
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            const favs = parsedUserData.favorites || [];

            const heartIcons = document.querySelectorAll('.heart');
            heartIcons.forEach(heartIcon => {
                const productId = heartIcon.getAttribute('data-id'); 
                if (favs.includes(Number(productId))) {
                    heartIcon.src = './pics/heart-solid.svg'; 
                } else {
                    heartIcon.src = './pics/heart-regular.svg'; 
                }
            });
        }
    }
}
