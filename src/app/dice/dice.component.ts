import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.sass']
})
export class DiceComponent implements OnInit {
    @Input()
    faces?: number;

    @Input()
    value?: number | null;

    @Input()
    showValue: boolean;

    constructor() {
        this.showValue = false;
    }

    ngOnInit(): void {
    }

    roll() {
        if (this.faces) {
            this.value = Math.ceil(Math.random() * this.faces);
        } else {
            this.value = null;
        }
    }

}
