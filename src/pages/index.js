import './index.css';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {enableValidation, windowEditProfil, editButton, nameInput, commentInput, nameProfile, comentProfile, windowPicture, pictureWindowCloseBtn,
  formProfile, modalWindowCloseBtn, windowAddCard, cardWindowCloseBtn, addButton, formAddCard, nameInputMesto, inputUrl, cards,
  initialCards} from '../utils/constants.js';
 //import {openPopup, closePopup, onOverlayClick} from './utils.js';
let PopupNewCardValidation = undefined

//валидация
const enableFormValidation = () => {
  const PopupEditProfilValidation = new FormValidator(enableValidation, windowEditProfil)
  PopupEditProfilValidation.enableValidation()

  PopupNewCardValidation = new FormValidator(enableValidation, windowAddCard)
  PopupNewCardValidation.enableValidation()
};
enableFormValidation();

//попап с картинкой
const popupImage = new PopupWithImage(windowPicture);
popupImage.setEventListeners();

//добавления новой карточки
const addCardForm = new PopupWithForm(windowAddCard, {handleFormSubmit: (inputValues) =>{
  createCard(inputValues);
  
}});
addCardForm.setEventListeners();

// формируем  экземляр  Card 
const createCard = (data) => {
  const element = new Card({name:data.name, link:data.link, handleCardClick: () => {
  popupImage.open({name:data.name, link:data.link});
 }},'#element-template').generateCard();
 cardList.addItem(element);
};

// рендерим начальный пул карточек
const cardList = new Section({items:initialCards, renderer: (item) =>{
  createCard(item);
}}, '.elements');


//  Слушатель клика по кнопке добавления карточки
addButton.addEventListener('click', () => {
  addCardForm.open();
});
// Слушатель на кнопке редактора профиля
editButton.addEventListener('click', () => {
  profile.getUserInfo();
  profileForm.open();
});


//Редактор профиля
const profile = new UserInfo({nameSelector:nameProfile, commentSelector:comentProfile});
const  profileForm = new PopupWithForm(windowEditProfil, {handleFormSubmit: ()=>{
profile.setUserInfo();
}});
profileForm.setEventListeners();

cardList.renderItem();
