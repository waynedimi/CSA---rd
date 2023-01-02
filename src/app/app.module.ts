import { NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentService } from './services/appointment.service';
import { HomeComponent } from './home/home.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { AppointmentGuardService } from './services/appointment-gaurd.service';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    AppointmentUpdateComponent,
    AppointmentAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [AppointmentService, AppointmentGuardService],
  bootstrap: [AppComponent],
  entryComponents: [AppointmentUpdateComponent],
})
export class AppModule {}
