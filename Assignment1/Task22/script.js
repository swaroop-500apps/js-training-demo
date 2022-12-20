function checkPositive(array) {
  // Add your code below this line

  return array.every(item => item > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);


function getOutput(){
  document.getElementById("output").innerText = checkPositive([1, 2, 3, -4, 5]);
}