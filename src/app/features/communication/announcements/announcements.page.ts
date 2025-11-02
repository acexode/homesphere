import { Component } from '@angular/core';

interface Announcement {
  title: string;
  audience: string;
  schedule: string;
  status: 'Draft' | 'Scheduled' | 'Sent';
}

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage {
  announcements: Announcement[] = [
    { title: 'Emergency drill reminder', audience: 'All Residents', schedule: '12 Jan • 5:00 PM', status: 'Scheduled' },
    { title: 'Gym maintenance downtime', audience: 'Tower C Residents', schedule: 'Sent', status: 'Sent' },
  ];
}
