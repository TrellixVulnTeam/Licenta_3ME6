import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacientComponent } from './add-pacient/add-pacient.component';
import { AddProgramareComponent } from './add-programare/add-programare.component';
import { AddTreatmentPacientComponent } from './add-treatment-pacient/add-treatment-pacient.component';
import { AddTreatmentComponent } from './add-treatment/add-treatment.component';
import { ContactDoctorComponent } from './contact-doctor/contact-doctor.component';
import { ContactComponent } from './contact/contact.component';
import { DespreDoctorComponent } from './despre-doctor/despre-doctor.component';
import { DespreComponent } from './despre/despre.component';
import { FormularComponent } from './formular/formular.component';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { HomePacientComponent } from './home-pacient/home-pacient.component';
import { IstoricDoctorComponent } from './istoric-doctor/istoric-doctor.component';
import { IstoricComponent } from './istoric/istoric.component';
import { LoginComponent } from './login/login.component';
import { PacientiComponent } from './pacienti/pacienti.component';
import { PassChangeDoctorComponent } from './pass-change-doctor/pass-change-doctor.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { ProfilDoctorComponent } from './profil-doctor/profil-doctor.component';
import { ProfilComponent } from './profil/profil.component';
import { ProgramariDoctorComponent } from './programari-doctor/programari-doctor.component';
import { ProgramariPacientComponent } from './programari-pacient/programari-pacient.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component:HomePacientComponent},
  { path: 'about', component:DespreComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'profil', component:ProfilComponent},
  { path: 'change_pass', component:PassChangeComponent},
  { path: 'homeD', component:HomeDoctorComponent},
  { path: 'contactD', component:ContactDoctorComponent},
  { path: 'aboutD', component:DespreDoctorComponent},
  { path: 'profilD', component:ProfilDoctorComponent},
  { path: 'change_passD', component:PassChangeDoctorComponent},
  { path: 'add-treatments', component:AddTreatmentComponent},
  { path: 'add-pacient', component:AddPacientComponent},
  { path: 'pacienti', component:PacientiComponent},
  { path: 'istoric', component:IstoricComponent},
  { path: 'istoric_doctor', component:IstoricDoctorComponent},
  { path: 'add-programare', component:AddProgramareComponent},
  { path: 'programari_doctor', component:ProgramariDoctorComponent},
  { path: 'programari_pacient', component:ProgramariPacientComponent},
  { path: 'add-treatment-pacient', component:AddTreatmentPacientComponent},
  { path: 'formular', component:FormularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
