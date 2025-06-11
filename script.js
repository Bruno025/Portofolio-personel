document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Animation d'apparition du contenu principal
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = 0;
        mainContent.style.transition = 'opacity 1s';
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 300);
    }

    // Exemple : Bouton pour revenir en haut de la page
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑ Haut de page';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '30px';
    backToTopBtn.style.right = '30px';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.padding = '10px 15px';
    backToTopBtn.style.borderRadius = '5px';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.background = '#333';
    backToTopBtn.style.color = '#fff';
    backToTopBtn.style.cursor = 'pointer';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});