// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"


function getOutput(){
  document.getElementById("output").innerText = urlSlug(globalTitle);
}