import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherLocationPage } from './weather-location.page';

describe('WeatherLocationPage', () => {
  let component: WeatherLocationPage;
  let fixture: ComponentFixture<WeatherLocationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
