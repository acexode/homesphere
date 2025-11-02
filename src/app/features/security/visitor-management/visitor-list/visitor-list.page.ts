import { Component } from '@angular/core';

interface VisitorRecord {
  name: string;
  resident: string;
  purpose: string;
  scheduledAt: string;
  status: 'Pending' | 'Checked In' | 'Checked Out';
}

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.page.html',
  styleUrls: ['./visitor-list.page.scss'],
})
export class VisitorListPage {
  visitors: VisitorRecord[] = [
    { name: 'Karthik Nair', resident: 'Tower A - 803', purpose: 'Guest', scheduledAt: 'Today • 4:30 PM', status: 'Pending' },
    { name: 'Meena Sharma', resident: 'Tower B - 1101', purpose: 'Daily Help', scheduledAt: 'Today • 6:00 AM', status: 'Checked In' },
    { name: 'BlueSpark Services', resident: 'Clubhouse', purpose: 'Vendor', scheduledAt: 'Tomorrow • 11:00 AM', status: 'Pending' },
  ];
}
