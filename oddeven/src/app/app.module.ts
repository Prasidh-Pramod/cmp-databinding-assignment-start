import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamecontrolComponent } from './GameControl/gamecontrol/gamecontrol.component';
import { OddComponent } from './Odd/odd/odd.component';
import { EvenComponent } from './Ecen/Even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
