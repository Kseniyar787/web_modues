import css from "../css/style.css";
import { mainForTimer } from './mainForTimer.js';
import { mainCalc } from './mainCalc.js';


let timerInit = false;
let calcInit = false;

let toggleBtnCalc = document.getElementById('calcChChoice');
let toggleBtnTimer = document.getElementById('timerChoice');

let CalcForm = document.getElementById('calcForm');
let TimerForm = document.getElementById('timerForm');

toggleBtnCalc.addEventListener('click', () => {
    CalcForm.classList.remove("hid");
    TimerForm.classList.add("hid");
    if (!calcInit) {
        mainCalc();
        calcInit = true;
    }
});

toggleBtnTimer.addEventListener('click', () => {
    CalcForm.classList.add("hid");
    TimerForm.classList.remove("hid");
    if (!timerInit) {
        mainForTimer();
        timerInit = true;
    }
}
);
