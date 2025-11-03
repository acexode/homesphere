import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeBoardPage } from './notice-board/notice-board.page';
import { PollsPage } from './polls/polls.page';
import { ForumsPage } from './forums/forums.page';
import { AnnouncementsPage } from './announcements/announcements.page';

const routes: Routes = [
  {
    path: 'notice-board',
    component: NoticeBoardPage,
  },
  {
    path: 'polls',
    component: PollsPage,
  },
  {
    path: 'forums',
    component: ForumsPage,
  },
  {
    path: 'announcements',
    component: AnnouncementsPage,
  },
  {
    path: '',
    redirectTo: 'notice-board',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationRoutingModule {}
