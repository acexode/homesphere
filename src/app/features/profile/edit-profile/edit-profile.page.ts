import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    const user = this.authService.currentUserValue;
    this.profileForm = this.fb.group({
      firstName: [user?.firstName || '', Validators.required],
      lastName: [user?.lastName || '', Validators.required],
      phone: [user?.phone || '', Validators.required],
    });
  }

  save() {
    if (this.profileForm.invalid) {
      return;
    }
    // TODO: integrate API
    console.log('Profile saved', this.profileForm.value);
  }
}
