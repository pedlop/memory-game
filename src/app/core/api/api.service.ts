import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Card } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCards(): Observable<Card[]> {
    return this.http.get<Card[]>('/assets/data/cards.json');
  }
}
