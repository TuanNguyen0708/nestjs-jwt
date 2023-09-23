import { NgModule } from '@angular/core';
import { HOME_ROUTE } from './home.route';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild([HOME_ROUTE])],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
