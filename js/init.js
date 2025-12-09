let users = JSON.parse(localStorage.getItem('users')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let settings = JSON.parse(localStorage.getItem('settings')) || {
    yuanRate: 13.50,
    kgPrice: 500,
    costYuan: 10,
    costKg: 300,
    taxPercent: 10,
    deliveryMethods: ['Самовывоз', 'Европочта', 'Белпочта'],
    paymentDetails: 'Реквизиты будут здесь...',
    forbiddenItems: ['Оружие', 'Наркотики']
};
let orderCounter = parseInt(localStorage.getItem('orderCounter')) || 0;
let currentUser = null;
let currentWeightOrderId = null;

const statusFlow = ['Ожидает оплаты','Оплачен','Выкуплен','Отправлен из Китая','Прибыл в Москву','Доставляется в Беларусь','Доставлен'];

// Создание админа
if (!users.find(u => u.phone === 'admin')) {
    users.push({
        fullName: 'Администратор',
        phone: 'admin',
        telegram: '@admin',
        password: 'admin',
        isAdmin: true,
        registeredAt: new Date().toISOString()
    });
    localStorage.setItem('users', JSON.stringify(users));
}