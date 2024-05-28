const tamanhos = ["36", "37", "38", "39", "40", "41", "42"];
  const container = document.getElementById("tamanhos");

  tamanhos.forEach(tamanho => {
    const button = document.createElement("button");
    button.textContent = tamanho;
    button.classList.add("tamanho");
    button.addEventListener("click", () => selecionarTamanho(tamanho));
    container.appendChild(button);
  });

  let tamanhoSelecionado = null;

  function selecionarTamanho(tamanho) {
    if (tamanhoSelecionado) {
      tamanhoSelecionado.classList.remove("active");
    }
    tamanhoSelecionado = event.target;
    tamanhoSelecionado.classList.add("active");
  }


var itemCount = 1;
var itemCountElement = document.getElementById("itemCount");
document.getElementById("addItemBtn").addEventListener("click", function() {
  
  itemCount++;
  
  itemCountElement.textContent = itemCount;
});


document.getElementById("removeItemBtn").addEventListener("click", function() {

  if (itemCount > 1) {
    itemCount--;

    itemCountElement.textContent = itemCount;
  }
});


document.getElementById("addToCartBtn").addEventListener("click", function() {

  var selectedSize = document.querySelector(".active").textContent;

  alert("Tênis adicionado ao carrinho. Tamanho selecionado: " + selectedSize + ", Quantidade: " + itemCount);
});
