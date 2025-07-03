import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { keycloakAuthGuard } from './auth/keycloak-auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    // canActivate: [keycloakAuthGuard],
    // data: { roles: ['user', 'admin'] }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
