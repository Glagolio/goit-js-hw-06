function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls > input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');


function createBoxes() {
  const manyDivs = [];
  
  for (let i = 1; i <= inputEl.value; i += 1) {
    const colorOfDiv = getRandomHexColor();
    
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + (i - 1) * 10}px`;
    newDiv.style.height = `${30 + (i - 1) * 10}px`;
    newDiv.style.backgroundColor = colorOfDiv;

    manyDivs.push(newDiv);
  }
  boxesEl.append(...manyDivs);

};

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = null;
}



btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes)

