import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVisitorsComponent } from './search-visitors.component';

describe('SearchVisitorsComponent', () => {
  let component: SearchVisitorsComponent;
  let fixture: ComponentFixture<SearchVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
