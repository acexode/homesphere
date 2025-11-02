import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListPage } from './ticket-list/ticket-list.page';
import { CreateTicketPage } from './create-ticket/create-ticket.page';
import { TicketDetailPage } from './ticket-detail/ticket-detail.page';
import { WorkOrdersPage } from './work-orders/work-orders.page';
import { FeedbackPage } from './feedback/feedback.page';

const routes: Routes = [
  {
    path: 'ticket-list',
    component: TicketListPage,
  },
  {
    path: 'create-ticket',
    component: CreateTicketPage,
  },
  {
    path: 'ticket-detail',
    component: TicketDetailPage,
  },
  {
    path: 'work-orders',
    component: WorkOrdersPage,
  },
  {
    path: 'feedback',
    component: FeedbackPage,
  },
  {
    path: '',
    redirectTo: 'ticket-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpdeskRoutingModule {}
