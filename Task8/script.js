let a = [1,2,3,4,5]
Array.prototype.myMap = function(callback) {
  let newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i+=1) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

function getOutput(){
  document.getElementById("output").innerText =a.myMap((item)=>item*item)  ;
}