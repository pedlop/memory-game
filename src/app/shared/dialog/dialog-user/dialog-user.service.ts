import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogUserComponent } from './dialog-user.component';

@Injectable({
  providedIn: 'root'
})
export class DialogUserService {

  constructor(
    private dialog: MatDialog
  ) { }

  open(): void {
    this.dialog.open(DialogUserComponent, {
      autoFocus: true,
      role: 'dialog',
      restoreFocus: true,
      maxWidth: '400px',
      hasBackdrop: true,
      disableClose: true,
      closeOnNavigation: true,
      width: '400px'
    });
  }

}
