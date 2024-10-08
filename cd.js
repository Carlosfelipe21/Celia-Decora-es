const produtos = [
    { id: 1, nome: "Balões coloridos", preco: 50, imagem: "baloes.jpg" },
    { id: 2, nome: "Faixa de parabéns", preco: 30, imagem: "faixa.jpg" },
    { id: 3, nome: "Velas decorativas", preco: 20, imagem: "velas.jpg" },
    { id: 4, nome: "Toalha de mesa temática", preco: 40, imagem: "toalha.jpg" },
    { id: 5, nome: "Chapéus de festa", preco: 25, imagem: "chapeus.jpg" },
    { id: 6, nome: "Confetes", preco: 15, imagem: "confetes.jpg" }
];

const carrinhoItens = [];

function renderizarProdutos() {
    const gridProdutos = document.querySelector('.grid-produtos');
    gridProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Aluguel: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        gridProdutos.appendChild(produtoElement);
    });
}

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinhoItens.push(produto);
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinhoItens.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('itens-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    listaCarrinho.innerHTML = '';

    let total = 0;

    carrinhoItens.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarAluguel() {
    if (carrinhoItens.length === 0) {
        alert('Seu carrinho está vazio. Adicione itens antes de finalizar o aluguel.');
    } else {
        alert('Obrigado por alugar conosco! Lembre-se: este é um serviço de ALUGUEL de materiais de decoração.');
        carrinhoItens.length = 0;
        atualizarCarrinho();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    document.getElementById('finalizar-aluguel').addEventListener('click', finalizarAluguel);
});
