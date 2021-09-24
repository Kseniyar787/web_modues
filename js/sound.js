 import { Howl, Howler } from 'howler';
let sound;
export let playSound = () => {
    sound = new Howl({
        src: './mp3/sound.mp3',
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
        src: './mp3/sound_end.mp3',
        volume: 0.7,
        loop: false,

    });
    soundEnd.play();
}