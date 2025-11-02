import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../core/auth/services/auth.service';
import { UserRole } from '../../../core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  loading = false;
  biometricsAvailable = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.checkBiometrics();
  }

  async checkBiometrics(): Promise<void> {
    // TODO: Integrate Capacitor biometric plugin once available
    this.biometricsAvailable = false;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.loading = true;

    this.authService.login(email, password).subscribe({
      next: ({ user }) => {
        this.loading = false;
        this.navigateToDashboard(user.role);
      },
      error: async (error) => {
        this.loading = false;
        const alert = await this.alertController.create({
          header: 'Login Failed',
          message: error.error?.message ?? 'Invalid email or password',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  private navigateToDashboard(role: UserRole): void {
    switch (role) {
      case UserRole.RESIDENT:
        this.router.navigate(['/dashboard/resident']);
        break;
      case UserRole.ADMIN:
        this.router.navigate(['/dashboard/admin']);
        break;
      case UserRole.SECURITY:
        this.router.navigate(['/dashboard/security']);
        break;
      case UserRole.STAFF:
        this.router.navigate(['/helpdesk/work-orders']);
        break;
      default:
        this.router.navigate(['/']);
    }
  }

  async loginWithBiometrics(): Promise<void> {
    // TODO: Implement biometric login flow
  }
}
