import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  swiperModules = [IonicSlides];
  constructor() {}


}
