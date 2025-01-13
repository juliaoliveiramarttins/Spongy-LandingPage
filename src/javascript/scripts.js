$(document).ready(function() {
    // Abrir e fechar o menu quando o botão de menu for clicado
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');  // Alterna a classe 'active' no menu
        $('#mobile_btn').find('i').toggleClass('fa-x');  // Alterna o ícone entre "fa-bars" e "fa-x"
    });

    // Fechar o menu quando um item de navegação for clicado
    $('#mobile_nav_list .nav-item').on('click', function() {
        $('#mobile_menu').removeClass('active'); // Remove a classe 'active' para esconder o menu
        $('#mobile_btn').find('i').removeClass('fa-x');  // Restaura o ícone do menu para "fa-bars"
    });

    // Fechar o menu ao clicar no botão "comprar"
    $('.btn-default').on('click', function() {
        $('#mobile_menu').removeClass('active');  // Fecha o menu quando o botão "comprar" é clicado
        $('#mobile_btn').find('i').removeClass('fa-x');  // Restaura o ícone do menu
    });
});
