import { Component } from '@angular/core';

interface NotificationItem {
  title: string;
  message: string;
  time: string;
  type: 'security' | 'finance' | 'helpdesk' | 'community';
}

@Component({
  standalone: false,
  selector: 'app-notification-center',
  templateUrl: './notification-center.page.html',
  styleUrls: ['./notification-center.page.scss'],
})
export class NotificationCenterPage {
  notifications: NotificationItem[] = [
    { title: 'Visitor at Gate 2', message: 'Security is awaiting your approval for John Doe.', time: 'Just now', type: 'security' },
    { title: 'Maintenance invoice generated', message: 'Invoice INV-2024-001 is ready for payment.', time: '10 min ago', type: 'finance' },
    { title: 'Ticket HS-2091 updated', message: 'Maintenance team has started working on your request.', time: '1 hr ago', type: 'helpdesk' },
  ];
}
