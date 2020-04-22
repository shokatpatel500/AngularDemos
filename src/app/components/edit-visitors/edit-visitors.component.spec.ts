import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitorsComponent } from './edit-visitors.component';

describe('EditVisitorsComponent', () => {
  let component: EditVisitorsComponent;
  let fixture: ComponentFixture<EditVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
