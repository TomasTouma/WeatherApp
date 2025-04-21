import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaterfordPage } from './waterford.page';

describe('WaterfordPage', () => {
  let component: WaterfordPage;
  let fixture: ComponentFixture<WaterfordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
