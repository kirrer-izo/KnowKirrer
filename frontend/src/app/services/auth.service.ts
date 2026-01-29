import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api';

  login(credentials: {email:string, password:string}): Observable<any> {
    return this.http.post<{token: string}>
    (`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        //save token to storage
        localStorage.setItem('auth_token', response.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('auth_token');
  }
}
