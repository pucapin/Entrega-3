const params = new URLSearchParams(window.location.search);
const nameFromUrl = decodeURIComponent(params.get("name"));

function getProduct() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let title = map["name"].trim();
        if (title === nameFromUrl) {
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

renderProduct();
