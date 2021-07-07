const filtroEl = document.querySelector('#filtro-da-foto');
const fonteEl = document.querySelector('#imagem');

const imagemEl = document.querySelector('.foto-anotada > img');

filtroEl.addEventListener('input', () => {
    imagemEl.style.filter = filtroEl.value;
});

fonteEl.addEventListener('change', event => {
    readImage(event.target.files[0]);
});

// Código adaptado de https://web.dev/read-files/
function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagemEl.src = event.target.result;
    });
    reader.readAsDataURL(file);
}