let valorTotal=0;
document.getElementById('lista-produtos').innerHTML='';
document.getElementById('valor-total').textContent='R$ 0'
function adicionar() {
    const produtoSelect = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const produtoTexto = produtoSelect.value;
    if (typeof produtoTexto !== 'string') {
        alert("Erro: produtoTexto não é uma string.");
        return; 
    }
    const quantidade = parseInt(quantidadeInput.value);
        if(isNaN(quantidade)||quantidade<=0){
        alert('Por favor insira uma quantidade válida!');
        return;
    }
    const produtoPrecoTexto = produtoTexto.split(' - R$')[1];
    const produtoNome = produtoTexto.split(' - R$')[0];
    const produtoPreco = parseFloat(produtoPrecoTexto);
    const totalProduto = produtoPreco * quantidade;
    valorTotal+=totalProduto;
    const listaProdutos = document.getElementById('lista-produtos');
    const itemCarrinho = document.createElement('section');
    itemCarrinho.className = 'carrinho__produtos__produto';
    itemCarrinho.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${totalProduto.toFixed(2)}</span>`;
    listaProdutos.appendChild(itemCarrinho);
    document.getElementById('valor-total').textContent = `R$${valorTotal.toFixed(2)}`;
    document.getElementById('quantidade').value=0;
}
function limpar(){
    valorTotal = 0;
    let listaProdutos = document.getElementById('lista-produtos');
    while (listaProdutos.firstChild) {
        listaProdutos.removeChild(listaProdutos.firstChild);
    }
    document.getElementById('valor-total').textContent = 'R$0.00';
}