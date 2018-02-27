import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishKitchenComponent } from './finish-kitchen.component';

describe('FinishKitchenComponent', () => {
  let component: FinishKitchenComponent;
  let fixture: ComponentFixture<FinishKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
