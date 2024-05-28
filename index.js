
// nav script 
let bar = document.querySelector(".bar");
let header = document.querySelector("header")
let showMenu = () =>{
  header.classList.toggle("show-nav")
}
bar.addEventListener("click",showMenu)
// end 

// product cart js 
import products from './api/product.json' assert { type: 'json' };
import { showProductContainer } from './product-card.js';
showProductContainer(products)
// change quantity value function

// end 
// end 