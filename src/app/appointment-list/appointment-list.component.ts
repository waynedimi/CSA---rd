import { Component, OnInit } from '@angular/core';
import { Appointment } from '../dto/appointment.dto';
import { AppointmentService } from '../services/appointment.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  closeResult: any;
  title: string = 'Appointment Management System';
  appointments: Appointment[] = [];
  constructor(
    private appointmentService: AppointmentService,
    //private httpClient: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initialiseAppointments();
  }

  getTitle(): string {
    return this.title;
  }

  deleteAppointment(id: any) {
    this.appointmentService.deleteAppointment(id).subscribe((result) => {
      console.log(result);
    });
  }

  initialiseAppointments() {
    this.appointmentService
      .getAppointments()
      .subscribe((response: Appointment[]) => {
        this.appointments = response;
      });
  }
}
