// Pega os elementos do HTML
const btnExplorar = document.getElementById('btn-explorar');
const heroSection = document.getElementById('hero');
const continuacaoSection = document.getElementById('continuacao');

// O que acontece quando clica no botão
btnExplorar.addEventListener('click', () => {
    
    // 1. Faz a primeira tela sumir suavemente
    heroSection.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    heroSection.style.opacity = "0";
    heroSection.style.transform = "scale(0.95)"; // Dá um leve efeito de afastar
    
    // 2. Espera meio segundo (o tempo da tela sumir) para trocar o conteúdo
    setTimeout(() => {
        heroSection.style.display = "none"; // Tira a tela inicial do caminho
        
        // Revela a tela de continuação
        continuacaoSection.classList.remove('escondido');
        continuacaoSection.classList.add('mostrar');
    }, 500); 
});

// Efeito de carregamento inicial (que já tínhamos feito)
window.onload = () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = "1";
    }, 100);
};
