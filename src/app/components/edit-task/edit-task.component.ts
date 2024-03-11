import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Priority, Status } from 'src/app/services/service.types';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  Status = Status;
  Priority = Priority;
  nameControl!: FormControl;
  isErrorName = false;
  isShowCalendar = false;

  inputName: string = this.taskInformationService.editTask.name;
  inputDescription: string =
    this.taskInformationService.editTask.description || '';
  inputData: string = this.taskInformationService.editTask.deadline;

  tmpPriority: Priority = this.taskInformationService.editTask.priority;
  tmpStatus: Status = this.taskInformationService.editTask.status;

  constructor(public taskInformationService: TaskInformationService) {}
  ngOnInit(): void {
    this.nameControl = new FormControl('', [Validators.required]);
  }

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
    if (this.nameControl.invalid) {
      this.isErrorName = true;
      return;
    }
    this.taskInformationService.editTask.name = this.inputName;
    this.taskInformationService.editTask.description = this.inputDescription;
    const time = new Date(Date.parse(this.inputData));
    let deadline = [
      time.getMonth() + 1,
      time.getDate(),
      time.getFullYear(),
    ].join('-');
    const checkboxDeleteTime = document.getElementById("checkboxDeleteTime") as HTMLInputElement;
    if (this.inputData === 'Бессрочная' || checkboxDeleteTime.checked ) {
      deadline = 'Бессрочная';
    }
    this.taskInformationService.editTask.deadline = deadline;
    this.taskInformationService.editTask.status = this.tmpStatus;
    this.taskInformationService.editTask.priority = this.tmpPriority;
    this.taskInformationService.handleChangeTask();
    this.taskInformationService.isShowEditTask = false;
  }
}
