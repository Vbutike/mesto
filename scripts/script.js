const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const aboutProjectLink = document.querySelector('.profile__edit-button');

function editProfileWindow() {
modalWindow.classList.toggle('popup_is-opened');
}

aboutProjectLink.addEventListener('click', editProfileWindow);
modalWindowCloseBtn.addEventListener('click', editProfileWindow);

function onOverlayClick(e) {
    if (e.target === e.currentTarget) {
        editProfileWindow();
    }
}

modalWindow.addEventListener('click', onOverlayClick);

const form = modalWindow.querySelector('.popup__input');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e);
    let nameInput = modalWindow.querySelector('.input__text_type_name');
    let jobInput = modalWindow.querySelector('.input__text_type_comment');
    let nameprofile = document.querySelector('.profile__name');
    let comentprofile = document.querySelector('.profile__coment');
    nameprofile.textContent = nameInput.value;
    comentprofile.textContent = jobInput.value;
    editProfileWindow();
});