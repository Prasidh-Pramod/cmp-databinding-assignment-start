import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent {
 @Output() startEmitter = new EventEmitter<number>();
 interval : any
 num : number =0



  onStartGame(){
    this. interval = setInterval(() => {
      this.startEmitter.emit(this.num +1)
      this.num++;
    },1000)
    
  }

  onEndGame(){
    clearInterval(this.interval)
  }
}
