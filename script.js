var plusbtn = document.getElementById("add-popup-btn");
var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
var cancelbook = document.getElementById("cancel-book");
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var inputtitle = document.getElementById("title");
var inputauthor = document.getElementById("author");
var textarea = document.getElementById("description");
var deletebtn = document.getElementById("delete-btn");
plusbtn.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
//selecting cancel button
cancelbook.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
// //selecting book container

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${inputtitle.value}</h2>
    <h5>${inputauthor.value}</h5>
    <p>${textarea.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
  //clearing the div tag fields
  inputtitle.value = "";
  inputauthor.value = "";
  textarea.value = "";
});
function deletebook(event) {
  event.target.parentElement.remove();
}
