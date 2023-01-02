import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../dto/appointment.dto';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css'],
})
export class AppointmentUpdateComponent implements OnInit {
  editAppointmentForm: appointmentForm = new appointmentForm();

  @ViewChild('appointmentForm')
  appointmentForm!: NgForm;

  isSubmitted: boolean = false;
  appointmentId: any;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private httpProvider: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.params['appointmentId'];
    this.getAppointmentDetailById();
  }

  getAppointmentDetailById() {
    this.httpProvider.getAppointmentById(this.appointmentId).subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.editAppointmentForm._appointmentId = resultData.appointmentId;
            this.editAppointmentForm._patientName = resultData.patientName;
            this.editAppointmentForm._animalType = resultData.animalType;
            this.editAppointmentForm._ownerIdCardNumber =
              resultData.ownerIdCardNumber;
            this.editAppointmentForm._ownerName = resultData.ownerName;
            this.editAppointmentForm._ownerSurname = resultData.ownerSurname;
            this.editAppointmentForm._ownerContactNumber =
              resultData.ownerContactNumber;
            this.editAppointmentForm._appointmentTime =
              resultData.appointmentTime;
            this.editAppointmentForm._appointmentDuration =
              resultData.appointmentDuration;
            this.editAppointmentForm._reasonForAppointment =
              resultData.reasonForAppointment;
            this.editAppointmentForm._vetNotes = resultData.vetNotes;
            this.editAppointmentForm._appointmentDate =
              resultData.appointmentDate;
          }
        }
      },
      (error: any) => {}
    );
  }

  EditAppointment(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.updateAppointment(appointmentForm).subscribe(
        async (data: any) => {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              if (resultData != null && resultData.isSuccess) {
                this.toastr.success(resultData.message);
                setTimeout(() => {
                  this.router.navigate(['/appointment']);
                }, 500);
              }
            }
          }
        },
        async (error: any) => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/appointment']);
          }, 500);
        }
      );
    }
  }
}
export class appointmentForm {
  _appointmentId: number = 0;
  _patientName: string = '';
  _animalType: string = '';
  _ownerIdCardNumber: string = '';
  _ownerName: string = '';
  _ownerSurname: string = '';
  _ownerContactNumber: string = '';
  _appointmentTime: string = '';
  _appointmentDuration: number = 0;
  _reasonForAppointment: string = '';
  _vetNotes: string = '';
  _appointmentDate: string = '';
}
