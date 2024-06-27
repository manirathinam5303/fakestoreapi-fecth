const product_container=document.getElementById("product_container");
const product_row=document.getElementById("product_row");


document.addEventListener("DOMContentLoaded",()=>{
    fetchProdcuts()
    updateCartCount();
});
function fetchProdcuts(){
   fetch("https://fakestoreapi.com/products")
   .then(response => response.json())
   .then(products => {
    displayProducts(products);
})
  
}

function displayProducts(products) {
    product_row.innerHTML = ''; 

    products.forEach(product => {
        const productCard = `
            <div class="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex">
                <div class="card h-100 w-100">
                    <img class="card-img-top" src="${product.image}" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.description.substring(0, 100)}...</p>
                      <p class="card-text mt-auto"><strong>Price$${product.price}</strong></p>
                      <div class="btn_1 mt-auto">
                      <button onclick="addToCart(${product.id})">addTocart</button>
                      <button onclick="viewproducts(${product.id})">viewproduct</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        product_row.insertAdjacentHTML('beforeend', productCard);
    });
}
let cart=JSON.parse(localStorage.getItem("cart"))||[];
function addToCart(productId){
    if(!cart.some(item=>item.id===productId)){fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response=>response.json())
        .then(product =>{
            cart.push(product);
            localStorage.setItem("cart",JSON.stringify(cart))
            updateCartCount();
        });}
    else{
        alert("item already in your cart")
    }
}
function updateCartCount(){
    const addCart=document.getElementById("count");
     addCart.innerText=cart.length;
    
}
   
  function  viewproducts(producId){
    alert("your bad sutiuation")
  }