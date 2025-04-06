import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ important for routerLink

@Component({
  selector: 'app-patient-portal',
  standalone: true,
  imports: [RouterModule], // ✅ THIS LINE IS NEEDED
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent {}
