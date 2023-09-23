import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        },
        {
          path: 'register',
          loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
        },
        {
          path: '',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        },
      ],
      { enableTracing: false },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
