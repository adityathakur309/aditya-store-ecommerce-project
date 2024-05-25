let productContainer = document.querySelector(".product-container");
let productItem = document.querySelector("#product-item");


export const showProductContainer = (products) => {
    products.forEach((product) => {
        let {name,descripition,image,stock,category,price} = product;
        let productClone = document.importNode(productItem.content,true);
        productClone.querySelector(".product-name").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".cart-image").src = image;
        productClone.querySelector(".price").textContent = `₹${price.toFixed(2)}`;
        productClone.querySelector(".actual-price").textContent = `₹${Math.floor(3* price) }`;
        productClone.querySelector(".stock").textContent = stock;
        productClone.querySelector(".description").textContent = descripition;
        productContainer.append(productClone);
        
    });
   

}