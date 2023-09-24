import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, Validators.required],
  });

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    if (this.accountService.isLoggedIn()) {
      this.router.navigate(['/']).then();
    }
  }

  async goLogin() {
    try {
      await firstValueFrom(this.accountService.login(this.formLogin?.value));
      this.router.navigate(['/']).then();
    } catch (e) {
      console.log(e);
    }
  }
}
