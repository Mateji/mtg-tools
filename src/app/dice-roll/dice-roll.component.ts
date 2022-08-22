import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dice } from './dice';

@Component({
    selector: 'app-dice-roll',
    templateUrl: './dice-roll.component.html',
    styleUrls: ['./dice-roll.component.sass']
})
export class DiceRollComponent implements OnInit {
    lastRoll: number;
    dices: Dice[];
    constructor(private changeDectectorRef: ChangeDetectorRef) {
        this.lastRoll = 0;
        this.dices = [];
    }

    ngOnInit(): void {
    }

    rollDice(faces: number) {
        let diceResult: number;
        diceResult = new Dice(faces).rollDice();
        // return diceResult;
        this.lastRoll = diceResult;
    }

    addDice(faces: number) {
        let dice: Dice;
        dice = new Dice(faces);
        this.dices.push(dice);
    }

    rollAllDice() {
        for (let dice of this.dices) {
            dice.rollDice();
        }
        this.changeDectectorRef.markForCheck();
    }
}
