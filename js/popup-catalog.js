var basketlink = document.querySelector("li.product__active .btn__basket");
var basketpopup = document.querySelector(".modal-basket");
var basketclose = basketpopup.querySelector(".modal-basket .modal-content-close");
basketlink.addEventListener("click", function(event) {
event.preventDefault();
basketpopup.classList.add("modal-basket-show");
});
basketclose.addEventListener("click", function(event) {
event.preventDefault();
basketpopup.classList.remove("modal-basket-show");
});
window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
 if (basketpopup.classList.contains("modal-basket-show"))
  {
    basketpopup.classList.remove("modal-basket-show");
  }
 }
});