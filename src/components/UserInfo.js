export default class UserInfo{
    constructor({nameSelector, commentSelector}) {
      this._name = nameSelector;
      this._about = commentSelector;
    }
      
    getUserInfo(){
      const userInfo = {};
      userInfo['name'] = this._name.textContent;
      userInfo['about'] = this._about.textContent;
      return userInfo;
    };

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._about.textContent = userInfo.about ;
    }

   //добавляем в форму действующие значения(имя и коментарий)
    
  }
