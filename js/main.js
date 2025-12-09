// Функции уведомлений
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>ℹ️</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
}

// Навигация
function showLogin() { /* ... */ }
function logout() { /* ... */ }

// Клиентская логика (addProductRow, loadClientOrders, createOrder)
// ...

// Админская логика (showAdminTab, loadAdminOrders, exportSelectedOrders)
// ...

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    showLogin();
});