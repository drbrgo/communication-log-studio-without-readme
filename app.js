const button = document.querySelector("#myBtn");
const btnText = document.getElementById("btnTxt")
let counter = 0;

btnTxt.innerHTML = counter;

function testFn() {
   counter++;
   console.log(counter)
   btnTxt.innerHTML = counter
}
