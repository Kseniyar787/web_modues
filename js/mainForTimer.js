import { printOutput } from './output.js';
import { playSound, stopSound, playSounForEnd } from './sound.js';

export let mainForTimer = () => {
    let startCounter;
    const statusStart = "Старт";
    const statusStop = "Стоп";
    let timeCounter = document.getElementById("timeCount");
    let btnStart = document.getElementById("btn");
    let showTimer = document.getElementById("showTimer");
    let timeInMinut;

    let stopTimer = () => {
        btnStart.innerHTML = statusStart;
        clearInterval(startCounter);
        startCounter = null;
        stopSound();
    }
    let actualTimer = () => {
        let seconds = (timeInMinut % 60);
        let minutes = Math.floor(timeInMinut / 60 % 60);
        let hours = Math.floor(timeInMinut / 3600 % 60);
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;

        printOutput(`${hours}:${minutes}:${seconds}`, showTimer);
    }
    btnStart.addEventListener('click', () => {
        if (startCounter) {
            stopTimer();
        } else if (!timeCounter.value || isNaN(timeCounter.value)) {
            printOutput("Введите секунды", showTimer);
            return;
        }
        else {
            btnStart.innerHTML = statusStop;
            playSound();

            timeInMinut = +(timeCounter.value);
            actualTimer();
            startCounter = setInterval(() => {
                --timeInMinut;
                actualTimer();

                if (timeInMinut == 0) {
                    stopTimer();
                    playSounForEnd();
                }
            }, 1000);
        }
    })

}