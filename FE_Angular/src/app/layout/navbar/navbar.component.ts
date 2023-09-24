import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account/account.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { TOKEN_KEY } from '../../constains/constains';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpenProfile: boolean = false;
  isOpenMenu: boolean = false;
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit() {}

  async onLogout() {
    await firstValueFrom(this.accountService.logOut());
    try {
      localStorage.removeItem(TOKEN_KEY);
      return this.router.navigate(['/login']);
    } catch (e) {
      return;
    }
  }
}
