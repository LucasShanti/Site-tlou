document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const aventuraSection = document.querySelector('.aventura-section');
    const aventuraPosition = aventuraSection.offsetTop;
    const maxBlur = 8; // Valor máximo do blur em pixels

    // Calcula a porcentagem do scroll em relação à seção aventura
    const scrollPercentage = Math.min(scrollPosition / aventuraPosition, 1);

    // Aplica o blur gradualmente
    if (scrollPosition > 50) { // Começa o efeito após rolar 50px
        document.body.classList.add('scrolled');
        const blurValue = scrollPercentage * maxBlur;
        document.getElementById('bg-video').style.filter = `blur(${blurValue}px)`;
    } else {
        document.body.classList.remove('scrolled');
        document.getElementById('bg-video').style.filter = 'blur(0px)';
    }
});