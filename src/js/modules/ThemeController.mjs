import CookieController from './CookieController';

export default class ThemeController {
  static deactivate(btns) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  }

  static active(btn) {
    btn.classList.add('active');
  }

  static change(btn, btns) {
    this.deactivate(btns);

    CookieController.setCoockie('theme', btn.className);

    document.body.className = btn.className;

    this.active(btn);
  }

  static getTheme() {
    return CookieController.getCoockie('theme') ? CookieController.getCoockie('theme') : 'green-red-gray';
  }
}
