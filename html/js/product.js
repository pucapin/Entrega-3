class Product {
    constructor(id, name, price, description, size, onstock, creator, image, category) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.size = size
        this.onstock = onstock
        this.creator = creator
        this.image = image
        this.category = category

    } 
    
htmlCard(pos) {
    return `
    <div class="producto-individual">
                    <div class="imagenes">
                     <img class="imagen" src="${this.image}" alt="${this.name}" width="360px" height="320px">
                    </div>
                    <div class="producto-textos">
                        <h2>${this.name}</h2>
                        <p>$ ${this.price}</p>
                        <p>Size: ${this.size}</p>
                        <p>Created by: ${this.creator}</p>
                        <br>
                        <button class="producto-boton" onclick="openProduct(${pos})">More info</button>
                    </div>
                </div> 
    `
}
}


        