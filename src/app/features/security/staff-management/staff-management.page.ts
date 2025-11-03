import { Component } from '@angular/core';

interface StaffMember {
  name: string;
  role: string;
  assignedTo: string;
  checkIn: string;
  checkOut: string;
  status: 'Onsite' | 'Offsite';
}

@Component({
  standalone: false,
  selector: 'app-staff-management',
  templateUrl: './staff-management.page.html',
  styleUrls: ['./staff-management.page.scss'],
})
export class StaffManagementPage {
  staff: StaffMember[] = [
    { name: 'Anita Singh', role: 'Housekeeping', assignedTo: 'Tower C - 1202', checkIn: '07:02', checkOut: '-', status: 'Onsite' },
    { name: 'Mahesh Kumar', role: 'Driver', assignedTo: 'Villa 08', checkIn: '08:15', checkOut: '-', status: 'Onsite' },
    { name: 'Ravi Patel', role: 'Gardener', assignedTo: 'Landscape', checkIn: '-', checkOut: '-', status: 'Offsite' },
  ];
}
