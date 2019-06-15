import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { Profile } from './user.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profile$: Observable<Profile>;
  private profileEvent: ReplaySubject<Profile>;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.profileEvent = new ReplaySubject(1);
    this.profile$ = this.profileEvent.asObservable();
  }

  setUserOptions(profile: Profile) {
    profile.id = Math.random().toString(36).substr(2);
    this.profileEvent.next(profile);
  }

  setNewUser(userStats: any) {
    const users = [].concat(this.getUsers(), [userStats]);
    this.localStorageService.setItem('users', users);
  }

  getUsers() {
    return this.localStorageService.getItem('users', []);
  }
}
