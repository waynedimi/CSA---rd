import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Appointment } from '../dto/appointment.dto';
import { AppointmentService } from '../services/appointment.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as Excel from 'exceljs';
import { saveAs } from 'file-saver';

// @ViewChild('appointmentTable') htmlData: ElementRef;
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
  generatePDF() {
    // [[] , [] , [] ,[]]
    const data: any = [];
    let putData = [];
    this.appointments.forEach((res) => {
      putData = [
        res.appointmentId,
        res.patientName,
        res.animalType,
        res.ownerName,
        res.ownerSurname,
        res.appointmentDate,
        res.appointmentTime,
        res.appointmentDuration,
        res.ownerContactNumber,
        res.reasonForAppointment,
        res.ownerIdCardNumber,
        res.vetNotes,
      ];
      data.push(putData);
    });
    //data.push(array);
    const doc = new jsPDF('landscape');

    autoTable(doc as any, {
      styles: { halign: 'center' },
      head: [
        [
          'ID',
          'Patient Name',
          'Animal Type',
          'Owner Name',
          'Owner Surname',
          'Appointment Date',
          'Appointment Time',
          'Appointment Duration',
          'Contact number',
          'Reason For Appointment',
          'Id card number',
          'Vet Notes',
        ],
      ],
      body: data,
      // didDrawCell: (data: { column: { index: any } }) => {
      //   console.log(data.column.index);
      // },
    });

    doc.output('dataurlnewwindow');

    doc.save('sav.xls');
  }

  generateXLSX() {
    const data: any = [];
    let putData = {};
    this.appointments.forEach((res) => {
      putData = [
        res.appointmentId,
        res.patientName,
        res.animalType,
        res.ownerName,
        res.ownerSurname,
        res.appointmentDate,
        res.appointmentTime,
        res.appointmentDuration,
        res.ownerContactNumber,
        res.reasonForAppointment,
        res.ownerIdCardNumber,
        res.vetNotes,
      ];
      data.push(putData);
    });

    let header = [
      'ID',
      'Patient Name',
      'Animal Type',
      'Owner Name',
      'Owner Surname',
      'Appointment Date',
      'Appointment Time',
      'Appointment Duration',
      'Contact number',
      'Reason For Appointment',
      'Id card number',
      'Vet Notes',
    ];
    const workbook = new Excel.Workbook();

    workbook.creator = 'Genereated by User';
    const sheet = workbook.addWorksheet('My Sheet');

    sheet.columns = [
      { width: 10 },
      { width: 30 },
      { width: 20 },
      { width: 50 },
      { width: 50 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 20 },
      { width: 100 },
      { width: 30 },
      { width: 100 },
    ];

    sheet.addRow(header);
    sheet.addRows(data);

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'File' + '.xlsx');
    });
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
