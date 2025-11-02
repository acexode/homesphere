import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationCenterPage } from './notification-center/notification-center.page';

@NgModule({
  declarations: [NotificationCenterPage],
  imports: [CommonModule, IonicModule, NotificationsRoutingModule],
})
export class NotificationsModule {}
