import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  categoryName: string = 'دسته مافیا';

  categoryListWithDetail: any[] = [
    {
      name:'کلاسیک'
    },
    {
      name:'روسی'
    },
    {
      name:'پیشرفته'
    },
  ];

  constructor() {}

  addCategory(){

  }
  
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  ngAfterViewInit(): void {
    register();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onActiveIndexChange() {
    console.log(this.swiper?.activeIndex);
  }
}
