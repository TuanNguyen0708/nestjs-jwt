import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth-guard/auth.guard';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    title: 'Home',
  },
  canActivate: [AuthGuard],
};
