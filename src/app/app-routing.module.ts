import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTemplateComponent } from './layout/components/login-template/login-template.component';
import { DefaultTemplateComponent } from './layout/components/default-template/default-template.component';
import { AuthenticationGuard } from './modules/authentication/guard/authentication.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: LoginTemplateComponent,
    loadChildren: () => import('./modules/authentication/authentication.module').then(authentication => authentication.AuthenticationModule)
  },
  {
    path: 'dashboard',
    component: DefaultTemplateComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'user',
    component: DefaultTemplateComponent,
    loadChildren: () => import('./modules/user/user.module').then(user => user.UserModule),
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'profile',
    component: DefaultTemplateComponent,
    loadChildren: () => import('./modules/profile/profile.module').then(profile => profile.ProfileModule),
    // canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
