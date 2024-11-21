const params = new URLSearchParams(window.location.search);
const nameFromUrl = decodeURIComponent(params.get("id"));


let products = []
async function getProducts() {

    let response = await fetch("https://raw.githubusercontent.com/pucapin/Entrega-3/refs/heads/main/data.json");
    console.log(response)
    let json = await response.json()
    let data = json;

    parseProducts(data)
    renderProduct();

}

function parseProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)

    }
}

function getProduct() {
    
    for (let i = 0; i < products.length; i++) {
        let map = products[i];
        let title = map["id"];
        if (String(title) === String(nameFromUrl)) {
            return new Product(
                map["id"],
                map["name"],
                map["price"],
                map["description"],
                map["size"],
                map["onstock"],
                map["creator"],
                map["image"],
                map["category"]
            );
            
        }
    }
    return null; // Return null if no product is found
    
}

function renderProduct() {
    let product = getProduct();
    
    if (product) { // Check if a product was found
        let titleH1 = document.getElementById("name");
        titleH1.innerHTML = product.name;

        let creator = document.getElementById("creator");
        creator.innerHTML = "Created by: " + product.creator;

        let price = document.getElementById("price");
        price.innerHTML = "$ " + product.price;

        let description = document.getElementById("description");
        description.innerHTML = product.description;

        let image = document.getElementById("prod-img");
        image.src = product.image;
    } else {
       console.log("product not found")
    }
}

getProducts();
