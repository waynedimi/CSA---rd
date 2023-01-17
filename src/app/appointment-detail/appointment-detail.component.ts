import { Appointment } from './../dto/appointment.dto';
import { AppointmentService } from './../services/appointment.service';
import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css'],
})
export class AppointmentDetailComponent implements OnInit {
  constructor(
    private service: AppointmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.getAppointmentById(params['id'])
    );
  }

  appointment: Appointment | undefined;

  getAppointmentById(id: number) {
    this.service
      .getAppointmentById(id)
      .subscribe((data: Appointment) => (this.appointment = data));
  }
}
