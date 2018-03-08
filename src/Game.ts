import { observable } from 'mobx';

export default class Game {

    @observable
    knightPosition: Array<number>;

    constructor(x: number, y: number) {
        this.knightPosition = [x, y];
    }

    moveKnight(toX: number, toY: number): void {
        this.knightPosition = [toX, toY];
    }

    canMoveKnight(toX: number, toY: number) {
        const [x, y] = this.knightPosition;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }
}
