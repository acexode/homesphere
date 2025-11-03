import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  notificationSettings = {
    push: true,
    email: true,
    sms: false,
  };
}
