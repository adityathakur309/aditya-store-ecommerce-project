function loadCSS(filename) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = filename;
  document.head.appendChild(link);
}

// Call the function to load the CSS file
loadCSS('style.css');
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
import { showProductContiner } from './product-card.js';
showProductContiner(products)

// end 