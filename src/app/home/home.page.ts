import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  cities = [
    {
      name: 'Athlone City',
      path: '/Athlone',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblN401VWf4TFyFv6h_PXUoClEeRmWLbOAqQ&s',
    },
    {
      name: 'Belfast City',
      path: '/Belfast',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSbi0rhTIfqADMWYYrELASE81Qb2Q81L3ZybB_jm9d5mnZg4N0oREgDDKZGC39eL6eIfww1hqlck_aPBNVmlYsoUEtSYEZNHrcDcLB6fg',
    },
    {
      name: 'Cork City',
      path: '/Cork',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AB5caB-oGHgDjt9og64Mp_ji3KSGUr9buiQnkPMEQkshjwMYV6X5oiju9te8B2mXxxvp-Ftzro_dkQbcsCtCY4QNIL3OpnTD7Nxr3GPo1dYQPK9vIInsaiCQGL5g3mydeQx4-iZx5KhK=w540-h312-n-k-no',
    },
    {
      name: 'Dublin City',
      path: '/Dublin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dublin_-_aerial_-_panorama_-_2025-02-06.jpg/1920px-Dublin_-_aerial_-_panorama_-_2025-02-06.jpg',
    },
    {
      name: 'Galway City',
      path: '/Galway',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/525000/525529-lynchs-castle.jpg',
    },
    {
      name: 'Limerick City',
      path: '/Limerick',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LimerickCity_Riverpoint.jpg/1280px-LimerickCity_Riverpoint.jpg',
    },
    {
      name: 'Sligo City',
      path: '/Sligo',
      image: 'https://cdn.shortpixel.ai/spai/q_lossy+w_2502+to_webp+ret_img/www.sligo.ie/wp-content/uploads/Home-slider-ariel3.jpg',
    },
    {
      name: 'Waterford City',
      path: '/Waterford',
      image: 'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/7affaac3-c2ef-4f0f-a2fb-288c1daa05a7/header-waterford-quays-county-waterford.jpg',
    },
  ];

  constructor() {}
}
