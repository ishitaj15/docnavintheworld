import { Routes } from '@angular/router';

// ✅ All imports are now from ./pages/...
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { DoctorLoginComponent } from './pages/doctor-login/doctor-login.component';
import { PatientPortalComponent } from './pages/patient-portal/patient-portal.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonyComponent } from './pages/testimony/testimony.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { MedicalRecordsComponent } from './pages/medical-records/medical-records.component';
import { ConsultDoctorComponent } from './pages/consult-doctor/consult-doctor.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'patient-portal', component: PatientPortalComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'testimony', component: TestimonyComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'medical-records', component: MedicalRecordsComponent },
  { path: 'consult-doctor', component: ConsultDoctorComponent },
];
