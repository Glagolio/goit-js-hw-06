const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// Щоб при першому натисканні на input розмір шріфта не змінювався ривком
// ======================================================================
textEl.style.fontSize = inputEl.value + 'px';
// ======================================================================

inputEl.addEventListener('input', () => {
    textEl.style.fontSize = inputEl.value + 'px';
});
    