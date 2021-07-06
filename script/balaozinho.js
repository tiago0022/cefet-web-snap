const balao = document.querySelector('#balaozinho');
const listaMarcacaoBalao = document.querySelectorAll('.marcacao');

listaMarcacaoBalao.forEach(marcacao => {

    marcacao.addEventListener('mouseover', () => {
        titulo = marcacao.dataset.titulo;
        conteudo = marcacao.dataset.conteudo;
        cor = marcacao.dataset.cor;
        balao.innerHTML = obtemHTMLBalao(titulo, conteudo);
        balao.style.color = cor;
    });

    marcacao.addEventListener('mouseout', () => {
        balao.innerHTML = '';
    });

    marcacao.addEventListener('mousemove', evento => {
        balao.style.left = `${evento.pageX}px`;
        balao.style.top = `${evento.pageY}px`;
    });

});

function obtemHTMLBalao(titulo, conteudo) {
    return `<h2>${titulo}</h2>
            <p>${conteudo}</p>`;
}