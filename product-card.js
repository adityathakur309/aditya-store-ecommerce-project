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
       productClone.querySelector(".cart-btn").addEventListener("click", (event) => {
        addToCart(event,id,stock)
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
// add to cart function 

const addToCart =(event,id,stock) => {
    let arrLocalStorageProduct = getProductFormLs();
    let currentProductElem  = document.querySelector(`#card${id}`)
let productQuantity = currentProductElem.querySelector(".Quantity").innerText;
let ProductPrice = currentProductElem.querySelector(".price").innerText;
ProductPrice = ProductPrice.replace("₹", "");
productQuantity = Number(productQuantity)
ProductPrice = Number(ProductPrice * productQuantity);
let existingProduct = arrLocalStorageProduct.find(
    (currProd) => {
        return currProd.id === id
    }
)
if(existingProduct && productQuantity >1){
    productQuantity = Number(existingProduct.productQuantity) + Number(productQuantity);
    ProductPrice = existingProduct.ProductPrice * productQuantity
    ProductPrice = ProductPrice.toFixed(2)
    let updatedCart = {id,productQuantity,ProductPrice};
   updatedCart = arrLocalStorageProduct.map(
        (currProd) => {
    return (currProd.id ===id) ? updatedCart : currProd
        }
    )
    localStorage.setItem("cartProduct",JSON.stringify(updatedCart))
}
if(existingProduct){
    alert("you have already added this product")
    return false
}
let updateCart = {ProductPrice,productQuantity,id}
arrLocalStorageProduct.push(updateCart)
localStorage.setItem("cartProduct",JSON.stringify(arrLocalStorageProduct));


}
// end 

// update cart value 
let cartValue = document.querySelector(".cart-value")
let updatCartValue = (arr) => {
    cartValue.innerText = arr.length
}

// end 
// local storage product function 
let getProductFormLs = () => {
    let cartProduct = localStorage.getItem("cartProduct");
    if(!cartProduct){
        return [];
    }
    cartProduct = JSON.parse(cartProduct);
    updatCartValue(cartProduct)
    return cartProduct;
}
getProductFormLs();
// end 
