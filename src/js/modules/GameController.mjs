import HelpersController from './HelpersController';
import LevelController from './LevelController';
import MoveController from './MoveController';
import AudioController from './AudioController';
import OverlayController from './OverlayController';
import CountdownController from './CountdownController';

export default class Game {
  constructor() {
    this.helpers = new HelpersController();
    this.level = new LevelController();
    this.moves = new MoveController();
    this.audio = new AudioController();
    this.overlay = new OverlayController();

    this.config = {};

    this.msgs = [
      'You paased the first level',
      'Good, up to the next level',
      'You did it, next level is waitng',
      'The challenge will be harder',
      'Great! let\'s play to finish the Game',
      'WOW!!! You surprise me',
      'You won the Game',
    ];

    this.borders = [];
    this.boxesContainer = document.querySelector('.boxes');
    this.boxes = [...document.querySelectorAll('.boxes .box')];
    this.bordersContainer = document.querySelector('.borders-container');
    this.borderOuting = null;

    this.gameStarted = false;
    this.gameFinished = false;
    this.countdown = null;
    this.pause = false;
    this.columnsAnimated = false;
  }

  start() {
    this.config = {
      max_level: 7,
      borders_length: Number(this.level.getLevel()) + 3,
      countdown: Number(this.level.getLevel()) * 35,
      win_status: [
        [0, 0, Number(this.level.getLevel()) + 3],
        [0, Number(this.level.getLevel()) + 3, 0],
      ],
    };

    if (Number(this.level.getLevel()) > this.config.max_level) return;

    if (this.overlay.isSlideIn) {
      this.overlay.slideOut(() => {
        this.restart();
      });

      return;
    }

    this.restart();
  }

  restart() {
    console.log('hello');
    this.gameFinished = false;

    if (!this.columnsAnimated) this.animateColumns();

    if (this.borders.length) this.removeBorders();

    this.generateBorders();

    this._countdown();

    this._moves();

    this.allowBtnsClick();

    document.querySelector('.level strong').innerText = this.level.getLevel();

    if (this.gameStarted) return;

    this.gameStarted = true;

    this.boxesEvents();

    this.btnsEvents();
  }

  animateColumns() {
    this.columnsAnimated = true;

    this.boxesContainer.classList.add('animate');

    this.boxesContainer.classList.add('active');

    this.audio.buildAudio();

    setTimeout(() => {
      this.boxesContainer.classList.remove('animate');
    }, 2000);
  }

  generateBorders() {
    for (let i = 1; i <= this.config.borders_length; i += 1) {
      const div = document.createElement('div');

      div.classList = `border border-${i}`;

      div.setAttribute('data-index', i);

      this.borders.push(div);
    }

    this.bordersEvents();
  }

  removeBorders() {
    for (let i = 0; i < this.borders.length; i += 1) this.borderOut(this.borders[i], i + 1);

    this.borders = [];
  }

  bordersEvents() {
    this.borders.forEach((border, index) => {
      this.borderInAfterOut(border, index);

      border.addEventListener('dragstart', (e) => this.drag(e));

      border.addEventListener('mouseover', (e) => {
        if (this.isBorderAllowToDrag(e) && !this.pause) {
          return this.whenAllowToDrag(e);
        }

        return this.whenNotAllowToDrag(e);
      });

      border.addEventListener('mouseout', () => this.resetBorderStyle(border));
    });
  }

  borderIn(border, index) {
    this.bordersContainer.appendChild(border);

    border.style.animation = `borderIn .5s ${index / 10}s ease forwards`;

    this.audio.borderAudio();
  }

  borderOut(border, index) {
    border.style.left = 0;

    border.style.animation = `borderOut .5s ${index / 10}s ease forwards`;

    border.addEventListener('animationend', () => {
      border.parentNode.removeChild(border);
    }, { once: true });

    this.borderOuting = border;
  }

  borderInAfterOut(border, index) {
    if (this.borderOuting) {
      this.borderOuting.addEventListener('animationend', () => {
        this.borderIn(border, index);
      }, { once: true });
    } else {
      this.borderIn(border, index);
    }
  }

  isBorderAllowToDrop(border1, border2) {
    return (border2 === null) || (border1.dataset.index < border2.dataset.index);
  }

  isBorderAllowToDrag(e) {
    return e.target.dataset.index === e.target.parentElement.firstChild.dataset.index;
  }

  resetBorderStyle(e) {
    e.classList.remove('on-transfer');
    e.style.animation = '';
    e.style.left = '0';
  }

  allowBtnsClick() {
    document.querySelectorAll('button').forEach((btn) => btn.classList.remove('not-clickable'));
  }

