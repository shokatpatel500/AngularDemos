import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaintainanceComponent } from './edit-maintainance.component';

describe('EditMaintainanceComponent', () => {
  let component: EditMaintainanceComponent;
  let fixture: ComponentFixture<EditMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
