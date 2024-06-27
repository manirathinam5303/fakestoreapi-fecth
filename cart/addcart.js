document.addEventListener("DOMContentLoaded",()=>{
    viewCart()
    totalPrice()
})
let cart=JSON.parse(localStorage.getItem("cart"));
function viewCart() {
const viewproduct = document.getElementById("product_row");
viewproduct.innerHTML = ''; 

cart.map(item => {
    const cart_container = `
            <div class="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex">
                <div class="card h-100 w-100">
                    <img class="card-img-top" src="${item.image}" alt="${item.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description.substring(0, 100)}...</p>
                        <p class="card-text"><strong>prices$${item.price}</strong></p>
                        <div class="btn_1 mt-auto">
                            <button onclick="BuyNow(${item.id})">BuyNow</button>
                            <button onclick="viewproducts(${item.id})">viewproduct</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        viewproduct.insertAdjacentHTML("beforeend", cart_container);
});
}

  function totalPrice(){
    const totalPrice =document.getElementById("totalPrice");
    let totalAmount=cart.reduce((accmulator,currntval)=>{
          return (accmulator+currntval.price)
          
    },0)
    totalPrice.innerText=totalAmount;
  }