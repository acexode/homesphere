import { Component } from '@angular/core';

interface NoticeItem {
  title: string;
  description: string;
  publishedOn: string;
}

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.page.html',
  styleUrls: ['./notice-board.page.scss'],
})
export class NoticeBoardPage {
  notices: NoticeItem[] = [
    { title: 'Water shutdown on 12 Jan', description: 'Maintenance will conduct line flushing from 9am-12pm.', publishedOn: 'Today' },
    { title: 'Community Sports Day', description: 'Registrations open for badminton, tennis, and football tournaments.', publishedOn: 'Yesterday' },
  ];
}
