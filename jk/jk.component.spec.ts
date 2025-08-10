import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkComponent } from './jk.component';

describe('JkComponent', () => {
  let component: JkComponent;
  let fixture: ComponentFixture<JkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
