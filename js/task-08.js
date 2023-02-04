const formLink = document.querySelector('.login-form');

formLink.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (password.value === '' || email.value === '') {
        return alert('All fields should be filled!');
    }

    let loginData = { email: email.value, password: password.value };
    console.log(loginData);
    event.currentTarget.reset();
}