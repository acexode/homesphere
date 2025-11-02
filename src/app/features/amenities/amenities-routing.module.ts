import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityBookingPage } from './facility-booking/facility-booking.page';
import { VendorDirectoryPage } from './vendor-directory/vendor-directory.page';
import { TenantManagementPage } from './tenant-management/tenant-management.page';

const routes: Routes = [
  {
    path: 'facility-booking',
    component: FacilityBookingPage,
  },
  {
    path: 'vendor-directory',
    component: VendorDirectoryPage,
  },
  {
    path: 'tenant-management',
    component: TenantManagementPage,
  },
  {
    path: '',
    redirectTo: 'facility-booking',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmenitiesRoutingModule {}
