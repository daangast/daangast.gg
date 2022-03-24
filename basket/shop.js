// Find all shop items
let baskets = document.querySelectorAll('.add-basket');

let products = [
    {
    name: '',
    tag: '',
    price: 15,
    inBasket: 0
    },
]

for (let i = 0; i < baskets.length; i++){
    baskets[i].addEventListener('click', () => {
        basketNumbers()
    });
}

function basketNumbers() {
    let productNumbers = localStorage.getItem('basketNumbers');

    productNumbers = parseInt(productNumbers);
    localStorage.setItem('basketNumbers', 1);
}

// Continue from 10:40