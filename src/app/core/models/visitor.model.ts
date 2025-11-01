import { User } from './user.model';

export interface Visitor {
  id: string;
  fullName: string;
  contactNumber: string;
  visitPurpose: string;
  expectedArrival: Date;
  expectedDeparture?: Date;
  hostId: string;
  host?: User;
  qrCode?: string;
  approvalStatus: 'PENDING' | 'APPROVED' | 'DENIED';
  createdAt: Date;
  updatedAt: Date;
}
