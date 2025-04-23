import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButtons,IonBackButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { WeatherService } from '../Services/weather.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.page.html',
  styleUrls: ['./weather-result.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherResultPage implements OnInit {
  
  weatherData: any = null;// store the weather data from the API
  error: string | null = null;// Stores error message if any
  cityName: string = '';// Stores the searched city name

  constructor(private storage:Storage, private router: Router, private weatherService: WeatherService) {
    // Retrieve city name from the router state (passed from HomePage)
    const nav = this.router.getCurrentNavigation();
    this.cityName = nav?.extras.state?.['cityName'] || '';
  }

  ngOnInit(): void {
    // Fetch weather data for the given city
    if (this.cityName) {
      this.weatherService.getCityWeather(this.cityName).subscribe({
        next: async (data) => {
          this.weatherData = data;
          this.error = null;
          await this.storage.create();
          await this.storage.set('search', this.cityName);// Store the latest search in Ionic Storage
        },
        error: (err) => {
          this.error = err.error?.message || 'An error occurred';
          this.weatherData = null;
        }
        
      });
    }
  }

}
