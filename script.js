document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.getElementById('botao-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    if (botaoMenu && menuPrincipal) {
        botaoMenu.addEventListener('click', function() {
            
            menuPrincipal.classList.toggle('visivel');
        });
    }
});