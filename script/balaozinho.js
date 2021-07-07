const balaoEl = document.querySelector('#balaozinho');
const listaMarcacaoBalaoEl = document.querySelectorAll('.marcacao');

listaMarcacaoBalaoEl.forEach(marcacaoEl => {

    marcacaoEl.addEventListener('mouseover', () => {
        titulo = marcacaoEl.dataset.titulo;
        conteudo = marcacaoEl.dataset.conteudo;
        cor = marcacaoEl.dataset.cor;
        balaoEl.innerHTML = obtemHTMLBalao(titulo, conteudo);
        balaoEl.style.color = cor;
    });

    marcacaoEl.addEventListener('mouseout', () => {
        balaoEl.innerHTML = '';
    });

    marcacaoEl.addEventListener('mousemove', evento => {
        balaoEl.style.left = `${evento.pageX}px`;
        balaoEl.style.top = `${evento.pageY}px`;
    });

});

function obtemHTMLBalao(titulo, conteudo) {
    return `<h2>${titulo}</h2>
            <p>${conteudo}</p>`;
}