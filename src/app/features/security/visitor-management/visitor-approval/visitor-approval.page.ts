import { Component } from '@angular/core';

interface ApprovalRequest {
  visitorName: string;
  resident: string;
  reason: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-visitor-approval',
  templateUrl: './visitor-approval.page.html',
  styleUrls: ['./visitor-approval.page.scss'],
})
export class VisitorApprovalPage {
  requests: ApprovalRequest[] = [
    { visitorName: 'Priya Menon', resident: 'Tower D - 502', reason: 'Family Visit', submittedAt: '5 min ago', status: 'Pending' },
    { visitorName: 'Delivery - FreshMart', resident: 'Tower A - 204', reason: 'Groceries', submittedAt: '10 min ago', status: 'Pending' },
    { visitorName: 'Rahul Shah', resident: 'Villa 12', reason: 'Driver', submittedAt: '25 min ago', status: 'Approved' },
  ];

  updateStatus(request: ApprovalRequest, status: ApprovalRequest['status']) {
    request.status = status;
  }
}
