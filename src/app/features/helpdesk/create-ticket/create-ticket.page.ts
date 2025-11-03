import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.page.html',
  styleUrls: ['./create-ticket.page.scss'],
})
export class CreateTicketPage {
  ticketForm: FormGroup;
  categories = ['Electrical', 'Plumbing', 'Security', 'Housekeeping'];

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      category: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      attachments: [[]],
    });
  }

  submit() {
    if (this.ticketForm.invalid) {
      return;
    }
    // Placeholder for API integration
    console.log('Ticket created', this.ticketForm.value);
    this.ticketForm.reset();
  }
}
