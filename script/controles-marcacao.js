const paiMarcacoesEl = document.querySelector('body');
const listaMarcacaoControleEl = document.querySelectorAll('.marcacao');

const ocultaMarcacaoEl = document.querySelector('#visibilidade-das-marcacoes');

const xMarcacaoEl = document.querySelector('#x-da-marcacao');
const yMarcacaoEl = document.querySelector('#y-da-marcacao');
const larguraMarcacaoEl = document.querySelector('#largura-da-marcacao');
const alturaMarcacaoEl = document.querySelector('#altura-da-marcacao');

const tituloEl = document.querySelector('#titulo-da-marcacao');
const conteudoEl = document.querySelector('#conteudo-da-marcacao');
const corEl = document.querySelector('#cor-da-marcacao');

const listaFormato = ['formato-oval', 'formato-retangular'];
const listaFormatoEl = listaFormato.map(formato => document.querySelector(`input[value="${formato}"]`));

let marcacaoAtualEl = document.querySelector('.selecionada');
marcacaoParaFormulario();

ocultaMarcacaoEl.addEventListener('input', () => {
    paiMarcacoesEl.classList.toggle(ocultaMarcacaoEl.value, ocultaMarcacaoEl.checked);
});

listaMarcacaoControleEl.forEach(marcacaoEl => {

    marcacaoEl.addEventListener('click', () => {

        marcacaoAtualEl.classList.remove('selecionada');
        marcacaoAtualEl = marcacaoEl;
        marcacaoAtualEl.classList.add('selecionada');

        marcacaoParaFormulario();

    });

});

function marcacaoParaFormulario() {
    if (marcacaoAtualEl) {

        xMarcacaoEl.value = parseInt(marcacaoAtualEl.style.left);
        yMarcacaoEl.value = parseInt(marcacaoAtualEl.style.top);
        larguraMarcacaoEl.value = parseInt(marcacaoAtualEl.style.width);
        alturaMarcacaoEl.value = parseInt(marcacaoAtualEl.style.height);

        tituloEl.value = marcacaoAtualEl.dataset.titulo;
        conteudoEl.value = marcacaoAtualEl.dataset.conteudo;
        corEl.value = marcacaoAtualEl.dataset.cor;

        listaFormatoEl.forEach(formatoEl => {
            formatoEl.checked = marcacaoAtualEl.classList.contains(formatoEl.value);
        });

    }
}

xMarcacaoEl.addEventListener('input', () => {
    marcacaoAtualEl.style.left = `${xMarcacaoEl.value}px`;
});

yMarcacaoEl.addEventListener('input', () => {
    marcacaoAtualEl.style.top = `${yMarcacaoEl.value}px`;
});

larguraMarcacaoEl.addEventListener('input', () => {
    marcacaoAtualEl.style.width = `${larguraMarcacaoEl.value}px`;
});

alturaMarcacaoEl.addEventListener('input', () => {
    marcacaoAtualEl.style.height = `${alturaMarcacaoEl.value}px`;
});

tituloEl.addEventListener('input', () => {
    marcacaoAtualEl.dataset.titulo = tituloEl.value;
});

conteudoEl.addEventListener('input', () => {
    marcacaoAtualEl.dataset.conteudo = conteudoEl.value;
});

corEl.addEventListener('input', () => {
    marcacaoAtualEl.dataset.cor = corEl.value;
});

listaFormatoEl.forEach(formatoEl => {
    formatoEl.addEventListener('input', () => {
        listaFormato.forEach(formato => marcacaoAtualEl.classList.remove(formato));
        marcacaoAtualEl.classList.add(formatoEl.value);
    });
});
