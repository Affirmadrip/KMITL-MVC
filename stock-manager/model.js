// Array to store all products added to the system
const products = [];
// Object to track the number of accepted and rejected product submissions
const stats = {
    accepted: 0,
    rejected: 0
};

/**
 * Attempts to add a product to the array after validating it.
 * Updates stats for accepted or rejected entries based on validation.
 * @param {Object} product - The product object to add
 * @returns {Boolean} - True if product is added successfully, false otherwise
 */
function addProduct(product) {
    // Validate product before adding
    if (!validateProduct(product)) {
        stats.rejected++;
        return false;
    }

    // Add product to the products array and update accepted stats
    products.push(product);
    stats.accepted++;
    return true;
}

/**
 * Validates a product based on its ID and specific rules based on its type.
 * @param {Object} product - The product object to validate
 * @returns {Boolean} - True if product meets all criteria, false otherwise
 */
function validateProduct(product) {
    // Validate product ID and check for duplicates
    if (!validateProductId(product.id) || checkDuplicateId(product.id)) {
        return false;
    }

    // Additional validations based on product type
    switch (product.type) {
        case 'Food':
            // For Food, check that the expiry date is in the future
            if (new Date(product.expiryDate) <= new Date()) {
                return false;
            }
            break;
        case 'Electronics':
            // Electronics should not be damaged or needing a check
            if (product.state === 'Damaged' || product.state === 'Check') {
                return false;
            }
            break;
        case 'Clothing':
            // Clothing should not be damaged
            if (product.state === 'Damaged') {
                return false;
            }
            break;
    }

    return true;
}

/**
 * Validates that a product ID is exactly 6 digits and does not start with 0.
 * @param {String} id - The product ID to validate
 * @returns {Boolean} - True if ID is valid, false otherwise
 */
function validateProductId(id) {
    return /^[1-9][0-9]{5}$/.test(id);
}

/**
 * Checks for duplicate product IDs in the products array.
 * @param {String} id - The product ID to check
 * @returns {Boolean} - True if a duplicate ID is found, false otherwise
 */
function checkDuplicateId(id) {
    return products.some(product => product.id === id);
}

/**
 * Retrieves all products currently stored.
 * @returns {Array} - An array of all products
 */
function getAllProducts() {
    return products;
}

/**
 * Retrieves statistics about product submissions.
 * @returns {Object} - An object containing counts of accepted and rejected products
 */
function getProductStats() {
    return stats;
}
