const itensCarrinho = {}

function addCarrinho(itemNome, itemPreco){
    if(itensCarrinho[itemNome]){
        itensCarrinho[itemNome].quantity++
        itensCarrinho[itemNome].precoTotal += itemPreco
        itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML = itensCarrinho[itemNome].quantity;
        itensCarrinho[itemNome].liItem.querySelector("preco-total").innerHTML = "R$" + itensCarrinho[itemNome.precoTotal].toFixed(2)
    } else {
        const liItem = document.createElement("li")
        liItem.innerHTML = `
        <div class="item">
            <span>${itemNome}</span>
            <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})"> + </button>
        </div>
        `
    }
}