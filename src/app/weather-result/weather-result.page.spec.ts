import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherResultPage } from './weather-result.page';

describe('WeatherResultPage', () => {
  let component: WeatherResultPage;
  let fixture: ComponentFixture<WeatherResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
