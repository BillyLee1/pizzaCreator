
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

function gatherInfo(event) {
  event.preventDefault();
  let size = document.querySelector("input[name='size']:checked").value;
  let toppings = document.getElementsByName("toppings");
  for (let i of toppings) {
    if (i.checked) {
    console.log(i.value);
    }
  }
  console.log(toppings + " " + size);
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", gatherInfo);
});

let pizza = new Pizza("", ["pep"]);
