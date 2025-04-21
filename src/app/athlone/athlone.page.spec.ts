import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AthlonePage } from './athlone.page';

describe('AthlonePage', () => {
  let component: AthlonePage;
  let fixture: ComponentFixture<AthlonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AthlonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
