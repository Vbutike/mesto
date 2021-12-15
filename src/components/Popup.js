export default class Popup {
    constructor(popupSelector) {
        this._container = popupSelector;
    }

    open() {
        document.addEventListener('keydown', this._closePopupOnEsc);
        this._container.classList.add('popup_opened');
    }

    close() {
        this._container.classList.remove('popup_opened');

        document.removeEventListener('keydown', this._closePopupOnEsc);
    }

    _closePopupOnEsc(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _onOverlayClick(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        this._container.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
              this.close();
            }
          })
    }
}