import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../dto/appointment.dto';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  endpoint: string = 'https://cssna.teknologija.com/appointment';

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

  updateAppointment(id: number, data: any) {
    return this.httpClient.put(`${this.endpoint}/${id}`, data);
  }
  addAppointment(data: any) {
    return this.httpClient.post(this.endpoint, data);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }
}
