import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastComponent } from './east.component';

describe('EastComponent', () => {
  let component: EastComponent;
  let fixture: ComponentFixture<EastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
