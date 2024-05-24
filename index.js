// nav script 
let bar = document.querySelector(".bar");
let header = document.querySelector("header")
let showMenu = () =>{
  header.classList.toggle("show-nav")
}
bar.addEventListener("click",showMenu)
// end 