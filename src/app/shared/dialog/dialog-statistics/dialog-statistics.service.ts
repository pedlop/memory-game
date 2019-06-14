import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogStatisticsComponent } from './dialog-statistics.component';

@Injectable({
  providedIn: 'root'
})
export class DialogStatisticsService {

  constructor(
    private dialog: MatDialog
  ) { }

  open(data: any): void {
    this.dialog.open(DialogStatisticsComponent, {
      autoFocus: true,
      role: 'dialog',
      restoreFocus: true,
      maxWidth: '400px',
      hasBackdrop: true,
      disableClose: true,
      closeOnNavigation: true,
      width: '400px',
      data
    });
  }
}
