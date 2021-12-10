import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selector, {handleFormSubmit}) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._container.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
       this._data = {};
        this._inputList.forEach((input) => {
            this._data[input.name] = input.value;
        });
        return this._data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            
            this.close();
        });
        
    }

    close() {
        super.close();
        this._form.reset();
    }
}