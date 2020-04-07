export default class AudioController
{
    constructor() {
        this.button = new Audio('sounds/button.wav'); 
        this.border = new Audio('sounds/border.wav');
        this.build = new Audio('sounds/build.wav');
        this.lose = new Audio('sounds/lose.wav');
        this.readyToStart = new Audio('sounds/ready_to_start.wav');
        this.levelUp = new Audio('sounds/levelUp.wav');
        this.victory = new Audio('sounds/victory.mp3');
    }

    buttonAudio() {
        this.button.currentTime = 0;
        this.button.play();
    }

    borderAudio() {
        this.border.currentTime = 0;
        this.border.play();
    }

    buildAudio() {
        this.build.play();
    }

    loseAudio() {
        this.lose.play();
    }

    readyToStartAudio() {
        this.readyToStart.play();
    }

    levelUpAudio() {
        this.levelUp.play();
    }
    
    victoryAudio() {
        this.victory.play();
    }
}
