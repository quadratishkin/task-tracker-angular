import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Priority, Status } from 'src/app/services/service.types';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  Priority = Priority;
  Status = Status;
  nameControl!: FormControl;
  isErrorName = false;

  constructor(public taskInformationService: TaskInformationService) {}
  ngOnInit(): void {
    this.nameControl = new FormControl('', [Validators.required]);
  }

  currentPriopity = Priority.MEDIUM;

  inputName: string = '';
  inputDescription: string = '';
  inputData: string = '';

  handelButtonCLickPriority(priority: Priority) {
    this.currentPriopity = priority;
  }
  handleAddTask() {
    if (this.nameControl.invalid) {
      this.isErrorName = true;
      return;
    }
    const time = new Date(Date.parse(this.inputData));
    let deadline = [
      time.getMonth() + 1,
      time.getDate(),
      time.getFullYear(),
    ].join('-');
    if (this.inputData === '') {
      deadline = 'Бессрочная';
    }
    const task = {
      id: 3,
      name: this.inputName,
      executor: 'Никитос',
      deadline: deadline,
      description: this.inputDescription,
      priority: this.currentPriopity,
      status: Status.CREATED,
    };
    this.isErrorName = false;
    this.taskInformationService.handleAddTask(task);
    this.taskInformationService.isShowModal = false;
  }
}
