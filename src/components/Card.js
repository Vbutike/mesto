export default class Card {
  
  constructor({name,link, handleCardClick}, cardSelector) {
    this._title = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
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
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  }
}