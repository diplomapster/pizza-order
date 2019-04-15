//Constructor for creating a pizza with three key values
function Pizza(pizzaToppings, pizzaSize, pizzaPrice) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = 10;
}

//prototype for adding pizza stats such as size and toppings
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

//global variable generating the pizza
var order = new Pizza();


function newOrder(inputtedPizzaSize, inputtedPizzaToppings) {
  order.pizzaSize = inputtedPizzaSize;
  order.pizzaToppings = inputtedPizzaToppings;
  orderPrice();
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaSize = $("input#pizza-size").val();
    var inputtedPizzaToppings = $("input#pizza-toppings").val();
    newOrder(inputtedPizzaSize, inputtedPizzaToppings);
   });
 });
