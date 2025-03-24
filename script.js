let cart = [];
let total = 0;

// Инициализация Telegram Web App
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

// Добавление товара в корзину
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

// Покупка товара напрямую
function buyItem(item, price) {
    window.Telegram.WebApp.showAlert(`You bought ${item} for $${price}!`);
}

// Обновление корзины
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price}`;
        cartItems.appendChild(li);
    });
    totalElement.textContent = total.toFixed(2);
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        window.Telegram.WebApp.showAlert('Your cart is empty!');
        return;
    }
    window.Telegram.WebApp.showAlert(`Thank you for your order! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}
