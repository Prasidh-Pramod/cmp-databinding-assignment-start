import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 oddNumber : number[] =[];
 evenNumber : number[] =[];

  onGame(startEvent : number){
    if(startEvent % 2 == 0){
      this.evenNumber.push(startEvent)
    }
    else{
      this.oddNumber.push(startEvent)
    }
  }
}
