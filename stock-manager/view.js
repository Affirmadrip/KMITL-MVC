function updateView(result, message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

function displayProducts(products) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = products.map(product => `<div>${product.id} - ${product.type} - Expires on: ${product.expiryDate || 'N/A'} - State: ${product.state}</div>`).join('');
}

function displayStats(stats) {
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = `Accepted: ${stats.accepted}, Rejected: ${stats.rejected}`;
}
