import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { UserRole } from 'src/app/core/models';

@Component({
  selector: 'app-dashboard-landing',
  template: '',
})
export class DashboardLandingPage implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const role = this.authService.userRole;
    if (!role) {
      this.router.navigate(['/auth/login']);
      return;
    }
    switch (role) {
      case UserRole.ADMIN:
        this.router.navigate(['/dashboard/admin']);
        break;
      case UserRole.SECURITY:
        this.router.navigate(['/dashboard/security']);
        break;
      case UserRole.RESIDENT:
      default:
        this.router.navigate(['/dashboard/resident']);
        break;
    }
  }
}
