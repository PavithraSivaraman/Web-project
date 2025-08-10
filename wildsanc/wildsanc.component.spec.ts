import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildsancComponent } from './wildsanc.component';

describe('WildsancComponent', () => {
  let component: WildsancComponent;
  let fixture: ComponentFixture<WildsancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WildsancComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildsancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
