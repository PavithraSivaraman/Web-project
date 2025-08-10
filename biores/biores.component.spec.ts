import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioresComponent } from './biores.component';

describe('BioresComponent', () => {
  let component: BioresComponent;
  let fixture: ComponentFixture<BioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
