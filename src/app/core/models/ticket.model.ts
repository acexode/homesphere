export type TicketPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  reporterId: string;
  assigneeId?: string;
  priority: TicketPriority;
  status: TicketStatus;
  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date;
}
