import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../dto/appointment.dto';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css'],
})
export class AppointmentAddComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AppointmentService
  ) {}

  addAppointment = new FormGroup({
    animalType: new FormControl(),
    appointmentDate: new FormControl(''),
    appointmentDuration: new FormControl(''),
    appointmentTime: new FormControl(''),
    ownerContactNumber: new FormControl(''),
    ownerIdCardNumber: new FormControl(''),
    ownerName: new FormControl(''),
    ownerSurname: new FormControl(''),
    patientName: new FormControl(''),
    reasonForAppointment: new FormControl(''),
    vetNotes: new FormControl(''),
  });

  message: boolean = false;

  ngOnInit(): void {}

  AddData() {
    var datePipe = new DatePipe('en-MT');
    this.addAppointment.value.appointmentDate = datePipe.transform(
      this.addAppointment.value.appointmentDate,
      'dd/MM/yyyy'
    );
    console.log(this.addAppointment.value.appointmentDate);
    console.log(this.addAppointment.value);
    this.service
      .addAppointment(this.addAppointment.value)
      .subscribe((result: any) => {
        this.addAppointment = result;
        console.log(result);
        this.router.navigate(['appointment']);
      });
    // this.router.navigate(['appointment']);
  }
}
