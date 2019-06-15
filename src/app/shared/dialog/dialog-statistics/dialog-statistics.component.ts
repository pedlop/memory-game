import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'plop-dialog-statistics',
  templateUrl: './dialog-statistics.component.html',
  styleUrls: ['./dialog-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogStatisticsComponent implements OnInit {

  displayedColumns: string[];
  displayedLabels: any;
  displayEasyData: any;
  displayMediumData: any[];
  displayHardData: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogStatisticsComponent>
  ) {
    this.displayedColumns = ['position', 'username', 'total_rounds'];
    this.displayedLabels = {
      position: 'Posição',
      username: 'Usuário',
      total_rounds: 'Rodadas'
    }
  }

  ngOnInit(): void {
    this.displayEasyData = this.data.users
      .filter(user => user.gameDifficulty === 'easy')
      .map((user, index) => ({ ...user, position: index + 1 }));
    this.displayMediumData = this.data.users
      .filter(user => user.gameDifficulty === 'medium')
      .map((user, index) => ({ ...user, position: index + 1 }));
    this.displayHardData = this.data.users
      .filter(user => user.gameDifficulty === 'hard')
      .map((user, index) => ({ ...user, position: index + 1 }));
  }

  onClickResetGame(): void {
    this.dialogRef.close();
  }

}
