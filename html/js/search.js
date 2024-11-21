
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
resultCard(pos) {
    return `
            <div class="prod-card2">
                <img src="${this.image}" class="imagenes" onclick="openProduct(${pos})"> 
                <div class="prod-info">
                    <h2>${this.name}</h2>
                    <div id="row-info">
                    <p>$ ${this.price}</p>
                    <img src="./pics/heart-regular.svg" class="heart" data-id="${this.id}">
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
        let product = new Product(map["id"], map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"], map["category"]);
        products.push(product);
    }
}

parseDataToProducts();

const searchInput = document.getElementById('search');

// Function to get the search query from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the search query
const query = getQueryParam('query'); // Extract 'query' parameter

const searchResults = document.getElementById('resultados');

if (query) {
    const lowerCaseQuery = query.toLowerCase(); // Only call toLowerCase if query is not null
    searchProducts(lowerCaseQuery); // Pass the lowercase query to your search function
} else {
    searchResults.innerHTML = '<p>Please enter a search term.</p>';
}


function searchProducts(query) {
    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.creator.toLowerCase().includes(query) // Include category in the search
    );
    console.log('Filtered Results:', results); // Log filtered results
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
    }
    
    // Loop through each product in results
   
}


    function viewAll() {
        displayResults(products);
        updateHeartIcons();
    }

