




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
    
prodCard(pos) {
    return `<div class="prod-card">
                    <img src="${this.image}" class="imagenes" onclick="openProduct(${pos})"> 
                    <div class="prod-info">
                        <h2 onclick="openProduct(${pos})">${this.name}</h2>
                        <div id="row-info">
                            <p>$ ${this.price}</p>
                            <img src="./pics/heart-regular.svg" class="heart" data-id="${this.id}">
                        </div>
                    </div>
                </div> `
}
}