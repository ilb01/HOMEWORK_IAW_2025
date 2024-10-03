// State
let state = {
  products: [],
  filteredProducts: [],
  favorites: []
};

// loadState
function loadState() {
  const stateStorage = sessionStorage.getItem("state");
  if (stateStorage) {
    state = JSON.parse(stateStorage);
  }
}

// saveState
function saveState() {
  sessionStorage.setItem("state", JSON.stringify(state));
}

function loadProducts() {
  fetch("./assets/data/productos.json")
    .then(response => response.json())
    .then(data => {
      state.products = data.productes;
      state.filteredProducts = [...data.productes];

      loadState();
      displayProducts(state.filteredProducts);
    })
    .catch(error => console.error("Error loading products:", error));
}

// Imprimir carta de productos
function displayProducts(products) {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";

  products.forEach((product) => {
    // Favorito
    const isFavorite = state.favorites.includes(product.id);
    
    // Descuento
    var reducedPrice = (product.preu * (1 - product.descompte / 100)).toFixed(2);
    var displayPrice = "";
    if (product.descompte) {
      displayPrice = reducedPrice + " € <del>" + product.preu + " €</del>";
    }
    else {
      displayPrice = reducedPrice + " € ";
    }
    
    // Estrellas
    var stars =  "";
    for (let i=0; i<5; i++) {
      stars += `<i class="star ${product.puntuacio > i?'fa-solid fa-star':'fa-solid fa-star grey-star'}"data-id="${product.id}" data-puntuacio="${i+1}"></i>`;
    }
    
    //  <p class="price">${reducedPrice} € ${product.descompte? `<del>${product.preu} €</del>`:""}</p>

    const productCard = `
        <article class="card">
          <div class="info-1">
            <img src="${product.imatge}" alt="${product.nom}">
            <h3>${product.nom}</h3>
            <h5>${product.marca}</h5>
            <h4>${product.descripcio}</h4>
          </div>
          <div class="info2">
            ${stars}
          </div>
          <div class="info2">
            <div class="price-box">
              <p class="price">${displayPrice}</p>
              <button>Add</button>
            </div>
          </div>
          <div class="favorite">
              <i class="fa-${isFavorite ? 'solid' : 'regular'} fa-heart" data-id="${product.id}"></i>
          </div>
        </article>
        `;
    productGrid.innerHTML += productCard;
  });

  document.querySelectorAll(".favorite").forEach(icon => {
    icon.addEventListener("click", toogleFavorite);
  });
  document.querySelectorAll(".star").forEach(icon => {
    icon.addEventListener("click", setStarRating );
  });
}
// Cambiar el favorito 
function toogleFavorite(event) {
  const productId = Number(event.target.dataset.id); //ID del producte
  const index = state.favorites.indexOf(productId); //A quina posició es a l'array de favorites o si no hi es

  if (index == - 1) {
    state.favorites.push(productId);
  } else {
    state.favorites.splice(state.filteredProducts, 1);
  }

  saveState();
  displayProducts(state.filteredProducts);
}

// Cambiar las estrellas
function setStarRating(event) {
  const productId = Number(event.target.dataset.id); //ID del producte
  const score = Number(event.target.dataset.puntuacio);

  const product = state.products.find(product => product.id == productId );
  const filteredProduct = state.filteredProducts.find(product => product.id == productId );

  if (filteredProduct) {
    product.puntuacio = score;
    filteredProduct.puntuacio = score;
    saveState();
    displayProducts(state.filteredProducts);
  }
}

// Reiniciar los filtros
function resetAll() {
  state.filteredProducts = [...state.products];
  displayProducts(state.filteredProducts);
}
// Mostrar los Favoritos
function showFavorites() {
  state.filteredProducts = state.products.filter(product => state.favorites.includes(product.id));
  displayProducts(state.filteredProducts);
}
// Mostrar los no Favoritos
function showNonFavorites() {
  state.filteredProducts = state.products.filter(product => !state.favorites.includes(product.id));
  displayProducts(state.filteredProducts);
}

// Mostrar menor de 70 euros
function filterByDiscountPrice(maxPrice) {
  state.filteredProducts = state.products.filter(product => {
    let reducedPrice = product.preu * (1 - product.descompte / 100);
    return reducedPrice <= maxPrice;
  });
  displayProducts(state.filteredProducts);
}

// Filtar por marcas
function filterByBrand(brand) {
  const productGrid = document.querySelector(".product-grid");

  state.filteredProducts = state.products.filter(product => product.marca.toLowerCase() == brand.toLowerCase());
  if (state.filteredProducts.length == 0) {
    productGrid.innerHTML = "There are no products matching your search criteria.";
  } else {
    displayProducts(state.filteredProducts);
  }
}

// Ordenar 
function sortProducts(order) {
  if (order == "Aasc") {
    state.filteredProducts.sort((a, b) => a.nom.localeCompare(b.nom));
  }
  else if (order == "Adesc") {
    state.filteredProducts.sort((a, b) => b.nom.localeCompare(a.nom));
  }
  else if (order == "Pasc") {
    state.filteredProducts.sort((a, b) => {
      let reducedPriceA = a.preu * (1 - a.descompte / 100);
      let reducedPriceB = b.preu * (1 - b.descompte / 100);
      return reducedPriceA - reducedPriceB;
    });
  }
  else if (order == "Pdesc") {
    state.filteredProducts.sort((a, b) => {
      let reducedPriceA = a.preu * (1 - a.descompte / 100);
      let reducedPriceB = b.preu * (1 - b.descompte / 100);
      return reducedPriceB - reducedPriceA;
    });
  }
  displayProducts(state.filteredProducts);
}

function init() {

  // Filtres de marca
  const pickBrands = document.querySelectorAll(".main-nav a");
  pickBrands.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const brand = event.target.dataset.marca;
      filterByBrand(brand);
    });
  });

  // Ordenar
  document.querySelector("select[name='order']").addEventListener("change", event => {
    const order = event.target.value;
    sortProducts(order);
  });

  document.querySelector(".fa-eraser").addEventListener("click", resetAll);
  document.querySelector(".icons-container .fa-solid.fa-heart").addEventListener("click", showFavorites);
  document.querySelector(".icons-container .fa-regular.fa-heart").addEventListener("click", showNonFavorites);
  document.querySelector(".hero button").addEventListener("click", () => filterByDiscountPrice(70));

  loadProducts();
}

document.addEventListener("DOMContentLoaded", init);