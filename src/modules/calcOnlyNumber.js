//Расчитать стоимость
import {checkNumber} from "./modules/check";
const calcOnlyNumber = () => {
    const calc = document.getElementById('calc');
    calc.addEventListener('keydown', (event) => {
        if(event.target.matches('input.calc-item')){
            if(checkNumber(event.key) !== true){
                event.preventDefault();
                return false;
            }
        }
    });
};
export default calcOnlyNumber;