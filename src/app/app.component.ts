import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
setTimeSeconds: number = environment.totalTime;
timeSet: number = this.setTimeSeconds; //seconds for the timer.
originalTime: number = this.setTimeSeconds;


ngOnInit(): void {}

countDown() {
    const counter = setInterval(() => {
      if (this.timeSet > 0){
        this.timeSet--;
      } else {
        clearInterval(counter);
      }
    }, 1000)
}
  
}
