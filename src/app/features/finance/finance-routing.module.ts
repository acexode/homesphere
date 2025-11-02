import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPage } from './billing/billing.page';
import { PaymentsPage } from './payments/payments.page';
import { UtilityVendingPage } from './utility-vending/utility-vending.page';
import { StatementsPage } from './statements/statements.page';
import { ReconciliationPage } from './reconciliation/reconciliation.page';

const routes: Routes = [
  {
    path: 'billing',
    component: BillingPage,
  },
  {
    path: 'payments',
    component: PaymentsPage,
  },
  {
    path: 'utility-vending',
    component: UtilityVendingPage,
  },
  {
    path: 'statements',
    component: StatementsPage,
  },
  {
    path: 'reconciliation',
    component: ReconciliationPage,
  },
  {
    path: '',
    redirectTo: 'billing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
