import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { DialogStatisticsComponent } from './dialog-statistics/dialog-statistics.component';
import { TablesModule } from '../tables/tables.module';

@NgModule({
  declarations: [DialogUserComponent, DialogStatisticsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    TablesModule
  ],
  entryComponents: [DialogUserComponent, DialogStatisticsComponent]
})
export class DialogModule { }
