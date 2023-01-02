import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../dto/appointment.dto';

@Injectable()
export class AppointmentService {
  endpoint: string = 'http://localhost:8080/appointment';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.endpoint);
  }

  getAppointmentById(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(this.endpoint + '/' + id);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(
      this.endpoint,
      appointment,
      this.httpHeader
    );
  }

  updateAppointment(appointment: any): Observable<Appointment> {
    return this.httpClient.put<Appointment>(
      this.endpoint,
      appointment,
      this.httpHeader
    );
  }

  deleteAppointment(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }
}
