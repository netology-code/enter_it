const modalBtn = document.getElementById('contact-us-button');
const modalCloseBtn = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalLinks = Array.from(document.querySelectorAll('.modal-link'));

modalBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('modal-active');
});

modalCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal-active');
});

for (modalLink of modalLinks) {
    modalLink.addEventListener('click', function() {
        modal.classList.remove('modal-active');
    })
};

modal.addEventListener('click', function(event) {
    if (event.target != modalContent) {
        modal.classList.remove('modal-active');
    }
});