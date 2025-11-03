import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { TicketListPage } from './ticket-list/ticket-list.page';
import { CreateTicketPage } from './create-ticket/create-ticket.page';
import { TicketDetailPage } from './ticket-detail/ticket-detail.page';
import { WorkOrdersPage } from './work-orders/work-orders.page';
import { FeedbackPage } from './feedback/feedback.page';

@NgModule({
  declarations: [TicketListPage, CreateTicketPage, TicketDetailPage, WorkOrdersPage, FeedbackPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, HelpdeskRoutingModule],
})
export class HelpdeskModule {}
