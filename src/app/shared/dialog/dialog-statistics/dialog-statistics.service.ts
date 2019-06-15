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

  open(data: any) {
    return this.dialog.open(DialogStatisticsComponent, {
      autoFocus: true,
      role: 'dialog',
      restoreFocus: true,
      maxWidth: '600px',
      maxHeight: '500px',
      hasBackdrop: true,
      disableClose: false,
      closeOnNavigation: true,
      width: '600px',
      data
    });
  }
}
