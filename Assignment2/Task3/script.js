function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

function getOutput(){
  document.getElementById("output").innerText = destroyer([1, 2, 3, 1, 2, 3], 2, 3)
}
