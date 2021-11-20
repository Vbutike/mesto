export class Card {
  
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._popup = document.querySelector('.popup_type_picture');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleCardClick() {
    this._popup.querySelector('.popup__picture').src = this._element.querySelector('.element__image').src;
    this._popup.querySelector('.popup__picture').alt = this._element.querySelector('.element__title').alt;
    this._popup.querySelector('.popup__title-picture').textContent = this._element.querySelector('.element__title').textContent;
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this._popup.classList.remove('popup_opened');
      } 
    });
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
    this._element.querySelector('.element__image').addEventListener('click', () => {this._handleCardClick();
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