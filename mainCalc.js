import { printOutput, printDateDiff } from './output.js';
import { getDatesDif } from './getDateDif.js';

export let mainCalc = () => {

    let form = document.getElementById("calcForm");
    let errorMessage = document.getElementById("result");
    form.onsubmit = (ev) => {
        ev.preventDefault();

        let { firstDate, secondDate } = form.elements;

        if (!firstDate.value || !secondDate.value) {
            printOutput("Заполните все поля", errorMessage);
            return;
        }

        let calcDiff = getDatesDif({ from: firstDate.value, to: secondDate.value });
        printDateDiff(calcDiff, errorMessage);

    }

}
