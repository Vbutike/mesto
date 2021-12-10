export default class Section {
    constructor({items, renderer}, selector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItem(){
        this.clear();
        this._items.forEach((item) => {
          this._renderer(item);
        });
      }

    addItem(element) {
        this._container.prepend(element);
    }
   
    clear() {
        this._container.innerHTML = '';
      }
 }


