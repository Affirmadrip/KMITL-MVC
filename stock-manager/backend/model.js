const products = [];
const stats = { accepted: 0, rejected: 0 };

function addProduct(product) {
    if (!validateProduct(product)) {
        stats.rejected++;
        return { success: false, message: 'Product validation failed!' };
    }

    products.push(product);
    stats.accepted++;
    return { success: true, message: 'Product added successfully!' };
}

function validateProduct(product) {
    if (!/^[1-9][0-9]{5}$/.test(product.id) || checkDuplicateId(product.id)) return false;

    switch (product.type) {
        case 'Food':
            if (new Date(product.expiryDate) <= new Date()) return false;
            break;
        case 'Electronics':
            if (product.state === 'Damaged' || product.state === 'Check') return false;
            break;
        case 'Clothing':
            if (product.state === 'Damaged') return false;
            break;
    }
    return true;
}

function checkDuplicateId(id) {
    return products.some((p) => p.id === id);
}

function getAllProducts() {
    return products;
}

function getProductStats() {
    return stats;
}

module.exports = { addProduct, getAllProducts, getProductStats };
