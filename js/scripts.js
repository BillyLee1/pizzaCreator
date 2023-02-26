function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

function gatherInfo(event) {
  event.preventDefault();
  let toppingSelection = [];
  let size = document.querySelector("input[name='size']:checked").value;
  let toppings = document.getElementsByName("toppings");
  for (let i of toppings) {
    if (i.checked) {
    toppingSelection.push(i.value);
    }
  }

  pizza.toppings = toppingSelection;
  pizza.size = size;
  console.log(toppings + " " + size);
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", gatherInfo);
});

let pizza = new Pizza("", [], 0);
