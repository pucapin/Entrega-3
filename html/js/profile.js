 
const userName = localStorage.getItem('currentUser');
const displayName = document.getElementById('userNick');
const displayUser = document.getElementById('userName');



let products = []
async function getProducts() {

    let response = await fetch("https://raw.githubusercontent.com/pucapin/Entrega-3/refs/heads/main/data.json");
    console.log(response)
    let json = await response.json()
    let data = json;

    parseProducts(data)

}

function parseProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)

    }
}


if (userName) {
    
    const userData = localStorage.getItem(userName); 
    if (userData) {
        const parsedUserData = JSON.parse(userData);
        displayName.textContent = parsedUserData.user;
        displayUser.textContent += parsedUserData.user;
} else {
    console.log("No hay datos de usuario en localStorage");
}}

document.addEventListener('DOMContentLoaded', () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        console.log(favorites); // Now you can use the favorites array
    }
    parseProducts()
    renderFavorites()
});

function renderFavorites() {
    let contain = document.getElementById("favoritos");
    contain.innerHTML = ""; // Clear existing content

    // Iterate over the favorites array
    for (let i = 0; i < favorites.length; i++) {
        let pos = favorites[i]; // Get the position of the favorite
        let product = products[pos]; // Use the position to get the actual product
        contain.innerHTML += product.prodCard(pos); // Append the product card
    }
    updateHeartIcon()
}

function updateHeartIcon(pos) {
    const heartImages = document.querySelectorAll('.heart'); // Use class selector
    heartImages.forEach((heartImage) => {
        const heartPos = heartImage.getAttribute('data-pos');
        heartImage.src = favorites.includes(parseInt(heartPos)) ? './pics/heart-solid.svg' : './pics/heart-regular.svg';
    });
}

function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?name=" + encodeURIComponent(openProduct.name);

    
}

document.getElementById('down').addEventListener('click', logoutUser);
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = './login.html';
}


