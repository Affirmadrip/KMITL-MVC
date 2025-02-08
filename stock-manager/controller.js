// Attach an event listener to the form with the ID 'productForm'.
document.getElementById('productForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior which reloads the page.
    event.preventDefault();

    // Create a product object by retrieving values from the form inputs.
    const product = {
        id: document.getElementById('productId').value, // Get the value from the Product ID input field.
        type: document.getElementById('productType').value, // Get the selected Product Type from the dropdown.
        expiryDate: document.getElementById('expiryDate').value, // Get the value from the Expiry Date input field.
        state: document.getElementById('productState').value // Get the selected Product State from the dropdown.
    };

    // Call the addProduct function to attempt to add the new product to the database.
    // This function returns a result object with success status and a message.
    const result = addProduct(product);

    // Update the view based on the result of the addProduct operation.
    // Displays a success or error message.
    updateView(result.success, result.message);

    // Refresh the display of products showing all products currently in the database.
    displayProducts(getAllProducts());

    // Update and display the latest statistics on the number of accepted and rejected products.
    displayStats(getProductStats());
});
