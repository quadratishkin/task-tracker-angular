import { Injectable } from '@angular/core';
import { TableType } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TableTypeControlService {
  currentTableType: TableType = TableType.BOARD

  constructor() { }

  handleChangeTableType(current: TableType) {
    this.currentTableType = current;
  }
}
