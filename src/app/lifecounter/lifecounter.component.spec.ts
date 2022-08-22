import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecounterComponent } from './lifecounter.component';

describe('LifecounterComponent', () => {
  let component: LifecounterComponent;
  let fixture: ComponentFixture<LifecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
