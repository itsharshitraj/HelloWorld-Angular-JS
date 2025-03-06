import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = '';
  errorMessage: string = '';
  showGreeting: boolean = false;

     

  validateName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; 

    if (this.userName.trim().length ===0) {
      this.errorMessage = ''; 
      this.showGreeting = false;

    } else if(!namePattern.test(this.userName)) {
      this.errorMessage = 'Invalid name! Must start with uppercase and have at least 3 letters.';
      this.showGreeting = false;

    } else {
      this.errorMessage = ''; 
      this.showGreeting = true;
    }
  }
}
