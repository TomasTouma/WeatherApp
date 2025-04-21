import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalwayPage } from './galway.page';

describe('GalwayPage', () => {
  let component: GalwayPage;
  let fixture: ComponentFixture<GalwayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalwayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
