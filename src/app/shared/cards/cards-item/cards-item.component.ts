import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Card } from 'src/app/core/api/api.model';

@Component({
  selector: 'plop-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsItemComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit(): void { }

}
