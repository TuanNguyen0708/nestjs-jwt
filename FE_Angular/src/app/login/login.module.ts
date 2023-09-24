import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild([LOGIN_ROUTE]), FormsModule, ReactiveFormsModule, CommonModule],
  providers: [],
})
export class LoginModule {}
