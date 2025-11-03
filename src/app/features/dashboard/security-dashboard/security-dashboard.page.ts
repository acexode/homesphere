import { Component } from '@angular/core';

interface GateActivity {
  resident: string;
  visitor: string;
  purpose: string;
  time: string;
  status: 'scheduled' | 'checked-in' | 'pending';
}

interface PatrolRoute {
  name: string;
  checkpoints: number;
  nextCheckpoint: string;
  status: 'on-track' | 'delayed';
}

@Component({
  standalone: false,
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.page.html',
  styleUrls: ['./security-dashboard.page.scss'],
})
export class SecurityDashboardPage {
  gateActivities: GateActivity[] = [
    { resident: 'Apt 1204', visitor: 'Lisa Carter', purpose: 'Guest', time: 'Now', status: 'checked-in' },
    { resident: 'Villa 03', visitor: 'Daily Help', purpose: 'Staff', time: '10 min', status: 'scheduled' },
    { resident: 'Tower B 904', visitor: 'Electrician', purpose: 'Maintenance', time: '20 min', status: 'pending' },
  ];

  patrolRoutes: PatrolRoute[] = [
    { name: 'North Perimeter', checkpoints: 12, nextCheckpoint: 'Checkpoint 7', status: 'on-track' },
    { name: 'Basement Parking', checkpoints: 8, nextCheckpoint: 'Checkpoint 3', status: 'delayed' },
  ];

  emergencyContacts = [
    { name: 'Fire Department', phone: '101', type: 'External' },
    { name: 'On-site Doctor', phone: '+1 234 555 0101', type: 'Internal' },
    { name: 'Command Center', phone: '+1 234 555 0200', type: 'Internal' },
  ];
}
