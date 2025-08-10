import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivinityComponent } from './divinity.component';

describe('DivinityComponent', () => {
  let component: DivinityComponent;
  let fixture: ComponentFixture<DivinityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivinityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
