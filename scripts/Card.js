// import {pictureWindowCloseBtn, windowPicture, pictureOpenTitle, pictureOpen } from './script.js'
const windowPicture = document.querySelector('.popup_type_picture');
const pictureWindowCloseBtn = windowPicture.querySelector('.popup__close-picture');
const pictureOpen = windowPicture.querySelector('.popup__picture');
const pictureOpenTitle = windowPicture.querySelector('.popup__title-picture')

export class Card {
  
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    pictureOpenTitle.alt = this._title
    pictureOpenTitle.textContent = this._title
    pictureOpen.src = this._image;
    
    windowPicture.classList.add('popup_opened');
  }

  _handleClosePopup() {
    pictureOpen.src = '';
    windowPicture.classList.remove('popup_opened');
  }

  _hadnleDeletCard(){
    this._element.remove(); 
  }

  _setEventListeners() {
    //Кнопка удалить карточку
    this._element.querySelector('.element__trash-btn').addEventListener('click', this._hadnleDeletCard.bind(this));
    //Слушатель на картинке для открытие попапа с картинкой
    this._element.querySelector('.element__image').addEventListener('click', () => {this._handleOpenPopup();
    });

    pictureWindowCloseBtn.addEventListener('click', () => {
      this._handleClosePopup();
    });

    this._element.querySelector('.element__like-button').addEventListener('click', function(evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle('element__like-button_active');
      });

  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._image;
    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  }
}