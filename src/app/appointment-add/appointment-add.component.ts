import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private service: AppointmentService,
    private formBuilder: FormBuilder
  ) {}

  addAppointment = new FormGroup({
    animalType: new FormControl('', [Validators.required]),
    appointmentDate: new FormControl('', [Validators.required]),
    appointmentDuration: new FormControl('', [Validators.required]),
    appointmentTime: new FormControl('', [Validators.required]),
    ownerContactNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[0-9]*$'),
    ]),
    ownerIdCardNumber: new FormControl('', [Validators.required]),
    ownerName: new FormControl('', [Validators.required]),
    ownerSurname: new FormControl('', [Validators.required]),
    patientName: new FormControl('', [Validators.required]),
    reasonForAppointment: new FormControl('', [Validators.required]),
    vetNotes: new FormControl(''),
  });

  message: boolean = false;
  submitted: boolean = false;

  ngOnInit(): void {}

  AddData() {
    this.submitted = true;
    if (this.addAppointment.invalid) {
      console.warn('this is invalid please enter valid information');
    } else {
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
    }
    // this.router.navigate(['appointment']);
  }
}
