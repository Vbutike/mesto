export default class UserInfo{
    constructor({nameSelector, commentSelector}) {
      this._name = nameSelector;
      this._about = commentSelector;
      this._inputName = document.querySelector('.popup__input_type_name');
      this._inputAbout = document.querySelector('.popup__input_type_comment');
    }
  setUserInfo(){
      this._name.textContent = this._inputName.value;
      this._about.textContent = this._inputAbout.value;
   
   }
   //добавляем в форму действующие значения(имя и коментарий)
    getUserInfo(){
      this._inputName.value = this._name.textContent;
      this._inputAbout.value = this._about.textContent;

       };
  }
