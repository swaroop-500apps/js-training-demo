
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let array = []
  return array.concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);

function getOutput(){
  document.getElementById("output").innerText = nonMutatingSort(globalArray);;
}