// Task 1: Creating Inventory
const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
];
console.log(inventory);

// Task 2: Create an Orders Array of Order Objects
// Initialize an empty array for orders
const orders = [];

// Sample data for customer orders
const sampleOrders = [
    { customerName: 'John Doe', items: [{ name: 'Espresso', quantity: 2 }], status: 'Pending' },
    { customerName: 'Joe Mama', items: [{ name: 'Latte', quantity: 1 }, { name: 'Mocha', quantity: 2 }], status: 'Completed' },
    { customerName: 'Ja Father', items: [{ name: 'Cappuccino', quantity: 3 }], status: 'Pending' }
];

// Use forEach to populate the orders array without using push
sampleOrders.forEach(order => {
    orders[orders.length] = order; // Assigning new order objects to the next available index in the array
});

console.log(orders);
