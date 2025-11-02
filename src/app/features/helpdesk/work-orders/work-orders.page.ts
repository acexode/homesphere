import { Component } from '@angular/core';

interface WorkOrder {
  id: string;
  vendor: string;
  scheduledFor: string;
  progress: number;
}

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.page.html',
  styleUrls: ['./work-orders.page.scss'],
})
export class WorkOrdersPage {
  orders: WorkOrder[] = [
    { id: 'WO-901', vendor: 'AquaFix Plumbing', scheduledFor: 'Today • 2:00 PM', progress: 60 },
    { id: 'WO-902', vendor: 'BrightSpark Electricals', scheduledFor: 'Tomorrow • 10:00 AM', progress: 10 },
  ];
}
