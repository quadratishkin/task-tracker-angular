import { Component } from '@angular/core';
import { Priority, Status } from 'src/app/services/service.types';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent {
  Status = Status;
  Priority = Priority;

  inputName: string = this.taskInformationService.editTask.name;
  inputDescription: string =
    this.taskInformationService.editTask.description || '';
  inputData: string = this.taskInformationService.editTask.deadline;

  tmpPriority: Priority = this.taskInformationService.editTask.priority;
  tmpStatus: Status = this.taskInformationService.editTask.status;

  isShowCalendar = false;

  constructor(public taskInformationService: TaskInformationService) {}

  handelButtonCLickPriority(priority: Priority) {
    this.tmpPriority = priority;
  }

  handelButtonCLickStatus(status: Status) {
    this.tmpStatus = status;
  }

  handleChangeStateCalendar() {
    this.isShowCalendar = !this.isShowCalendar;
  }

  handleChangeTask() {
    this.taskInformationService.editTask.name = this.inputName;
    this.taskInformationService.editTask.description = this.inputDescription;
    this.taskInformationService.editTask.deadline = this.inputData;
    this.taskInformationService.editTask.status = this.tmpStatus;
    this.taskInformationService.editTask.priority = this.tmpPriority;
    this.taskInformationService.handleChangeTask();
  }
}
