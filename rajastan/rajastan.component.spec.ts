import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajastanComponent } from './rajastan.component';

describe('RajastanComponent', () => {
  let component: RajastanComponent;
  let fixture: ComponentFixture<RajastanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RajastanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajastanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
