//import { Howl, Howler } from './node_modules/howler/src/howler.core.js'; //'https://raw.githubusercontent.com/goldfire/howler.js/master/dist/howler.js';
let sound;
export let playSound = () => {
    sound = new Howl({
        src: 'mp3/sound.mp3',
        volume: 0.2,
        loop: true,

    });
    sound.play();

}

export let stopSound = () => {
    if (sound) {
        sound.stop();

        sound = null;

    }
}

export let playSounForEnd = () => {
    let soundEnd = new Howl({
        src: 'mp3/sound_end.mp3',
        volume: 0.7,
        loop: false,

    });
    soundEnd.play();
}