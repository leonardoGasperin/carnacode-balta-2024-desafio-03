window.fadeOutAndShowMainContent = function (fadeOutElement, fadeInElement) {
    let elemento = document.getElementById(fadeOutElement);

    let tempoFadeOut = 2000;

    setTimeout(function () {
        elemento.style.opacity = '0';

        setTimeout(function () {
            let conteudoPrincipal = document.getElementById(fadeInElement);
            conteudoPrincipal.style.display = 'flex';

            setTimeout(function () {
                conteudoPrincipal.style.opacity = '1';
            }, 100);
        }, tempoFadeOut);
    });
};
