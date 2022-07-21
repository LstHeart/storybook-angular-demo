import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list.component';
import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from './pure-task-list.component';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { InboxScreenComponent } from './inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [
    TaskComponent,
    TaskListComponent,
    PureTaskListComponent,
  ],
  providers: [],
})
export class TaskModule {}
