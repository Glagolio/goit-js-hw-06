const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

 function handleClickDecremenetButton() {
     counterValue -= 1;
     valueEl.textContent = counterValue;
};

function handleClickIncrementButton() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};


decrementButtonEl.addEventListener('click', handleClickDecremenetButton);
incrementButtonEl.addEventListener('click', handleClickIncrementButton)




