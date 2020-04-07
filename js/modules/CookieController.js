export default class CookieController
{
    setCoockie(name, value, exdays = 7) {
        const date = new Date();

        date.setTime(date.getTime() + (exdays*24*60*60*1000));

        const expires = "expires="+ date.toUTCString();
        
        document.cookie = `${name}=${value};${expires}`;
    }

    getCoockie(name) {
        const cookies = document.cookie.split(';');
        const array = cookies.filter(cookie => cookie.includes(name));

        return array.length ? array[0].split('=')[1] : null;
    }

    removeCoockie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }

    pullCoockie(name) {
        const pull = this.getCoockie(name);

        this.removeCoockie(name);

        return pull;
    }
}
