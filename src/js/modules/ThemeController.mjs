import CookieController from './CookieController';

export default class ThemeController {
  constructor() {
    this.coockie = new CookieController();
  }

  deactivate(btns) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  }

  active(btn) {
    btn.classList.add('active');
  }

  change(btn, btns) {
    this.deactivate(btns);

    this.coockie.setCoockie('theme', btn.className);

    document.body.className = btn.className;

    this.active(btn);
  }

  getTheme() {
    return this.coockie.getCoockie('theme') ? this.coockie.getCoockie('theme') : 'green-red-gray';
  }
}
