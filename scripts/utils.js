export {openPopup, closePopup, onOverlayClick}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
  }
  
//Функция закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEsc);
  
  }
// Функция закрытия попапов по клавише ECS
function closePopupOnEsc(e) {
    if(e.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
   closePopup(openedPopup);
 }
}

function onOverlayClick(e) {
    if (e.target === e.currentTarget) {
    closePopup(e.currentTarget);
  };
};