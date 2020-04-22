import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaintainanceComponent } from './view-maintainance.component';

describe('ViewMaintainanceComponent', () => {
  let component: ViewMaintainanceComponent;
  let fixture: ComponentFixture<ViewMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
