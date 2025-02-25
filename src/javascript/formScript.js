function goToPart2() {
    console.log("Função goToPart2 acionada");
    // Esconde a Parte 1
    document.getElementById("part1").style.display = "none";
    
    // Exibe a Parte 2
    document.getElementById("part2").style.display = "block";
    
    // Mostra a seção de opções de pagamento
    document.getElementById("paymentSelection").style.display = "block";
}


// Função de atualização do preço, com base na quantidade
function updatePrice() {
    const quantity = document.getElementById("quantity").value;
    const unitPrice = parseFloat(document.getElementById("unitPrice").innerText);
    const totalPrice = unitPrice * quantity;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    document.getElementById("finalTotal").innerText = totalPrice.toFixed(2);
}

// Função para mostrar campos de pagamento com base na escolha do método
function showPaymentFields() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    
    // Esconde todos os campos de pagamento
    document.getElementById("creditCardFields").style.display = "none";
    document.getElementById("boletoFields").style.display = "none";
    document.getElementById("paypalFields").style.display = "none";
    
    // Mostra os campos específicos do método de pagamento
    if (paymentMethod === "creditCard") {
        document.getElementById("creditCardFields").style.display = "block";
    } else if (paymentMethod === "boleto") {
        document.getElementById("boletoFields").style.display = "block";
    } else if (paymentMethod === "paypal") {
        document.getElementById("paypalFields").style.display = "block";
    }
}

// Função para voltar para a Parte 1
function goBack() {
    // Esconde a Parte 2
    document.getElementById("part2").style.display = "none";
    
    // Exibe a Parte 1
    document.getElementById("part1").style.display = "block";
}

// Função para finalizar a compra
function submitOrder() {
    alert("Compra finalizada com sucesso!");
    // Aqui você pode implementar a lógica de envio do pedido
}


