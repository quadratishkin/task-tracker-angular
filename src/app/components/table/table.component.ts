import { Component } from '@angular/core';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  constructor(
    public taskInformationService: TaskInformationService
  ) {}
}
