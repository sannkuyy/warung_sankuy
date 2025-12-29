const products = [
    {
        id: 'p001',
        name: 'Pancake Durian',
        category: 'cake',
        originalPrice: 'Rp.25k',
        discountedPrice: 'Rp.20k',
        image: 'assets/images/trending-01.jpeg',
        details: 'Delicious durian pancakes with a rich, creamy filling.'
    },
    {
        id: 'p002',
        name: 'Basreng',
        category: 'Snack',
        originalPrice: null,
        discountedPrice: 'Rp.15k',
        image: 'assets/images/categories-02.png',
        details: 'Spicy cassava chips, perfect for a fiery snack.'
    },
    {
        id: 'p003',
        name: 'Kue balok ',
        category: 'Cake',
        originalPrice: null,
        discountedPrice: 'Rp.20k',
        image: 'assets/images/5.png',
        details: 'Kue yang lembut dan lumer.'
    },
    {
        id: 'p004',
        name: 'Putu Ayu',
        category: 'Snack',
        originalPrice: null,
        discountedPrice: 'Rp.12k',
        image: 'assets/images/9.png',
        details: 'Kue putu yang lembut dengan taburan kelapa.'
    },
    // Products from shop.html
    {
        id: 'p005',
        name: 'Seblak Spesial',
        category: 'Spicy',
        originalPrice: null,
        discountedPrice: 'Rp.15k',
        image: 'assets/images/categories-01.png',
        details: 'Seblak spesial dengan berbagai toping dan tingkat kepedasan yang bisa di atur'
    },
    {
        id: 'p006',
        name: 'Dimsum Mentai ',
        category: 'Snack',
        originalPrice: 'Rp.18k',
        discountedPrice: 'Rp.15k',
        image: 'assets/images/categories-03.png',
        details: 'Basreng dengan rasa pedas gurih yang gak bisa di lupain'
    },
    {
        id: 'p007',
        name: 'Makaroni',
        category: 'Snack',
        originalPrice: null,
        discountedPrice: 'Rp.12k',
        image: 'assets/images/categories-05.png',
        details: 'makaroni bantet dengan bumbu pedas daun jeruk.'
    },
    {
        id: 'p008',
        name: 'Dadar Gulung',
        category: 'Snack',
        originalPrice: null,
        discountedPrice: 'Rp.9k',
        image: 'assets/images/1.png',
        details: 'Kue dadar gulung dengan isian kelapa dan gula merah '
    },
    {
        id: 'p009',
        name: 'Dimsun Original ',
        category: 'Snack',
        originalPrice: 'Rp.20k',
        discountedPrice: 'Rp.15k',
        image: 'assets/images/4.png',
        details: 'Dimsum ayam original dengan rasa juara'
    },
    {
        id: 'p010',
        name: 'Pancake',
        category: 'cake',
        originalPrice: null,
        discountedPrice: 'Rp.20k',
        image: 'assets/images/2.png',
        details: 'Pancake dengan toping blueberry an strowberry.'
    },
    {
        id: 'p011',
        name: 'Strowberry Matcha',
        category: 'Drink',
        originalPrice: null,
        discountedPrice: 'Rp.12k',
        image: 'assets/images/6.png',
        details: 'Minuman dengan dua varian rasa strowberry dan matcha'
    },
    {
        id: 'p012',
        name: 'Boba All Varian',
        category: 'Drink',
        originalPrice: null,
        discountedPrice: 'Rp.10k',
        image: 'assets/images/trending-03.jpeg',
        details: 'Minuman dengan berbagai toping buah dan boba'
    },
    {
        id: 'p013',
        name: 'Es Teh Manis',
        category: 'Drink',
        originalPrice: null,
        discountedPrice: 'Rp.5k',
        image: 'assets/images/7.png',
        details: 'Minuman es teh dengan rasa manis yang pas'
    },
    {
        id: 'p014',
        name: 'Jus Buah Naga',
        category: 'Drink',
        originalPrice: null,
        discountedPrice: 'Rp.10k',
        image: 'assets/images/8.png',
        details: 'Jus buah naga dengan buah naga asli'
    },
    {
        id: 'p015',
        name: 'Avocado Jus',
        category: 'Drink',
        originalPrice: null,
        discountedPrice: 'Rp.10k',
        image: 'assets/images/trending-04.png',
        details: 'Jus alpukat yang Creamy abiss'
    },
    {
        id: 'p016',
        name: 'Chocolate Cream',
        category: 'Drink',
        originalPrice: null,
        discountedPrice: 'Rp.10k',
        image: 'assets/images/11.png',
        details: 'Minuman cream coklat yang creamy.'
    }
];

function displayProducts(productsArray, targetElementSelector) {
    const targetElement = document.querySelector(targetElementSelector);
    if (!targetElement) {
        console.error(`Target element with selector "${targetElementSelector}" not found.`);
        return;
    }

    targetElement.innerHTML = ''; // Clear existing content

    productsArray.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('col-lg-3', 'col-md-6', 'align-self-center', 'mb-30', 'trending-items');
        // Add category classes for filtering in shop.html
        if (product.category) {
             const categoryClass = product.category.toLowerCase().substring(0, 3); // e.g., 'adv', 'str', 'rac' for filters
             if (['adv', 'str', 'rac'].includes(categoryClass)) {
                itemDiv.classList.add(categoryClass);
             }
        }

        let priceHtml = '';
        if (product.originalPrice && product.discountedPrice) {
            priceHtml = `<span class="price"><em>${product.originalPrice}</em>${product.discountedPrice}</span>`;
        } else if (product.discountedPrice) {
            priceHtml = `<span class="price">${product.discountedPrice}</span>`;
        } else if (product.originalPrice) {
             priceHtml = `<span class="price">${product.originalPrice}</span>`;
        }


        itemDiv.innerHTML = `
            <div class="item">
                <div class="thumb">
                    <a href="product-details.html?id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
                    ${priceHtml}
                </div>
                <div class="down-content">
                    <span class="category">${product.category}</span>
                    <h4>${product.name}</h4>
                    <a href="product-details.html?id=${product.id}"><i class="fa fa-shopping-bag"></i></a>
                </div>
            </div>
        `;
        targetElement.appendChild(itemDiv);
    });
}

// Function to handle filtering (used in shop.html)
function filterProducts(filterCategory) {
    let filteredProducts = [];
    if (filterCategory === '*') {
        filteredProducts = products;
    } else {
        // Remove the leading '.' from the filter (e.g., '.adv' becomes 'adv')
        const cleanFilter = filterCategory.substring(1).toLowerCase();
        filteredProducts = products.filter(product => {
            const productCategoryLower = product.category.toLowerCase();
            if (cleanFilter === 'adv' && (productCategoryLower === 'adventure' || productCategoryLower === 'cake')) return true;
            if (cleanFilter === 'str' && (productCategoryLower === 'strategy' || productCategoryLower === 'snack')) return true;
            if (cleanFilter === 'rac' && (productCategoryLower === 'racing' || productCategoryLower === 'drink')) return true;
            return false;
        });
    }
    displayProducts(filteredProducts, '.trending-box');
}