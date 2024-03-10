import { Component } from '@angular/core';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor(public taskInformationService: TaskInformationService) {}
}
