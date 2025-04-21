import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimerickPage } from './limerick.page';

describe('LimerickPage', () => {
  let component: LimerickPage;
  let fixture: ComponentFixture<LimerickPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LimerickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
