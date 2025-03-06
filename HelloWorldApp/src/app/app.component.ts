import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  } 
}
