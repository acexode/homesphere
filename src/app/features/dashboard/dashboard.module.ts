import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ResidentDashboardPage } from './resident-dashboard/resident-dashboard.page';
import { AdminDashboardPage } from './admin-dashboard/admin-dashboard.page';
import { SecurityDashboardPage } from './security-dashboard/security-dashboard.page';
import { DashboardLandingPage } from './dashboard-landing.page';

@NgModule({
  declarations: [ResidentDashboardPage, AdminDashboardPage, SecurityDashboardPage, DashboardLandingPage],
  imports: [CommonModule, IonicModule, DashboardRoutingModule],
})
export class DashboardModule {}
