const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
    event.preventDefault();


    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Йоу! Ти забув заповнити форму! Поверись та дороби справу!')
    };
    const dataForm = {
        email: email.value,
        password: password.value,
    };
    console.log(dataForm);
    event.currentTarget.reset();
}
