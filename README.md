# DOM PROJECT 1

Task 1 : Adjust the quantity of each item through “+” and “-” buttons.

-created variables for the plus and minus icons and brought them to javascript with queryselectorAll
-added event listeners to the + and - icons and created a quantity variable that holds the quantity of a specific item and can be updated once those buttons are clicked

Task 2: Delete items from the cart.

-get all the trash icons to js with queryselectorAll assigned to the variable deleteIcons.
-added an even listerner and function to work deleteIcons then used closest method to select the entire product card with class card.
-used remove method to remove entire product when a click happens on the trash icon

Task 3: Like items through a clickable heart-shaped button that will change color accordingly.

-bring heart icons from html to js with queryselector all assigned to the variable heartIcons
-add event listener to all hearticons using foreach to loop
-used classlist property and toggle for js to dynamically add the liked class which goes on or off depending on a click

Task 4: See the total price adjusted according to quantity and deletions.

-created function updateTotalPrice
-assigned elements from html with the class unit-price and quantity to the variables unitPrices and quanties in js.
-added foreach loop to apply calculations
-the element with total-price i assigned to totalPriceElement variable and chamged the textContent and a applied the toFixed method
-called the function updateTotalPrice in the plusIcons and MinusIcons for each loops and in the deleteIcons foreach loop to update total prices when these icons are clicked
