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


// Task 3: function to place an order
function placeOrder(customerName, orderedItems) {
    // Check if all items have enough stock
    const isOrderValid = orderedItems.every(item => {
        const product = inventory.find(p => p.name === item.name);
        if (!product || product.quantity < item.quantity) {
            console.log(`Error: Not enough stock for ${item.name}.`);
            return false;
        }
        return true;
    });

    // If the order is valid, update inventory and add order
    if (isOrderValid) {
        orderedItems.forEach(item => {
            const product = inventory.find(p => p.name === item.name);
            product.quantity -= item.quantity;
        });

        // Add new order with status 'Pending'
        orders[orders.length] = { customerName, items: orderedItems, status: 'Pending' };
        console.log(`Order placed for ${customerName}.`);
    }}
console.log(inventory); // Check updated inventory
console.log(orders);    // Check placed orders

// Task 4: Function to calculate total for an order
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        const product = inventory.find(p => p.name === item.name);
        if (product) {
            return total + (product.price * item.quantity); // Calculate the total for this item
        }
        return total; // If product not found, return current total
    }, 0);}
