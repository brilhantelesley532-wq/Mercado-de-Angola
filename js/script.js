// ==========================================
// MERCADO DE ANGOLA - SCRIPT PRINCIPAL
// ==========================================

// --- MENU MOBILE ---
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('mostrar');
        });
    }

    // --- FORMULÁRIOS ---
    const formLogin = document.getElementById('formLogin');
    if(formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login realizado com sucesso! Redirecionando...');
            window.location.href = "perfil.html";
        });
    }

    const formCadastro = document.getElementById('formCadastro');
    if(formCadastro) {
        formCadastro.addEventListener('submit', function(e) {
            e.preventDefault();
            if(document.getElementById('aceitoTermos').checked) {
                alert('Conta criada com sucesso! Bem-vindo ao Mercado de Angola.');
                window.location.href = "perfil.html";
            } else {
                alert('Você precisa aceitar os Termos e Condições para continuar.');
            }
        });
    }

    // --- GEOLOCALIZAÇÃO ---
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(posicao) {
            console.log("Localização obtida:", posicao.coords.latitude, posicao.coords.longitude);
            // Aqui o sistema usará a localização para mostrar anúncios próximos
        });
    }
});

// --- SISTEMA DE ANÚNCIOS VAZIO ---
// Os dados serão adicionados pelos usuários, o sistema começa limpo
let anuncios = [];

// --- FUNÇÕES DE SEGURANÇA E VALIDAÇÃO ---
function validarTelefone(numero) {
    return /^9[0-9]{8}$/.test(numero);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
