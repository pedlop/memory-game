import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { TableRankingComponent } from './table-ranking/table-ranking.component';

@NgModule({
  declarations: [TableRankingComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TableRankingComponent]
})
export class TablesModule { }
