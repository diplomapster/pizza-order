function Pizza(pizzaToppings, pizzaSize, pizzaPrice) {
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  this.pizzaPrice = pizzaPrice;
}

// Pizza.prototype.order = function() {
//   this.pizzaPrice = 10;
//   if (this.pizzaToppings === 1) {
//     this.pizzaPrice += 12;
//   }
// }


//User Interface Logic
var newOrder = new Pizza();

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaToppings = $("input#pizza-toppings").val();
    var inputtedPizzaSize = $("input#pizza-size").val();
    $("input#pizza-toppings").val("");
    $("input#pizza-size").val("");
   });
 });
