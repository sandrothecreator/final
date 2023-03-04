function myFunction() {
    alert("Your information was sent!");
}

let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function(){
   navigationElement.classList.toggle("activeNav");
});