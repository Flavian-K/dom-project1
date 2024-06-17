// task 1: Adjust the quantity of each item through  “+” and “-” buttons.
document.addEventListener("DOMContentLoaded", function () {
	console.log(
		"DOMContentLoaded - event that fires after html has fully loaded for manipulation"
	);
	// select all plus and minus icons
	const plusIcons = document.querySelectorAll(".fa-plus-circle");
	const minusIcons = document.querySelectorAll(".fa-minus-circle");
	// Attach event listeners for incrementing quantity
	plusIcons.forEach((icon) => {
		icon.addEventListener("click", function () {
			const quantityElement = this.nextElementSibling;
			let quantity = parseInt(quantityElement.textContent, 10);
			console.log(quantity);
			quantity += 1;
			console.log(quantity);
			quantityElement.textContent = quantity;
			updateTotalPrice();
		});
	});

	minusIcons.forEach((icon) => {
		icon.addEventListener("click", function () {
			const quantityElement = this.previousElementSibling;
			let quantity = parseInt(quantityElement.textContent, 10);
			if (quantity > 0) {
				quantity -= 1;
				quantityElement.textContent = quantity;
				updateTotalPrice();
			}
		});
	});
	// task 1 ends here.

	function updateTotalPrice() {
		let total = 0;
		const unitPrices = document.querySelectorAll(".unit-price");
		const quantities = document.querySelectorAll(".quantity");

		unitPrices.forEach((priceElement, index) => {
			// `priceElement` is a parameter
			// index is parameter rep. matching quantity of the current element priceElement

			const unitPrice = parseFloat(priceElement.textContent.replace("$", ""));
			// removing the $ sign and using parsefloat converting the number to a float number
			const quantity2 = parseInt(quantities[index].textContent, 10);
			total += unitPrice * quantity2;
			// += adds the result of unitPrice * quantity to the total updating it
		});
		const totalPriceElement = document.querySelector(".total-price");
		totalPriceElement.textContent = `$${total.toFixed(2)}`;
		// the double $$ signs one is used to represent a dollar sign character for the formatted `total.toFixed(2)` directly within the string.toFixed is a method in JavaScript  used to format a number to a specified number of decimal places.
	}

	// task 2:Delete items from the cart.
	const deleteIcons = document.querySelectorAll(".fa-trash-alt");
	deleteIcons.forEach((icon) => {
		icon.addEventListener("click", function () {
			// finds the parent element to remove from the cart,closest method is used to find the closest parent which here is the whole product card
			const cardElement = this.closest(".card");
			// the next code removes the entire .card element(product) from the DOM when the delete icon is clicked
			if (cardElement) {
				cardElement.remove();
				updateTotalPrice();
			}
		});
	});
	// task 2 ends here

	// task 3: Like items through a clickable heart-shaped button that will change color accordingly.
	const heartIcons = document.querySelectorAll(".fa-heart");

	heartIcons.forEach((icon) => {
		icon.addEventListener("click", function () {
			// toggle the 'liked' class which changes the color
			this.classList.toggle("liked");
		});
	});
	//  task 3 ends here
});
