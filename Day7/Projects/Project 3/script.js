const ul = document.querySelector('ul');
const input = document.querySelector('#newitem');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');

addBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value !== '') {
        const li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
        input.value = '';
    }
});

removeBtn.addEventListener('click', () => {
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
});
