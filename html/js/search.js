
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
resultCard(pos) {
    return `
            <div class="prod-card2">
                <img src="${this.image}" class="imagenes" onclick="openProduct(${pos})"> 
                <div class="prod-info">
                    <h2>${this.name}</h2>
                    <div id="row-info">
                    <p>$ ${this.price}</p>
                    <img src="./pics/heart-regular.svg" class="heart" data-pos="${pos}">
                </div>
                </div>
            </div>
        `
    }
}

const products = []

function parseDataToProducts() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let product = new Product(map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"], map["category"]);
        products.push(product);
    } 
}

parseDataToProducts();

const searchInput = document.getElementById('search');

// toma el query del url, igual que la funcion de abrir detalle del producto. 
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the search query
const query = getQueryParam('query'); // define la constante query para realizar la busqueda

const searchResults = document.getElementById('resultados');

if (query) {
    const lowerCaseQuery = query.toLowerCase(); 
    searchProducts(lowerCaseQuery);  //pasa todo a minusculas 
} else {
    searchResults.innerHTML = '<p>Please enter a search term.</p>';
}


function searchProducts(query) {
    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.creator.toLowerCase().includes(query)
    );
    console.log('Filtered Results:', results);
    displayResults(results);
}

function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?name=" + encodeURIComponent(openProduct.name);

    
}

  function displayResults(results) {
    searchResults.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResults.innerHTML = '<p id="noproducts">No products found :(</p>';
        return;
    } else {
        for(let i = 0; i < results.length; i++) {
            let result = results[i]
            searchResults.innerHTML += result.resultCard(i)
            
        }
        updateHeartIcon()
    }
    
    // Loop through each product in results
   
}


    function viewAll() {
        displayResults(products);
    }

