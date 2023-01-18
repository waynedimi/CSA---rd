import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css'],
})
export class AppointmentUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AppointmentService
  ) {}

  editAppointment = new FormGroup({
    patientName: new FormControl(),
    animalType: new FormControl(),
    ownerIdCardNumber: new FormControl(),
    ownerName: new FormControl(),
    ownerSurname: new FormControl(),
    ownerContactNumber: new FormControl(),
    appointmentTime: new FormControl(),
    appointmentDuration: new FormControl(),
    reasonForAppointment: new FormControl(),
    vetNotes: new FormControl(),
    appointmentDate: new FormControl(),
  });

  message: boolean = false;
  submitted: boolean = false;

  ngOnInit(): void {
    this.service
      .getAppointmentById(this.route.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editAppointment = new FormGroup({
          patientName: new FormControl(result['patientName'], [
            Validators.required,
          ]),
          animalType: new FormControl(result['animalType'], [
            Validators.required,
          ]),
          ownerIdCardNumber: new FormControl(result['ownerIdCardNumber'], [
            Validators.required,
          ]),
          ownerName: new FormControl(result['ownerName'], [
            Validators.required,
          ]),
          ownerSurname: new FormControl(result['ownerSurname'], [
            Validators.required,
          ]),
          ownerContactNumber: new FormControl(result['ownerContactNumber'], [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^[0-9]*$'),
          ]),
          appointmentTime: new FormControl(result['appointmentTime'], [
            Validators.required,
          ]),
          appointmentDuration: new FormControl(result['appointmentDuration'], [
            Validators.required,
          ]),
          reasonForAppointment: new FormControl(
            result['reasonForAppointment'],
            [Validators.required]
          ),
          vetNotes: new FormControl(result['vetNotes']),
          appointmentDate: new FormControl(result['appointmentDate'], [
            Validators.required,
          ]),
        });
      });
  }

  UpdateData() {
    this.submitted = true;
    if (this.editAppointment.invalid) {
      console.warn('this is invalid please enter valid information');
    } else {
      this.service
        .updateAppointment(
          this.route.snapshot.params['id'],
          this.editAppointment.value
        )
        .subscribe((result) => {
          //console.log(result);
          this.message = true;
          this.router.navigate(['/appointment']);
        });
    }
  }
  removeMessage() {
    this.message = false;
  }
}
