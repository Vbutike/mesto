import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
// export { pictureWindowCloseBtn,windowPicture,pictureOpenTitle, pictureOpen };
import {openPopup, closePopup, onOverlayClick} from './utils.js';
// Масив изначальных Карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
const windowEditProfil = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const nameInput = windowEditProfil.querySelector('.popup__input_type_name');
const commentInput = windowEditProfil.querySelector('.popup__input_type_comment');
const nameProfile = document.querySelector('.profile__name');
const comentProfile = document.querySelector('.profile__coment');
const formProfile = windowEditProfil.querySelector('.popup__form');
const modalWindowCloseBtn = document.querySelector('.popup__close-editprofil');
const windowAddCard = document.querySelector('.popup_type_new-card');
const cardWindowCloseBtn = windowAddCard.querySelector('.popup__close-card');
const addButton = document.querySelector('.profile__add-button');
const formAddCard = windowAddCard.querySelector('.popup__form');
const nameInputMesto = windowAddCard.querySelector('.popup__input_type_namemesto');
const inputUrl = windowAddCard.querySelector('.popup__input_type_url');
const cards = document.querySelector('.elements');
// const templateElement = document.querySelector('#element-template').content;
const windowPicture = document.querySelector('.popup_type_picture');
const pictureWindowCloseBtn = windowPicture.querySelector('.popup__close-picture');
// const pictureOpen = windowPicture.querySelector('.popup__picture');
// const pictureOpenTitle = windowPicture.querySelector('.popup__title-picture')

//Функция открытия попапов

let PopupNewCardValidation = undefined

const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active'
}; 

//добавляем в форму действующие значения(имя и коментарий) и открываем попап  Редактирование профиля.
function openWindowEditProfil() {
    nameInput.value = nameProfile.textContent;
    commentInput.value = comentProfile.textContent;
    openPopup(windowEditProfil);
}

// Функция добавления на странницу инфо из попапа Редкатирования профиля
function submitProfileForm (e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  comentProfile.textContent = commentInput.value;
  closePopup(windowEditProfil);
}

//Очищаем и открываем попап Добавления карточки
function openwindowAddCard() {
  nameInputMesto.value="";
  inputUrl.value="";
  PopupNewCardValidation.toggleButtonState();
  openPopup(windowAddCard);
}

//////////////////////////////////////////////////////////////////////////
// Функция добавления в начало уже созданной карточки на страницу
function addCard(whereAdd, templateElement) {
  whereAdd.prepend(templateElement);
};


function createCard (item) {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateCard();
  return cardElement
 };

// Формируем новую карточку входные данные из попапа добавления карточки и добавляем ее на страницу
function createNewCard (evt) {
  evt.preventDefault();
  const item = {
    name: nameInputMesto.value,
    link: inputUrl.value,
}
   addCard(cards, createCard(item));
  closePopup(windowAddCard);
};
///////////////////////////////// СЛУШАТЕЛИ //////////////////////////////////////////
// слушатели на клик мимо попапа
windowEditProfil.addEventListener('click', onOverlayClick);
windowAddCard.addEventListener('click', onOverlayClick);
windowPicture.addEventListener('click', onOverlayClick);
// Добавление новых карточек
formAddCard.addEventListener('submit', createNewCard);
// слушатель на нажатие кнопки 'Сохранить'
formProfile.addEventListener('submit',submitProfileForm);
//слушаем нажатие на конпку для открытия попапов 
editButton.addEventListener('click', openWindowEditProfil);
addButton.addEventListener('click', openwindowAddCard);
// Слушатели на кнопку закрытия попапов
pictureWindowCloseBtn.addEventListener('click',()=>  closePopup(windowPicture));
modalWindowCloseBtn.addEventListener('click',()=>  closePopup(windowEditProfil));
cardWindowCloseBtn.addEventListener('click',()=> closePopup(windowAddCard));
//////////////////////////////////////////////////////////////////////////////////////

initialCards.forEach((item) => {
  createCard (item);
// Добавляем в DOM
  document.querySelector('.elements').append(createCard (item));
});

const enableFormValidation = () => {
  const PopupEditProfilValidation = new FormValidator(enableValidation, windowEditProfil)
  PopupEditProfilValidation.enableValidation()

  PopupNewCardValidation = new FormValidator(enableValidation, windowAddCard)
  PopupNewCardValidation.enableValidation()
};

enableFormValidation();