export interface Facility {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  bookingFee?: number;
  isActive: boolean;
  openTime?: string;
  closeTime?: string;
  maxCapacity?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FacilityBooking {
  id: string;
  facilityId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}
