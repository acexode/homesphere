import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileRoutingModule } from './profile-routing.module';
import { ViewProfilePage } from './view-profile/view-profile.page';
import { EditProfilePage } from './edit-profile/edit-profile.page';
import { SettingsPage } from './settings/settings.page';

@NgModule({
  declarations: [ViewProfilePage, EditProfilePage, SettingsPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, ProfileRoutingModule],
})
export class ProfileModule {}
