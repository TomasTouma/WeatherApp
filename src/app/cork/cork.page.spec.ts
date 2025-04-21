import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorkPage } from './cork.page';

describe('CorkPage', () => {
  let component: CorkPage;
  let fixture: ComponentFixture<CorkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
