let productContainer = document.querySelector(".product-container");
let productItem = document.querySelector("#product-item");


export const showProductContiner = (products) => {
    products.forEach((product) => {
        let {name,descripition,brand,image,stock,category} = product;
        let productClone = document.importNode(productItem.content,true);
        productClone.querySelector(".category").textContent = category;
        productContainer.append(productClone);
        
    });
   

}