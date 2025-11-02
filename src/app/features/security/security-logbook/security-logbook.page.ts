import { Component } from '@angular/core';

interface LogEntry {
  time: string;
  guard: string;
  description: string;
  category: 'incident' | 'patrol' | 'visitor';
}

@Component({
  selector: 'app-security-logbook',
  templateUrl: './security-logbook.page.html',
  styleUrls: ['./security-logbook.page.scss'],
})
export class SecurityLogbookPage {
  logEntries: LogEntry[] = [
    { time: '09:40', guard: 'Arjun P', description: 'Delivered lost wallet to resident Tower A-602', category: 'incident' },
    { time: '08:15', guard: 'Sumit R', description: 'Completed North perimeter patrol route', category: 'patrol' },
    { time: '07:05', guard: 'Meera S', description: 'Visitor Rahul (Electrician) checked in at Gate 1', category: 'visitor' },
  ];
}
