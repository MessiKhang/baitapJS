const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 },
];
const orders = [];
let orderIdCounter = 1;
// Create order
function createOrder(productId, quantity) {
    if (productId == null || quantity == null) {
        console.log("product or quantity is null");
    }
    let i = 0;
    let product = null;
    while (i < products.length) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
        i++;
    }
    if (product == null) {
        console.log("product not found");
    }
    if (product.remaining < quantity) {
        console.log("out of stock");
        return;
    }
    product.remaining = product.remaining - quantity;
    const order = {
        id: orderIdCounter,
        productId: productId,
        quantity: quantity,
    };
    orderIdCounter++;

    orders.push(order);
    console.log("Create order success", order);
}
// Update order
function updateOrder(orderId, quantity) {
    let i = 0;
    let order = null;
    while (i < orders.length) {
        if (orders[i].id === orderId) {
            order = orders[i];
            break;
        }
        i++;
    }
    if (order == null) {
        console.log("order not found");
        return;
    }
    let j = 0;
    let product = null;
    while (j < products.length) {
        if (products[j].id === order.productId) {
            product = products[j];
            break;
        }
        j++;
    }
    let diff = quantity - order.quantity;
    if (diff > 0 && product.remaining < diff) {
        console.log("out of stock");
        return;
    }
    product.remaining = product.remaining - diff;
    order.quantity = quantity;
    console.log("Update success", order);
}
// Delete order
function deleteOrder(orderId) {
    let i = 0;
    let index = -1;
    while (i < orders.length) {
        if (orders[i].id === orderId) {
            index = i;
            break;
        }
        i++;
    }
    if (index === -1) {
        throw new Error("order not found");
    }
    const order = orders[index];
    let j = 0;
    let product = null;
    while (j < products.length) {
        if (products[j].id === order.productId) {
            product = products[j];
            break;
        }
        j++;
    }
    product.remaining = product.remaining + order.quantity;
    orders.splice(index, 1);
    console.log("delete success");
}

createOrder(1, 3);
createOrder(2, 2);

updateOrder(1, 5);

deleteOrder(2);

console.log("Products:", products);
console.log("Orders:", orders);
