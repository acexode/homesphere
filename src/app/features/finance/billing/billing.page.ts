import { Component } from '@angular/core';

interface Invoice {
  id: string;
  unit: string;
  amount: number;
  dueDate: string;
  status: 'Pending' | 'Paid' | 'Overdue';
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage {
  invoices: Invoice[] = [
    { id: 'INV-2024-001', unit: 'Tower A - 602', amount: 125.4, dueDate: '10 Jan 2024', status: 'Pending' },
    { id: 'INV-2024-002', unit: 'Tower B - 1001', amount: 98.0, dueDate: '08 Jan 2024', status: 'Paid' },
    { id: 'INV-2024-003', unit: 'Villa 07', amount: 210.25, dueDate: '05 Jan 2024', status: 'Overdue' },
  ];
}
