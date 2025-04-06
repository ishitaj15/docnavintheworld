import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; // ✅ Import NavbarComponent
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], // ✅ Add NavbarComponent here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docnav-app';
}
