import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharastraComponent } from './maharastra.component';

describe('MaharastraComponent', () => {
  let component: MaharastraComponent;
  let fixture: ComponentFixture<MaharastraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaharastraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaharastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
