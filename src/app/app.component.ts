import { Component } from '@angular/core';
import { AuthService } from './core/auth/services/auth.service';
import { UserRole } from './core/models';

interface MenuLink {
  label: string;
  icon: string;
  route: string;
  roles: UserRole[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links: MenuLink[] = [
    {
      label: 'Dashboard',
      icon: 'grid-outline',
      route: '/dashboard/resident',
      roles: [UserRole.RESIDENT],
    },
    {
      label: 'Dashboard',
      icon: 'grid-outline',
      route: '/dashboard/admin',
      roles: [UserRole.ADMIN],
    },
    {
      label: 'Dashboard',
      icon: 'grid-outline',
      route: '/dashboard/security',
      roles: [UserRole.SECURITY],
    },
    {
      label: 'Security',
      icon: 'shield-checkmark-outline',
      route: '/security',
      roles: [UserRole.SECURITY, UserRole.ADMIN],
    },
    {
      label: 'Finance',
      icon: 'card-outline',
      route: '/finance',
      roles: [UserRole.ADMIN],
    },
    {
      label: 'Helpdesk',
      icon: 'construct-outline',
      route: '/helpdesk/ticket-list',
      roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.STAFF],
    },
    {
      label: 'Communication',
      icon: 'chatbubbles-outline',
      route: '/communication/notice-board',
      roles: [UserRole.RESIDENT, UserRole.ADMIN],
    },
    {
      label: 'Amenities',
      icon: 'basketball-outline',
      route: '/amenities/facility-booking',
      roles: [UserRole.RESIDENT, UserRole.ADMIN],
    },
    {
      label: 'Profile',
      icon: 'person-circle-outline',
      route: '/profile/view-profile',
      roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.SECURITY, UserRole.STAFF],
    },
    {
      label: 'Notifications',
      icon: 'notifications-outline',
      route: '/notifications',
      roles: [UserRole.RESIDENT, UserRole.ADMIN, UserRole.SECURITY, UserRole.STAFF],
    },
  ];

  visibleLinks: MenuLink[] = [];

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((user) => {
      if (!user) {
        this.visibleLinks = [];
        return;
      }
      this.visibleLinks = this.links.filter((link) => link.roles.includes(user.role));
    });
  }
}
