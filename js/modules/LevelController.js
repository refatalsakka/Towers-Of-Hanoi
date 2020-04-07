import CookieController from "./CookieController.js";
import AudioController from "./AudioController.js";

export default class LevelController
{
    constructor() {
        this.coockie = new CookieController();
        this.audio = new AudioController();
    }
    
    setLevel(level) {
        this.coockie.setCoockie('level', level);
    }

    getLevel() {
        return this.coockie.getCoockie('level') ?? 1;
    }

    up() {
        this.setLevel(Number(this.getLevel()) + 1);
    }

    animate() {
        const level = document.querySelector('.level strong');
        
        this.audio.levelUpAudio();
       
        level.classList.add('up');

        this.up()

        level.addEventListener("animationend", _ => {    
            level.innerText = Number(this.getLevel());

            level.classList.remove('up');
        }, {once: true});
    }
}
