export const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_error_active',
    errorClass: 'popup__input-error_active'
  }; 

  export const initialCards = [
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
  export const windowEditProfil = document.querySelector('.popup_type_edit');
  export const editButton = document.querySelector('.profile__edit-button');
  export const nameInput = windowEditProfil.querySelector('.popup__input_type_name');
  export const commentInput = windowEditProfil.querySelector('.popup__input_type_comment');
  export const nameProfile = document.querySelector('.profile__name');
  export const comentProfile = document.querySelector('.profile__coment');
  export const formProfile = windowEditProfil.querySelector('.popup__form');
  export const modalWindowCloseBtn = document.querySelector('.popup__close-editprofil');
  export const windowAddCard = document.querySelector('.popup_type_new-card');
  export const cardWindowCloseBtn = windowAddCard.querySelector('.popup__close-card');
  export const addButton = document.querySelector('.profile__add-button');
  export const formAddCard = windowAddCard.querySelector('.popup__form');
  export const nameInputMesto = windowAddCard.querySelector('.popup__input_type_namemesto');
  export const inputUrl = windowAddCard.querySelector('.popup__input_type_url');
  export const cards = document.querySelector('.elements');
  // const templateElement = document.querySelector('#element-template').content;
  export const windowPicture = document.querySelector('.popup_type_picture');
  export const pictureWindowCloseBtn = windowPicture.querySelector('.popup__close-picture');
  export const pictureOpen = windowPicture.querySelector('.popup__picture');
  export const pictureOpenTitle = windowPicture.querySelector('.popup__title-picture')