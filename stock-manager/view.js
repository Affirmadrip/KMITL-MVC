function displayProducts(products) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = products.map(product => `
        <div>
            ${product.id} - ${product.type} - Expires on: ${product.expiryDate} - State: ${product.state}
        </div>
    `).join('');
}

function displayStats(stats) {
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = `
        <div>Accepted: ${stats.accepted}, Rejected: ${stats.rejected}</div>
    `;
}

// Exporting functions to window for browser compatibility
window.displayProducts = displayProducts;
window.displayStats = displayStats;
