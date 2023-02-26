# _Billy's Pizza Parlor_

#### By _**Billy Lee**_

#### _A simple program to value a pizza created by a user based on toppings and size_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _VS Code_

## Description

_This is a simple program to value a pizza created by a user based on toppings and size. There are 7 toppings and 2 sizes. Each topping is worth 1 dollar. A medium size costs 10 dollars and a large costs 2 dollars more. The price and toppings will be displayed once the choices have been selected._

## Setup/Installation Requirements

* _Visit the repository this project is located in._
* _Press the green code button and copy and the HTTPS link that ends with .git_
* _Open up your gitbash and change the directory to where you want to clone this repository._
* _in gitbash, type "git clone" and then paste the link you just copied._
* _Lastly, open up the index.html in your web browser to view the pizzaCreator._

## Known Bugs

* No known bugs as of right now. Please notify me if you have found any bugs.


## License

_Please let me know if you see any bugs within this project. You can contact me through Discord or email me at codingbillylee@gmail.com_

[Copyright](https://opensource.org/licenses/MIT) (c) _2023_ _Billy Lee_

# TDD:
Describe: Pizza(size, toppings);

Test: The pizza object should return two properties of an array for toppings and a string for size.

Code: const pizza = new Pizza("medium", ["cheese", "sausage"]);
Expected Output: pizza {size: "medium", toppings: ["cheese", "sausage"]}

Describe: Pizza.prototype.fullCost = function() {

Test: fullCost prototype function should return the base 10 dollars for the medium pizza.

Code: Pizza.prototype.fullCost = function() {
  let price = 10;
  return price;
}

Expected output: 10;

Test: Changes price if pizza.size = large.

Code: Pizza.prototype.fullCost = function() {
  let price = 10;
  if (pizza.size === "large") {
    price += 2;
  }
}

Expected output: 12;

Test: Adds 1 to price for every topping that is selected. 2 toppings for this case.

Code: Pizza.prototype.fullCost = function() {
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
