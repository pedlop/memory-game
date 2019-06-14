import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Card } from 'src/app/core/api/api.model';

@Component({
  selector: 'plop-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsItemComponent implements OnInit, OnChanges {

  @Input() card: Card;
  @Output() onchoose: EventEmitter<void>;


  constructor() {
    this.onchoose = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.card);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.card.firstChange) {
      console.warn(changes);
    }
  }

  onClickChooseCard(event): void {
    console.log(event);
    // this.card.visible = !this.card.visible;
    this.onchoose.emit();
  }

}
