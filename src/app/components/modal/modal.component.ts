import { Component, Output } from '@angular/core';
import { Priority, Status } from 'src/app/services/service.types';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  Priority = Priority;
  Status = Status;

  constructor(public taskInformationService: TaskInformationService) {}

  currentPriopity = Priority.MEDIUM;

  inputName: string = '';
  inputDescription: string = '';
  inputData: string = '';

  handelButtonCLickPriority(priority: Priority) {
    this.currentPriopity = priority;
  }
  handleAddTask() {
    const time = new Date(Date.parse(this.inputData));
    const task = {
      id: 3,
      name: this.inputName,
      executor: 'Никитос',
      deadline: [time.getMonth() + 1, time.getDate(), time.getFullYear()].join(
        '-'
      ),
      description: this.inputDescription,
      priority: this.currentPriopity,
      status: Status.CREATED,
    };
    this.taskInformationService.handleAddTask(task);
  }
}
