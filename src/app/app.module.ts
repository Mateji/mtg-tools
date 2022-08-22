import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecounterComponent } from './lifecounter/lifecounter.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { DiceComponent } from './dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecounterComponent,
    DiceRollComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
