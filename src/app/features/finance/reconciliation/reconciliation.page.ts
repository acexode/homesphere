import { Component } from '@angular/core';

interface ReconciliationItem {
  bankReference: string;
  ledgerReference: string;
  amount: number;
  status: 'Matched' | 'Mismatch';
}

@Component({
  standalone: false,
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.page.html',
  styleUrls: ['./reconciliation.page.scss'],
})
export class ReconciliationPage {
  items: ReconciliationItem[] = [
    { bankReference: 'NEFT-40981', ledgerReference: 'INV-2024-001', amount: 125.4, status: 'Matched' },
    { bankReference: 'UPI-88771', ledgerReference: 'INV-2024-004', amount: 99.0, status: 'Mismatch' },
  ];
}
