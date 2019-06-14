import { Injectable } from '@angular/core';

import { Card, GameLevels } from '../../core/api/api.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private levelsMapper: Map<GameLevels, number>;

  constructor() {
    this.levelsMapper = new Map();
    this.levelsMapper.set('easy', 5);
    this.levelsMapper.set('medium', 7);
    this.levelsMapper.set('hard', 10);
  }

  private levelize = (response: Card[], level: GameLevels): Card[] => {
    console.log(level);
    console.warn(response.slice(0, this.levelsMapper.get(level)));
    const updatedCards = response.slice(0, this.levelsMapper.get(level));
    return updatedCards;
  }

  private duplicate = (response: Card[]) => {
    return [].concat(response, response);
  }

  private randomize = (response: Card[]): Card[] => {
    const newArray = [].concat(response);
    let cardlistLength: number = newArray.length;
    let element: any;
    let index: number;
    if (cardlistLength > 0) {
      while (cardlistLength) {
        index = Math.floor(Math.random() * cardlistLength--);
        element = newArray[cardlistLength];
        newArray[cardlistLength] = newArray[index];
        newArray[index] = element;
      }
    }
    return newArray.map((card, idx) => ({ ...card, position: idx + 1 }));
  }

  cardOptionsHandler = (cards: Card[], level: GameLevels) => {
    const levelized = this.levelize(cards, level);
    const duplicated = this.duplicate(levelized);
    const randomized = this.randomize(duplicated);
    return randomized;
  }

}
