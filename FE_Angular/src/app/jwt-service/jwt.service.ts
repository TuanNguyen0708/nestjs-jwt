import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class JwtService {
  constructor(private cookieService: CookieService) {}

  getJwtToken(): string | null {
    return this.cookieService.get('jwt');
  }

  isTokenValid(): boolean {
    const token = this.getJwtToken();
    if (!token) {
      return false;
    }
    // const tokenData = JSON.parse(atob(token.split('.')[1])); // Giải mã JWT
    // const expirationTime = tokenData.exp * 1000; // Thời gian hết hạn (chuyển đổi thành mili giây)
    // return expirationTime > Date.now(); // So sánh với thời gian hiện tại
    return true;
  }
}
