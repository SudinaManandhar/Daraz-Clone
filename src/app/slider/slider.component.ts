import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }

}
