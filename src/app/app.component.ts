import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helloworld-Angular-App'; 
  logoUrl = 'assets/BL_logo_square.jpg';

  // Function to open BridgeLabz website in a new tab
  openBridgeLabzSite() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
