import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { REGISTER_ROUTE } from './register.route';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [RouterModule.forChild([REGISTER_ROUTE])],
  providers: [],
})
export class RegisterModule {}
