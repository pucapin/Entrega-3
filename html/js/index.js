let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"], map["category"])
        products.push(product)
    }
}
//Lleva todos los datos del mapa (los productos)
function renderAllProducts() {
    let container = document.getElementById("products")
    for(let i = 0; i < 9; i++) {
        let product = products[i]
        container.innerHTML += product.htmlCard(i)
    }
} //Renderiza los productos y los coloca en el div con id products.

function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?name=" + encodeURIComponent(openProduct.name);
    
} //Coloca el nombre del producto en el link 


parseDataToProducts()
renderAllProducts()
