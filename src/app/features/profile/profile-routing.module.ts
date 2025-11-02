import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfilePage } from './view-profile/view-profile.page';
import { EditProfilePage } from './edit-profile/edit-profile.page';
import { SettingsPage } from './settings/settings.page';

const routes: Routes = [
  {
    path: 'view-profile',
    component: ViewProfilePage,
  },
  {
    path: 'edit-profile',
    component: EditProfilePage,
  },
  {
    path: 'settings',
    component: SettingsPage,
  },
  {
    path: '',
    redirectTo: 'view-profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
