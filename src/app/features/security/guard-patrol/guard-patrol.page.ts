import { Component } from '@angular/core';

interface PatrolCheckpoint {
  name: string;
  dueTime: string;
  status: 'Completed' | 'Upcoming';
}

@Component({
  selector: 'app-guard-patrol',
  templateUrl: './guard-patrol.page.html',
  styleUrls: ['./guard-patrol.page.scss'],
})
export class GuardPatrolPage {
  checkpoints: PatrolCheckpoint[] = [
    { name: 'Basement B2 Exit', dueTime: 'Completed 10:20', status: 'Completed' },
    { name: 'Clubhouse Lobby', dueTime: 'Due 11:00', status: 'Upcoming' },
    { name: 'Tower E Fire Staircase', dueTime: 'Due 11:15', status: 'Upcoming' },
  ];
}
