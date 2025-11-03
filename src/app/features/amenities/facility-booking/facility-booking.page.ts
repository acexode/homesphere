import { Component } from '@angular/core';

interface FacilitySlot {
  facility: string;
  slot: string;
  price: number;
  status: 'Available' | 'Reserved';
}

@Component({
  standalone: false,
  selector: 'app-facility-booking',
  templateUrl: './facility-booking.page.html',
  styleUrls: ['./facility-booking.page.scss'],
})
export class FacilityBookingPage {
  slots: FacilitySlot[] = [
    { facility: 'Clubhouse Banquet', slot: '12 Jan • 7pm - 10pm', price: 125, status: 'Reserved' },
    { facility: 'Badminton Court', slot: '12 Jan • 6pm - 7pm', price: 10, status: 'Available' },
    { facility: 'Infinity Pool', slot: '13 Jan • 5pm - 6pm', price: 0, status: 'Available' },
  ];
}
