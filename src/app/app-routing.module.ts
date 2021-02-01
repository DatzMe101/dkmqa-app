import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './pages/admin-dasboard/admin-dasboard.component';
import { AdminComponent } from './layouts/admin/admin.component';

import { ClientComponent } from './layouts/client/client.component';
import { ClientHomeComponent } from './pages/client-home/client-home.component';

import { LoginComponent } from './pages/login/login.component';

import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [fromGuards.LanguageGuard],
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: '',
    canActivate: [fromGuards.LanguageGuard, fromGuards.LabelGuard],
    component: ClientComponent,
    data: {
      title: 'Main',
    },
    children: [
      {
        path: 'home',
        component: ClientHomeComponent,
        data: {
          title: 'Home',
        },
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [fromGuards.LanguageGuard, fromGuards.LabelGuard],
    component: AdminComponent,
    data: {
      title: 'Admin',
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
