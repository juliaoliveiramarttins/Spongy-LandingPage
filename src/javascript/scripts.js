$(document).ready(function() {
    // Abrir e fechar o menu quando o botão de menu for clicado
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');  // Alterna a classe 'active' no menu
        $(this).find('i').toggleClass('fa-bars fa-times');  // Alterna o ícone entre "fa-bars" e "fa-times"
    });

    // Fechar o menu quando um item de navegação for clicado
    $('#mobile_nav_list .nav-item').on('click', function() {
        $('#mobile_menu').removeClass('active'); // Remove a classe 'active' para esconder o menu
        $('#mobile_btn').find('i').removeClass('fa-times').addClass('fa-bars');  // Restaura o ícone do menu para "fa-bars"
    });

    // Fechar o menu ao clicar no botão "comprar"
    $('.btn-default').on('click', function() {
        $('#mobile_menu').removeClass('active');  // Fecha o menu quando o botão "comprar" é clicado
        $('#mobile_btn').find('i').removeClass('fa-times').addClass('fa-bars');  // Restaura o ícone do menu
    });

    // ScrollReveal animações (com ajustes para evitar o scroll lateral)
    if (typeof ScrollReveal !== "undefined") {
        // Ajuste do ScrollReveal para evitar scroll lateral
        ScrollReveal().reveal('#cta', {
            origin: 'right',
            duration: 1500,
            distance: '20%',
            scale: 0.85,  // Adicionando um pouco de escala para suavizar a animação
            mobile: true  // Garantindo que o ScrollReveal funcione bem em dispositivos móveis
        });

        ScrollReveal().reveal('#banner', {
            origin: 'right',
            duration: 1500,
            distance: '20%',
            scale: 0.85,  // Adicionando um pouco de escala para suavizar a animação
            mobile: true  // Garantindo que o ScrollReveal funcione bem em dispositivos móveis
        });

        ScrollReveal().reveal('#newproducts', {
            origin: 'left',
            duration: 2000,
            distance: '20%',
            scale: 0.85,  // Adicionando um pouco de escala para suavizar a animação
            mobile: true  // Garantindo que o ScrollReveal funcione bem em dispositivos móveis
        });

        ScrollReveal().reveal('#model', {
            origin: 'left',
            duration: 1000,
            distance: '20%',
            scale: 0.85,  // Adicionando um pouco de escala para suavizar a animação
            mobile: true  // Garantindo que o ScrollReveal funcione bem em dispositivos móveis
        });

        ScrollReveal().reveal('#testimonials', {
            origin: 'right',
            duration: 1500,
            distance: '20%',
            scale: 0.85,  // Adicionando um pouco de escala para suavizar a animação
            mobile: true  // Garantindo que o ScrollReveal funcione bem em dispositivos móveis
        });
    }
});
