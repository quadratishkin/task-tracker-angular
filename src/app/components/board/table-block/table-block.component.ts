import { Component } from '@angular/core';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-table-block',
  templateUrl: './table-block.component.html',
  styleUrls: ['./table-block.component.scss'],
})
export class TableBlockComponent {
  constructor(public taskInformationService: TaskInformationService) {}
}
