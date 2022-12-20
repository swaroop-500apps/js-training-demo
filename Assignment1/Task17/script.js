function alphabeticalOrder(array) {
  // Add your code below this line
  return array.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

function getOutput(){
  document.getElementById("output").innerText = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);;
}