import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { CardsItemComponent } from './cards-item/cards-item.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  declarations: [CardsItemComponent, CardsListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [CardsListComponent]
})
export class CardsModule { }
