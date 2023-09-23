import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild([LOGIN_ROUTE])],
  providers: [],
})
export class LoginModule {}
