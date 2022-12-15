import calc from './modules/calc';
import cards from  './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import openModal from './modules/modal';


window.addEventListener("DOMContentLoaded", () => {
  
  const modalTimer = setTimeout(()=>{openModal('.modal', modalTimer);}, 30000);

  calc();
  cards();
  forms(modalTimer, "form");
  modal(".modal", ["[data-modal]"], modalTimer);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalAmount: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slide-inner"
  });
  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  timer('.timer', "2022-12-19");
  

});
