import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FinanceRoutingModule } from './finance-routing.module';
import { BillingPage } from './billing/billing.page';
import { PaymentsPage } from './payments/payments.page';
import { UtilityVendingPage } from './utility-vending/utility-vending.page';
import { StatementsPage } from './statements/statements.page';
import { ReconciliationPage } from './reconciliation/reconciliation.page';

@NgModule({
  declarations: [BillingPage, PaymentsPage, UtilityVendingPage, StatementsPage, ReconciliationPage],
  imports: [CommonModule, IonicModule, FinanceRoutingModule],
})
export class FinanceModule {}