  disableBtnsClick() {
    document.querySelectorAll('button').forEach((btn) => btn.classList.add('not-clickable'));
  }

  btnsEvents() {
    document.querySelector('.control-btns .pause').addEventListener('click', () => this._pause());

    document.querySelector('.control-btns .new').addEventListener('click', () => {
      this._finish(null);

      this.start();
    });
  }

  boxesEvents() {
    this.boxes.forEach((box) => {
      box.addEventListener('dragenter', (e) => this.whenInterToBox(e));

      box.addEventListener('dragleave', (e) => this.whenLeaveBox(e));

      box.addEventListener('dragover', (e) => this.dragover(e));

      box.addEventListener('drop', (e) => this.drop(e));
    });
  }

  whenInterToBox(e) {
    e.path.find((elm) => elm.classList[0] === 'box').classList.add('hover');
  }

  whenLeaveBox(e) {
    e.path.find((elm) => elm.classList[0] === 'box').classList.remove('hover');
  }

  dragover(e) {
    e.preventDefault();
  }

  drag(e) {
    if (this.pause) return;

    if (!this.isBorderAllowToDrag(e)) return;

    const border = document.querySelector(`div[data-index='${e.target.dataset.index}']`);

    e.dataTransfer.setData('text', e.target.dataset.index);

    border.classList.add('on-transfer');
  }

  drop(e) {
    e.preventDefault();

    const box = e.path.find((elm) => elm.classList[0] === 'box');
    const container = box.querySelector('.borders-container');
    const data = e.dataTransfer.getData('text');
    const border = document.querySelector(`div[data-index='${data}']`);

    box.classList.remove('hover');

    this.resetBorderStyle(border);

    if (!this.isBorderAllowToDrop(border, container.firstChild)) return;

    container.insertBefore(border, container.firstChild);

    this.audio.buttonAudio();

    this.moves.up();

    this._moves();

    if (this.isWin()) this.won();
  }

  whenAllowToDrag(e) {
    e.target.setAttribute('draggable', true);
  }

  whenNotAllowToDrag(e) {
    e.target.setAttribute('draggable', false);
  }

  isWin() {
    const currentStatus = this.boxes.map((box) => box.querySelector('.borders-container').childElementCount);

    for (let i = 0; i < this.config.win_status.length; i += 1) {
      if (this.helpers.areArraysEqual(this.config.win_status[i], currentStatus)) {
        return true;
      }
    }

    return false;
  }

  won() {
    if (this.isWinTheHoleGame()) return this.wonTheHoleGame();

    this.level.animate();

    this._finish(`Got to the level ${this.level.getLevel()}`);
  }

  isWinTheHoleGame() {
    return (this.config.max_level === Number(this.level.getLevel()));
  }

  wonTheHoleGame() {
    this.audio.victoryAudio();

    this._finish('Restart the Game');

    this.level.setLevel(1);
  }

  losed() {
    this._finish('Try Again', 'Ohh, Good luck next Game');

    this.audio.loseAudio();
  }

  _finish(btn, title = this.msgs[this.level.getLevel() - 1]) {
    this.gameFinished = true;

    this.pause = false;

    document.querySelector('.control-btns .pause').innerText = 'Pause';

    if (btn) {
      this.overlay.slideIn({
        btn,
        title,
        msg: `Your Moves are ${this.moves.getMoves()}, You took ${this.config.countdown - this.countdown.countdown} Seconds`,
      });
    }

    this.countdown.clear();

    this.moves.clear();

    this.disableBtnsClick();
  }

  _countdown() {
    this.countdown = new CountdownController(this.config.countdown);

    const coutdouwnSpan = document.querySelector('.moves-countdown .countdown span');

    coutdouwnSpan.innerText = '00:00';

    this.countdown.start((countdown) => {
      coutdouwnSpan.innerText = countdown;

      if (countdown === '00:00') return this.losed();
    });
  }

  _moves() {
    document.querySelector('.moves-countdown .moves span').innerText = this.moves.getMoves();
  }

  _pause(msgs = null) {
    if (!this.gameStarted) return false;

    this.pause = true;

    let btn = 'Replay';
    let title = 'You paused the Game';
    let msg = 'Click Replay to continue';

    if (msgs != null) {
      btn = msgs.btn;
      title = msgs.title;
      msg = msgs.msg;
    }

    this.overlay.slideIn({ btn, title, msg });

    this.countdown.pause();
  }

  replay() {
    if (!this.gameStarted) return false;

    this.pause = false;

    this.overlay.slideOut(() => {
      this.countdown.replay();
    });
  }
}
