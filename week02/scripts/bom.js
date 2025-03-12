const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const output = document.querySelector('#list');

button.addEventListener('click', () => {
    const inputValue = input.value.trim(); // Get the input value and trim whitespace

    if (inputValue === "") {
        input.focus(); 
        return;
    }

    const li = document.createElement('li');
    const delBtn = document.createElement('button');

    li.textContent = inputValue;
    delBtn.textContent = '❌';

    li.appendChild(delBtn);
    output.appendChild(li);

    delBtn.addEventListener('click', () => {
        output.removeChild(li);
        input.focus();
    });

    input.value = ""; 
    input.focus(); 
});
