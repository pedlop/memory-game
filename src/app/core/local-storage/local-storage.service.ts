import { Injectable, Inject } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem<T>(key: string, value: T): void {
    if (typeof value === 'object') {
      localStorage.setItem(`${environment.application.baseKey}.${key}`, JSON.stringify(value));
    } else {
      localStorage.setItem(`${environment.application.baseKey}.${key}`, `${value}`);
    }
  }

  getItem<T>(key: string, defaultValue: T): T {
    const fromLocalStorage: unknown = localStorage.getItem(`${environment.application.baseKey}.${key}`);
    if (fromLocalStorage) {
      try {
        return JSON.parse(fromLocalStorage as string) as T;
      } catch (exception) {
        return (fromLocalStorage as T) || defaultValue;
      }
    }
    return defaultValue;
  }

}
