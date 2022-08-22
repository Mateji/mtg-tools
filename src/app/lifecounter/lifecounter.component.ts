import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lifecounter',
    templateUrl: './lifecounter.component.html',
    styleUrls: ['./lifecounter.component.sass']
})
export class LifecounterComponent implements OnInit {
    currentLife: number;

    constructor() {
        this.currentLife = 40;
    }

    ngOnInit(): void {
    }

    increase(amount: number = 1): void {
        this.currentLife += amount;
    }

    decrease(amount: number = 1): void {
        this.currentLife -= amount;
    }

}
