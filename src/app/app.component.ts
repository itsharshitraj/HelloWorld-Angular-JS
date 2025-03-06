import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helloworld-Angular-App';
  message: string = 'Hello from BridgeLabz'; 
  logoUrl: string = 'assets/BL_logo_square.jpg';
}
