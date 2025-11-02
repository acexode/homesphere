import { Component } from '@angular/core';

interface QuickAction {
  icon: string;
  label: string;
  route: string;
  color: string;
}

interface ActivityItem {
  title: string;
  description: string;
  timestamp: string;
  type: 'security' | 'finance' | 'helpdesk' | 'communication';
}

@Component({
  selector: 'app-resident-dashboard',
  templateUrl: './resident-dashboard.page.html',
  styleUrls: ['./resident-dashboard.page.scss'],
})
export class ResidentDashboardPage {
  quickActions: QuickAction[] = [
    { icon: 'qr-code-outline', label: 'Invite Visitor', route: '/security/visitor-approval', color: 'primary' },
    { icon: 'calendar-outline', label: 'Book Facility', route: '/amenities/facility-booking', color: 'success' },
    { icon: 'card-outline', label: 'Pay Dues', route: '/finance/payments', color: 'warning' },
    { icon: 'megaphone-outline', label: 'View Notices', route: '/communication/notice-board', color: 'tertiary' },
  ];

  communityStats = [
    { label: 'Visitors Today', value: 12, trend: 8, icon: 'people-outline' },
    { label: 'Open Tickets', value: 3, trend: -2, icon: 'construct-outline' },
    { label: 'Upcoming Bookings', value: 2, trend: 1, icon: 'calendar-number-outline' },
  ];

  activityFeed: ActivityItem[] = [
    {
      title: 'Electrician Ticket Resolved',
      description: 'Maintenance resolved your issue in Tower B.',
      timestamp: '20 min ago',
      type: 'helpdesk',
    },
    {
      title: 'Visitor Checked In',
      description: 'John Doe arrived at Gate 2.',
      timestamp: '1 hr ago',
      type: 'security',
    },
    {
      title: 'Maintenance Due',
      description: 'Invoice #HS-2024-001 is due on 12 Jan.',
      timestamp: '3 hrs ago',
      type: 'finance',
    },
    {
      title: 'Community Townhall',
      description: 'Join the virtual townhall on Saturday 6pm.',
      timestamp: 'Yesterday',
      type: 'communication',
    },
  ];
}
