// app.js

// Importing MVC components
import { addProduct, getProductStats, getAllProducts } from './model.js';
import { updateView, displayProducts, displayStats } from './view.js';
import { setupEventListeners } from './controller.js';

// Initialization function to set up the application
function initializeApp() {
    setupEventListeners();  // Set up the UI event listeners from the controller
    displayProducts(getAllProducts());  // Initially display all products
    displayStats(getProductStats());  // Display current statistics
}

// Call initialize function to start the app
initializeApp();
