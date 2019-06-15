import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'plop-table-ranking',
  templateUrl: './table-ranking.component.html',
  styleUrls: ['./table-ranking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRankingComponent implements OnInit {

  @Input() data: any[];
  @Input() columns: string[];
  @Input() labels: any;

  constructor() { }

  ngOnInit(): void { }

}
