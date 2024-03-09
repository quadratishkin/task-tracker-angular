import { Component } from '@angular/core';

import { TableTypeControlService } from 'src/app/services/table-type-control.service';
import { buttonNameList, nameList } from './constants';
import { TableType } from 'src/app/services/service.types';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  TableType = TableType;
  nameList = nameList;
  buttonNameList: TableType[] = buttonNameList;

  constructor(public tableTypeControlService: TableTypeControlService) {}
}
