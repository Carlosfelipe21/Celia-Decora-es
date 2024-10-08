// Dados de exemplo para produtos em destaque
const featuredProducts = [
    { id: 1, name: 'Kit de Decoração', price: 129.99, image: 'https://example.com/decoration-kit.jpg' },
    { id: 2, name: 'Máquina de Fumaça', price: 199.99, image: 'https://example.com/smoke-machine.jpg' },
    { id: 3, name: 'Jogo de Luzes LED', price: 89.99, image: 'https://example.com/led-lights.jpg' },
    { id: 4, name: 'Sistema de Som Portátil', price: 299.99, image: 'https://example.com/sound-system.jpg' },
];

// Função para renderizar produtos em destaque
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    featuredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'card bg-base-100 shadow-xl';
        productElement.innerHTML = `
            <figure><img src="${product.image}" alt="${product.name}" /></figure>
            <div class="card-body">
                <h2 class="card-title">${product.name}</h2>
                <p>R$ ${product.price.toFixed(2)}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        container.appendChild(productElement);
    });
}

// Carrinho de compras
let cart = [];

// Função para adicionar item ao carrinho
function addToCart(productId) {
    const product = featuredProducts.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
    }
}

// Função para atualizar a interface do carrinho
function update