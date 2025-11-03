import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage {
  inviteForm: FormGroup;
  generatedCode: string | null = null;

  constructor(private fb: FormBuilder) {
    this.inviteForm = this.fb.group({
      visitorName: ['', Validators.required],
      visitDate: ['', Validators.required],
      visitTime: ['', Validators.required],
      purpose: ['', Validators.required],
      vehicleNumber: [''],
    });
  }

  generate() {
    if (this.inviteForm.invalid) {
      return;
    }

    this.generatedCode = JSON.stringify({ ...this.inviteForm.value, code: Date.now() });
  }
}
