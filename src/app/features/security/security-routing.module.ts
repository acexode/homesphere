import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListPage } from './visitor-management/visitor-list/visitor-list.page';
import { VisitorApprovalPage } from './visitor-management/visitor-approval/visitor-approval.page';
import { QrGeneratorPage } from './visitor-management/qr-generator/qr-generator.page';
import { QrScannerPage } from './visitor-management/qr-scanner/qr-scanner.page';
import { StaffManagementPage } from './staff-management/staff-management.page';
import { EmergencySosPage } from './emergency-sos/emergency-sos.page';
import { VehicleParkingPage } from './vehicle-parking/vehicle-parking.page';
import { SecurityLogbookPage } from './security-logbook/security-logbook.page';
import { GuardPatrolPage } from './guard-patrol/guard-patrol.page';

const routes: Routes = [
  {
    path: 'visitor-list',
    component: VisitorListPage,
  },
  {
    path: 'visitor-approval',
    component: VisitorApprovalPage,
  },
  {
    path: 'qr-generator',
    component: QrGeneratorPage,
  },
  {
    path: 'qr-scanner',
    component: QrScannerPage,
  },
  {
    path: 'staff-management',
    component: StaffManagementPage,
  },
  {
    path: 'emergency-sos',
    component: EmergencySosPage,
  },
  {
    path: 'vehicle-parking',
    component: VehicleParkingPage,
  },
  {
    path: 'security-logbook',
    component: SecurityLogbookPage,
  },
  {
    path: 'guard-patrol',
    component: GuardPatrolPage,
  },
  {
    path: '',
    redirectTo: 'visitor-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
