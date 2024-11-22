 
const displayName = document.getElementById('userNick');
const displayUser = document.getElementById('userName');



let products = []
async function getProducts() {

    let response = await fetch("https://raw.githubusercontent.com/pucapin/Entrega-3/refs/heads/main/data.json");
    console.log(response)
    let json = await response.json()
    let data = json;

    parseProducts(data)

    const userName = localStorage.getItem('currentUser');
    if (userName) {
        const userData = localStorage.getItem(userName);
        if (userData) {
            const parsedUserData = JSON.parse(userData);
            const favs = parsedUserData.favorites || [];
            console.log(favs)
            renderFavorites(favs)
        }
    }
}

function parseProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)

    }
}


if (userName) {
    let userName = localStorage.getItem('currentUser');
    let userData = localStorage.getItem(userName); 
    if (userData) {
        const parsedUserData = JSON.parse(userData);
        displayName.textContent = parsedUserData.user;
        displayUser.textContent += parsedUserData.user;
} else {
    console.log("No hay datos de usuario en localStorage");
}}

function renderFavorites(favs) {
    let contain = document.getElementById("favoritos");
    contain.innerHTML = ""; 
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (favs.includes(product.id)) {  
            contain.innerHTML += product.prodCard(i); 
        }
    }
    if (favs.length === 0) {
        contain.innerHTML = `<button id="favbutt">No favorites yet</button>`
        return;
    }

    updateHeartIcons(favs);
}

function updateHeartIcons(favs) {
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



function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?id=" + encodeURIComponent(openProduct.id);
    
} 

document.getElementById('down').addEventListener('click', logoutUser);
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = './login.html';
}

getProducts();
