import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxQrcodeModule } from 'ngx-qrcode';
import { SecurityRoutingModule } from './security-routing.module';
import { VisitorListPage } from './visitor-management/visitor-list/visitor-list.page';
import { VisitorApprovalPage } from './visitor-management/visitor-approval/visitor-approval.page';
import { QrGeneratorPage } from './visitor-management/qr-generator/qr-generator.page';
import { QrScannerPage } from './visitor-management/qr-scanner/qr-scanner.page';
import { StaffManagementPage } from './staff-management/staff-management.page';
import { EmergencySosPage } from './emergency-sos/emergency-sos.page';
import { VehicleParkingPage } from './vehicle-parking/vehicle-parking.page';
import { SecurityLogbookPage } from './security-logbook/security-logbook.page';
import { GuardPatrolPage } from './guard-patrol/guard-patrol.page';

@NgModule({
  declarations: [
    VisitorListPage,
    VisitorApprovalPage,
    QrGeneratorPage,
    QrScannerPage,
    StaffManagementPage,
    EmergencySosPage,
    VehicleParkingPage,
    SecurityLogbookPage,
    GuardPatrolPage,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, NgxQrcodeModule, SecurityRoutingModule],
})
export class SecurityModule {}
