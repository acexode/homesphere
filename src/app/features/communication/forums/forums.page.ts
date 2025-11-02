import { Component } from '@angular/core';

interface Thread {
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
}

@Component({
  selector: 'app-forums',
  templateUrl: './forums.page.html',
  styleUrls: ['./forums.page.scss'],
})
export class ForumsPage {
  threads: Thread[] = [
    { title: 'Carpool for school kids from Tower D', author: 'Anita G', replies: 12, lastActivity: '1 hour ago' },
    { title: 'Looking for yoga instructor', author: 'Rahul S', replies: 5, lastActivity: '3 hours ago' },
  ];
}
