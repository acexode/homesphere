import { Component } from '@angular/core';

interface StatementRecord {
  month: string;
  income: number;
  expenses: number;
  surplus: number;
}

@Component({
  selector: 'app-statements',
  templateUrl: './statements.page.html',
  styleUrls: ['./statements.page.scss'],
})
export class StatementsPage {
  statements: StatementRecord[] = [
    { month: 'December 2023', income: 52000, expenses: 47800, surplus: 4200 },
    { month: 'November 2023', income: 50500, expenses: 46200, surplus: 4300 },
  ];
}
