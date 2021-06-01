import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginRequest, loginResponse } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: loginRequest): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${environment.apiUrl}/login`, data);
  }

}
