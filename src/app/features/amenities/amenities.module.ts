import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AmenitiesRoutingModule } from './amenities-routing.module';
import { FacilityBookingPage } from './facility-booking/facility-booking.page';
import { VendorDirectoryPage } from './vendor-directory/vendor-directory.page';
import { TenantManagementPage } from './tenant-management/tenant-management.page';

@NgModule({
  declarations: [FacilityBookingPage, VendorDirectoryPage, TenantManagementPage],
  imports: [CommonModule, IonicModule, AmenitiesRoutingModule],
})
export class AmenitiesModule {}
