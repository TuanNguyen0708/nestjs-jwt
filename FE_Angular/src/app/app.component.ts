import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth: boolean = false;
  constructor(
    public accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAuth = this.accountService.isLoggedIn();
      }
    });
  }
}
