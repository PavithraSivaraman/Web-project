import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsancComponent } from './birdsanc.component';

describe('BirdsancComponent', () => {
  let component: BirdsancComponent;
  let fixture: ComponentFixture<BirdsancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirdsancComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdsancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
