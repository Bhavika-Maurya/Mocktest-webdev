const inputBox = document.getElementById('input-box');
const submitBtn = document.getElementById('submit-btn');
const list = document.getElementById('list');

submitBtn.addEventListener('click', function() {
  const userInput = inputBox.value.trim();

  if (userInput !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = userInput;
    list.appendChild(listItem);
    inputBox.value = '';
  }
});
