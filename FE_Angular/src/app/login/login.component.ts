import { Component, OnInit } from '@angular/core';
import { AccountService } from "../account/account.service";
import { firstValueFrom } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    if (this.accountService.isLoggedIn()) {
      this.router.navigate(['/']).then()
    }
  }

  async goLogin() {
    try {
      await firstValueFrom(this.accountService.login({email: 'tuan1@gmai', password: '123'}))
      this.router.navigate(['/']).then();
    } catch (e) {
      console.log(e);
    }
  }
}
