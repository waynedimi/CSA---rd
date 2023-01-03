import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../dto/appointment.dto';
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
    animalType: new FormControl(''),
    ownerIdCardNumber: new FormControl(''),
    ownerName: new FormControl(''),
    ownerSurname: new FormControl(''),
    ownerContactNumber: new FormControl(''),
    appointmentTime: new FormControl(''),
    appointmentDuration: new FormControl(''),
    reasonForAppointment: new FormControl(''),
    vetNotes: new FormControl(''),
    appointmentDate: new FormControl(''),
  });

  message: boolean = false;

  ngOnInit(): void {
    this.service
      .getAppointmentById(this.route.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editAppointment = new FormGroup({
          patientName: new FormControl(result['patientName']),
          animalType: new FormControl(result['animalType']),
          ownerIdCardNumber: new FormControl(result['ownerIdCardNumber']),
          ownerName: new FormControl(result['ownerName']),
          ownerSurname: new FormControl(result['ownerSurname']),
          ownerContactNumber: new FormControl(result['ownerContactNumber']),
          appointmentTime: new FormControl(result['appointmentTime']),
          appointmentDuration: new FormControl(result['appointmentDuration']),
          reasonForAppointment: new FormControl(result['reasonForAppointment']),
          vetNotes: new FormControl(result['vetNotes']),
          appointmentDate: new FormControl(result['appointmentDate']),
        });
      });
  }

  UpdateData() {
    console.log(this.editAppointment.value);
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
  removeMessage() {
    this.message = false;
  }
}
