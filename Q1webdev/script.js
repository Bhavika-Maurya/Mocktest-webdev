const box = document.getElementById('box');

box.addEventListener('click', function() {
  if (box.style.backgroundColor === 'red') {
    box.style.backgroundColor = 'yellow';
    box.style.transform = 'scale(2)';
  } else {
    box.style.backgroundColor = 'red';
    box.style.transform = 'scale(1)';
  }
});
