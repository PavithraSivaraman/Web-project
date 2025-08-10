import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarvingsComponent } from './carvings.component';

describe('CarvingsComponent', () => {
  let component: CarvingsComponent;
  let fixture: ComponentFixture<CarvingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarvingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarvingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
