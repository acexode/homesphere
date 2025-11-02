import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationCenterPage } from './notification-center/notification-center.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationCenterPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
