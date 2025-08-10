import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log('Sending login request:', { email, password }); // Debugging
    return this.http.post('http://localhost:3000/signin', { email, password }).pipe(
      catchError(error => {
        console.error('Error occurred in login:', error); // Log the error
        return throwError(error); // Ensure the error is propagated
      })
    );
}
}
