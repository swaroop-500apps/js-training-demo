function nonMutatingSplice(cities) {
  // Add your code below this line

  return cities.slice(0, 3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);


function getOutput(){
  document.getElementById("output").innerText = nonMutatingSplice(inputCities);
}