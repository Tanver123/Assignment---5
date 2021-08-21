function getPrice(product, price) {
    const productPrice = document.getElementById(product + '-cost');
    const priceCost = price;
    productPrice.innerText = priceCost;
};
function getTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;


    const price = document.getElementsByClassName('total-price');
    for (const totaPrice of price) {
        totaPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    }

};

//memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    getPrice('memory', 0);
    getTotal();
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    getPrice('memory', 180);
    getTotal();
});
//storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    getPrice('storage', 0);
    getTotal();
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    getPrice('storage', 100);
    getTotal();
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    getPrice('storage', 180);
    getTotal();
});

//delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    getPrice('delivery', 0);
    getTotal();
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    getPrice('delivery', 20);
    getTotal();
});

//promocode

document.getElementById('promo-code-apply').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode == 'stevekaku') {
        const price = document.getElementsByClassName('total-price')[0].innerText;

        const discount = price * (20 / 100);
        const discountTotalPrice = price - discount;
        document.getElementsByClassName('total-price')[1].innerText = discountTotalPrice;

    }
})
