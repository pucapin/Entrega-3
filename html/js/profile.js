

let products = []



function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const storedFavorites = (localStorage.getItem('favorites'));
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        console.log(favorites);
    }
    parseDataToProducts()
    renderFavorites()
});

function renderFavorites() {
    let contain = document.getElementById("favoritos");
    contain.innerHTML = ""; 

    for (let i = 0; i < favorites.length; i++) {
        let favProduct = favorites[i];
        parseInt(favProduct)
        console.log(favProduct)
        let product = products.find(p => p.id === favProduct); 
        console.log(product)
        
        if (product) {
            contain.innerHTML += product.prodCard(); 
        } else {
            console.error(`Product with ID ${favProduct} not found.`);
        }
    }
    updateHeartIcon()
}

function updateHeartIcon(id) {
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

    window.location.href = './login.html';
}


