// Find all shop items
let baskets = document.querySelectorAll('.add-basket');

for (let i = 0; i < baskets.length; i++){
    baskets[i].addEventListener('click', () => {
        basketNumbers()
    });
}

function basketNumbers() {
    localStorage.setItem('basketNumbers', 1);
}

// Continue from 6:50