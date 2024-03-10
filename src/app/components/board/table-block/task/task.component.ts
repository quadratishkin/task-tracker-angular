import { Component, Input } from '@angular/core';
import { Priority, Status, TaskValues } from 'src/app/services/service.types';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  Priority = Priority;
  Status = Status;
  @Input() task!: TaskValues;

  constructor(public taskInformationService: TaskInformationService) {}
}
