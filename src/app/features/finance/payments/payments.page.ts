import { Component } from '@angular/core';

interface PaymentOption {
  method: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage {
  outstandingAmount = 325.75;
  paymentOptions: PaymentOption[] = [
    { method: 'UPI / Instant Pay', description: 'Google Pay, PhonePe, Paytm', icon: 'phone-portrait-outline' },
    { method: 'Credit / Debit Card', description: 'Visa, Mastercard, RuPay', icon: 'card-outline' },
    { method: 'NetBanking', description: 'All major banks supported', icon: 'business-outline' },
  ];
}
