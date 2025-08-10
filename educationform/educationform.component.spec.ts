import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationformComponent } from './educationform.component';

describe('EducationformComponent', () => {
  let component: EducationformComponent;
  let fixture: ComponentFixture<EducationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
