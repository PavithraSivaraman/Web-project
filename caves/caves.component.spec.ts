import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavesComponent } from './caves.component';

describe('CavesComponent', () => {
  let component: CavesComponent;
  let fixture: ComponentFixture<CavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
