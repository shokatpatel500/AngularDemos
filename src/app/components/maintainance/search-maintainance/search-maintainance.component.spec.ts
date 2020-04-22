import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMaintainanceComponent } from './search-maintainance.component';

describe('SearchMaintainanceComponent', () => {
  let component: SearchMaintainanceComponent;
  let fixture: ComponentFixture<SearchMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
