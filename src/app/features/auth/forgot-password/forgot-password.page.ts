import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  resetForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async onSubmit() {
    if (this.resetForm.invalid) {
      return;
    }

    this.loading = true;
    const { email } = this.resetForm.value;

    this.authService.requestPasswordReset(email).subscribe({
      next: async () => {
        this.loading = false;
        const alert = await this.alertController.create({
          header: 'Reset Email Sent',
          message: 'Please check your inbox for a password reset link.',
          buttons: ['OK'],
        });
        await alert.present();
      },
      error: async (error) => {
        this.loading = false;
        const alert = await this.alertController.create({
          header: 'Reset Failed',
          message: error.error?.message || 'Unable to send password reset link.',
          buttons: ['OK'],
        });
        await alert.present();
      },
    });
  }
}
