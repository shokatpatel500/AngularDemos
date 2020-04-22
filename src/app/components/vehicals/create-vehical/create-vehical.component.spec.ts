import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicalComponent } from './create-vehical.component';

describe('CreateVehicalComponent', () => {
  let component: CreateVehicalComponent;
  let fixture: ComponentFixture<CreateVehicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVehicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
