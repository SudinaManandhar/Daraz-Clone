import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://dummyjson.com/users";

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    console.log(email+'  and '+password);
    return this.http.post<any>(this.apiUrl, { email, password });
  }
}
