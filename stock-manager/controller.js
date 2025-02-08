document.getElementById('productForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const product = {
        id: document.getElementById('productId').value,
        type: document.getElementById('productType').value,
        expiryDate: document.getElementById('expiryDate').value,
        state: document.getElementById('productState').value,
    };

    const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });

    const result = await response.json();
    document.getElementById('result').textContent = result.message;

    refreshData();
});

async function refreshData() {
    const productsResponse = await fetch('/api/products');
    const products = await productsResponse.json();
    displayProducts(products);

    const statsResponse = await fetch('/api/stats');
    const stats = await statsResponse.json();
    displayStats(stats);
}

function displayProducts(products) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = products
        .map(
            (p) =>
                `<div>${p.id} - ${p.type} - Expires on: ${p.expiryDate} - State: ${p.state}</div>`
        )
        .join('');
}

function displayStats(stats) {
    const container = document.getElementById('statsContainer');
    container.innerHTML = `Accepted: ${stats.accepted}, Rejected: ${stats.rejected}`;
}

refreshData();
