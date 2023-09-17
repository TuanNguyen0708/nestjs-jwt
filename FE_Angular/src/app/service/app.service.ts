import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConfigService } from 'src/config/application-config.service';

@Injectable({ providedIn: 'root' })
export class AppService {
  apiUrl = this.applicationService.API_URL + 'api/products';

  constructor(
    private http: HttpClient,
    private applicationService: ApplicationConfigService,
  ) {}

}
