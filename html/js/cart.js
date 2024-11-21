
class Product {
    constructor(name, price, description, size, onstock, creator, image, category) {
        this.name = name
        this.price = price
        this.description = description
        this.size = size
        this.onstock = onstock
        this.creator = creator
        this.image = image
        this.category = category

    }
}

import { addCart } from './product.html';

let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)
    }
}

let cart = [];

function addCart(name) {
    const newProduct = products.find(product => product.name === name);
    
    if (newProduct) {
        cart.push(newProduct);
        console.log(`${newProduct.name} ha sido añadido al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }

    console.log(cart);
}

