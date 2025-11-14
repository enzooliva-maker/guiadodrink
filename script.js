// Aguarda o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', () => {

    // Encontra o botão e o corpo da página
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema (dark ou light)
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️'; // Ícone de sol
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            toggleButton.textContent = '🌙'; // Ícone de lua
            localStorage.setItem('theme', 'light');
        }
    }

    // --- LÓGICA PRINCIPAL ---

    // 1. Verifica se o usuário JÁ escolheu um tema manualmente
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Se sim, aplica o tema que ele salvou
        applyTheme(savedTheme);
    } else {
        // 2. Se não, verifica a preferência do SISTEMA OPERACIONAL
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // 3. Adiciona o "escutador" de clique no botão
    toggleButton.addEventListener('click', () => {
        // Verifica se o modo escuro está ativo e inverte
        const isDarkMode = body.classList.contains('dark-mode');
        applyTheme(isDarkMode ? 'light' : 'dark');
    });

});