import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { UserRole } from 'src/app/core/models';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  roles = [
    { label: 'Resident', value: UserRole.RESIDENT },
    { label: 'Admin', value: UserRole.ADMIN },
    { label: 'Security', value: UserRole.SECURITY },
    { label: 'Staff', value: UserRole.STAFF },
  ];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [UserRole.RESIDENT, Validators.required],
      unitNumber: [''],
    });
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: async () => {
        this.loading = false;
        const alert = await this.alertController.create({
          header: 'Registration Complete',
          message: 'Account created successfully. Please sign in.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/auth/login']);
      },
      error: async (error) => {
        this.loading = false;
        const alert = await this.alertController.create({
          header: 'Registration Failed',
          message: error.error?.message || 'Unable to complete registration.',
          buttons: ['OK'],
        });
        await alert.present();
      },
    });
  }
}
