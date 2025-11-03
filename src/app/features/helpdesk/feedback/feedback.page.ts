import { Component } from '@angular/core';

interface FeedbackItem {
  ticketId: string;
  rating: number;
  comments: string;
  submittedBy: string;
}

@Component({
  standalone: false,
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {
  feedbacks: FeedbackItem[] = [
    { ticketId: 'HS-2089', rating: 5, comments: 'Technician arrived quickly and fixed the issue in 30 minutes.', submittedBy: 'Tower A - 1102' },
    { ticketId: 'HS-2077', rating: 3, comments: 'Follow-up required to clean the site after work.', submittedBy: 'Villa 08' },
  ];

  public createArray(length: number): number[] {
    return Array.from({ length });
  }
}
