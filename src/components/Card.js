export default class Card {
  
  constructor({item, handleCardClick}, cardSelector) {
    this._item = item;
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
    this._element.querySelector('.element__image').addEventListener('click', () => {this._handleCardClick(this._item);
    });

    this._element.querySelector('.element__like-button').addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like-button_active');
    });

  }

  generateCard() {
    const {name, link} = this._item
    console.log(this._item)
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = link;
    this._element.querySelector('.element__image').alt = name;
    this._element.querySelector('.element__title').textContent = name;
    
    return this._element;
  }
}