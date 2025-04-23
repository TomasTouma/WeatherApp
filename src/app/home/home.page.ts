import { Component, inject  } from '@angular/core';
import {IonText,IonButton, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../Services/weather.service';//weather service import 
import { Router } from '@angular/router';
import {Geolocation} from '@capacitor/geolocation'//geolocation import
import { Storage } from '@ionic/storage-angular';//storage import


@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonText, IonButton, IonSearchbar, FormsModule, CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  latestSearch:string = "";//store the latest city search
  searchTerm = '';//store the city name typed into the search bar
  
  location: any ="";//store the whole location
  lat: number = 0;//store the extracted latitude
  long: number = 0;//store the extracted longitude

  // Inject router using standalone-style `inject()` pattern
  private router = inject(Router);

  //array of cities that are shown in the cards
  cities = [
    {
      name: 'Athlone',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblN401VWf4TFyFv6h_PXUoClEeRmWLbOAqQ&s',
    },
    {
      name: 'Belfast',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSbi0rhTIfqADMWYYrELASE81Qb2Q81L3ZybB_jm9d5mnZg4N0oREgDDKZGC39eL6eIfww1hqlck_aPBNVmlYsoUEtSYEZNHrcDcLB6fg',
    },
    {
      name: 'Cork',
      image: 'https://www.cork-guide.ie/assets/headers/cork_city_07.jpg',
    },
    {
      name: 'Dublin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dublin_-_aerial_-_panorama_-_2025-02-06.jpg/1920px-Dublin_-_aerial_-_panorama_-_2025-02-06.jpg',
    },
    {
      name: 'Galway',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/525000/525529-lynchs-castle.jpg',
    },
    {
      name: 'Limerick',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LimerickCity_Riverpoint.jpg/1280px-LimerickCity_Riverpoint.jpg',
    },
    {
      name: 'Sligo',
      image: 'https://cdn.shortpixel.ai/spai/q_lossy+w_2502+to_webp+ret_img/www.sligo.ie/wp-content/uploads/Home-slider-ariel3.jpg',
    },
    {
      name: 'Waterford',
      image: 'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/7affaac3-c2ef-4f0f-a2fb-288c1daa05a7/header-waterford-quays-county-waterford.jpg',
    },
  ];

  constructor(private weatherService: WeatherService, private storage:Storage) {}
  
  // Loads the last searched city from local storage
  async ionViewWillEnter(){
    await this.storage.create();
    this.latestSearch = await this.storage.get('search');
    }

  // Navigates to the weather result page and passes the typed city
  searchCity() {
    this.router.navigate(['/weather-result'], {
      state: { cityName: this.searchTerm }
    });
  }

  // Sends that city to the weather result page
  searchCityFromCard(cityName: string) {
    this.router.navigate(['/weather-result'], {
      state: { cityName: cityName }
    });
  }

  //called when use my location button is clicked, gets the user's geolocation and navigates to the location weather page
  async getLocation(){
    this.location =await Geolocation.getCurrentPosition();
    this.lat = this.location.coords.latitude;
    this.long = this.location.coords.longitude;
    this.router.navigate(['/weather-location'], {
      state: { lat: this.lat, long:this.long }
    });
    
  }

}
