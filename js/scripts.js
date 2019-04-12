function Pizza(pizzaToppings, pizzaSize, pizzaPrice) {
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  this.pizzaPrice = pizzaPrice;
}

Pizza.prototype.order = (function) {
  this.pizzaPrice = 10;
  if 
}


//User Interface Logic
var newOrder = new Order(pizzaToppings, pizzaSize);

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaToppings = $("input#pizza-toppings").val();
    var inputtedPizzaSize = $("input#pizza-size").val();
    $("input#pizza-toppings").val("");
    $("input#pizza-size").val("");
   });
 });
