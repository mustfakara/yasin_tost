// JavaScript to increase the number
let number = 0;

document
  .getElementById("incrementButton")
  .addEventListener("click", function () {
    number += 1;
    document.getElementById("number").textContent = number;
  });
