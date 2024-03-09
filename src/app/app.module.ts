import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableBlockComponent } from './components/board/table-block/table-block.component';
import { TaskComponent } from './components/board/table-block/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BoardComponent,
    ListComponent,
    ModalComponent,
    TableBlockComponent,
    TaskComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
