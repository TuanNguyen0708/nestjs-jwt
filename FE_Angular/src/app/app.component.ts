import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfigService } from 'src/config/application-config.service';
import { AppService } from './service/app.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  title = 'Angular Ft Nestjs ';
  async ngOnInit() {}


}
