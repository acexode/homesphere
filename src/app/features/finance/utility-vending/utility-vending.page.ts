import { Component } from '@angular/core';

interface UtilityMeter {
  meterId: string;
  type: 'Electricity' | 'Water' | 'Gas';
  balance: number;
  lastTopUp: string;
}

@Component({
  selector: 'app-utility-vending',
  templateUrl: './utility-vending.page.html',
  styleUrls: ['./utility-vending.page.scss'],
})
export class UtilityVendingPage {
  meters: UtilityMeter[] = [
    { meterId: 'ELEC-2301', type: 'Electricity', balance: 37.5, lastTopUp: '2 days ago' },
    { meterId: 'WATR-4531', type: 'Water', balance: 128.0, lastTopUp: '5 days ago' },
  ];
}
