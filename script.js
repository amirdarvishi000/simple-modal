'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const closeFn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
overlay.addEventListener('click', closeFn);
closeModal.addEventListener('click', closeFn);
document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key == 'Escape') {
    closeFn();
  }
});
console.log(modal);
