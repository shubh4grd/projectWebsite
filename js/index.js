var create = document.getElementById("postModal");

// Get the button that opens the modal
var btn = document.getElementById("createPost");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closepost")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  create.style.display= "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  create.style.display = "none";
}
