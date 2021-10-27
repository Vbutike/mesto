// Объявляем функцию появления ошибки ввода
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(formElement);
    inputElement.classList.add('popup__input_error_active');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
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
      buttonElement.classList.add('popup__submit-btn_disabled');
      buttonElement.setAttribute('disabled', 'disabled');
  } else {
      buttonElement.classList.remove('popup__submit-btn_disabled');
      buttonElement.removeAttribute('disabled', 'disabled');
  }
}; 
  //Если форма валидна убираем ошибку
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_error_active');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };
  
  // Добавление слушателей
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement =  formElement.querySelector(`.popup__submit-btn`);
      inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
  
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    setEventListeners(formElement);
  }); 
  };
enableValidation();

  // enableValidation({
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__button',
  //   inactiveButtonClass: 'popup__button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible'
  // }); 
  
