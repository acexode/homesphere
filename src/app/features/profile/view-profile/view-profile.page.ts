import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage {
  user: User | null;

  constructor(private authService: AuthService) {
    this.user = this.authService.currentUserValue;
  }
}
