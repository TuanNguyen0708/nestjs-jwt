import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  async ngOnInit() {}
}
