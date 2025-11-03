import { Component } from '@angular/core';

interface MetricCard {
  title: string;
  value: string;
  trend: number;
  icon: string;
  color: string;
}

interface WorkItem {
  title: string;
  owner: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  module: string;
}

@Component({
  standalone: false,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage {
  metrics: MetricCard[] = [
    { title: 'Monthly Collections', value: '$48,900', trend: 12, icon: 'cash-outline', color: 'success' },
    { title: 'Overdue Invoices', value: '$3,200', trend: -5, icon: 'trending-up-outline', color: 'warning' },
    { title: 'Active Tickets', value: '18', trend: 6, icon: 'hammer-outline', color: 'danger' },
    { title: 'Occupancy Rate', value: '96%', trend: 2, icon: 'home-outline', color: 'primary' },
  ];

  workQueue: WorkItem[] = [
    { title: 'Approve vendor onboarding - AC Services', owner: 'Facilities Team', dueDate: 'Today', status: 'in-progress', module: 'Amenities' },
    { title: 'Review security incident report #124', owner: 'Chief Security', dueDate: 'Tomorrow', status: 'pending', module: 'Security' },
    { title: 'Publish monthly financial summary', owner: 'Finance', dueDate: '15 Jan', status: 'pending', module: 'Finance' },
    { title: 'Close ticket HS-TK-2091', owner: 'Helpdesk', dueDate: '11 Jan', status: 'completed', module: 'Helpdesk' },
  ];

  announcements = [
    {
      title: 'Elevator maintenance scheduled',
      body: 'Tower C elevators will be serviced on Friday between 10am-2pm.',
      target: 'All Residents',
    },
    {
      title: 'Budget meeting recap',
      body: 'Download the minutes from the December finance committee session.',
      target: 'Management Committee',
    },
  ];
}
