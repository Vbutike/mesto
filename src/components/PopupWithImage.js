import Popup from "./Popup.js";
import {pictureOpenTitle, pictureOpen} from '../utils/constants.js';
export default class PopupWithImage extends Popup {
        constructor(selector) {
        super(selector);
    }
       open({name, link}) {

        super.open();
        
        pictureOpen.src = link;
        pictureOpenTitle.alt = name;
        pictureOpenTitle.textContent = name;
        
    }
}