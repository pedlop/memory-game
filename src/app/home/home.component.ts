import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, flatMap, tap } from 'rxjs/operators';

import { DialogUserService } from '../shared/dialog/dialog-user/dialog-user.service';
import { ApiService } from '../core/api/api.service';
import { Card } from '../core/api/api.model';
import { CardsService } from '../shared/cards/cards.service';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'plop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  cards$: Observable<Card[]>;

  constructor(
    private dialogUserService: DialogUserService,
    private apiService: ApiService,
    private cardsService: CardsService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.dialogUserService.open();
    this.cards$ = this.userService.profile$.pipe(
      flatMap((value: any) => this.apiService.fetchCards().pipe(
        map(response => this.cardsService.cardOptionsHandler(response, value.gameDifficulty))
      ))
    );
  }

}
