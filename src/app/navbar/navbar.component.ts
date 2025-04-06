import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 this line is IMPORTANT

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // 👈 this makes routerLink work!
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { }
