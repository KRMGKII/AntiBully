import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsDeskComponent } from './principals-desk.component';

describe('PrincipalsDeskComponent', () => {
  let component: PrincipalsDeskComponent;
  let fixture: ComponentFixture<PrincipalsDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalsDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalsDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
