import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommunicationRoutingModule } from './communication-routing.module';
import { NoticeBoardPage } from './notice-board/notice-board.page';
import { PollsPage } from './polls/polls.page';
import { ForumsPage } from './forums/forums.page';
import { AnnouncementsPage } from './announcements/announcements.page';

@NgModule({
  declarations: [NoticeBoardPage, PollsPage, ForumsPage, AnnouncementsPage],
  imports: [CommonModule, IonicModule, CommunicationRoutingModule],
})
export class CommunicationModule {}
