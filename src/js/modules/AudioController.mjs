export default class AudioController {
  static buttonAudio() {
    new Audio('sounds/button.wav').play();
  }

  static borderAudio() {
    new Audio('sounds/border.wav').play();
  }

  static buildAudio() {
    new Audio('sounds/build.wav').play();
  }

  static loseAudio() {
    new Audio('sounds/lose.wav').play();
  }

  static readyToStartAudio() {
    new Audio('sounds/ready_to_start.wav').play();
  }

  static levelUpAudio() {
    new Audio('sounds/levelUp.wav').play();
  }

  static victoryAudio() {
    new Audio('sounds/victory.mp3').play();
  }
}
