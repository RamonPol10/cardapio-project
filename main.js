    // Seleciona todos os botões 'Adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');

// Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');

// Seleciona o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');

// Cria variável que armazena o total do pedido
let total = 0;

// Função que adiciona itens ao pedido
function adicionarAoPedido(nome, preco) {
    // Cria um novo item de lista <li> para adicionar o produto ao pedido
    const itemPedido = document.createElement('li');
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    // Adiciona o item criado à lista de pedidos
    listaPedido.appendChild(itemPedido);

    // Atualiza o total da compra
    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona o evento de clique para cada botão 'Adicionar'
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.closest('.produto'); // Pega o produto que foi clicado

        // Obtém o nome do produto a partir do texto da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        // Obtém o preço do produto, removendo o texto "R$" e convertendo o valor para decimal
        const preco = parseFloat(produto.querySelector('.preço').textContent.replace('R$', '').trim());

        // Adiciona o item ao pedido e atualiza o total
        adicionarAoPedido(nome, preco);
    });
});

// Evento para finalizar o pedido
const botaoFinalizar = document.getElementById('finalizar-pedido');
botaoFinalizar.addEventListener('click', () => {
    alert(`Pedido Finalizado com Sucesso! Total: R$ ${total.toFixed(2)}`);
    // Limpar o pedido após finalizar
    listaPedido.innerHTML = '';
    total = 0;
    totalElemento.textContent = `Total: R$ 0,00`;
});