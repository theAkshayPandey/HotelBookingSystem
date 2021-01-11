import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteltabComponent } from './hoteltab.component';

describe('HoteltabComponent', () => {
  let component: HoteltabComponent;
  let fixture: ComponentFixture<HoteltabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteltabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteltabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
