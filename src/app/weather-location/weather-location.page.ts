import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButtons,IonBackButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.page.html',
  styleUrls: ['./weather-location.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherLocationPage implements OnInit {

  weatherData: any = null;
  error: string | null = null;
  lat: number = 0;
  long: number = 0;
  constructor(private router: Router, private weatherService: WeatherService) {
    const nav = this.router.getCurrentNavigation();
    this.lat = nav?.extras.state?.['lat'] || '';
    this.long = nav?.extras.state?.['long'] || '';
  }

  ngOnInit(): void {
    if (this.lat && this.long) {
      this.weatherService.getLocationWeather(this.lat, this.long).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.error = null;
        },
        error: (err) => {
          this.error = err.error?.message || 'An error occurred';
          this.weatherData = null;
        }
        
      });
    }
  }

}
