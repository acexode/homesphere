export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

export interface Payment {
  id: string;
  invoiceNumber: string;
  unitId: string;
  amount: number;
  currency: string;
  dueDate: Date;
  paidDate?: Date;
  status: PaymentStatus;
  referenceId?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
