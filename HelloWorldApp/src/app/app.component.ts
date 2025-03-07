import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  errorMessage: string = '';

  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Invalid name! Must start with an uppercase letter & be at least 3 letters.";
    } else {
      this.errorMessage = "";
    }
  }

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
