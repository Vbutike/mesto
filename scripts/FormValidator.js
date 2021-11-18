export class FormValidator {
    constructor(objectSettings, formElement) {
        this._formElement = formElement;
        this._inputSelector = objectSettings.inputSelector;
        this._submitButtonSelector = objectSettings.submitButtonSelector;
        this._inactiveButtonClass = objectSettings.inactiveButtonClass;
        this._inputErrorClass = objectSettings.inputErrorClass;
        this._errorClass = objectSettings.errorClass;
        this._formList= Array.from(formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = formElement.querySelector(this._submitButtonSelector);
    }

// Объявляем функцию появления ошибки ввода 
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
//Проверяем валидность 
     _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
        this._toggleButtonState(this._formList, this._buttonElement);
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

   //Функция рабочего состояния кнопки 

    _toggleButtonState() {
        if (this._hasInvalidInput(this._formList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
           
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled', 'disabled'); 
        }
    };

  //Если форма валидна убираем ошибку 
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
    
// Добавление слушателей 
    _setEventListeners() {
        this._toggleButtonState();
        this._formList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    };

    enableValidation() {

        this._formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}