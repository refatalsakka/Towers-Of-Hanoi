export default class OverlayController
{
    constructor() {
        this.overlay = document.querySelector('.overlay');
        this.btn = document.querySelector('.overlay .btn');
        this.h1 = document.querySelector('.overlay h1');
        this.moves = document.querySelector('.info-box p.info-moves');
        this.countdown = document.querySelector('.info-box p.info-countdown');
    }

    slideIn(text, callback) {
        this.btn.innerText = text.btn;
        this.h1.innerText = text.h1;
        this.moves.innerText = '';
        this.countdown.innerText = '' ;
        
        if (text.moves && text.countdown) {
            this.moves.innerText = `Your Moves are ${text.moves}`;
            this.countdown.innerText = `You took ${text.countdown} Seconds` ;
        }
        
        this.overlay.classList.remove('disable');
        this.overlay.classList.remove('out');
        this.overlay.classList.add('in');

        this.btn.addEventListener("animationend", _ => {
            this.btn.classList.remove('not-clickable');

            if (typeof callback == 'function') callback();
        }, {once: true});
    }

    slideOut(callback) {
        this.overlay.classList.add('out');
        this.overlay.classList.remove('in');

        this.btn.addEventListener("animationend", _ => {
            this.overlay.classList.add('disable');

            if (typeof callback == 'function') callback();
        }, {once: true});
    }

    click(callback) {
        this.btn.addEventListener('click', _ => {
            if (typeof callback == 'function') callback();
        });
    }
}