function sliceArray(animal, beginSlice, endSlice) {
  // Add your code below this line
  return animal.slice(beginSlice, endSlice);
  // Add your code above this line
}
var inputAnimal = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnimal, 1, 3);

function getOutput(){
  document.getElementById("output").innerText = sliceArray(inputAnimal, 1, 3);
}