import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfigService } from '../../config/application-config.service';
import { Observable } from 'rxjs';
import { JwtService } from '../jwt-service/jwt.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  apiLogin = this.applicationService.API_URL + 'api/login';
  apiLogout = this.applicationService.API_URL + 'api/logout';
  constructor(
    private http: HttpClient,
    private applicationService: ApplicationConfigService,
    private jwtService: JwtService,
  ) {}

  login(identity: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiLogin, identity, { withCredentials: true });
  }

  logOut(): Observable<any> {
    return this.http.post(this.apiLogout, {}, { withCredentials: true });
  }

  isLoggedIn(): boolean {
    return this.jwtService.isTokenValid();
  }
}
