import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloanformComponent } from './homeloanform.component';

describe('HomeloanformComponent', () => {
  let component: HomeloanformComponent;
  let fixture: ComponentFixture<HomeloanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeloanformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeloanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
