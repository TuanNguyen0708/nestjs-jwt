import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../config/application-config.service';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { TOKEN_KEY } from '../constains/constains';

@Injectable({ providedIn: 'root' })
export class AccountService {
  apiUrl = this.applicationService.API_URL + 'api/login';
  constructor(
    private http: HttpClient,
    private applicationService: ApplicationConfigService,
  ) {}

  login(identity: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, identity).pipe(
      map((response) => {
        localStorage.setItem(TOKEN_KEY, response);
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      }),
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
}
