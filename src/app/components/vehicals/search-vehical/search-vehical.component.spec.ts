import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVehicalComponent } from './search-vehical.component';

describe('SearchVehicalComponent', () => {
  let component: SearchVehicalComponent;
  let fixture: ComponentFixture<SearchVehicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVehicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
