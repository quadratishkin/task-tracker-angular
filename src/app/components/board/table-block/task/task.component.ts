import { Component, Input } from '@angular/core';
import { TaskValues } from 'src/app/services/service.types';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: TaskValues;

  constructor(public taskInformationService: TaskInformationService) {}

  ngOnInit() {
    console.log(this.task);
  }
}
