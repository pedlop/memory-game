import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'plop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
