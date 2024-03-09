import { Injectable } from '@angular/core';
import { AddTask, TaskValues } from './service.types';

@Injectable({
  providedIn: 'root',
})
export class TaskInformationService {
  isShowModal = false;

  tasks: TaskValues[] = [
    {
      id: 0,
      name: 'Задача',
      excutor: 'Никитос',
      deadline: 'string',
      dependencies: [],
      description: 'string',
      isLiked: false,
    },
    {
      id: 1,
      name: 'Задача1',
      excutor: 'Никитос21',
      deadline: 'string213',
      dependencies: [],
      description: 'string321',
      isLiked: false,
    },
  ];

  constructor() {}

  handleOpenModal() {
    this.isShowModal = true;
  }

  handleAddTask(task: AddTask) {
    const newTask = JSON.parse(JSON.stringify(task));
    newTask.id = 3;
    newTask.isLiked = false;
    this.tasks.push(newTask);
  }

  handleFinishTask(id: number) {
    console.log(this.tasks);
    this.tasks = this.tasks.filter((obj) => obj.id !== id);
    console.log(this.tasks);
  }

  handleChangeLike(id: number) {
    this.tasks.map(function (obj) {
      if (obj.id === id) {
        obj.isLiked = !obj.isLiked;
      }
    });
  }
}
