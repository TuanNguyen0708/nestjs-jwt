import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.accountService.isLoggedIn()) {
      this.router.navigate(['/']).then();
    }
  }
}
