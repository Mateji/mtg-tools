import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { LifecounterComponent } from './lifecounter/lifecounter.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lifecounter'
    },
    {
        path: 'lifecounter',
        component: LifecounterComponent
    },
    {
        path: 'diceroll',
        component: DiceRollComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }