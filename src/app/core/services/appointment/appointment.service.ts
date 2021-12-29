import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDTO } from 'src/app/data/api/appointment/AppointmentDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

constructor(
  private http: HttpClient
) { }


public sendAppointmentRequest(appointmentDTO: AppointmentDTO):Observable<IResponseResult<any>>{
  return this.http.post<IResponseResult<any>>('/SiteAppointments/add-user-appointment-request',appointmentDTO);
}
}
