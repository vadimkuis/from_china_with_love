let users = JSON.parse(localStorage.getItem('users')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let settings = JSON.parse(localStorage.getItem('settings')) || {
    yuanRate: 13.5, kgPrice: 500, costYuan: 10, costKg: 300, taxPercent: 10,
    deliveryMethods: ['Самовывоз', 'Европочта', 'Белпочта'],
    forbiddenItems: ['Оружие', 'Наркотики']
};
let currentUser = null;
const statusFlow = ['Ожидает оплаты','Оплачен','Выкуплен','Отправлен из Китая','Прибыл в Москву','Доставляется в Беларусь','Доставлен'];