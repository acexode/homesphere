import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { UserRole } from './core/models';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.SECURITY] },
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'security',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.SECURITY, UserRole.ADMIN] },
    loadChildren: () => import('./features/security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: 'finance',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN] },
    loadChildren: () => import('./features/finance/finance.module').then((m) => m.FinanceModule),
  },
  {
    path: 'helpdesk',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.STAFF] },
    loadChildren: () => import('./features/helpdesk/helpdesk.module').then((m) => m.HelpdeskModule),
  },
  {
    path: 'communication',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT, UserRole.ADMIN] },
    loadChildren: () => import('./features/communication/communication.module').then((m) => m.CommunicationModule),
  },
  {
    path: 'amenities',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT, UserRole.ADMIN] },
    loadChildren: () => import('./features/amenities/amenities.module').then((m) => m.AmenitiesModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.SECURITY, UserRole.STAFF] },
    loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.SECURITY, UserRole.STAFF] },
    loadChildren: () => import('./features/notifications/notifications.module').then((m) => m.NotificationsModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
