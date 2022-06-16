function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorBtnEl = document.querySelector('.change-color');
const textOfColorEl = document.querySelector('.color');


colorBtnEl.addEventListener('click', () => {
  const colorOfBody = getRandomHexColor();
  document.body.style.backgroundColor = colorOfBody;
  textOfColorEl.textContent = colorOfBody;
}
)