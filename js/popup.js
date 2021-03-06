var link = document.querySelector(".btn--feedback");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var inputname = popup.querySelector("[name=name]");
var inputemail = popup.querySelector("[name=email]");
var textarea = popup.querySelector("textarea");
var storage = localStorage.getItem("inputname");
var storage2 = localStorage.getItem("inputemail");
link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("modal-content-show");
  if (storage && storage2) {
    inputname.value = storage;
    inputemail.value = storage2;
    textarea.focus();
    } else {
      inputname.focus();
    }
  });
close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("modal-content-show");
popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
  if (!inputname.value || !inputemail.value || !textarea.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } else {
      localStorage.setItem("inputname", inputname.value);
      localStorage.setItem("inputemail", inputemail.value);
    }
  });
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    }
  }
});
var mapopen = document.querySelector(".js-open-map");
var mappopup = document.querySelector(".modal-content-map");
var mapclose = document.querySelector(".modal-content-map .modal-content-close");
mapopen.addEventListener("click", function(event) {
event.preventDefault();
mappopup.classList.add("modal-content-map-show");
});
mapclose.addEventListener("click", function(event) {
event.preventDefault();
mappopup.classList.remove("modal-content-map-show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (mappopup.classList.contains("modal-content-map-show")) {
    mappopup.classList.remove("modal-content-map-show");
    }
  }
});

