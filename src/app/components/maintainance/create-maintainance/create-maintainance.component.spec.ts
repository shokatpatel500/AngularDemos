import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaintainanceComponent } from './create-maintainance.component';

describe('CreateMaintainanceComponent', () => {
  let component: CreateMaintainanceComponent;
  let fixture: ComponentFixture<CreateMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
