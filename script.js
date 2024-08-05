//selecting add popup button
var plusbtn = document.getElementById("add-popup-btn");
//selecting popupbox
var popupbox = document.querySelector(".popup-box");
//selecting overlay
var popupoverlay = document.querySelector(".popup-overlay");
plusbtn.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
//selecting cancel button
var cancelbook = document.getElementById("cancel-book");
cancelbook.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
// //selecting book container
var container = document.querySelector(".container");
//selecting add button,input,textarea
var addbook = document.getElementById("add-book");
var inputtitle = document.getElementById("title");
var inputauthor = document.getElementById("author");
var textarea = document.getElementById("description");
addbook.addEventListener("click", function (event) {
  event.preventDefault();
  //creating div tag
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${inputtitle.value}</h2>
    <h5>${inputauthor.value}</h5>
    <p>${textarea.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
  //append the div tag inside the container tag
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
  //clearing the div tag fields
  inputtitle.value = "";
  inputauthor.value = "";
  textarea.value = "";
});
var deletebtn = document.getElementById("delete-btn");
function deletebook(event) {
  event.target.parentElement.remove();
}
