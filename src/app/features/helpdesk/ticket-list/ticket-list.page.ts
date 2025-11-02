import { Component } from '@angular/core';

interface TicketItem {
  id: string;
  category: string;
  requester: string;
  createdAt: string;
  status: 'Open' | 'In Progress' | 'Resolved';
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.page.html',
  styleUrls: ['./ticket-list.page.scss'],
})
export class TicketListPage {
  tickets: TicketItem[] = [
    { id: 'HS-2091', category: 'Plumbing', requester: 'Tower B - 904', createdAt: 'Today • 9:15 AM', status: 'In Progress' },
    { id: 'HS-2090', category: 'Security', requester: 'Villa 04', createdAt: 'Yesterday • 6:30 PM', status: 'Open' },
    { id: 'HS-2089', category: 'Electricity', requester: 'Tower A - 1102', createdAt: 'Yesterday • 4:45 PM', status: 'Resolved' },
  ];
}
