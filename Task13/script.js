function nonMutatingConcat(original, attach) {
  // Only change code below this line
  let concat = original.concat(attach);
  return concat;
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

function getOutput(){
  document.getElementById("output").innerText = nonMutatingConcat(first,second);
}