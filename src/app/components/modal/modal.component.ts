import { Component } from '@angular/core';
import { TaskInformationService } from 'src/app/services/task-information.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(public taskInformationService: TaskInformationService) {}
}
