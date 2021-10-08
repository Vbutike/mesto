const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const aboutProjectLink = document.querySelector('.profile__edit-button');

let nameInput = modalWindow.querySelector('.popup__input-text_type_name');
let jobInput = modalWindow.querySelector('.popup__input-text_type_comment');
let nameprofile = document.querySelector('.profile__name');
let comentprofile = document.querySelector('.profile__coment');
const form = modalWindow.querySelector('.popup__input');

function openModalWindow() {
    nameInput.value = nameprofile.textContent;
    jobInput.value = comentprofile.textContent; 
    modalWindow.classList.add('popup_opened')
}

function closeModalWindow() {
    modalWindow.classList.remove('popup_opened')
}

aboutProjectLink.addEventListener('click', openModalWindow);
modalWindowCloseBtn.addEventListener('click', closeModalWindow);

function onOverlayClick(e) {
    if (e.target === e.currentTarget) {
        closeModalWindow();
    }
}

modalWindow.addEventListener('click', onOverlayClick);

function exchange (e) {
    e.preventDefault();
    nameprofile.textContent = nameInput.value;
    comentprofile.textContent = jobInput.value;
    closeModalWindow();
}

form.addEventListener('submit',exchange); 