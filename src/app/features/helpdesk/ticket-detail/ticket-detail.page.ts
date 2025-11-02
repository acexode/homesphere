import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage {
  ticket = {
    id: 'HS-2091',
    category: 'Plumbing',
    description: 'Water leakage observed near the common washroom outside the gym.',
    createdAt: 'Today • 9:15 AM',
    status: 'In Progress',
    assignedTo: 'Maintenance Team',
  };

  timeline = [
    { time: '09:15', text: 'Ticket created by Resident (Tower B - 904)' },
    { time: '09:22', text: 'Maintenance Team assigned • SLA 4 hours' },
    { time: '09:45', text: 'Technician en route to location' },
  ];
}
