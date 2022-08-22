export class Dice {
    private faces: number;
    name: string;
    value?: number;

    constructor(faces: number) {
        this.faces = faces;
        this.name = 'd' + faces;
    }

    rollDice(): number {
        let result = Math.ceil(Math.random() * this.faces);
        this.value = result;
        return this.value;
    }
}