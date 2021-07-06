const paiMarcacoes = document.querySelector('body');
const listaMarcacaoControle = document.querySelectorAll('.marcacao');

const ocultaMarcacao = document.querySelector('#visibilidade-das-marcacoes');
const xMarcacao = document.querySelector('#x-da-marcacao');
const yMarcacao = document.querySelector('#y-da-marcacao');
const larguraMarcacao = document.querySelector('#largura-da-marcacao');
const alturaMarcacao = document.querySelector('#altura-da-marcacao');

let marcacaoAtual = document.querySelector('.selecionada');

ocultaMarcacao.addEventListener('input', () => {
    paiMarcacoes.classList.toggle(ocultaMarcacao.value, ocultaMarcacao.checked);
});

listaMarcacaoControle.forEach(marcacao => {

    marcacao.addEventListener('click', () => {
        marcacaoAtual.classList.remove('selecionada');
        marcacaoAtual = marcacao;
        marcacaoAtual.classList.add('selecionada');
    });

});