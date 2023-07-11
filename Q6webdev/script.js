const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
