import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SligoPage } from './sligo.page';

describe('SligoPage', () => {
  let component: SligoPage;
  let fixture: ComponentFixture<SligoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SligoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
