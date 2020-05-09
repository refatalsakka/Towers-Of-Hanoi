import CookieController from "./CookieController.js";

export default class ThemeController
{
    constructor() {
        this.coockie = new CookieController();
    }
    
    change(theme) {
        this.coockie.setCoockie('theme', theme);
        
        document.body.className = theme;
    }

    getTheme() {
        return this.coockie.getCoockie('theme') || 'green-red-gray';
    }
}