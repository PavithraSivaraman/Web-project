import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatparkComponent } from './natpark.component';

describe('NatparkComponent', () => {
  let component: NatparkComponent;
  let fixture: ComponentFixture<NatparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatparkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
