import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HomeComponent } from './home/home.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';

const routes: Route[] = [
  { path: 'appointment', component: AppointmentListComponent },
  {
    path: 'EditAppointment/:apointmentId',
    component: AppointmentUpdateComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
