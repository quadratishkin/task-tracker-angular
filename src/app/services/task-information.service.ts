import { Injectable } from '@angular/core';
import { Priority, Status, TaskValues } from './service.types';

@Injectable({
  providedIn: 'root',
})
export class TaskInformationService {
  isShowModal = false;
  isShowEditTask = false;
  isFiltered = false;
  editTask: TaskValues = {
    id: 0,
    name: 'NAME',
    description: '',
    executor: 'Никитос',
    deadline: '3-17-2024',
    status: Status.CREATED,
    priority: Priority.LOW,
  };

  currentTasks: TaskValues[] = [];
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

  compare(a: TaskValues, b: TaskValues) {
    if (a.deadline.split('-')[2] < b.deadline.split('-')[2]) {
      return -1;
    } else if (a.deadline.split('-')[2] > b.deadline.split('-')[2]) {
      return 1;
    }
    if (a.deadline.split('-')[0] < b.deadline.split('-')[0]) {
      return -1;
    } else if (a.deadline.split('-')[0] > b.deadline.split('-')[0]) {
      return 1;
    }
    if (a.deadline.split('-')[1] < b.deadline.split('-')[1]) {
      return -1;
    } else if (a.deadline.split('-')[1] > b.deadline.split('-')[1]) {
      return 1;
    }
    return 0;
  }

  handleSort(key: string) {
    switch (key) {
      case 'status': {
        let newTasks = this.tasks.filter(
          (item) => item.status === Status.IN_PROGRESS
        );
        this.tasks.map((item) => {
          if (item.status === Status.CREATED) {
            newTasks.unshift(item);
          }
          if (item.status === Status.IN_REVIEW) {
            newTasks.push(item);
          }
          return;
        });
        this.tasks = newTasks;

        break;
      }

      case 'priority': {
        let newTasks = this.tasks.filter(
          (item) => item.priority === Priority.MEDIUM
        );
        this.tasks.map((item) => {
          if (item.priority === Priority.LOW) {
            newTasks.unshift(item);
          }
          if (item.priority === Priority.HIGH) {
            newTasks.push(item);
          }
          return;
        });
        this.tasks = newTasks;
        break;
      }
      default: {
        this.tasks.sort(this.compare);
        break;
      }
    }
  }

  handleFilter(key: string) {
    if (!this.isFiltered) {
      this.currentTasks = this.tasks;
    }
    switch (key) {
      case 'created': {
        this.isFiltered = true;
        this.tasks = this.tasks.filter(
          (item) => item.status === Status.CREATED
        );
        break;
      }
      case 'in_progress': {
        this.isFiltered = true;
        this.tasks = this.tasks.filter(
          (item) => item.status === Status.CREATED
        );
        break;
      }
      case 'in_review': {
        this.isFiltered = true;
        this.tasks = this.tasks.filter(
          (item) => item.status === Status.CREATED
        );
        break;
      }
      case 'low': {
        this.isFiltered = true;
        this.tasks = this.tasks.filter(
          (item) => item.priority === Priority.LOW
        );
        break;
      }
      case 'medium': {
        this.isFiltered = true;
        this.tasks = this.tasks.filter(
          (item) => item.priority === Priority.MEDIUM
        );
        break;
      }
      case 'high': {
        this.isFiltered = true;
        this.tasks = this.tasks.filter(
          (item) => item.priority === Priority.HIGH
        );
        break;
      }
      default:
        this.tasks = this.currentTasks;
        this.isFiltered = false;
        break;
    }
  }
}
