TDD:
Describe: Pizza(size, toppings);

Test: The pizza object should return two properties of an array for toppings and a string for size.

Code: const pizza = new Pizza("medium", ["cheese", "sausage"]);
Expected Output: pizza {size: "medium", toppings: ["cheese", "sausage"]}

Describe: getPrice();

Test: getPrice function should return the base 10 dollars for the medium pizza.

Code: function getPrice () {
  let price = 10;
  return price;
}

Expected output: 10;

Test: Changes price if pizza.size = large.

Code: function getPrice () {
  let price = 10;
  if (pizza.size === "large") {
    price += 2;
  }
}

Expected output: 12;

Test: Adds 1 to price for every topping that is selected. 2 toppings for this case.

Code: function getPrice() {
  price += pizza.toppings.length;
}

Expected output: 12

Describe: pushValues() 

Test: Checks checked values of toppings.

Code: function pushValues("cheese") {
  for (let i of toppings) {
    if (i.checked) {
    return i.value;
    }
  }

Expected output: cheese;

Test: Pushes topping values into empty array.

Code: function pushValues("Cheese") {
  let toppingSelection = [];
  for (let i of toppings) {
    if (i.checked) {
    toppingSelection.push(i.value);
    }
  }

Expected Output: ["Cheese"]
