import { Injectable } from '@angular/core';
import { Priority, Status, TaskValues } from './service.types';

@Injectable({
  providedIn: 'root',
})
export class TaskInformationService {
  isShowModal = false;
  isShowEditTask = false;
  editTask: TaskValues = {
    id: 0,
    name: 'NAME',
    description: '',
    executor: 'Никитос',
    deadline: '3-17-2024',
    status: Status.CREATED,
    priority: Priority.LOW,
  };

  tasks: TaskValues[] = [
    {
      id: 0,
      name: 'Задача',
      description: '',
      executor: 'Никитос',
      deadline: '3-17-2024',
      status: Status.CREATED,
      priority: Priority.LOW,
    },

    {
      id: 1,
      name: 'Задача1',
      description: 'string321',
      executor: 'Никитос21',
      deadline: '4-12-2024',
      status: Status.IN_PROGRESS,
      priority: Priority.MEDIUM,
    },
    {
      id: 2,
      name: 'Задача1',
      description: 'string321',
      executor: 'Никитос21',
      deadline: '5-22-2024',
      status: Status.IN_REVIEW,
      priority: Priority.HIGH,
    },
  ];

  constructor() {}

  handleOpenModal() {
    this.isShowModal = true;
  }

  handleOpenEditTask() {
    this.isShowEditTask = true;
  }

  handleEditTask(task: TaskValues) {
    this.editTask = task;
    this.isShowEditTask = true;
  }

  handleAddTask(task: TaskValues) {
    this.tasks.unshift(task);
  }

  handleFinishTask(id: number) {
    this.tasks = this.tasks.filter((obj) => obj.id !== id);
  }

  handleChangeTask() {
    this.tasks.map((obj) => {
      if (obj.id === this.editTask.id) {
        obj = this.editTask;
      }
    });
  }

}
