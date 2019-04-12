function Pizza(pizzaToppings, pizzaSize, pizzaPrice) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = 10;
}

Pizza.prototype.orderPrice = function() {
  this.pizzaPrice += this.pizzaToppings;
  if (this.pizzaSize === 1){
    this.pizzaPrice += 0;
  } else if (this.pizzaSize === 2) {
    this.pizzaPrice += 4;
  } else if (this.pizzaSize === 3) {
    this.pizzaPrice += 6;
  }
}

var order = new Pizza();
//User Interface Logic
function newOrder(inputtedPizzaSize, inputtedPizzaToppings) {
  inputtedPizzaSize = $("input#pizza-size").val();
  inputtedPizzaToppings = $("input#pizza-toppings").val();
  order.pizzaSize = inputtedPizzaSize;
  order.pizzaToppings = inputtedPizzaToppings;
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    newOrder();
   });
 });
