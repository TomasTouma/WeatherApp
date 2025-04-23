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

  // Store weather data and errors
  weatherData: any = null;
  error: string | null = null;

  // Coordinates received via router navigation
  lat: number = 0;
  long: number = 0;
  constructor(private router: Router, private weatherService: WeatherService) {
    // Retrieve latitude and longitude from navigation state
    const nav = this.router.getCurrentNavigation();
    this.lat = nav?.extras.state?.['lat'] || '';
    this.long = nav?.extras.state?.['long'] || '';
  }

  ngOnInit(): void {
    // If valid coordinates are received, fetch weather info
    if (this.lat && this.long) {
      this.weatherService.getLocationWeather(this.lat, this.long).subscribe({
        next: (data) => {
          this.weatherData = data;// Save response to display
          this.error = null;// Clear error if successful
        },
        error: (err) => {
          this.error = err.error?.message || 'An error occurred';// Save any error message
          this.weatherData = null;// Clear previous data
        }
        
      });
    }
  }

}
