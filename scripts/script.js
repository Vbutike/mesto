const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const aboutProjectLink = document.querySelector('.profile__edit-button');

function openModalWindow() {
    modalWindow.classList.remove('popup_is-close')
    modalWindow.classList.add('popup_is-opened')
}

function closeModalWindow() {
    modalWindow.classList.add('popup_is-close')
}

aboutProjectLink.addEventListener('click', openModalWindow);
modalWindowCloseBtn.addEventListener('click', closeModalWindow);

function onOverlayClick(e) {
    if (e.target === e.currentTarget) {
        closeModalWindow();
    }
}

modalWindow.addEventListener('click', onOverlayClick);

let nameInput = modalWindow.querySelector('.popup__input-text_type_name');
let jobInput = modalWindow.querySelector('.popup__input-text_type_comment');
let nameprofile = document.querySelector('.profile__name');
let comentprofile = document.querySelector('.profile__coment');
const form = modalWindow.querySelector('.popup__input');

function exchange (e) {
    e.preventDefault();
    nameprofile.textContent = nameInput.value;
    comentprofile.textContent = jobInput.value;
    closeModalWindow();
}

form.addEventListener('submit',exchange); 