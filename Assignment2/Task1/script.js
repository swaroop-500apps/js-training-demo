function sumAll(array) {
  let sum=0;
  let maxNum = Math.max(array[0],array[1])
  let minNum = Math.min(array[0],array[1])
  for (let i = minNum ; i <= maxNum ; i++){
    sum += i;
  }
  return sum;
 }

sumAll([1, 4]);

function getOutput(){
  document.getElementById("output").innerText = sumAll([1, 4]);
}
