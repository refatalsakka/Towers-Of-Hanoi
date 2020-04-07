export default class MoveController
{
    constructor() {
        this.moves = 0;
    }
    
    up() {
        this.moves = this.moves + 1;
         
    }

    clear() {
        this.moves = 0;
    }
    
    getMoves() {
        return this.moves;
    }
}