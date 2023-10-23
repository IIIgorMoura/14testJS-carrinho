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

            <span class="quantity"> 1 </span>

            <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})"> - </button>

            <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
        </div>
        `

        document.getElementById("itens-lista").appendChild(liItem)

        itensCarrinho[itemNome] = {
            quantity: 1,
            precoTotal: itemPreco,
            liItem: liItem,
        }
    }

    let precoTotal = 0
    for(let itemNome in itensCarrinho) {
        precoTotal += itensCarrinho[itemNome].precoTotal
    }

    document.getElementById("preco-total").innerHTML = "Valor Total "
}