

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
    renderProducts(products)
}
//Lleva todos los datos del mapa (los productos)
function renderProducts(products) {
    let container = document.getElementById("products");
    for(let i = 0; i < 9; i++) {
    let product = products[i]
    container.innerHTML += product.htmlCard(i);
    }
}; //Renderiza los productos y los coloca en el div con id products.


function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?id=" + openProduct.id

} //Coloca el nombre del producto en el link 

getProducts()
