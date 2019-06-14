import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';


import { timer, Subject, Observable } from 'rxjs';
import { pairwise, map, filter, tap, startWith, takeUntil } from 'rxjs/operators';

import { Card } from '../../../core/api/api.model';
import { UserService } from '../../../core/user/user.service';
import { Profile } from '../../../core/user/user.model';
import { DialogStatisticsService } from '../../dialog/dialog-statistics/dialog-statistics.service';

@Component({
  selector: 'plop-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListComponent implements OnInit, OnDestroy {

  @Input() cards: Card[];
  @Output() ongameover: EventEmitter<void>;

  private readonly unsubscribe: Subject<void>;

  user: Profile;
  rounds: number;

  private plays: number;
  private isPlaying: boolean;
  private lastCard: any;
  private currentCard: any;
  private cardEvent: Subject<any>;
  private cardObservable: Observable<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UserService,
    private dialogStatisticsService: DialogStatisticsService
  ) {
    this.startGame();
    this.cardEvent = new Subject();
    this.cardObservable = this.cardEvent.asObservable().pipe(
      startWith({}),
      pairwise(),
      map(([previous, current]) => ({ previous, current })),
      tap((value) => {
        this.lastCard = value.previous;
        this.currentCard = value.current;
        this.changeDetectorRef.markForCheck();
      })
    );
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.cardObservable.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(d => console.log(d));

    this.userService.profile$.pipe(
      takeUntil(this.unsubscribe),
      tap(() => this.changeDetectorRef.markForCheck())
    ).subscribe((user: Profile) => this.user = user);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onClickChooseCard(event, card) {
    // this.optionsComment = card;
    if (!card.checked && !this.isPlaying) {
      card.visible = !card.visible;
      this.plays++;
      this.cardEvent.next(card);
      console.warn(this.currentCard, this.lastCard);
      if (this.plays % 2 === 0) {
        this.rounds++;
        this.isPlaying = true;
        if (this.currentCard.id === this.lastCard.id) {
          console.warn('iiiiiiiiits a match');
          this.cards[this.currentCard.position - 1].checked = true;
          this.cards[this.lastCard.position - 1].checked = true;
          this.isPlaying = false;
        } else {
          console.log('ELSE');
          timer(500).pipe(
            takeUntil(this.unsubscribe)
          ).subscribe(() => {
            this.cards[this.currentCard.position - 1].visible = false;
            this.cards[this.lastCard.position - 1].visible = false;
            this.isPlaying = false;
            this.changeDetectorRef.markForCheck();
          });
          console.log('CARDS', this.cards);
        }
      }
      console.warn(this.checkWinner());
      if (this.checkWinner()) {
        const userStats = {
          total_rounds: this.rounds,
          ...this.user
        };
        this.userService.setNewUser(userStats);
        this.dialogStatisticsService.open({
          userStats,
          users: this.userService.getUsers()
        });
      }
      this.changeDetectorRef.markForCheck();
    }
  }

  private startGame() {
    this.plays = 0;
    this.rounds = 0;
    this.lastCard = {};
    this.currentCard = {};
  }

  private onClickResetGame() {
    this.startGame();
    this.cards = this.cards.map(card => ({ ...card, checked: false, visible: false }));
  }

  private checkWinner(): boolean {
    return this.cards.filter(card => !card.checked).length === 0;
  }

}
