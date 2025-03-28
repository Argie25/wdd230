const rangeValue = document.querySelector('.rangeValue');
const range = document.querySelector('#rating');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
};

function validateForm() {
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== password2) {
        errorMessage.style.display = 'block';
        return false;

    } else {
        errorMessage.style.display = 'none';
        return true;
    }
};