const objValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};



// Объявляем функцию появления ошибки ввода
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objValidation.errorClass);
  };
 
  //Проверяем валидность 
  const checkInputValidity = (formElement, inputElement) => {
      if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(formElement, inputElement);
    }
  };
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

//Функция рабочего состояния кнопки

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(objValidation.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
  } else {
      buttonElement.classList.remove(objValidation.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', 'disabled');
  }
}; 
  //Если форма валидна убираем ошибку
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(objValidation.inputErrorClass);
    errorElement.classList.remove(objValidation.errorClass);
    errorElement.textContent = '';
  };
  
  // Добавление слушателей
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(objValidation.inputSelector));
    const buttonElement =  formElement.querySelector(objValidation.submitButtonSelector);
      inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
  
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(objValidation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    setEventListeners(formElement);
  }); 
  };

  enableValidation(objValidation); 


  
  
