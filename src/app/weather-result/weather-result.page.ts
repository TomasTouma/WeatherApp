import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButtons,IonBackButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.page.html',
  styleUrls: ['./weather-result.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherResultPage implements OnInit {
  
  weatherData: any = null;
  error: string | null = null;
  cityName: string = '';

  constructor(private router: Router, private weatherService: WeatherService) {
    const nav = this.router.getCurrentNavigation();
    this.cityName = nav?.extras.state?.['cityName'] || '';
  }

  ngOnInit(): void {
    if (this.cityName) {
      this.weatherService.getWeather(this.cityName).subscribe({
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
