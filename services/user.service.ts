import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  signin(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, data);
  }
  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateProfile`, data); 
  }
  deleteAccount(email: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteAccount/${email}`);
  }
}
