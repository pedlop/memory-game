import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRankingComponent } from './table-ranking.component';

describe('TableRankingComponent', () => {
  let component: TableRankingComponent;
  let fixture: ComponentFixture<TableRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
