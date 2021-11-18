 // Объявляем функцию появления ошибки ввода 

// const showInputError = (formElement, inputElement, errorMessage, element) => { 
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 

//     inputElement.classList.add(element.inputErrorClass); 
//     errorElement.textContent = errorMessage; 
//     errorElement.classList.add(element.errorClass); 
//   }; 

  //Проверяем валидность  
  // const checkInputValidity = (formElement, inputElement, element) => { 
  //     if (!inputElement.validity.valid) { 
  //     showInputError(formElement, inputElement, inputElement.validationMessage, element); 
  // } else { 
  //     hideInputError(formElement, inputElement, element); 
  //   } 
  // }; 

  // function hasInvalidInput(inputList) { 
  //   return inputList.some((inputElement) => { 
  //     return !inputElement.validity.valid; 
  //   }); 
  // } 
 
//Функция рабочего состояния кнопки 
 
//   const toggleButtonState = (inputList, buttonElement, element) => { 
//     if (hasInvalidInput(inputList)) { 
      
//       buttonElement.classList.add(element.inactiveButtonClass); 
//       buttonElement.setAttribute('disabled', 'disabled'); 
//   } else { 
//       buttonElement.classList.remove(element.inactiveButtonClass); 
//       buttonElement.removeAttribute('disabled', 'disabled'); 
//   } 
// };  

  // //Если форма валидна убираем ошибку 
  // const hideInputError = (formElement, inputElement, element) => { 
  //   const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  //   inputElement.classList.remove(element.inputErrorClass); 
  //   errorElement.classList.remove(element.errorClass); 
  //   errorElement.textContent = ''; 
  // }; 
   
  // Добавление слушателей 
  // const setEventListeners = (formElement, element) => { 
  //   const inputList = Array.from(formElement.querySelectorAll(element.inputSelector)); 
  //   const buttonElement =  formElement.querySelector(element.submitButtonSelector); 
    
      // inputList.forEach((inputElement) => { 
      // inputElement.addEventListener('input', function () { 
      // checkInputValidity(formElement, inputElement, element); 
      // toggleButtonState(inputList, buttonElement, element); 
//     }); 
//   }); 
// }; 
   
// const enableValidation = (element) => { 
//   const formList = Array.from(document.querySelectorAll(element.formSelector)); 
//     formList.forEach((formElement) => { 
      
//       formElement.addEventListener('submit', function (evt) { 
//         evt.preventDefault(); 
//       }); 
//     setEventListeners(formElement, element); 
//   });  
//   }; 
 
//   enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__submit-btn',
//     inactiveButtonClass: 'popup__submit-btn_disabled',
//     inputErrorClass: 'popup__input_error_active',
//     errorClass: 'popup__input-error_active'
//   }); 
