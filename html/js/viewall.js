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
    renderAllProducts(products)
}
//Lleva todos los datos del mapa (los productos)
function renderAllProducts() {
    let contain = document.getElementById("productos2");
    contain.innerHTML = ''; // Clear previous content (if any)

    // Loop through all products and render them
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        
        // Render each product's card (you can adjust this if your product cards are different)
        contain.innerHTML += product.prodCard(i);  // Assuming `prodCard(i)` is rendering each product
        
        // After rendering each product, update its heart icon
        const heartIcon = contain.querySelector(`.heart[data-id="${i}"]`);  // Assuming product ID is 'i'
        
        if (heartIcon) {
            updateHeartIcon(i);  // Update the heart icon for this product
        }
    }
}

function updateHeartIcon(productId) {
    console.log(`Updating heart icon for productId: ${productId}`);

    const heartIcon = document.querySelector(`.heart[data-id="${productId}"]`);
    if (heartIcon) {
        console.log(`Heart icon for product ${productId} found!`);

        const userName = localStorage.getItem('currentUser');
        if (userName) {
            const userData = localStorage.getItem(userName);
            if (userData) {
                const parsedUserData = JSON.parse(userData);
                const favs = parsedUserData.favorites || [];
                console.log(`Favorites for user ${userName}:`, favs);

                if (favs.includes(productId)) {
                    heartIcon.src = './pics/heart-solid.svg';  // Filled heart for favorites
                } else {
                    heartIcon.src = './pics/heart-regular.svg';  // Empty heart for non-favorites
                }
            } else {
                console.log("User data not found in localStorage");
            }
        } else {
            console.log("No currentUser found in localStorage");
        }
    } else {
        console.log(`Heart icon for productId ${productId} not found in DOM`);
    }
}


function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?id=" + encodeURIComponent(openProduct.id);
    
} 



getProducts()
renderAllProducts()

