const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const keyboard = document.getElementById('keyboard');
    const textInput = document.getElementById('textInput');

letters.forEach(letter => {
const btn = document.createElement('button');
btn.classList.add('key');
btn.textContent = letter;
btn.addEventListener('click', () => {
    textInput.value += letter;
});
    keyboard.appendChild(btn);
});

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('key', 'delete');
deleteBtn.textContent = 'Xóa';
deleteBtn.addEventListener('click', () => {
    textInput.value = textInput.value.slice(0, -1);
});
keyboard.appendChild(deleteBtn);