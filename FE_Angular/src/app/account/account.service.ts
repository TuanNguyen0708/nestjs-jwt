import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApplicationConfigService } from "../../config/application-config.service";

@Injectable({providedIn: 'root'})

export class AccountService {

  apiUrl = this.applicationService.API_URL + 'api/user';
  constructor(private http: HttpClient, private applicationService: ApplicationConfigService) {}



}
