import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentDashboardPage } from './resident-dashboard/resident-dashboard.page';
import { AdminDashboardPage } from './admin-dashboard/admin-dashboard.page';
import { SecurityDashboardPage } from './security-dashboard/security-dashboard.page';
import { DashboardLandingPage } from './dashboard-landing.page';
import { UserRole } from 'src/app/core/models';
import { AuthGuard } from 'src/app/core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'resident',
    component: ResidentDashboardPage,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.RESIDENT] },
  },
  {
    path: 'admin',
    component: AdminDashboardPage,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN] },
  },
  {
    path: 'security',
    component: SecurityDashboardPage,
    canActivate: [AuthGuard],
    data: { roles: [UserRole.SECURITY] },
  },
  {
    path: '',
    component: DashboardLandingPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
