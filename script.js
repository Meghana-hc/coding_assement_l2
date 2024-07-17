document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const tabButtons = document.querySelectorAll('.tab-btn');

    const products = [
        // Men products
        {
            id: 1,
            title: 'Mens Kurta',
            vendor: 'Manyvar',
            price: 1199,
            compare_at_price: 1299,
            badge: 'Wedding Special',
            image: 'https://th.bing.com/th/id/OIP.1XbpLIoq50tltAVU-FYO9wHaLG?rs=1&pid=ImgDetMain',
            category: 'men'
        },
        {
            id: 2,
            title: 'RCB Tshirt',
            vendor: 'Myntra',
            price: 2199,
            compare_at_price: 4299,
            badge: 'On offer',
            image: 'https://th.bing.com/th/id/OIP.2IrNGAV19e9HunLfhF6n9wAAAA?w=300&h=300&rs=1&pid=ImgDetMain',
            category: 'men'
        },
        {
            id: 3,
            title: 'Green Charm',
            vendor: 'puma',
            price: 1399,
            compare_at_price: 1499,
            badge: 'On offer',
            image: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/images/style/properties/Puma-Men-Green-T-shirt_5d1f8c6a20bf8b3be5408990a70130ec_images.jpg',
            category: 'men'
        },
        {
            id: 4,
            title: 'Mens Tshirt',
            vendor: 'Puma',
            price: 599,
            compare_at_price: 799,
            badge: 'New season',
            image: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/images/style/properties/Puma-Men-Tops_9fc1b9748722bb2acbe61e7a4d7c7587_images.jpg',
            category: 'men'
        },
        // Women products
        {
            id: 5,
            title: 'Women Kurti',
            vendor: 'Manyvar',
            price: 1199,
            compare_at_price: 1299,
            badge: 'New season',
            image: 'https://i.pinimg.com/originals/89/d3/3e/89d33ec4e6b4cc4b474b14e7343cdad2.jpg',
            category: 'women'
        },
        {
            id: 6,
            title: 'Yellow Casual',
            vendor: 'Myntra',
            price: 199,
            compare_at_price: 299,
            badge: 'On offer',
            image: 'https://i.pinimg.com/originals/23/45/89/234589033b9f077ef0b16ee06523b50a.png',
            category: 'women'
        },
        {
            id: 7,
            title: 'Women Black',
            vendor: 'Myntra',
            price: 1399,
            compare_at_price: 1499,
            badge: 'New season',
            image: 'https://th.bing.com/th/id/OIP.BLzTHikflt7jZ2FoRJa55AHaLc?rs=1&pid=ImgDetMaing',
            category: 'women'
        },
        {
            id: 8,
            title: 'Metro-Fashion',
            vendor: 'Myntra',
            price: 1599,
            compare_at_price: 1799,
            badge: 'On offer',
            image: 'https://images.meesho.com/images/products/335890060/huqjy_512.webp',
            category: 'women'
        },
        // Kids products
        {
            id: 9,
            title: 'Kids Kurti',
            vendor: 'Manyvar',
            price: 1199,
            compare_at_price: 1299,
            badge: 'New season',
            image: 'https://images.bonanzastatic.com/afu/images/9e77/804d/a388_6734838947/s-l1600.jpg',
            category: 'kids'
        },
        {
            id: 10,
            title: 'Yellow Casual',
            vendor: 'Myntra',
            price: 199,
            compare_at_price: 299,
            badge: 'On offer',
            image: 'https://i.pinimg.com/originals/70/9b/4f/709b4f901758736945d6fc2fca138b51.jpg',
            category: 'kids'
        },
        {
            id: 11,
            title: 'Kids Black',
            vendor: 'Myntra',
            price: 1399,
            compare_at_price: 1499,
            badge: 'On offer',
            image: 'https://ae01.alicdn.com/kf/HTB1SMj1SXXXXXcrXVXXq6xXFXXXI/New-Arrival-Fashion-Boys-Kids-Boy-Suit-For-Weddings-Prom-Formal-Dress-Wedding-Boy-Suits.jpg',
            category: 'kids'
        },
        {
            id: 12,
            title: 'Metro-Fashion Kids',
            vendor: 'Myntra',
            price: 1599,
            compare_at_price: 1799,
            badge: 'New season',
            image: 'https://i.pinimg.com/originals/76/91/c4/7691c40a235aca9bf9563ab91c36a328.jpg',
            category: 'kids'
        }
    ];

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            displayProducts(category);
        });
    });

    function displayProducts(category) {
        productsContainer.innerHTML = '';
        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const discount = ((product.compare_at_price - product.price) / product.compare_at_price) * 100;

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="badge">${product.badge}</div>
                <h2>${product.title}</h2>
                <h3>(${product.vendor})</h3>
                <p>Price: Rs ${product.price.toFixed(2)}</p>
                <p> <strike>${product.compare_at_price.toFixed(2)}</strike></p>
                <p>${discount.toFixed(2)}% off</p>
                <button class="add-to-cart">Add to Cart</button>
            `;

            productsContainer.appendChild(productCard);
        });
    }

    // Display default category
    displayProducts('men');
});
