let pizza = new Pizza("", [], 0);

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.fullCost = function() {
  let price = 10;
  if (this.size === "large") {
    price += 2;
  }
  price += this.toppings.length;
  this.price = price;
  if (this.toppings.length === 0) {
    return "Your " + this.size + " pizza with" + " no toppings" + " costs $" + this.price;
  } else {
    return "Your " + this.size + " pizza with" + this.toppings + " costs $" + this.price;
  }
};

function pushValues(toppings, size) {
  let toppingSelection = [];

  for (let i of toppings) {
    if (i.checked) {
    toppingSelection.push(" " + i.value);
    }
  }

  pizza.toppings = toppingSelection;
  pizza.size = size;
}

function gatherInfo(event) {
  event.preventDefault();

  let size = document.querySelector("input[name='size']:checked").value;
  let toppings = document.getElementsByName("toppings");
  
  pushValues(toppings, size);
  pizza.fullCost();
  priceStatement();
}

function priceStatement() {
  let display = document.querySelector("#priceStatement");
  display.innerText = pizza.fullCost();
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", gatherInfo);
});
