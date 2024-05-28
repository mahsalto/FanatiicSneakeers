function adicionarAoCarrinho(nome, preco) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || { itens: [] };
  
    var itemIndex = carrinho.itens.findIndex(item => item.nome === nome);
  
    if (itemIndex !== -1) {
        carrinho.itens[itemIndex].quantidade++;
    } else {
        carrinho.itens.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }
  
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    window.location.href = 'carrinho.html';
  }