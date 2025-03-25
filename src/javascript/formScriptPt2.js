// Função que é chamada ao clicar em "Continuar para pagamento"
function goToPart2() {
    console.log("Função goToPart2 acionada");

    // Coleta os dados da Parte 1
    const productName = document.getElementById("productName").innerText;
    const quantity = document.getElementById("quantity").value;
    const unitPrice = parseFloat(document.getElementById("unitPrice").innerText);
    const totalPrice = (unitPrice * quantity).toFixed(2); // Calculando o preço total
    const productImage = document.getElementById("productImage").src; // Coletando a URL da imagem do produto

    // Atualiza a Parte 2 com esses dados
    document.getElementById("cartSummary").innerHTML = `
        <div>
            <img src="${productImage}" alt="${productName}" style="width: 100px; height: auto;">
            <h3>Produto: ${productName}</h3>
            <p>Quantidade: ${quantity}</p>
            <p>Total: R$ ${totalPrice}</p>
        </div>
    `;
    document.getElementById("finalTotal").innerText = totalPrice;

    // Esconde a Parte 1
    document.getElementById("part1").style.display = "none";
    
    // Exibe a Parte 2
    document.getElementById("part2").style.display = "block";
    
    // Mostra a seção de opções de pagamento
    document.getElementById("paymentSelection").style.display = "block";
}
