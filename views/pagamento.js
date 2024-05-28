var carrinho = JSON.parse(localStorage.getItem('carrinho')) || { itens: [] };

function getTotalFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const total = urlParams.get('total');
  return total ? total : 'R$ 0.00';
}

function atualizarCarrinho() {
  var tbody = document.querySelector('#tabela-carrinho tbody');
  tbody.innerHTML = '';

  carrinho.itens.forEach(item => {
    var linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${item.nome}</td>
      <td>R$ ${item.preco.toFixed(2)}</td>
      <td>
        <div class="qty">
          <button onclick="decrementarQuantidade('${item.nome}', ${item.preco})">-</button>
          <span>${item.quantidade}</span>
          <button onclick="incrementarQuantidade('${item.nome}', ${item.preco})">+</button>
        </div>
      </td>
      <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
      <td><button onclick="removerItem('${item.nome}', ${item.preco})">Remover</button></td>
    `;
    tbody.appendChild(linha);
  });

  atualizarTotal();
}


function decrementarQuantidade(nome, preco) {
  var itemIndex = carrinho.itens.findIndex(item => item.nome === nome);
  if (itemIndex !== -1) {
    carrinho.itens[itemIndex].quantidade--;
    if (carrinho.itens[itemIndex].quantidade === 0) {
      carrinho.itens.splice(itemIndex, 1); 
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
  }
}

function incrementarQuantidade(nome, preco) {
  var itemIndex = carrinho.itens.findIndex(item => item.nome === nome);
  if (itemIndex !== -1) {
    carrinho.itens[itemIndex].quantidade++;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
  }
}

function removerItem(nome, preco) {
  carrinho.itens = carrinho.itens.filter(item => item.nome !== nome);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

function atualizarTotal() {
  var subtotal = carrinho.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  document.getElementById('subtotal').textContent = 'R$ ' + subtotal.toFixed(2);
  document.getElementById('total').textContent = getTotalFromURL();
}

atualizarCarrinho();