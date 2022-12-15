import {getResorces} from '../services/services';

function cards () {
    // Cards Class //

  class Card {
    constructor(src, alt, title, descr, price, parentSelector, ...clasess) {
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.src = src;
      this.alt = alt;
      this.clasess = clasess;
      this.transfer = 27;
      this.parent = document.querySelector(parentSelector);
      this.convertToUAH();
    }

    convertToUAH() {
      this.price = Math.round(this.price * this.transfer);
    }

    createCard() {
      const element = document.createElement("div");

      if (this.clasess.length === 0) {
        this.clasess = "menu__item";
        element.classList.add(this.clasess);
      } else {
        this.clasess.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
              `;
      this.parent.append(element);
    }
  }

  

  getResorces('http://localhost:3000/menu')
  .then(data => {
    data.forEach(({img, altimg, title, descr, price}) => {
    new Card(img, altimg, title, descr, price, '.menu .container').createCard();
    });
  });
  
  // axios.get("http://localhost:3000/menu").then((data) => {
  //   data.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new Card(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       ".menu .container"
  //     ).createCard();
  //   });
  // });
}

export default cards;
