import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'plop-dialog-statistics',
  templateUrl: './dialog-statistics.component.html',
  styleUrls: ['./dialog-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogStatisticsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogStatisticsComponent>
  ) { }

  ngOnInit() {
    console.warn(this.data);
  }

}
