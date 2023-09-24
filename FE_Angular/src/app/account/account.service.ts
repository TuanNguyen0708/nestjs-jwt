import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../config/application-config.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { TOKEN_KEY } from '../constains/constains';

@Injectable({ providedIn: 'root' })
export class AccountService {
  apiLogin = this.applicationService.API_URL + 'api/login';
  apiLogout = this.applicationService.API_URL + 'api/logout';
  constructor(
    private http: HttpClient,
    private applicationService: ApplicationConfigService,
  ) {}

  login(identity: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiLogin, identity).pipe(
      map(response => {
        localStorage.setItem(TOKEN_KEY, response);
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  logOut(): Observable<any> {
    return this.http.post(this.apiLogout, {});
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
}
