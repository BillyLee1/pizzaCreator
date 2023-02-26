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
  
  pushValues(toppings, size, toppingSelection);
  getPrice();
}

function pushValues(toppings, size, toppingSelection) {
  for (let i of toppings) {
    if (i.checked) {
    toppingSelection.push(i.value);
    }
  }

  pizza.toppings = toppingSelection;
  pizza.size = size;
}

function getPrice() {
  let price = 10;
  if (pizza.size === "large") {
    price += 2;
    console.log(price);
  }
  price += pizza.toppings.length;
  pizza.price = price;
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", gatherInfo);
});

let pizza = new Pizza("", [], 0);
