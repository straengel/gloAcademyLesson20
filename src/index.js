'use strict';
import countTimer from "./modules/countTimer";
import calcOnlyNumber from "./modules/calcOnlyNumber";
import calc from "./modules/calc";
import changeImg from "./modules/changeImg";
import sendForm from "./modules/sendForm";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";

//таймер
countTimer('26 july 2019');

//меню
toggleMenu();

//popup
togglePopUp();

//табы
tabs();

//слайдер
slider();

//Наша команда изменение фоток
changeImg();

//Расчитать стоимость
calcOnlyNumber();

//Калькулятор
calc(100);

//send-ajax-form
sendForm(document.getElementById('form1'));
sendForm(document.getElementById('form2'));
sendForm(document.getElementById('form3'));