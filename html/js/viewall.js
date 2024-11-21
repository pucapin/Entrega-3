let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)
    }
}
//Lleva todos los datos del mapa (los productos)
function renderAllProducts() {
    let contain = document.getElementById("productos2")
    for(let i = 0; i < products.length; i++) {
        let product = products[i]
        contain.innerHTML += product.prodCard(i)
        
    }
} //Renderiza los productos y los coloca en el div con id products.

function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?name=" + encodeURIComponent(openProduct.name);

    
} //Coloca el nombre del producto en el link 


parseDataToProducts()
renderAllProducts()