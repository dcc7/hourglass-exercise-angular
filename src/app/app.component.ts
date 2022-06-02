import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
setTimeSeconds: number = environment.totalTime; //obtaining seconds from environment file.
timeSet: number = this.setTimeSeconds; //information passed down to child components.
originalTime: number = this.setTimeSeconds; //total time for percentage calculation (passed to children).


ngOnInit(): void {}

countDown() {
    const counter = setInterval(() => {
      if (this.timeSet > 0){
        this.timeSet--;
      } else {
        clearInterval(counter); //stops setInterval when counter reaches 0.
      }
    }, 1000)
}
  
}
