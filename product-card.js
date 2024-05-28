// refernce of html Element 
let productContainer = document.querySelector(".product-container");
let productItem = document.querySelector("#product-item");
// end 

// to make cart in html with template element  
export const showProductContainer = (products) => {
    products.forEach((product) => {
        let {name,descripition,image,stock,category,price,id} = product;
        let productClone = document.importNode(productItem.content,true);
        productClone.querySelector(".product-item").setAttribute("id",`card${id}`)
        productClone.querySelector(".product-name").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".cart-image").src = image;
        productClone.querySelector(".price").textContent = `₹${price.toFixed(2)}`;
        productClone.querySelector(".actual-price").textContent = `₹${Math.floor(3* price) }`;
        productClone.querySelector(".stock").textContent = stock;
        productClone.querySelector(".description").textContent = descripition;
       productClone.querySelector(".buttons").addEventListener("click", (event) =>{
        changeQuantityVlaue(event,id,stock)
       })
        productContainer.append(productClone);
        
    });
   

}
//  end 

// change quantity value
 const changeQuantityVlaue = (event,id,stock) => {
    let currentTarget = document.querySelector(`#card${id}`)
    let productQuantity = currentTarget.querySelector(".Quantity");
    let quantity = parseInt(productQuantity.getAttribute("qua-value")) || 1;
    if(event.target.classList.contains("increment")){
        if(quantity < stock){
            quantity+=1
        }
       else if(quantity > stock){
            quantity = stock;
        }
 
    }
    else if(event.target.classList.contains("decrement")){
        if(quantity>1){
            quantity-=1
        }
        
    
    }
    productQuantity.innerHTML = quantity;
    productQuantity.setAttribute("qua-value",quantity);

} 
// end
