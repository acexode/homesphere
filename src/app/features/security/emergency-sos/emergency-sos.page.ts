import { Component } from '@angular/core';

interface SosEvent {
  resident: string;
  location: string;
  type: string;
  time: string;
  status: 'Acknowledged' | 'Resolved' | 'Escalated';
}

@Component({
  standalone: false,
  selector: 'app-emergency-sos',
  templateUrl: './emergency-sos.page.html',
  styleUrls: ['./emergency-sos.page.scss'],
})
export class EmergencySosPage {
  sosHistory: SosEvent[] = [
    { resident: 'Tower F - 1703', location: 'Gymnasium', type: 'Medical', time: '4 min ago', status: 'Acknowledged' },
    { resident: 'Villa 05', location: 'Home', type: 'Security', time: '2 hrs ago', status: 'Resolved' },
  ];
}
