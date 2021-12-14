export default class Popup {
    constructor(popupSelector) {
        this._container = popupSelector;
        this._closeBtn =this._container.querySelector('.popup__close');

        this._closePopupOnEsc = this._closePopupOnEsc.bind(this);
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
        this._closeBtn.addEventListener('click', this.close.bind(this));
        this._container.addEventListener('click', this._onOverlayClick.bind(this));
    }
}