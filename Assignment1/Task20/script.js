function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");


function getOutput(){
  document.getElementById("output").innerText = sentensify("May-the-force-be-with-you");
}